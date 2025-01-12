"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectExplorerService = void 0;
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
const vscode = require("vscode");
const createSessionRequest_1 = require("../models/contracts/objectExplorer/createSessionRequest");
const expandNodeRequest_1 = require("../models/contracts/objectExplorer/expandNodeRequest");
const vscode_1 = require("vscode");
const refreshSessionRequest_1 = require("../models/contracts/objectExplorer/refreshSessionRequest");
const closeSessionRequest_1 = require("../models/contracts/objectExplorer/closeSessionRequest");
const treeNodeInfo_1 = require("./treeNodeInfo");
const interfaces_1 = require("../models/interfaces");
const LocalizedConstants = require("../constants/localizedConstants");
const addConnectionTreeNode_1 = require("./addConnectionTreeNode");
const accountSignInTreeNode_1 = require("./accountSignInTreeNode");
const connectTreeNode_1 = require("./connectTreeNode");
const protocol_1 = require("../protocol");
const Constants = require("../constants/constants");
const objectExplorerUtils_1 = require("./objectExplorerUtils");
const Utils = require("../models/utils");
const connectionCredentials_1 = require("../models/connectionCredentials");
const connectionProfile_1 = require("../models/connectionProfile");
const providerSettings_1 = require("../azure/providerSettings");
const telemetry_1 = require("../telemetry/telemetry");
const AzureConstants = require("../azure/constants");
const telemetryInterfaces_1 = require("../telemetry/telemetryInterfaces");
function getParentNode(node) {
    node = node.parentNode;
    if (!(node instanceof treeNodeInfo_1.TreeNodeInfo)) {
        vscode.window.showErrorMessage(LocalizedConstants.nodeErrorMessage);
        throw new Error(`Parent node was not TreeNodeInfo.`);
    }
    return node;
}
class ObjectExplorerService {
    constructor(_connectionManager, _objectExplorerProvider) {
        this._connectionManager = _connectionManager;
        this._objectExplorerProvider = _objectExplorerProvider;
        this._client = this._connectionManager.client;
        this._treeNodeToChildrenMap = new Map();
        this._rootTreeNodeArray = new Array();
        this._sessionIdToConnectionCredentialsMap = new Map();
        this._nodePathToNodeLabelMap = new Map();
        this._sessionIdToPromiseMap = new Map();
        this._expandParamsToPromiseMap = new Map();
        this._expandParamsToTreeNodeInfoMap = new Map();
        this._client.onNotification(createSessionRequest_1.CreateSessionCompleteNotification.type, this.handleSessionCreatedNotification());
        this._client.onNotification(expandNodeRequest_1.ExpandCompleteNotification.type, this.handleExpandSessionNotification());
    }
    handleSessionCreatedNotification() {
        const self = this;
        const handler = (result) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            if (self._currentNode instanceof connectTreeNode_1.ConnectTreeNode) {
                self.currentNode = getParentNode(self.currentNode);
            }
            if (result.success) {
                let nodeLabel = this._nodePathToNodeLabelMap.get(result.rootNode.nodePath);
                // if no node label, check if it has a name in saved profiles
                // in case this call came from new query
                let savedConnections = this._connectionManager.connectionStore.loadAllConnections();
                let nodeConnection = this._sessionIdToConnectionCredentialsMap.get(result.sessionId);
                for (let connection of savedConnections) {
                    if (Utils.isSameConnection(connection.connectionCreds, nodeConnection)) {
                        // if it's not the defaul label
                        if (connection.label !== connection.connectionCreds.server) {
                            nodeLabel = connection.label;
                        }
                        break;
                    }
                }
                // set connection and other things
                let node;
                if (self._currentNode && (self._currentNode.sessionId === result.sessionId)) {
                    nodeLabel = !nodeLabel ? self.createNodeLabel(self._currentNode.connectionInfo) : nodeLabel;
                    node = treeNodeInfo_1.TreeNodeInfo.fromNodeInfo(result.rootNode, result.sessionId, undefined, self._currentNode.connectionInfo, nodeLabel, Constants.serverLabel);
                }
                else {
                    nodeLabel = !nodeLabel ? self.createNodeLabel(nodeConnection) : nodeLabel;
                    node = treeNodeInfo_1.TreeNodeInfo.fromNodeInfo(result.rootNode, result.sessionId, undefined, nodeConnection, nodeLabel, Constants.serverLabel);
                }
                // make a connection if not connected already
                const nodeUri = objectExplorerUtils_1.ObjectExplorerUtils.getNodeUri(node);
                if (!this._connectionManager.isConnected(nodeUri) &&
                    !this._connectionManager.isConnecting(nodeUri)) {
                    const profile = node.connectionInfo;
                    yield this._connectionManager.connect(nodeUri, profile);
                }
                self.updateNode(node);
                self._objectExplorerProvider.objectExplorerExists = true;
                const promise = self._sessionIdToPromiseMap.get(result.sessionId);
                // remove the sign in node once the session is created
                if (self._treeNodeToChildrenMap.has(node)) {
                    self._treeNodeToChildrenMap.delete(node);
                }
                return promise === null || promise === void 0 ? void 0 : promise.resolve(node);
            }
            else {
                // create session failure
                if ((_b = (_a = self._currentNode) === null || _a === void 0 ? void 0 : _a.connectionInfo) === null || _b === void 0 ? void 0 : _b.password) {
                    self._currentNode.connectionInfo.password = '';
                }
                let error = LocalizedConstants.connectErrorLabel;
                let errorNumber;
                if (result.errorNumber) {
                    errorNumber = result.errorNumber;
                }
                if (result.errorMessage) {
                    error += ` : ${result.errorMessage}`;
                }
                if (errorNumber === Constants.errorSSLCertificateValidationFailed) {
                    self._connectionManager.showInstructionTextAsWarning(self._currentNode.connectionInfo, (updatedProfile) => __awaiter(this, void 0, void 0, function* () {
                        self.reconnectProfile(self._currentNode, updatedProfile);
                    }));
                }
                else if (objectExplorerUtils_1.ObjectExplorerUtils.isFirewallError(result.errorNumber)) {
                    // handle session failure because of firewall issue
                    let handleFirewallResult = yield self._connectionManager.firewallService.handleFirewallRule(Constants.errorFirewallRule, result.errorMessage);
                    if (handleFirewallResult.result && handleFirewallResult.ipAddress) {
                        const nodeUri = objectExplorerUtils_1.ObjectExplorerUtils.getNodeUri(self._currentNode);
                        const profile = self._currentNode.connectionInfo;
                        self.updateNode(self._currentNode);
                        self._connectionManager.connectionUI.handleFirewallError(nodeUri, profile, handleFirewallResult.ipAddress);
                    }
                }
                else if (self._currentNode.connectionInfo.authenticationType === Constants.azureMfa
                    && self.needsAccountRefresh(result, self._currentNode.connectionInfo.user)) {
                    let profile = self._currentNode.connectionInfo;
                    let account = this._connectionManager.accountStore.getAccount(profile.accountId);
                    yield this.refreshAccount(account, profile);
                    // Do not await when performing reconnect to allow
                    // OE node to expand after connection is established.
                    this.reconnectProfile(self._currentNode, profile);
                }
                else {
                    self._connectionManager.vscodeWrapper.showErrorMessage(error);
                }
                const promise = self._sessionIdToPromiseMap.get(result.sessionId);
                if (promise) {
                    return promise.resolve(undefined);
                }
            }
        });
        return handler;
    }
    reconnectProfile(node, profile) {
        return __awaiter(this, void 0, void 0, function* () {
            node.connectionInfo = profile;
            this.updateNode(node);
            let fileUri = objectExplorerUtils_1.ObjectExplorerUtils.getNodeUri(node);
            if (yield this._connectionManager.connectionStore.saveProfile(profile)) {
                const res = yield this._connectionManager.connect(fileUri, profile);
                if (yield this._connectionManager.handleConnectionResult(res, fileUri, profile)) {
                    this.refreshNode(node);
                }
            }
            else {
                this._connectionManager.vscodeWrapper.showErrorMessage(LocalizedConstants.msgPromptProfileUpdateFailed);
            }
        });
    }
    needsAccountRefresh(result, username) {
        let email = (username === null || username === void 0 ? void 0 : username.includes(' - ')) ? username.substring(username.indexOf('-') + 2) : username;
        return result.errorMessage.includes(AzureConstants.AADSTS70043)
            || result.errorMessage.includes(AzureConstants.AADSTS50173)
            || result.errorMessage.includes(AzureConstants.AADSTS50020)
            || result.errorMessage.includes(AzureConstants.mdsUserAccountNotReceived)
            || result.errorMessage.includes(Utils.formatString(AzureConstants.mdsUserAccountNotFound, email));
    }
    getParentFromExpandParams(params) {
        for (let key of this._expandParamsToTreeNodeInfoMap.keys()) {
            if (key.sessionId === params.sessionId &&
                key.nodePath === params.nodePath) {
                return this._expandParamsToTreeNodeInfoMap.get(key);
            }
        }
        return undefined;
    }
    handleExpandSessionNotification() {
        const self = this;
        const handler = (result) => {
            var _a;
            if (result && result.nodes) {
                const credentials = self._sessionIdToConnectionCredentialsMap.get(result.sessionId);
                const expandParams = {
                    sessionId: result.sessionId,
                    nodePath: result.nodePath
                };
                const parentNode = self.getParentFromExpandParams(expandParams);
                const children = result.nodes.map(node => treeNodeInfo_1.TreeNodeInfo.fromNodeInfo(node, result.sessionId, parentNode, credentials));
                self._treeNodeToChildrenMap.set(parentNode, children);
                for (let key of self._expandParamsToPromiseMap.keys()) {
                    if (key.sessionId === expandParams.sessionId &&
                        key.nodePath === expandParams.nodePath) {
                        let promise = self._expandParamsToPromiseMap.get(key);
                        promise.resolve(children);
                        self._expandParamsToPromiseMap.delete(key);
                        self._expandParamsToTreeNodeInfoMap.delete(key);
                        return;
                    }
                }
                (0, telemetry_1.sendActionEvent)(telemetryInterfaces_1.TelemetryViews.ObjectExplorer, telemetryInterfaces_1.TelemetryActions.ExpandNode, {
                    nodeType: parentNode.nodeType,
                    isErrored: (!!result.errorMessage).toString()
                }, {
                    nodeCount: (_a = result === null || result === void 0 ? void 0 : result.nodes.length) !== null && _a !== void 0 ? _a : 0
                });
            }
        };
        return handler;
    }
    expandNode(node, sessionId, promise) {
        return __awaiter(this, void 0, void 0, function* () {
            const expandParams = {
                sessionId: sessionId,
                nodePath: node.nodePath
            };
            this._expandParamsToPromiseMap.set(expandParams, promise);
            this._expandParamsToTreeNodeInfoMap.set(expandParams, node);
            const response = yield this._connectionManager.client.sendRequest(expandNodeRequest_1.ExpandRequest.type, expandParams);
            if (response) {
                return response;
            }
            else {
                yield this._connectionManager.vscodeWrapper.showErrorMessage(LocalizedConstants.msgUnableToExpand);
                this._expandParamsToPromiseMap.delete(expandParams);
                this._expandParamsToTreeNodeInfoMap.delete(expandParams);
                promise.resolve(undefined);
                return undefined;
            }
        });
    }
    updateNode(node) {
        if (node instanceof connectTreeNode_1.ConnectTreeNode) {
            node = getParentNode(node);
        }
        for (let rootTreeNode of this._rootTreeNodeArray) {
            if (Utils.isSameConnection(node.connectionInfo, rootTreeNode.connectionInfo) &&
                rootTreeNode.label === node.label) {
                const index = this._rootTreeNodeArray.indexOf(rootTreeNode);
                delete this._rootTreeNodeArray[index];
                this._rootTreeNodeArray[index] = node;
                return;
            }
        }
        this._rootTreeNodeArray.push(node);
    }
    /**
     * Clean all children of the node
     * @param node Node to cleanup
     */
    cleanNodeChildren(node) {
        if (this._treeNodeToChildrenMap.has(node)) {
            let stack = this._treeNodeToChildrenMap.get(node);
            while (stack.length > 0) {
                let child = stack.pop();
                if (this._treeNodeToChildrenMap.has(child)) {
                    stack.concat(this._treeNodeToChildrenMap.get(child));
                }
                this._treeNodeToChildrenMap.delete(child);
            }
            this._treeNodeToChildrenMap.delete(node);
        }
    }
    /**
     * Sort the array based on server names
     * Public only for testing purposes
     * @param array array that needs to be sorted
     */
    sortByServerName(array) {
        const sortedNodeArray = array.sort((a, b) => {
            const labelA = typeof a.label === 'string' ? a.label : a.label.label;
            const labelB = typeof b.label === 'string' ? b.label : b.label.label;
            return (labelA).toLowerCase().localeCompare(labelB.toLowerCase());
        });
        return sortedNodeArray;
    }
    /**
     * Get nodes from saved connections
     */
    getSavedConnections() {
        let savedConnections = this._connectionManager.connectionStore.loadAllConnections();
        for (const conn of savedConnections) {
            let nodeLabel = conn.label === conn.connectionCreds.server ?
                this.createNodeLabel(conn.connectionCreds) : conn.label;
            this._nodePathToNodeLabelMap.set(conn.connectionCreds.server, nodeLabel);
            let node = new treeNodeInfo_1.TreeNodeInfo(nodeLabel, Constants.disconnectedServerLabel, vscode_1.TreeItemCollapsibleState.Collapsed, undefined, undefined, Constants.disconnectedServerLabel, undefined, conn.connectionCreds, undefined);
            this._rootTreeNodeArray.push(node);
        }
    }
    /**
     * Clean up expansion promises for a node
     * @param node The selected node
     */
    cleanExpansionPromise(node) {
        for (const key of this._expandParamsToPromiseMap.keys()) {
            if (key.sessionId === node.sessionId &&
                key.nodePath === node.nodePath) {
                this._expandParamsToPromiseMap.delete(key);
                this._expandParamsToTreeNodeInfoMap.delete(key);
            }
        }
    }
    /**
     * Helper to show the Add Connection node
     */
    getAddConnectionNode() {
        this._rootTreeNodeArray = [];
        this._objectExplorerProvider.objectExplorerExists = true;
        return [new addConnectionTreeNode_1.AddConnectionTreeNode()];
    }
    /**
     * Handles a generic OE create session failure by creating a
     * sign in node
     */
    createSignInNode(element) {
        const signInNode = new accountSignInTreeNode_1.AccountSignInTreeNode(element);
        this._treeNodeToChildrenMap.set(element, [signInNode]);
        return [signInNode];
    }
    /**
     * Handles a connection error after an OE session is
     * sucessfully created by creating a connect node
     */
    createConnectTreeNode(element) {
        const connectNode = new connectTreeNode_1.ConnectTreeNode(element);
        this._treeNodeToChildrenMap.set(element, [connectNode]);
        return [connectNode];
    }
    getChildren(element) {
        return __awaiter(this, void 0, void 0, function* () {
            if (element) {
                // set current node for very first expansion of disconnected node
                if (this._currentNode !== element) {
                    this._currentNode = element;
                }
                // get cached children
                if (this._treeNodeToChildrenMap.has(element)) {
                    return this._treeNodeToChildrenMap.get(element);
                }
                else {
                    // check if session exists
                    if (element.sessionId) {
                        // clean created session promise
                        this._sessionIdToPromiseMap.delete(element.sessionId);
                        // node expansion
                        let promise = new protocol_1.Deferred();
                        yield this.expandNode(element, element.sessionId, promise);
                        let children = yield promise;
                        if (children) {
                            // clean expand session promise
                            this.cleanExpansionPromise(element);
                            return children;
                        }
                        else {
                            return undefined;
                        }
                    }
                    else {
                        // start node session
                        let promise = new protocol_1.Deferred();
                        const sessionId = yield this.createSession(promise, element.connectionInfo);
                        if (sessionId) {
                            let node = yield promise;
                            // if the server was found but connection failed
                            if (!node) {
                                let profile = element.connectionInfo;
                                let password = yield this._connectionManager.connectionStore.lookupPassword(profile);
                                if (password) {
                                    return this.createSignInNode(element);
                                }
                                else {
                                    return this.createConnectTreeNode(element);
                                }
                            }
                        }
                        else {
                            // If node create session failed (server wasn't found)
                            return this.createSignInNode(element);
                        }
                        // otherwise expand the node by refreshing the root
                        // to add connected context key
                        this._objectExplorerProvider.refresh(undefined);
                    }
                }
            }
            else {
                // retrieve saved connections first when opening object explorer
                // for the first time
                let savedConnections = this._connectionManager.connectionStore.loadAllConnections();
                // if there are no saved connections
                // show the add connection node
                if (savedConnections.length === 0) {
                    return this.getAddConnectionNode();
                }
                // if OE doesn't exist the first time
                // then build the nodes off of saved connections
                if (!this._objectExplorerProvider.objectExplorerExists) {
                    // if there are actually saved connections
                    this._rootTreeNodeArray = [];
                    this.getSavedConnections();
                    this._objectExplorerProvider.objectExplorerExists = true;
                    return this.sortByServerName(this._rootTreeNodeArray);
                }
                else {
                    // otherwise returned the cached nodes
                    return this.sortByServerName(this._rootTreeNodeArray);
                }
            }
        });
    }
    /**
     * Create an OE session for the given connection credentials
     * otherwise prompt the user to select a connection to make an
     * OE out of
     * @param connectionCredentials Connection Credentials for a node
     */
    createSession(promise, connectionCredentials, context) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!connectionCredentials) {
                const connectionUI = this._connectionManager.connectionUI;
                connectionCredentials = yield connectionUI.createAndSaveProfile();
                (0, telemetry_1.sendActionEvent)(telemetryInterfaces_1.TelemetryViews.ObjectExplorer, telemetryInterfaces_1.TelemetryActions.CreateConnection, undefined, undefined, connectionCredentials, this._connectionManager.getServerInfo(connectionCredentials));
            }
            if (connectionCredentials) {
                // connection string based credential
                if (connectionCredentials.connectionString) {
                    if (connectionCredentials.savePassword) {
                        // look up connection string
                        let connectionString = yield this._connectionManager.connectionStore.lookupPassword(connectionCredentials, true);
                        connectionCredentials.connectionString = connectionString;
                    }
                }
                else {
                    if (connectionCredentials_1.ConnectionCredentials.isPasswordBasedCredential(connectionCredentials)) {
                        // show password prompt if SQL Login and password isn't saved
                        let password = connectionCredentials.password;
                        if (Utils.isEmpty(password)) {
                            // if password isn't saved
                            if (!connectionCredentials.savePassword) {
                                // prompt for password
                                password = yield this._connectionManager.connectionUI.promptForPassword();
                                if (!password) {
                                    promise.resolve(undefined);
                                    return undefined;
                                }
                            }
                            else {
                                // look up saved password
                                password = yield this._connectionManager.connectionStore.lookupPassword(connectionCredentials);
                                if (connectionCredentials.authenticationType !== Constants.azureMfa) {
                                    connectionCredentials.azureAccountToken = undefined;
                                }
                            }
                            connectionCredentials.password = password;
                        }
                    }
                    else if (connectionCredentials.authenticationType === Utils.authTypeToString(interfaces_1.AuthenticationTypes.Integrated)) {
                        connectionCredentials.azureAccountToken = undefined;
                    }
                    else if (connectionCredentials.authenticationType === Constants.azureMfa) {
                        let azureController = this._connectionManager.azureController;
                        let account = this._connectionManager.accountStore.getAccount(connectionCredentials.accountId);
                        let needsRefresh = false;
                        if (!account) {
                            needsRefresh = true;
                        }
                        else if (azureController.isSqlAuthProviderEnabled()) {
                            connectionCredentials.user = account.displayInfo.displayName;
                            connectionCredentials.email = account.displayInfo.email;
                            // Update profile after updating user/email
                            yield this._connectionManager.connectionUI.saveProfile(connectionCredentials);
                            if (!azureController.isAccountInCache(account)) {
                                needsRefresh = true;
                            }
                        }
                        if (!connectionCredentials.azureAccountToken && (!azureController.isSqlAuthProviderEnabled() || needsRefresh)) {
                            this.refreshAccount(account, connectionCredentials);
                        }
                    }
                }
                const connectionDetails = connectionCredentials_1.ConnectionCredentials.createConnectionDetails(connectionCredentials);
                const response = yield this._connectionManager.client.sendRequest(createSessionRequest_1.CreateSessionRequest.type, connectionDetails);
                if (response) {
                    this._sessionIdToConnectionCredentialsMap.set(response.sessionId, connectionCredentials);
                    this._sessionIdToPromiseMap.set(response.sessionId, promise);
                    return response.sessionId;
                }
                else {
                    this._client.logger.error('No response received for session creation request');
                }
            }
            else {
                this._client.logger.error('Connection could not be made, as credentials not available.');
                // no connection was made
                promise.resolve(undefined);
                return undefined;
            }
        });
    }
    refreshAccount(account, connectionCredentials) {
        return __awaiter(this, void 0, void 0, function* () {
            let azureController = this._connectionManager.azureController;
            let profile = new connectionProfile_1.ConnectionProfile(connectionCredentials);
            let azureAccountToken = yield azureController.refreshAccessToken(account, this._connectionManager.accountStore, connectionCredentials.tenantId, providerSettings_1.default.resources.databaseResource);
            if (!azureAccountToken) {
                this._client.logger.verbose('Access token could not be refreshed for connection profile.');
                let errorMessage = LocalizedConstants.msgAccountRefreshFailed;
                yield this._connectionManager.vscodeWrapper.showErrorMessage(errorMessage, LocalizedConstants.refreshTokenLabel).then((result) => __awaiter(this, void 0, void 0, function* () {
                    if (result === LocalizedConstants.refreshTokenLabel) {
                        let updatedProfile = yield azureController.populateAccountProperties(profile, this._connectionManager.accountStore, providerSettings_1.default.resources.databaseResource);
                        connectionCredentials.azureAccountToken = updatedProfile.azureAccountToken;
                        connectionCredentials.expiresOn = updatedProfile.expiresOn;
                    }
                    else {
                        this._client.logger.error('Credentials not refreshed by user.');
                        return undefined;
                    }
                }));
            }
            else {
                connectionCredentials.azureAccountToken = azureAccountToken.token;
                connectionCredentials.expiresOn = azureAccountToken.expiresOn;
            }
        });
    }
    getConnectionCredentials(sessionId) {
        if (this._sessionIdToConnectionCredentialsMap.has(sessionId)) {
            return this._sessionIdToConnectionCredentialsMap.get(sessionId);
        }
        return undefined;
    }
    removeObjectExplorerNode(node, isDisconnect = false) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.closeSession(node);
            const nodeUri = objectExplorerUtils_1.ObjectExplorerUtils.getNodeUri(node);
            yield this._connectionManager.disconnect(nodeUri);
            if (!isDisconnect) {
                const index = this._rootTreeNodeArray.indexOf(node, 0);
                if (index > -1) {
                    this._rootTreeNodeArray.splice(index, 1);
                }
            }
            else {
                node.nodeType = Constants.disconnectedServerLabel;
                node.contextValue = Constants.disconnectedServerLabel;
                node.sessionId = undefined;
                if (!node.connectionInfo.savePassword) {
                    node.connectionInfo.password = '';
                }
                const label = typeof node.label === 'string' ? node.label : node.label.label;
                // make a new node to show disconnected behavior
                let disconnectedNode = new treeNodeInfo_1.TreeNodeInfo(label, Constants.disconnectedServerLabel, node.collapsibleState, node.nodePath, node.nodeStatus, Constants.disconnectedServerLabel, undefined, node.connectionInfo, node.parentNode);
                this.updateNode(disconnectedNode);
                this._currentNode = disconnectedNode;
                this._treeNodeToChildrenMap.set(this._currentNode, [new connectTreeNode_1.ConnectTreeNode(this._currentNode)]);
            }
            this._nodePathToNodeLabelMap.delete(node.nodePath);
            this.cleanNodeChildren(node);
            (0, telemetry_1.sendActionEvent)(telemetryInterfaces_1.TelemetryViews.ObjectExplorer, isDisconnect ? telemetryInterfaces_1.TelemetryActions.RemoveConnection : telemetryInterfaces_1.TelemetryActions.Disconnect, {
                nodeType: node.nodeType
            }, undefined, node.connectionInfo, this._connectionManager.getServerInfo(node.connectionInfo));
        });
    }
    removeConnectionNodes(connections) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let conn of connections) {
                for (let node of this._rootTreeNodeArray) {
                    if (Utils.isSameConnection(node.connectionInfo, conn)) {
                        yield this.removeObjectExplorerNode(node);
                    }
                }
            }
        });
    }
    refreshNode(node) {
        return __awaiter(this, void 0, void 0, function* () {
            const refreshParams = {
                sessionId: node.sessionId,
                nodePath: node.nodePath
            };
            let response = yield this._connectionManager.client.sendRequest(refreshSessionRequest_1.RefreshRequest.type, refreshParams);
            if (response) {
                this._treeNodeToChildrenMap.delete(node);
            }
            (0, telemetry_1.sendActionEvent)(telemetryInterfaces_1.TelemetryViews.ObjectExplorer, telemetryInterfaces_1.TelemetryActions.Refresh, {
                nodeType: node.nodeType
            }, undefined, node.connectionInfo, this._connectionManager.getServerInfo(node.connectionInfo));
            return this._objectExplorerProvider.refresh(node);
        });
    }
    signInNodeServer(node) {
        if (this._treeNodeToChildrenMap.has(node)) {
            this._treeNodeToChildrenMap.delete(node);
        }
    }
    addDisconnectedNode(connectionCredentials) {
        const label = connectionCredentials.profileName ?
            connectionCredentials.profileName :
            this.createNodeLabel(connectionCredentials);
        const node = new treeNodeInfo_1.TreeNodeInfo(label, Constants.disconnectedServerLabel, vscode.TreeItemCollapsibleState.Collapsed, undefined, undefined, Constants.disconnectedServerLabel, undefined, connectionCredentials, undefined);
        this.updateNode(node);
    }
    createNodeLabel(credentials) {
        let database = credentials.database;
        const server = credentials.server;
        const authType = credentials.authenticationType;
        let userOrAuthType = authType;
        if (authType === Constants.sqlAuthentication) {
            userOrAuthType = credentials.user;
        }
        if (authType === Constants.azureMfa) {
            userOrAuthType = credentials.email;
        }
        if (!database || database === '') {
            database = LocalizedConstants.defaultDatabaseLabel;
        }
        return `${server}, ${database} (${userOrAuthType})`;
    }
    /**
     * Sends a close session request
     * @param node
     */
    closeSession(node) {
        return __awaiter(this, void 0, void 0, function* () {
            if (node.sessionId) {
                const closeSessionParams = {
                    sessionId: node.sessionId
                };
                const response = yield this._connectionManager.client.sendRequest(closeSessionRequest_1.CloseSessionRequest.type, closeSessionParams);
                if (response && response.success) {
                    this._sessionIdToConnectionCredentialsMap.delete(response.sessionId);
                    if (this._sessionIdToPromiseMap.has(node.sessionId)) {
                        this._sessionIdToPromiseMap.delete(node.sessionId);
                    }
                    const nodeUri = objectExplorerUtils_1.ObjectExplorerUtils.getNodeUri(node);
                    yield this._connectionManager.disconnect(nodeUri);
                    this.cleanNodeChildren(node);
                    return;
                }
            }
            return;
        });
    }
    /** Getters */
    get currentNode() {
        return this._currentNode;
    }
    get rootTreeNodeArray() {
        return this._rootTreeNodeArray;
    }
    get rootNodeConnections() {
        const connections = this._rootTreeNodeArray.map(node => node.connectionInfo);
        return connections;
    }
    /**
     * Setters
     */
    set currentNode(node) {
        this._currentNode = node;
    }
}
exports.ObjectExplorerService = ObjectExplorerService;

//# sourceMappingURL=objectExplorerService.js.map
