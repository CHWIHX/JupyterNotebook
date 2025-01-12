"use strict";
(self["webpackChunkpowerplatform_vscode"] = self["webpackChunkpowerplatform_vscode"] || []).push([[6],{

/***/ 562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _microsoft_dynamicproto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(526);
/*
 * 1DS JS SDK POST plugin, 3.2.15
 * Copyright (c) Microsoft and contributors. All rights reserved.
 * (Microsoft Internal Only)
 */
/**
* ClockSkewManager.ts
* @author Abhilash Panwar (abpanwar)
* @copyright Microsoft 2018
*/

/**
* Class to manage clock skew correction.
*/
var ClockSkewManager = /** @class */ (function () {
    function ClockSkewManager() {
        var _allowRequestSending = true;
        var _shouldAddClockSkewHeaders = true;
        var _isFirstRequest = true;
        var _clockSkewHeaderValue = "use-collector-delta";
        var _clockSkewSet = false;
        (0,_microsoft_dynamicproto_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ClockSkewManager, this, function (_self) {
            /**
             * Determine if requests can be sent.
             * @returns True if requests can be sent, false otherwise.
             */
            _self.allowRequestSending = function () {
                return _allowRequestSending;
            };
            /**
             * Tells the ClockSkewManager that it should assume that the first request has now been sent,
             * If this method had not yet been called AND the clock Skew had not been set this will set
             * allowRequestSending to false until setClockSet() is called.
             */
            _self.firstRequestSent = function () {
                if (_isFirstRequest) {
                    _isFirstRequest = false;
                    if (!_clockSkewSet) {
                        // Block sending until we get the first clock Skew
                        _allowRequestSending = false;
                    }
                }
            };
            /**
             * Determine if clock skew headers should be added to the request.
             * @returns True if clock skew headers should be added, false otherwise.
             */
            _self.shouldAddClockSkewHeaders = function () {
                return _shouldAddClockSkewHeaders;
            };
            /**
             * Gets the clock skew header value.
             * @returns The clock skew header value.
             */
            _self.getClockSkewHeaderValue = function () {
                return _clockSkewHeaderValue;
            };
            /**
             * Sets the clock skew header value. Once clock skew is set this method
             * is no-op.
             * @param timeDeltaInMillis - Time delta to be saved as the clock skew header value.
             */
            _self.setClockSkew = function (timeDeltaInMillis) {
                if (!_clockSkewSet) {
                    if (timeDeltaInMillis) {
                        _clockSkewHeaderValue = timeDeltaInMillis;
                        _shouldAddClockSkewHeaders = true;
                        _clockSkewSet = true;
                    }
                    else {
                        _shouldAddClockSkewHeaders = false;
                    }
                    // Unblock sending
                    _allowRequestSending = true;
                }
            };
        });
    }
// Removed Stub for ClockSkewManager.prototype.allowRequestSending.
// Removed Stub for ClockSkewManager.prototype.firstRequestSent.
// Removed Stub for ClockSkewManager.prototype.shouldAddClockSkewHeaders.
// Removed Stub for ClockSkewManager.prototype.getClockSkewHeaderValue.
// Removed Stub for ClockSkewManager.prototype.setClockSkew.
    // This is a workaround for an IE8 bug when using dynamicProto() with classes that don't have any
    // non-dynamic functions or static properties/functions when using uglify-js to minify the resulting code.
    // this will be removed when ES3 support is dropped.
    ClockSkewManager.__ieDyn=1;

    return ClockSkewManager;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClockSkewManager);
//# sourceMappingURL=ClockSkewManager.js.map

/***/ }),

/***/ 556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BE_PROFILE": () => (/* binding */ BE_PROFILE),
/* harmony export */   "NRT_PROFILE": () => (/* binding */ NRT_PROFILE),
/* harmony export */   "RT_PROFILE": () => (/* binding */ RT_PROFILE)
/* harmony export */ });
/*
 * 1DS JS SDK POST plugin, 3.2.15
 * Copyright (c) Microsoft and contributors. All rights reserved.
 * (Microsoft Internal Only)
 */
/**
 * Real Time profile (default profile). RealTime Latency events are sent every 1 sec and
 * Normal Latency events are sent every 2 sec.
 */
var RT_PROFILE = "REAL_TIME";
/**
 * Near Real Time profile. RealTime Latency events are sent every 3 sec and
 * Normal Latency events are sent every 6 sec.
 */
var NRT_PROFILE = "NEAR_REAL_TIME";
/**
 * Best Effort. RealTime Latency events are sent every 9 sec and
 * Normal Latency events are sent every 18 sec.
 */
var BE_PROFILE = "BEST_EFFORT";
//# sourceMappingURL=DataModels.js.map

/***/ }),

/***/ 559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventBatch": () => (/* binding */ EventBatch)
/* harmony export */ });
/* harmony import */ var _microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(532);
/* harmony import */ var _microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(518);
/* harmony import */ var _InternalConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(558);
/*
 * 1DS JS SDK POST plugin, 3.2.15
 * Copyright (c) Microsoft and contributors. All rights reserved.
 * (Microsoft Internal Only)
 */
/**
* EventBatch.ts
* @author Nev Wylie (newylie)
* @copyright Microsoft 2020
*/


function _getEventMsfpc(theEvent) {
    var intWeb = ((theEvent.ext || {})["intweb"]);
    if (intWeb && (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_0__.isValueAssigned)(intWeb[_InternalConstants__WEBPACK_IMPORTED_MODULE_1__.STR_MSFPC])) {
        return intWeb[_InternalConstants__WEBPACK_IMPORTED_MODULE_1__.STR_MSFPC];
    }
    return null;
}
function _getMsfpc(theEvents) {
    var msfpc = null;
    for (var lp = 0; msfpc === null && lp < theEvents.length; lp++) {
        msfpc = _getEventMsfpc(theEvents[lp]);
    }
    return msfpc;
}
/**
* This class defines a "batch" events related to a specific iKey, it is used by the PostChannel and HttpManager
* to collect and transfer ownership of events without duplicating them in-memory. This reduces the previous
* array duplication and shared ownership issues that occurred due to race conditions caused by the async nature
* of sending requests.
*/
var EventBatch = /** @class */ (function () {
    /**
     * Private constructor so that caller is forced to use the static create method.
     * @param iKey - The iKey to associate with the events (not validated)
     * @param addEvents - The optional collection of events to assign to this batch - defaults to an empty array.
     */
    function EventBatch(iKey, addEvents) {
        var events = addEvents ? [].concat(addEvents) : [];
        var _self = this;
        var _msfpc = _getMsfpc(events);
        _self.iKey = function () {
            return iKey;
        };
        _self.Msfpc = function () {
            // return the cached value unless it's undefined -- used to avoid cpu
            return _msfpc || _InternalConstants__WEBPACK_IMPORTED_MODULE_1__.STR_EMPTY;
        };
        _self.count = function () {
            return events.length;
        };
        _self.events = function () {
            return events;
        };
        _self.addEvent = function (theEvent) {
            if (theEvent) {
                events.push(theEvent);
                if (!_msfpc) {
                    // Not found so try and find one
                    _msfpc = _getEventMsfpc(theEvent);
                }
                return true;
            }
            return false;
        };
        _self.split = function (fromEvent, numEvents) {
            // Create a new batch with the same iKey
            var theEvents;
            if (fromEvent < events.length) {
                var cnt = events.length - fromEvent;
                if (!(0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(numEvents)) {
                    cnt = numEvents < cnt ? numEvents : cnt;
                }
                theEvents = events.splice(fromEvent, cnt);
                // reset the fetched msfpc value
                _msfpc = _getMsfpc(events);
            }
            return new EventBatch(iKey, theEvents);
        };
    }
    /**
     * Creates a new Event Batch object
     * @param iKey The iKey associated with this batch of events
     */
    EventBatch.create = function (iKey, theEvents) {
        return new EventBatch(iKey, theEvents);
    };
    return EventBatch;
}());

//# sourceMappingURL=EventBatch.js.map

/***/ }),

/***/ 560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpManager": () => (/* binding */ HttpManager)
/* harmony export */ });
/* harmony import */ var _microsoft_dynamicproto_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(526);
/* harmony import */ var _ClockSkewManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(562);
/* harmony import */ var _KillSwitch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(561);
/* harmony import */ var _microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(518);
/* harmony import */ var _microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(528);
/* harmony import */ var _microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(527);
/* harmony import */ var _microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(532);
/* harmony import */ var _microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(530);
/* harmony import */ var _microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(519);
/* harmony import */ var _InternalConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(558);
/* harmony import */ var _RetryPolicy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(564);
/* harmony import */ var _Serializer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(563);
/*
 * 1DS JS SDK POST plugin, 3.2.15
 * Copyright (c) Microsoft and contributors. All rights reserved.
 * (Microsoft Internal Only)
 */
var _a;
/**
* HttpManager.ts
* @author Abhilash Panwar (abpanwar); Hector Hernandez (hectorh); Nev Wylie (newylie)
* @copyright Microsoft 2018-2020
*/







var strSendAttempt = "sendAttempt";
var _noResponseQs = "&" + _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_NO_RESPONSE_BODY + "=true";
/**
 * Identifies the default notification reason to the action names
 */
var _eventActionMap = (_a = {},
    _a[1 /* EventBatchNotificationReason.Paused */] = _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_REQUEUE,
    _a[100 /* EventBatchNotificationReason.RequeueEvents */] = _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_REQUEUE,
    _a[200 /* EventBatchNotificationReason.Complete */] = "sent",
    _a[8004 /* EventBatchNotificationReason.KillSwitch */] = _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_DROPPED,
    _a[8003 /* EventBatchNotificationReason.SizeLimitExceeded */] = _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_DROPPED,
    _a);
var _collectorQsHeaders = {};
var _collectorHeaderToQs = {};
function _addCollectorHeaderQsMapping(qsName, headerName, allowQs) {
    _collectorQsHeaders[qsName] = headerName;
    if (allowQs !== false) {
        _collectorHeaderToQs[headerName] = qsName;
    }
}
_addCollectorHeaderQsMapping(_InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_MSA_DEVICE_TICKET, _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_MSA_DEVICE_TICKET, false);
_addCollectorHeaderQsMapping(_InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_CLIENT_VERSION, _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_CLIENT_VERSION);
_addCollectorHeaderQsMapping(_InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_CLIENT_ID, "Client-Id");
_addCollectorHeaderQsMapping(_InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_API_KEY, _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_API_KEY);
_addCollectorHeaderQsMapping(_InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_TIME_DELTA_TO_APPLY, _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_TIME_DELTA_TO_APPLY);
_addCollectorHeaderQsMapping(_InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_UPLOAD_TIME, _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_UPLOAD_TIME);
_addCollectorHeaderQsMapping(_InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_AUTH_XTOKEN, _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_AUTH_XTOKEN);
function _getResponseText(xhr) {
    try {
        return xhr.responseText;
    }
    catch (e) {
        // Best effort, as XHR may throw while XDR wont so just ignore
    }
    return _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_EMPTY;
}
function _hasHeader(headers, header) {
    var hasHeader = false;
    if (headers && header) {
        var keys = (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_1__.objKeys)(headers);
        if (keys && keys.length > 0) {
            var lowerHeader = header.toLowerCase();
            for (var lp = 0; lp < keys.length; lp++) {
                var value = keys[lp];
                if (value && (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_1__.hasOwnProperty)(header, value) &&
                    value.toLowerCase() === lowerHeader) {
                    hasHeader = true;
                    break;
                }
            }
        }
    }
    return hasHeader;
}
function _addRequestDetails(details, name, value, useHeaders) {
    if (name && value && value.length > 0) {
        if (useHeaders && _collectorQsHeaders[name]) {
            details.hdrs[_collectorQsHeaders[name]] = value;
            details.useHdrs = true;
        }
        else {
            details.url += "&" + name + "=" + value;
        }
    }
}
function _prependTransports(theTransports, newTransports) {
    if (newTransports) {
        if ((0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_1__.isNumber)(newTransports)) {
            theTransports = [newTransports].concat(theTransports);
        }
        else if ((0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_1__.isArray)(newTransports)) {
            theTransports = newTransports.concat(theTransports);
        }
    }
    return theTransports;
}
/**
 * Class managing the sending of requests.
 */
var HttpManager = /** @class */ (function () {
    /**
     * @constructor
     * @param requestQueue   - The queue that contains the requests to be sent.
     */
    function HttpManager(maxEventsPerBatch, maxConnections, maxRequestRetriesBeforeBackoff, actions, timeoutOverride) {
        this._responseHandlers = [];
        var _urlString = "?cors=true&" + _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_CONTENT_TYPE_HEADER.toLowerCase() + "=" + _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CONTENT_TYPE;
        var _killSwitch = new _KillSwitch__WEBPACK_IMPORTED_MODULE_2__["default"]();
        var _paused = false;
        var _clockSkewManager = new _ClockSkewManager__WEBPACK_IMPORTED_MODULE_3__["default"]();
        var _useBeacons = false;
        var _outstandingRequests = 0; // Holds the number of outstanding async requests that have not returned a response yet
        var _postManager;
        var _logger;
        var _sendInterfaces;
        var _core;
        var _customHttpInterface = true;
        var _queryStringParameters = [];
        var _headers = {};
        var _batchQueue = [];
        var _serializer = null;
        var _enableEventTimings = false;
        var _cookieMgr;
        var _isUnloading = false;
        var _useHeaders = false;
        var _xhrTimeout;
        var _disableXhrSync;
        var _disableFetchKeepAlive;
        var _canHaveReducedPayload;
        var _addNoResponse;
        (0,_microsoft_dynamicproto_js__WEBPACK_IMPORTED_MODULE_4__["default"])(HttpManager, this, function (_self) {
            var _sendCredentials = true;
            _self.initialize = function (endpointUrl, core, postChannel, httpInterface, channelConfig) {
                var _a;
                if (!channelConfig) {
                    channelConfig = {};
                }
                _urlString = endpointUrl + _urlString;
                _useHeaders = !(0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(channelConfig.avoidOptions) ? !channelConfig.avoidOptions : true;
                _core = core;
                _cookieMgr = core.getCookieMgr();
                _enableEventTimings = !_core.config.disableEventTimings;
                var enableCompoundKey = !!_core.config.enableCompoundKey;
                _postManager = postChannel;
                _logger = _postManager.diagLog();
                var valueSanitizer = channelConfig.valueSanitizer;
                var stringifyObjects = channelConfig.stringifyObjects;
                if (!(0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(channelConfig.enableCompoundKey)) {
                    enableCompoundKey = !!channelConfig.enableCompoundKey;
                }
                _xhrTimeout = channelConfig.xhrTimeout;
                _disableXhrSync = !!channelConfig.disableXhrSync;
                _disableFetchKeepAlive = !!channelConfig.disableFetchKeepAlive;
                _addNoResponse = channelConfig.addNoResponse !== false;
                _useBeacons = !(0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_5__.isReactNative)(); // Only use beacons if not running in React Native
                _serializer = new _Serializer__WEBPACK_IMPORTED_MODULE_6__.Serializer(_core, valueSanitizer, stringifyObjects, enableCompoundKey);
                if (!(0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(channelConfig.useSendBeacon)) {
                    _useBeacons = !!channelConfig.useSendBeacon;
                }
                var syncHttpInterface = httpInterface;
                var beaconHttpInterface = channelConfig.alwaysUseXhrOverride ? httpInterface : null;
                var fetchSyncHttpInterface = channelConfig.alwaysUseXhrOverride ? httpInterface : null;
                var beaconUnloadTransports = [3 /* TransportType.Beacon */, 2 /* TransportType.Fetch */];
                if (!httpInterface) {
                    _customHttpInterface = false;
                    var location_1 = (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_5__.getLocation)();
                    if (location_1 && location_1.protocol && location_1.protocol.toLowerCase() === "file:") {
                        // Special case where a local html file fails with a CORS error on Chromium browsers
                        _sendCredentials = false;
                    }
                    var theTransports = [];
                    if ((0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_5__.isReactNative)()) {
                        // Use Fetch or XDR/XHR
                        theTransports = [2 /* TransportType.Fetch */, 1 /* TransportType.Xhr */];
                        beaconUnloadTransports = [2 /* TransportType.Fetch */, 1 /* TransportType.Xhr */, 3 /* TransportType.Beacon */];
                    }
                    else {
                        // Use XDR/XHR, Fetch or beacons
                        theTransports = [1 /* TransportType.Xhr */, 2 /* TransportType.Fetch */, 3 /* TransportType.Beacon */];
                    }
                    // Prefix any user requested transport(s) values
                    theTransports = _prependTransports(theTransports, channelConfig.transports);
                    httpInterface = _getSenderInterface(theTransports, false);
                    if (!httpInterface) {
                        (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_7__._warnToConsole)(_logger, "No available transport to send events");
                    }
                    syncHttpInterface = _getSenderInterface(theTransports, true);
                }
                if (!beaconHttpInterface) {
                    // Allow overriding the usage of sendBeacon
                    beaconUnloadTransports = _prependTransports(beaconUnloadTransports, channelConfig.unloadTransports);
                    beaconHttpInterface = _getSenderInterface(beaconUnloadTransports, true);
                }
                _canHaveReducedPayload = !_customHttpInterface && ((_useBeacons && (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_5__.isBeaconsSupported)()) || (!_disableFetchKeepAlive && (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_5__.isFetchSupported)(true)));
                _sendInterfaces = (_a = {},
                    _a[0 /* EventSendType.Batched */] = httpInterface,
                    _a[1 /* EventSendType.Synchronous */] = syncHttpInterface || _getSenderInterface([1 /* TransportType.Xhr */, 2 /* TransportType.Fetch */, 3 /* TransportType.Beacon */], true),
                    _a[2 /* EventSendType.SendBeacon */] = beaconHttpInterface || syncHttpInterface || _getSenderInterface([1 /* TransportType.Xhr */], true),
                    _a[3 /* EventSendType.SyncFetch */] = fetchSyncHttpInterface || _getSenderInterface([2 /* TransportType.Fetch */, 3 /* TransportType.Beacon */], true) || syncHttpInterface || _getSenderInterface([1 /* TransportType.Xhr */], true),
                    _a);
            };
            // Special internal method to allow the DebugPlugin to hook embedded objects
            function _getSenderInterface(transports, syncSupport) {
                var transportType = 0 /* TransportType.NotSet */;
                var sendPostFunc = null;
                var lp = 0;
                while (sendPostFunc == null && lp < transports.length) {
                    transportType = transports[lp];
                    if (transportType === 1 /* TransportType.Xhr */) {
                        if ((0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_5__.useXDomainRequest)()) {
                            sendPostFunc = _xdrSendPost;
                        }
                        else if ((0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_5__.isXhrSupported)()) {
                            sendPostFunc = _xhrSendPost;
                        }
                    }
                    else if (transportType === 2 /* TransportType.Fetch */ && (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_5__.isFetchSupported)(syncSupport) && (!syncSupport || (syncSupport && !_disableFetchKeepAlive))) {
                        sendPostFunc = _fetchSendPost;
                    }
                    else if (_useBeacons && transportType === 3 /* TransportType.Beacon */ && (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_5__.isBeaconsSupported)()) {
                        sendPostFunc = _beaconSendPost;
                    }
                    lp++;
                }
                if (sendPostFunc) {
                    return {
                        _transport: transportType,
                        _isSync: syncSupport,
                        sendPOST: sendPostFunc
                    };
                }
                return null;
            }
            _self["_getDbgPlgTargets"] = function () {
                return [_sendInterfaces[0 /* EventSendType.Batched */], _killSwitch, _serializer, _sendInterfaces];
            };
            function _xdrSendPost(payload, oncomplete, sync) {
                // It doesn't support custom headers, so no action is taken with current requestHeaders
                var xdr = new XDomainRequest();
                xdr.open(_InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_POST_METHOD, payload.urlString);
                if (payload.timeout) {
                    xdr.timeout = payload.timeout;
                }
                // can't get the status code in xdr.
                xdr.onload = function () {
                    // we will assume onload means the request succeeded.
                    var response = _getResponseText(xdr);
                    _doOnComplete(oncomplete, 200, {}, response);
                    _handleCollectorResponse(response);
                };
                // we will assume onerror means we need to drop the events.
                xdr.onerror = function () {
                    _doOnComplete(oncomplete, 400, {});
                };
                // we will assume ontimeout means we need to retry the events.
                xdr.ontimeout = function () {
                    _doOnComplete(oncomplete, 500, {});
                };
                // https://cypressnorth.com/web-programming-and-development/internet-explorer-aborting-ajax-requests-fixed/
                // tslint:disable-next-line:no-empty
                xdr.onprogress = function () { };
                if (sync) {
                    xdr.send(payload.data);
                }
                else {
                    timeoutOverride.set(function () {
                        xdr.send(payload.data);
                    }, 0);
                }
            }
            function _fetchSendPost(payload, oncomplete, sync) {
                var _a;
                var theUrl = payload.urlString;
                var ignoreResponse = false;
                var responseHandled = false;
                var requestInit = (_a = {
                        body: payload.data,
                        method: _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_POST_METHOD
                    },
                    _a[_InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_DISABLED_PROPERTY_NAME] = true,
                    _a);
                if (sync) {
                    requestInit.keepalive = true;
                    if (payload._sendReason === 2 /* SendRequestReason.Unload */) {
                        // As a sync request (during unload), it is unlikely that we will get a chance to process the response so
                        // just like beacon send assume that the events have been accepted and processed
                        ignoreResponse = true;
                        if (_addNoResponse) {
                            theUrl += _noResponseQs;
                        }
                    }
                }
                if (_sendCredentials) {
                    // Don't send credentials when URL is file://
                    requestInit.credentials = "include";
                }
                // Only add headers if there are headers to add, due to issue with some polyfills
                if (payload.headers && (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_1__.objKeys)(payload.headers).length > 0) {
                    requestInit.headers = payload.headers;
                }
                fetch(theUrl, requestInit).then(function (response) {
                    var headerMap = {};
                    var responseText = _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_EMPTY;
                    var headers = response.headers;
                    if (headers) {
                        headers["forEach"](function (value, name) {
                            headerMap[name] = value;
                        });
                    }
                    if (response.body) {
                        response.text().then(function (text) {
                            responseText = text;
                        });
                    }
                    if (!responseHandled) {
                        responseHandled = true;
                        _doOnComplete(oncomplete, response.status, headerMap, responseText);
                        _handleCollectorResponse(responseText);
                    }
                })["catch"](function (error) {
                    // In case there is an error in the request. Set the status to 0
                    // so that the events can be retried later.
                    if (!responseHandled) {
                        responseHandled = true;
                        _doOnComplete(oncomplete, 0, {});
                    }
                });
                if (ignoreResponse && !responseHandled) {
                    // Assume success during unload processing
                    responseHandled = true;
                    _doOnComplete(oncomplete, 200, {});
                }
                if (!responseHandled && payload.timeout > 0) {
                    // Simulate timeout
                    timeoutOverride.set(function () {
                        if (!responseHandled) {
                            // Assume a 500 response (which will cause a retry)
                            responseHandled = true;
                            _doOnComplete(oncomplete, 500, {});
                        }
                    }, payload.timeout);
                }
            }
            function _xhrSendPost(payload, oncomplete, sync) {
                var theUrl = payload.urlString;
                function _appendHeader(theHeaders, xhr, name) {
                    if (!theHeaders[name] && xhr && xhr.getResponseHeader) {
                        var value = xhr.getResponseHeader(name);
                        if (value) {
                            theHeaders[name] = (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_1__.strTrim)(value);
                        }
                    }
                    return theHeaders;
                }
                function _getAllResponseHeaders(xhr) {
                    var theHeaders = {};
                    if (!xhr.getAllResponseHeaders) {
                        // Firefox 2-63 doesn't have getAllResponseHeaders function but it does have getResponseHeader
                        // Only call these if getAllResponseHeaders doesn't exist, otherwise we can get invalid response errors
                        // as collector is not currently returning the correct header to allow JS to access these headers
                        theHeaders = _appendHeader(theHeaders, xhr, _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_TIME_DELTA_HEADER);
                        theHeaders = _appendHeader(theHeaders, xhr, _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_KILL_DURATION_HEADER);
                        theHeaders = _appendHeader(theHeaders, xhr, _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_KILL_DURATION_SECONDS_HEADER);
                    }
                    else {
                        theHeaders = _convertAllHeadersToMap(xhr.getAllResponseHeaders());
                    }
                    return theHeaders;
                }
                function xhrComplete(xhr, responseTxt) {
                    _doOnComplete(oncomplete, xhr.status, _getAllResponseHeaders(xhr), responseTxt);
                }
                if (sync && payload.disableXhrSync) {
                    sync = false;
                }
                var xhrRequest = (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__.openXhr)(_InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_POST_METHOD, theUrl, _sendCredentials, true, sync, payload.timeout);
                // Set custom headers (e.g. gzip) here (after open())
                (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_1__.objForEachKey)(payload.headers, function (name, value) {
                    xhrRequest.setRequestHeader(name, value);
                });
                xhrRequest.onload = function () {
                    var response = _getResponseText(xhrRequest);
                    xhrComplete(xhrRequest, response);
                    _handleCollectorResponse(response);
                };
                xhrRequest.onerror = function () {
                    xhrComplete(xhrRequest);
                };
                xhrRequest.ontimeout = function () {
                    xhrComplete(xhrRequest);
                };
                xhrRequest.send(payload.data);
            }
            function _doOnComplete(oncomplete, status, headers, response) {
                try {
                    oncomplete(status, headers, response);
                }
                catch (e) {
                    (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_7__._throwInternal)(_logger, 2 /* eLoggingSeverity.WARNING */, 518 /* _eExtendedInternalMessageId.SendPostOnCompleteFailure */, (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_5__.dumpObj)(e));
                }
            }
            function _beaconSendPost(payload, oncomplete, sync) {
                // Custom headers not supported in sendBeacon payload.headers would be ignored
                var internalPayloadData = payload;
                var status = 200;
                var thePayload = internalPayloadData._thePayload;
                var theUrl = payload.urlString + (_addNoResponse ? _noResponseQs : _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_EMPTY);
                try {
                    var nav_1 = (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_5__.getNavigator)();
                    if (!nav_1.sendBeacon(theUrl, payload.data)) {
                        if (thePayload) {
                            // Failed to send entire payload so try and split data and try to send as much events as possible
                            var droppedBatches_1 = [];
                            (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_1__.arrForEach)(thePayload.batches, function (theBatch) {
                                if (droppedBatches_1 && theBatch && theBatch.count() > 0) {
                                    var theEvents = theBatch.events();
                                    for (var lp = 0; lp < theEvents.length; lp++) {
                                        if (!nav_1.sendBeacon(theUrl, _serializer.getEventBlob(theEvents[lp]))) {
                                            // Can't send anymore, so split the batch and drop the rest
                                            droppedBatches_1.push(theBatch.split(lp));
                                            break;
                                        }
                                    }
                                }
                                else {
                                    // Remove all of the events from the existing batch in the payload as the copy includes the original
                                    droppedBatches_1.push(theBatch.split(0));
                                }
                            });
                            _sendBatchesNotification(droppedBatches_1, 8003 /* EventBatchNotificationReason.SizeLimitExceeded */, thePayload.sendType, true);
                        }
                        else {
                            status = 0;
                        }
                    }
                }
                catch (ex) {
                    (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_7__._warnToConsole)(_logger, "Failed to send telemetry using sendBeacon API. Ex:" + (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_5__.dumpObj)(ex));
                    status = 0;
                }
                finally {
                    _doOnComplete(oncomplete, status, {}, _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_EMPTY);
                }
            }
            function _isBeaconPayload(sendType) {
                // Sync Fetch has the same payload limitation as sendBeacon -- 64kb limit, so treat both as a beacon send
                return sendType === 2 /* EventSendType.SendBeacon */ || sendType === 3 /* EventSendType.SyncFetch */;
            }
            function _adjustSendType(sendType) {
                if (_isUnloading && _isBeaconPayload(sendType)) {
                    sendType = 2 /* EventSendType.SendBeacon */;
                }
                return sendType;
            }
            _self.addQueryStringParameter = function (name, value) {
                for (var i = 0; i < _queryStringParameters.length; i++) {
                    if (_queryStringParameters[i].name === name) {
                        _queryStringParameters[i].value = value;
                        return;
                    }
                }
                _queryStringParameters.push({ name: name, value: value });
            };
            _self.addHeader = function (name, value) {
                _headers[name] = value;
            };
            _self.canSendRequest = function () {
                return _hasIdleConnection() && _clockSkewManager.allowRequestSending();
            };
            _self.sendQueuedRequests = function (sendType, sendReason) {
                if ((0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(sendType)) {
                    sendType = 0 /* EventSendType.Batched */;
                }
                if (_isUnloading) {
                    sendType = _adjustSendType(sendType);
                    sendReason = 2 /* SendRequestReason.Unload */;
                }
                if (_canSendPayload(_batchQueue, sendType, 0)) {
                    _sendBatches(_clearQueue(), 0, false, sendType, sendReason || 0 /* SendRequestReason.Undefined */);
                }
            };
            _self.isCompletelyIdle = function () {
                return !_paused && _outstandingRequests === 0 && _batchQueue.length === 0;
            };
            _self.setUnloading = function (value) {
                _isUnloading = value;
            };
            _self.addBatch = function (theBatch) {
                if (theBatch && theBatch.count() > 0) {
                    // Try and kill the event faster
                    if (_killSwitch.isTenantKilled(theBatch.iKey())) {
                        return false;
                    }
                    _batchQueue.push(theBatch);
                }
                return true;
            };
            /**
             * Queue all the remaining requests to be sent. The requests will be
             * sent using HTML5 Beacons if they are available.
             */
            _self.teardown = function () {
                if (_batchQueue.length > 0) {
                    _sendBatches(_clearQueue(), 0, true, 2 /* EventSendType.SendBeacon */, 2 /* SendRequestReason.Unload */);
                }
            };
            /**
             * Pause the sending of requests. No new requests will be sent.
             */
            _self.pause = function () {
                _paused = true;
            };
            /**
             * Resume the sending of requests.
             */
            _self.resume = function () {
                _paused = false;
                _self.sendQueuedRequests(0 /* EventSendType.Batched */, 4 /* SendRequestReason.Resumed */);
            };
            /**
             * Sends a request synchronously to the Aria collector. This api is used to send
             * a request containing a single immediate event.
             *
             * @param batch - The request to be sent.
             * @param sendReason   - The token used to send the request.
             */
            _self.sendSynchronousBatch = function (batch, sendType, sendReason) {
                // This will not take into account the max connections restriction. Since this is sync, we can
                // only send one of this request at a time and thus should not worry about multiple connections
                // being used to send synchronous events.
                // Increment active connection since we are still going to use a connection to send the request.
                if (batch && batch.count() > 0) {
                    if ((0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(sendType)) {
                        sendType = 1 /* EventSendType.Synchronous */;
                    }
                    if (_isUnloading) {
                        sendType = _adjustSendType(sendType);
                        sendReason = 2 /* SendRequestReason.Unload */;
                    }
                    // For sync requests we will not wait for the clock skew.
                    _sendBatches([batch], 0, false, sendType, sendReason || 0 /* SendRequestReason.Undefined */);
                }
            };
            function _hasIdleConnection() {
                return !_paused && _outstandingRequests < maxConnections;
            }
            function _clearQueue() {
                var theQueue = _batchQueue;
                _batchQueue = [];
                return theQueue;
            }
            function _canSendPayload(theBatches, sendType, retryCnt) {
                var result = false;
                if (theBatches && theBatches.length > 0 && !_paused && _sendInterfaces[sendType] && _serializer) {
                    // Always attempt to send synchronous events don't wait for idle or clockSkew
                    // and don't block retry requests if clockSkew is not yet set
                    result = (sendType !== 0 /* EventSendType.Batched */) || (_hasIdleConnection() && (retryCnt > 0 || _clockSkewManager.allowRequestSending()));
                }
                return result;
            }
            function _createDebugBatches(theBatches) {
                var values = {};
                if (theBatches) {
                    (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_1__.arrForEach)(theBatches, function (theBatch, idx) {
                        values[idx] = {
                            iKey: theBatch.iKey(),
                            evts: theBatch.events()
                        };
                    });
                }
                return values;
            }
            function _sendBatches(theBatches, retryCount, isTeardown, sendType, sendReason) {
                if (!theBatches || theBatches.length === 0) {
                    // Nothing to do
                    return;
                }
                if (_paused) {
                    _sendBatchesNotification(theBatches, 1 /* EventBatchNotificationReason.Paused */, sendType);
                    return;
                }
                // Make sure that if we are unloading the sendType is a supported version
                sendType = _adjustSendType(sendType);
                try {
                    var orgBatches_1 = theBatches;
                    var isSynchronous_1 = sendType !== 0 /* EventSendType.Batched */;
                    (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_9__.doPerf)(_core, function () { return "HttpManager:_sendBatches"; }, function (perfEvt) {
                        if (perfEvt) {
                            // Perf Monitoring is enabled, so create a "Quick" copy of the original batches so we still report
                            // the original values as part of the perfEvent. This is because theBatches uses .shift() to remove each
                            // batch as they are processed - removing from the original array, so by the time the _createDebugBatches()
                            // function is called the passed in value has changed and therefore the reported value for the perfEvent is incorrect
                            theBatches = theBatches.slice(0);
                        }
                        var droppedBatches = [];
                        var thePayload = null;
                        var serializationStart = (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__.getTime)();
                        var sendInterface = _sendInterfaces[sendType] || (isSynchronous_1 ? _sendInterfaces[1 /* EventSendType.Synchronous */] : _sendInterfaces[0 /* EventSendType.Batched */]);
                        var sendTransport = sendInterface && sendInterface._transport;
                        // Sync Fetch has the same payload limitation as sendBeacon -- 64kb limit
                        var isReducedPayload = _canHaveReducedPayload && (_isUnloading || _isBeaconPayload(sendType) || (sendTransport === 3 /* TransportType.Beacon */ || (sendInterface._isSync && sendTransport === 2 /* TransportType.Fetch */)));
                        while (_canSendPayload(theBatches, sendType, retryCount)) {
                            var theBatch = theBatches.shift();
                            if (theBatch && theBatch.count() > 0) {
                                if (!_killSwitch.isTenantKilled(theBatch.iKey())) {
                                    // Make sure we have a payload object
                                    thePayload = thePayload || _serializer.createPayload(retryCount, isTeardown, isSynchronous_1, isReducedPayload, sendReason, sendType);
                                    // Add the batch to the current payload
                                    if (!_serializer.appendPayload(thePayload, theBatch, maxEventsPerBatch)) {
                                        // Entire batch was not added so send the payload and retry adding this batch
                                        _doPayloadSend(thePayload, serializationStart, (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__.getTime)(), sendReason);
                                        serializationStart = (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__.getTime)();
                                        theBatches = [theBatch].concat(theBatches);
                                        thePayload = null;
                                    }
                                    else if (thePayload.overflow !== null) {
                                        // Total Payload size was exceeded so send the payload and add the unsent as the next batch to send
                                        theBatches = [thePayload.overflow].concat(theBatches);
                                        thePayload.overflow = null;
                                        _doPayloadSend(thePayload, serializationStart, (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__.getTime)(), sendReason);
                                        serializationStart = (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__.getTime)();
                                        thePayload = null;
                                    }
                                }
                                else {
                                    droppedBatches.push(theBatch);
                                }
                            }
                        }
                        // Make sure to flush any remaining payload
                        if (thePayload) {
                            _doPayloadSend(thePayload, serializationStart, (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__.getTime)(), sendReason);
                        }
                        if (theBatches.length > 0) {
                            // Add any unsent batches back to the head of the queue
                            _batchQueue = theBatches.concat(_batchQueue);
                        }
                        // Now send notification about any dropped events
                        _sendBatchesNotification(droppedBatches, 8004 /* EventBatchNotificationReason.KillSwitch */, sendType);
                    }, function () { return ({ batches: _createDebugBatches(orgBatches_1), retryCount: retryCount, isTeardown: isTeardown, isSynchronous: isSynchronous_1, sendReason: sendReason, useSendBeacon: _isBeaconPayload(sendType), sendType: sendType }); }, !isSynchronous_1);
                }
                catch (ex) {
                    (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_7__._throwInternal)(_logger, 2 /* eLoggingSeverity.WARNING */, 48 /* _eInternalMessageId.CannotSerializeObject */, "Unexpected Exception sending batch: " + (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_5__.dumpObj)(ex));
                }
            }
            function _buildRequestDetails(thePayload, useHeaders) {
                var requestDetails = {
                    url: _urlString,
                    hdrs: {},
                    useHdrs: false // Assume no headers
                };
                if (!useHeaders) {
                    // Attempt to map headers to a query string if possible
                    (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_1__.objForEachKey)(_headers, function (name, value) {
                        if (_collectorHeaderToQs[name]) {
                            _addRequestDetails(requestDetails, _collectorHeaderToQs[name], value, false);
                        }
                        else {
                            // No mapping, so just include in the headers anyway (may not get sent if using sendBeacon())
                            requestDetails.hdrs[name] = value;
                            requestDetails.useHdrs = true;
                        }
                    });
                }
                else {
                    // Copy the pre-defined headers into the payload headers
                    requestDetails.hdrs = (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__.extend)(requestDetails.hdrs, _headers);
                    requestDetails.useHdrs = ((0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_1__.objKeys)(requestDetails.hdrs).length > 0);
                }
                _addRequestDetails(requestDetails, _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_CLIENT_ID, "NO_AUTH", useHeaders);
                _addRequestDetails(requestDetails, _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_CLIENT_VERSION, _microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__.FullVersionString, useHeaders);
                var apiQsKeys = _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_EMPTY;
                (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_1__.arrForEach)(thePayload.apiKeys, function (apiKey) {
                    if (apiQsKeys.length > 0) {
                        apiQsKeys += ",";
                    }
                    apiQsKeys += apiKey;
                });
                _addRequestDetails(requestDetails, _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_API_KEY, apiQsKeys, useHeaders);
                _addRequestDetails(requestDetails, _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_UPLOAD_TIME, (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_1__.dateNow)().toString(), useHeaders);
                var msfpc = _getMsfpc(thePayload);
                if ((0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__.isValueAssigned)(msfpc)) {
                    requestDetails.url += "&ext.intweb.msfpc=" + msfpc;
                }
                if (_clockSkewManager.shouldAddClockSkewHeaders()) {
                    _addRequestDetails(requestDetails, _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_TIME_DELTA_TO_APPLY, _clockSkewManager.getClockSkewHeaderValue(), useHeaders);
                }
                if (_core.getWParam) {
                    var wParam = _core.getWParam();
                    if (wParam >= 0) {
                        requestDetails.url += "&w=" + wParam;
                    }
                }
                for (var i = 0; i < _queryStringParameters.length; i++) {
                    requestDetails.url += "&" + _queryStringParameters[i].name + "=" + _queryStringParameters[i].value;
                }
                return requestDetails;
            }
            function _setTimingValue(timings, name, value) {
                timings[name] = timings[name] || {};
                timings[name][_postManager.identifier] = value;
            }
            function _doPayloadSend(thePayload, serializationStart, serializationCompleted, sendReason) {
                if (thePayload && thePayload.payloadBlob && thePayload.payloadBlob.length > 0) {
                    var useSendHook_1 = !!_self.sendHook;
                    var sendInterface_1 = _sendInterfaces[thePayload.sendType];
                    // Send all data using a beacon style transport if closing mode is on or channel was teared down
                    if (!_isBeaconPayload(thePayload.sendType) && thePayload.isBeacon && thePayload.sendReason === 2 /* SendRequestReason.Unload */) {
                        sendInterface_1 = _sendInterfaces[2 /* EventSendType.SendBeacon */] || _sendInterfaces[3 /* EventSendType.SyncFetch */] || sendInterface_1;
                    }
                    var useHeaders_1 = _useHeaders;
                    // Disable header usage if we know we are using sendBeacon as additional headers are not supported
                    if (thePayload.isBeacon || sendInterface_1._transport === 3 /* TransportType.Beacon */) {
                        useHeaders_1 = false;
                    }
                    var requestDetails_1 = _buildRequestDetails(thePayload, useHeaders_1);
                    useHeaders_1 = useHeaders_1 || requestDetails_1.useHdrs;
                    var sendEventStart_1 = (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__.getTime)();
                    (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_9__.doPerf)(_core, function () { return "HttpManager:_doPayloadSend"; }, function () {
                        // Increment the send attempt count and add timings after packaging (So it's not serialized in the 1st attempt)
                        for (var batchLp = 0; batchLp < thePayload.batches.length; batchLp++) {
                            var theBatch = thePayload.batches[batchLp];
                            var theEvents = theBatch.events();
                            for (var evtLp = 0; evtLp < theEvents.length; evtLp++) {
                                var telemetryItem = theEvents[evtLp];
                                if (_enableEventTimings) {
                                    var timings = telemetryItem.timings = telemetryItem.timings || {};
                                    _setTimingValue(timings, "sendEventStart", sendEventStart_1);
                                    _setTimingValue(timings, "serializationStart", serializationStart);
                                    _setTimingValue(timings, "serializationCompleted", serializationCompleted);
                                }
                                telemetryItem[strSendAttempt] > 0 ? telemetryItem[strSendAttempt]++ : telemetryItem[strSendAttempt] = 1;
                            }
                        }
                        // Note: always sending this notification in a synchronous manner.
                        _sendBatchesNotification(thePayload.batches, (1000 /* EventBatchNotificationReason.SendingUndefined */ + (sendReason || 0 /* SendRequestReason.Undefined */)), thePayload.sendType, true);
                        // Disabling the use of const because of Issue: 
                        // - Task 9227844: [1DS] Some environments and packagers automatically "freeze" objects which are defined as const which causes any mutations to throw
                        // eslint-disable-next-line prefer-const
                        var orgPayloadData = {
                            data: thePayload.payloadBlob,
                            urlString: requestDetails_1.url,
                            headers: requestDetails_1.hdrs,
                            _thePayload: thePayload,
                            _sendReason: sendReason,
                            timeout: _xhrTimeout,
                            disableXhrSync: _disableXhrSync,
                            disableFetchKeepAlive: _disableFetchKeepAlive
                        };
                        // Only automatically add the following headers if already sending headers and we are not attempting to avoid an options call
                        if (useHeaders_1) {
                            if (!_hasHeader(orgPayloadData.headers, _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_CACHE_CONTROL)) {
                                orgPayloadData.headers[_InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_CACHE_CONTROL] = _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CACHE_CONTROL;
                            }
                            if (!_hasHeader(orgPayloadData.headers, _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_CONTENT_TYPE_HEADER)) {
                                orgPayloadData.headers[_InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_CONTENT_TYPE_HEADER] = _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CONTENT_TYPE;
                            }
                        }
                        var sender = null;
                        if (sendInterface_1) {
                            // Send sync requests if the request is immediate or we are tearing down telemetry.
                            sender = function (payload) {
                                // Notify the clock skew manager that we are sending the first request (Potentially blocking all further requests)
                                _clockSkewManager.firstRequestSent();
                                var onComplete = function (status, headers) {
                                    _retryRequestIfNeeded(status, headers, thePayload, sendReason);
                                };
                                var isSync = thePayload.isTeardown || thePayload.isSync;
                                try {
                                    sendInterface_1.sendPOST(payload, onComplete, isSync);
                                    if (_self.sendListener) {
                                        // Send the original payload to the listener
                                        _self.sendListener(orgPayloadData, payload, isSync, thePayload.isBeacon);
                                    }
                                }
                                catch (ex) {
                                    (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_7__._warnToConsole)(_logger, "Unexpected exception sending payload. Ex:" + (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_5__.dumpObj)(ex));
                                    _doOnComplete(onComplete, 0, {});
                                }
                            };
                        }
                        (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_9__.doPerf)(_core, function () { return "HttpManager:_doPayloadSend.sender"; }, function () {
                            if (sender) {
                                if (thePayload.sendType === 0 /* EventSendType.Batched */) {
                                    _outstandingRequests++;
                                }
                                // Only call the hook if it's defined and we are not using sendBeacon as additional headers are not supported
                                if (useSendHook_1 && !thePayload.isBeacon && sendInterface_1._transport !== 3 /* TransportType.Beacon */) {
                                    // Create a new IPayloadData that is sent into the hook method, so that the hook method
                                    // can't change the object references to the orgPayloadData (it can still change the content -- mainly the headers)
                                    // Disabling the use of const because of Issue: 
                                    // - Task 9227844: [1DS] Some environments and packagers automatically "freeze" objects which are defined as const which causes any mutations to throw
                                    // eslint-disable-next-line prefer-const
                                    var hookData_1 = {
                                        data: orgPayloadData.data,
                                        urlString: orgPayloadData.urlString,
                                        headers: (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__.extend)({}, orgPayloadData.headers),
                                        timeout: orgPayloadData.timeout,
                                        disableXhrSync: orgPayloadData.disableXhrSync,
                                        disableFetchKeepAlive: orgPayloadData.disableFetchKeepAlive
                                    };
                                    var senderCalled_1 = false;
                                    (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_9__.doPerf)(_core, function () { return "HttpManager:_doPayloadSend.sendHook"; }, function () {
                                        try {
                                            _self.sendHook(hookData_1, function (payload) {
                                                senderCalled_1 = true;
                                                // Add back the internal properties
                                                if (!_customHttpInterface && !payload._thePayload) {
                                                    payload._thePayload = payload._thePayload || orgPayloadData._thePayload;
                                                    payload._sendReason = payload._sendReason || orgPayloadData._sendReason;
                                                }
                                                sender(payload);
                                            }, thePayload.isSync || thePayload.isTeardown);
                                        }
                                        catch (ex) {
                                            if (!senderCalled_1) {
                                                // The hook never called the sender -- assume that it never will
                                                sender(orgPayloadData);
                                            }
                                        }
                                    });
                                }
                                else {
                                    sender(orgPayloadData);
                                }
                            }
                        });
                    }, function () { return ({ thePayload: thePayload, serializationStart: serializationStart, serializationCompleted: serializationCompleted, sendReason: sendReason }); }, thePayload.isSync);
                }
                if (thePayload.sizeExceed && thePayload.sizeExceed.length > 0) {
                    // Ensure that we send any discard events for oversize events even when there was no payload to send
                    _sendBatchesNotification(thePayload.sizeExceed, 8003 /* EventBatchNotificationReason.SizeLimitExceeded */, thePayload.sendType);
                }
                if (thePayload.failedEvts && thePayload.failedEvts.length > 0) {
                    // Ensure that we send any discard events for events that could not be serialized even when there was no payload to send
                    _sendBatchesNotification(thePayload.failedEvts, 8002 /* EventBatchNotificationReason.InvalidEvent */, thePayload.sendType);
                }
            }
            function _addEventCompletedTimings(theEvents, sendEventCompleted) {
                if (_enableEventTimings) {
                    (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_1__.arrForEach)(theEvents, function (theEvent) {
                        var timings = theEvent.timings = theEvent.timings || {};
                        _setTimingValue(timings, "sendEventCompleted", sendEventCompleted);
                    });
                }
            }
            function _retryRequestIfNeeded(status, headers, thePayload, sendReason) {
                var reason = 9000 /* EventBatchNotificationReason.ResponseFailure */;
                var droppedBatches = null;
                var isRetrying = false;
                var backOffTrans = false;
                try {
                    var shouldRetry = true;
                    if (typeof status !== _microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_10__.strShimUndefined) {
                        if (headers) {
                            _clockSkewManager.setClockSkew(headers[_InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_TIME_DELTA_HEADER]);
                            var killDuration = headers[_InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_KILL_DURATION_HEADER] || headers["kill-duration-seconds"];
                            (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_1__.arrForEach)(_killSwitch.setKillSwitchTenants(headers[_InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_KILL_TOKENS_HEADER], killDuration), function (killToken) {
                                (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_1__.arrForEach)(thePayload.batches, function (theBatch) {
                                    if (theBatch.iKey() === killToken) {
                                        // Make sure we have initialized the array
                                        droppedBatches = droppedBatches || [];
                                        // Create a copy of the batch with all of the events (and more importantly the action functions)
                                        var removedEvents = theBatch.split(0);
                                        // And then remove the events for the payload batch and reduce the actual number of processed
                                        thePayload.numEvents -= removedEvents.count();
                                        droppedBatches.push(removedEvents);
                                    }
                                });
                            });
                        }
                        // Disabling triple-equals rule to avoid httpOverrides from failing because they are returning a string value
                        // tslint:disable-next-line:triple-equals
                        if (status == 200 || status == 204) {
                            // Response was successfully sent
                            reason = 200 /* EventBatchNotificationReason.Complete */;
                            return;
                        }
                        if (!(0,_RetryPolicy__WEBPACK_IMPORTED_MODULE_11__.retryPolicyShouldRetryForStatus)(status) || thePayload.numEvents <= 0) {
                            // Only retry for specific response codes and if there is still events after kill switch processing
                            shouldRetry = false;
                        }
                        // Derive the notification response from the HttpStatus Code
                        reason = 9000 /* EventBatchNotificationReason.ResponseFailure */ + (status % 1000);
                    }
                    if (shouldRetry) {
                        // The events should be retried -- so change notification to requeue them
                        reason = 100 /* EventBatchNotificationReason.RequeueEvents */;
                        var retryCount_1 = thePayload.retryCnt;
                        if (thePayload.sendType === 0 /* EventSendType.Batched */) {
                            // attempt to resend the entire batch
                            if (retryCount_1 < maxRequestRetriesBeforeBackoff) {
                                isRetrying = true;
                                _doAction(function () {
                                    // try to resend the same batches
                                    if (thePayload.sendType === 0 /* EventSendType.Batched */) {
                                        // Reduce the outstanding request count (if this was an async request) as we didn't reduce the count
                                        // previously and we are about to reschedule our retry attempt and we want an attempt to send
                                        // to occur, it's also required to ensure that a follow up handleRequestFinished() call occurs
                                        _outstandingRequests--;
                                    }
                                    _sendBatches(thePayload.batches, retryCount_1 + 1, thePayload.isTeardown, _isUnloading ? 2 /* EventSendType.SendBeacon */ : thePayload.sendType, 5 /* SendRequestReason.Retry */);
                                }, _isUnloading, (0,_RetryPolicy__WEBPACK_IMPORTED_MODULE_11__.retryPolicyGetMillisToBackoffForRetry)(retryCount_1));
                            }
                            else {
                                backOffTrans = true;
                                if (_isUnloading) {
                                    // we are unloading so don't try and requeue the events otherwise let the events get requeued and resent during the backoff sending
                                    // This will also cause the events to be purged based on the priority (if necessary)
                                    reason = 8001 /* EventBatchNotificationReason.NonRetryableStatus */;
                                }
                            }
                        }
                    }
                }
                finally {
                    if (!isRetrying) {
                        // Make sure the clockSkewManager doesn't blocking further sending of requests once we have a proper response
                        // This won't override any previously sent clock Skew value
                        _clockSkewManager.setClockSkew();
                        _handleRequestFinished(thePayload, reason, sendReason, backOffTrans);
                    }
                    _sendBatchesNotification(droppedBatches, 8004 /* EventBatchNotificationReason.KillSwitch */, thePayload.sendType);
                }
            }
            function _handleRequestFinished(thePayload, batchReason, sendReason, backOffTrans) {
                try {
                    if (backOffTrans) {
                        // Slow down the transmission requests
                        _postManager._backOffTransmission();
                    }
                    if (batchReason === 200 /* EventBatchNotificationReason.Complete */) {
                        if (!backOffTrans && !thePayload.isSync) {
                            // We have a successful async response, so the lets open the floodgates
                            // The reason for checking isSync is to avoid unblocking if beacon send occurred as it
                            // doesn't wait for a response.
                            _postManager._clearBackOff();
                        }
                        _addCompleteTimings(thePayload.batches);
                    }
                    // Send the notifications synchronously
                    _sendBatchesNotification(thePayload.batches, batchReason, thePayload.sendType, true);
                }
                finally {
                    if (thePayload.sendType === 0 /* EventSendType.Batched */) {
                        // we always need to decrement this value otherwise the httpmanager locks up and won't send any more events
                        _outstandingRequests--;
                        // Don't try to send additional queued events if this is a retry operation as the retried
                        // response will eventually call _handleRequestFinished for the retried event
                        if (sendReason !== 5 /* SendRequestReason.Retry */) {
                            // Try and send any other queued batched events
                            _self.sendQueuedRequests(thePayload.sendType, sendReason);
                        }
                    }
                }
            }
            function _addCompleteTimings(theBatches) {
                if (_enableEventTimings) {
                    var sendEventCompleted_1 = (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__.getTime)();
                    (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_1__.arrForEach)(theBatches, function (theBatch) {
                        if (theBatch && theBatch.count() > 0) {
                            _addEventCompletedTimings(theBatch.events(), sendEventCompleted_1);
                        }
                    });
                }
            }
            function _doAction(cb, isSync, interval) {
                if (isSync) {
                    cb();
                }
                else {
                    timeoutOverride.set(cb, interval);
                }
            }
            /**
            * Converts the XHR getAllResponseHeaders to a map containing the header key and value.
            */
            // tslint:disable-next-line: align
            function _convertAllHeadersToMap(headersString) {
                var headers = {};
                if ((0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_1__.isString)(headersString)) {
                    var headersArray = (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_1__.strTrim)(headersString).split(/[\r\n]+/);
                    (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_1__.arrForEach)(headersArray, function (headerEntry) {
                        if (headerEntry) {
                            var idx = headerEntry.indexOf(": ");
                            if (idx !== -1) {
                                // The new spec has the headers returning all as lowercase -- but not all browsers do this yet
                                var header = (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_1__.strTrim)(headerEntry.substring(0, idx)).toLowerCase();
                                var value = (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_1__.strTrim)(headerEntry.substring(idx + 1));
                                headers[header] = value;
                            }
                            else {
                                headers[(0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_1__.strTrim)(headerEntry)] = 1;
                            }
                        }
                    });
                }
                return headers;
            }
            function _getMsfpc(thePayload) {
                for (var lp = 0; lp < thePayload.batches.length; lp++) {
                    var msfpc = thePayload.batches[lp].Msfpc();
                    if (msfpc) {
                        return encodeURIComponent(msfpc);
                    }
                }
                return _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_EMPTY;
            }
            function _handleCollectorResponse(responseText) {
                var responseHandlers = _self._responseHandlers;
                try {
                    for (var i = 0; i < responseHandlers.length; i++) {
                        try {
                            responseHandlers[i](responseText);
                        }
                        catch (e) {
                            (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_7__._throwInternal)(_logger, 1 /* eLoggingSeverity.CRITICAL */, 519 /* _eExtendedInternalMessageId.PostResponseHandler */, "Response handler failed: " + e);
                        }
                    }
                    if (responseText) {
                        var response = JSON.parse(responseText);
                        if ((0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__.isValueAssigned)(response.webResult) && (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__.isValueAssigned)(response.webResult[_InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_MSFPC])) {
                            // Set cookie
                            _cookieMgr.set("MSFPC", response.webResult[_InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_MSFPC], 365 * 86400);
                        }
                    }
                }
                catch (ex) {
                    // Doing nothing
                }
            }
            function _sendBatchesNotification(theBatches, batchReason, sendType, sendSync) {
                if (theBatches && theBatches.length > 0 && actions) {
                    var theAction_1 = actions[_getNotificationAction(batchReason)];
                    if (theAction_1) {
                        var isSyncRequest_1 = sendType !== 0 /* EventSendType.Batched */;
                        (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_9__.doPerf)(_core, function () { return "HttpManager:_sendBatchesNotification"; }, function () {
                            _doAction(function () {
                                try {
                                    theAction_1.call(actions, theBatches, batchReason, isSyncRequest_1, sendType);
                                }
                                catch (e) {
                                    (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_7__._throwInternal)(_logger, 1 /* eLoggingSeverity.CRITICAL */, 74 /* _eInternalMessageId.NotificationException */, "send request notification failed: " + e);
                                }
                            }, sendSync || isSyncRequest_1, 0);
                        }, function () { return ({ batches: _createDebugBatches(theBatches), reason: batchReason, isSync: isSyncRequest_1, sendSync: sendSync, sendType: sendType }); }, !isSyncRequest_1);
                    }
                }
            }
            function _getNotificationAction(reason) {
                var action = _eventActionMap[reason];
                if (!(0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__.isValueAssigned)(action)) {
                    action = _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_OTHER;
                    if (reason >= 9000 /* EventBatchNotificationReason.ResponseFailure */ && reason <= 9999 /* EventBatchNotificationReason.ResponseFailureMax */) {
                        action = _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_RESPONSE_FAIL;
                    }
                    else if (reason >= 8000 /* EventBatchNotificationReason.EventsDropped */ && reason <= 8999 /* EventBatchNotificationReason.EventsDroppedMax */) {
                        action = _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_DROPPED;
                    }
                    else if (reason >= 1000 /* EventBatchNotificationReason.SendingUndefined */ && reason <= 1999 /* EventBatchNotificationReason.SendingEventMax */) {
                        action = _InternalConstants__WEBPACK_IMPORTED_MODULE_0__.STR_SENDING;
                    }
                }
                return action;
            }
        });
    }
// Removed Stub for HttpManager.prototype.initialize.
// Removed Stub for HttpManager.prototype.addQueryStringParameter.
// Removed Stub for HttpManager.prototype.addHeader.
// Removed Stub for HttpManager.prototype.addBatch.
// Removed Stub for HttpManager.prototype.canSendRequest.
// Removed Stub for HttpManager.prototype.sendQueuedRequests.
// Removed Stub for HttpManager.prototype.isCompletelyIdle.
// Removed Stub for HttpManager.prototype.setUnloading.
// Removed Stub for HttpManager.prototype.teardown.
// Removed Stub for HttpManager.prototype.pause.
// Removed Stub for HttpManager.prototype.resume.
// Removed Stub for HttpManager.prototype.sendSynchronousBatch.
    // This is a workaround for an IE8 bug when using dynamicProto() with classes that don't have any
    // non-dynamic functions or static properties/functions when using uglify-js to minify the resulting code.
    // this will be removed when ES3 support is dropped.
    HttpManager.__ieDyn=1;

    return HttpManager;
}());

//# sourceMappingURL=HttpManager.js.map

/***/ }),

/***/ 554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BE_PROFILE": () => (/* reexport safe */ _DataModels__WEBPACK_IMPORTED_MODULE_1__.BE_PROFILE),
/* harmony export */   "NRT_PROFILE": () => (/* reexport safe */ _DataModels__WEBPACK_IMPORTED_MODULE_1__.NRT_PROFILE),
/* harmony export */   "PostChannel": () => (/* reexport safe */ _PostChannel__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "RT_PROFILE": () => (/* reexport safe */ _DataModels__WEBPACK_IMPORTED_MODULE_1__.RT_PROFILE)
/* harmony export */ });
/* harmony import */ var _PostChannel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(555);
/* harmony import */ var _DataModels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(556);
/*
 * 1DS JS SDK POST plugin, 3.2.15
 * Copyright (c) Microsoft and contributors. All rights reserved.
 * (Microsoft Internal Only)
 */
/**
* @name Index.ts
* @author Abhilash Panwar (abpanwar)
* @copyright Microsoft 2018
* File to export public classes.
*/



//# sourceMappingURL=Index.js.map

/***/ }),

/***/ 558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_CACHE_CONTROL": () => (/* binding */ DEFAULT_CACHE_CONTROL),
/* harmony export */   "DEFAULT_CONTENT_TYPE": () => (/* binding */ DEFAULT_CONTENT_TYPE),
/* harmony export */   "STR_API_KEY": () => (/* binding */ STR_API_KEY),
/* harmony export */   "STR_AUTH_XTOKEN": () => (/* binding */ STR_AUTH_XTOKEN),
/* harmony export */   "STR_CACHE_CONTROL": () => (/* binding */ STR_CACHE_CONTROL),
/* harmony export */   "STR_CLIENT_ID": () => (/* binding */ STR_CLIENT_ID),
/* harmony export */   "STR_CLIENT_VERSION": () => (/* binding */ STR_CLIENT_VERSION),
/* harmony export */   "STR_CONTENT_TYPE_HEADER": () => (/* binding */ STR_CONTENT_TYPE_HEADER),
/* harmony export */   "STR_DISABLED_PROPERTY_NAME": () => (/* binding */ STR_DISABLED_PROPERTY_NAME),
/* harmony export */   "STR_DROPPED": () => (/* binding */ STR_DROPPED),
/* harmony export */   "STR_EMPTY": () => (/* binding */ STR_EMPTY),
/* harmony export */   "STR_KILL_DURATION_HEADER": () => (/* binding */ STR_KILL_DURATION_HEADER),
/* harmony export */   "STR_KILL_DURATION_SECONDS_HEADER": () => (/* binding */ STR_KILL_DURATION_SECONDS_HEADER),
/* harmony export */   "STR_KILL_TOKENS_HEADER": () => (/* binding */ STR_KILL_TOKENS_HEADER),
/* harmony export */   "STR_MSA_DEVICE_TICKET": () => (/* binding */ STR_MSA_DEVICE_TICKET),
/* harmony export */   "STR_MSFPC": () => (/* binding */ STR_MSFPC),
/* harmony export */   "STR_NO_RESPONSE_BODY": () => (/* binding */ STR_NO_RESPONSE_BODY),
/* harmony export */   "STR_OTHER": () => (/* binding */ STR_OTHER),
/* harmony export */   "STR_POST_METHOD": () => (/* binding */ STR_POST_METHOD),
/* harmony export */   "STR_REQUEUE": () => (/* binding */ STR_REQUEUE),
/* harmony export */   "STR_RESPONSE_FAIL": () => (/* binding */ STR_RESPONSE_FAIL),
/* harmony export */   "STR_SDK_VERSION": () => (/* binding */ STR_SDK_VERSION),
/* harmony export */   "STR_SENDING": () => (/* binding */ STR_SENDING),
/* harmony export */   "STR_TIME_DELTA_HEADER": () => (/* binding */ STR_TIME_DELTA_HEADER),
/* harmony export */   "STR_TIME_DELTA_TO_APPLY": () => (/* binding */ STR_TIME_DELTA_TO_APPLY),
/* harmony export */   "STR_TRACE": () => (/* binding */ STR_TRACE),
/* harmony export */   "STR_UPLOAD_TIME": () => (/* binding */ STR_UPLOAD_TIME),
/* harmony export */   "STR_USER": () => (/* binding */ STR_USER)
/* harmony export */ });
/*
 * 1DS JS SDK POST plugin, 3.2.15
 * Copyright (c) Microsoft and contributors. All rights reserved.
 * (Microsoft Internal Only)
 */

// Licensed under the MIT License.
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Note: DON'T Export these const from the package as we are still targeting ES3 this will export a mutable variables that someone could change!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Generally you should only put values that are used more than 2 times and then only if not already exposed as a constant (such as SdkCoreNames)
// as when using "short" named values from here they will be will be minified smaller than the SdkCoreNames[eSdkCoreNames.xxxx] value.
var STR_EMPTY = "";
var STR_POST_METHOD = "POST";
var STR_DISABLED_PROPERTY_NAME = "Microsoft_ApplicationInsights_BypassAjaxInstrumentation";
var STR_DROPPED = "drop";
var STR_SENDING = "send";
var STR_REQUEUE = "requeue";
var STR_RESPONSE_FAIL = "rspFail";
var STR_OTHER = "oth";
var DEFAULT_CACHE_CONTROL = "no-cache, no-store";
var DEFAULT_CONTENT_TYPE = "application/x-json-stream";
var STR_CACHE_CONTROL = "cache-control";
var STR_CONTENT_TYPE_HEADER = "content-type";
var STR_KILL_TOKENS_HEADER = "kill-tokens";
var STR_KILL_DURATION_HEADER = "kill-duration";
var STR_KILL_DURATION_SECONDS_HEADER = "kill-duration-seconds";
var STR_TIME_DELTA_HEADER = "time-delta-millis";
var STR_CLIENT_VERSION = "client-version";
var STR_CLIENT_ID = "client-id";
var STR_TIME_DELTA_TO_APPLY = "time-delta-to-apply-millis";
var STR_UPLOAD_TIME = "upload-time";
var STR_API_KEY = "apikey";
var STR_MSA_DEVICE_TICKET = "AuthMsaDeviceTicket";
var STR_AUTH_XTOKEN = "AuthXToken";
var STR_SDK_VERSION = "sdk-version";
var STR_NO_RESPONSE_BODY = "NoResponseBody";
var STR_MSFPC = "msfpc";
var STR_TRACE = "trace";
var STR_USER = "user";
//# sourceMappingURL=InternalConstants.js.map

/***/ }),

/***/ 561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _microsoft_dynamicproto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(526);
/* harmony import */ var _microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(518);
/*
 * 1DS JS SDK POST plugin, 3.2.15
 * Copyright (c) Microsoft and contributors. All rights reserved.
 * (Microsoft Internal Only)
 */
/**
* KillSwitch.ts
* @author Abhilash Panwar (abpanwar)
* @copyright Microsoft 2018
*/


var SecToMsMultiplier = 1000;
/**
* Class to stop certain tenants sending events.
*/
var KillSwitch = /** @class */ (function () {
    function KillSwitch() {
        var _killedTokenDictionary = {};
        function _normalizeTenants(values) {
            var result = [];
            if (values) {
                (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_0__.arrForEach)(values, function (value) {
                    result.push((0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_0__.strTrim)(value));
                });
            }
            return result;
        }
        (0,_microsoft_dynamicproto_js__WEBPACK_IMPORTED_MODULE_1__["default"])(KillSwitch, this, function (_self) {
            _self.setKillSwitchTenants = function (killTokens, killDuration) {
                if (killTokens && killDuration) {
                    try {
                        var killedTokens = _normalizeTenants(killTokens.split(","));
                        if (killDuration === "this-request-only") {
                            return killedTokens;
                        }
                        var durationMs = parseInt(killDuration, 10) * SecToMsMultiplier;
                        for (var i = 0; i < killedTokens.length; ++i) {
                            _killedTokenDictionary[killedTokens[i]] = (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_0__.dateNow)() + durationMs;
                        }
                    }
                    catch (ex) {
                        return [];
                    }
                }
                return [];
            };
            _self.isTenantKilled = function (tenantToken) {
                var killDictionary = _killedTokenDictionary;
                var name = (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_0__.strTrim)(tenantToken);
                if (killDictionary[name] !== undefined && killDictionary[name] > (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_0__.dateNow)()) {
                    return true;
                }
                delete killDictionary[name];
                return false;
            };
        });
    }
// Removed Stub for KillSwitch.prototype.setKillSwitchTenants.
// Removed Stub for KillSwitch.prototype.isTenantKilled.
    // This is a workaround for an IE8 bug when using dynamicProto() with classes that don't have any
    // non-dynamic functions or static properties/functions when using uglify-js to minify the resulting code.
    // this will be removed when ES3 support is dropped.
    KillSwitch.__ieDyn=1;

    return KillSwitch;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KillSwitch);
//# sourceMappingURL=KillSwitch.js.map

/***/ }),

/***/ 555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(523);
/* harmony import */ var _microsoft_dynamicproto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(526);
/* harmony import */ var _microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(530);
/* harmony import */ var _microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(536);
/* harmony import */ var _microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(537);
/* harmony import */ var _microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(532);
/* harmony import */ var _microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(518);
/* harmony import */ var _microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(528);
/* harmony import */ var _microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(553);
/* harmony import */ var _microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(527);
/* harmony import */ var _microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(545);
/* harmony import */ var _DataModels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(556);
/* harmony import */ var _EventBatch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(559);
/* harmony import */ var _HttpManager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(560);
/* harmony import */ var _InternalConstants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(558);
/* harmony import */ var _RetryPolicy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(564);
/* harmony import */ var _TimeoutOverrideWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(557);
/*
 * 1DS JS SDK POST plugin, 3.2.15
 * Copyright (c) Microsoft and contributors. All rights reserved.
 * (Microsoft Internal Only)
 */

/**
* PostManager.ts
* @author Abhilash Panwar (abpanwar); Hector Hernandez (hectorh); Nev Wylie (newylie)
* @copyright Microsoft 2018-2020
*/








var FlushCheckTimer = 0.250; // This needs to be in seconds, so this is 250ms
var MaxNumberEventPerBatch = 500;
var EventsDroppedAtOneTime = 20;
var MaxSendAttempts = 6;
var MaxSyncUnloadSendAttempts = 2; // Assuming 2 based on beforeunload and unload
var MaxBackoffCount = 4;
var MaxConnections = 2;
var MaxRequestRetriesBeforeBackoff = 1;
var strEventsDiscarded = "eventsDiscarded";
var strOverrideInstrumentationKey = "overrideInstrumentationKey";
var strMaxEventRetryAttempts = "maxEventRetryAttempts";
var strMaxUnloadEventRetryAttempts = "maxUnloadEventRetryAttempts";
var strAddUnloadCb = "addUnloadCb";
/**
 * Class that manages adding events to inbound queues and batching of events
 * into requests.
 */
var PostChannel = /** @class */ (function (_super) {
    (0,_microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.__extendsFn)(PostChannel, _super);
    function PostChannel() {
        var _this = _super.call(this) || this;
        _this.identifier = "PostChannel";
        _this.priority = 1011;
        _this.version = '3.2.15';
        var _config;
        var _isTeardownCalled = false;
        var _flushCallbackQueue = [];
        var _flushCallbackTimerId = null;
        var _paused = false;
        var _immediateQueueSize = 0;
        var _immediateQueueSizeLimit = 500;
        var _queueSize = 0;
        var _queueSizeLimit = 10000;
        var _profiles = {};
        var _currentProfile = _DataModels__WEBPACK_IMPORTED_MODULE_1__.RT_PROFILE;
        var _scheduledTimerId = null;
        var _immediateTimerId = null;
        var _currentBackoffCount = 0;
        var _timerCount = 0;
        var _xhrOverride;
        var _httpManager;
        var _batchQueues = {};
        var _autoFlushEventsLimit;
        // either MaxBatchSize * (1+ Max Connections) or _queueLimit / 6 (where 3 latency Queues [normal, realtime, cost deferred] * 2 [allow half full -- allow for retry])
        var _autoFlushBatchLimit;
        var _delayedBatchSendLatency = -1;
        var _delayedBatchReason;
        var _optimizeObject = true;
        var _isPageUnloadTriggered = false;
        var _maxEventSendAttempts = MaxSendAttempts;
        var _maxUnloadEventSendAttempts = MaxSyncUnloadSendAttempts;
        var _evtNamespace;
        var _timeoutWrapper;
        (0,_microsoft_dynamicproto_js__WEBPACK_IMPORTED_MODULE_2__["default"])(PostChannel, _this, function (_self, _base) {
            _initDefaults();
            // Special internal method to allow the DebugPlugin to hook embedded objects
            _self["_getDbgPlgTargets"] = function () {
                return [_httpManager];
            };
            _self.initialize = function (coreConfig, core, extensions) {
                (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_3__.doPerf)(core, function () { return "PostChannel:initialize"; }, function () {
                    var extendedCore = core;
                    _base.initialize(coreConfig, core, extensions);
                    try {
                        var hasAddUnloadCb = !!core[strAddUnloadCb];
                        _evtNamespace = (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_4__.mergeEvtNamespace)((0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_5__.createUniqueNamespace)(_self.identifier), core.evtNamespace && core.evtNamespace());
                        var ctx = _self._getTelCtx();
                        coreConfig.extensionConfig[_self.identifier] = coreConfig.extensionConfig[_self.identifier] || {};
                        _config = ctx.getExtCfg(_self.identifier);
                        _timeoutWrapper = (0,_TimeoutOverrideWrapper__WEBPACK_IMPORTED_MODULE_6__.createTimeoutWrapper)(_config.setTimeoutOverride, _config.clearTimeoutOverride);
                        // Only try and use the optimizeObject() if this appears to be a chromium based browser and it has not been explicitly disabled
                        _optimizeObject = !_config.disableOptimizeObj && (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_7__.isChromium)();
                        _hookWParam(extendedCore);
                        if (_config.eventsLimitInMem > 0) {
                            _queueSizeLimit = _config.eventsLimitInMem;
                        }
                        if (_config.immediateEventLimit > 0) {
                            _immediateQueueSizeLimit = _config.immediateEventLimit;
                        }
                        if (_config.autoFlushEventsLimit > 0) {
                            _autoFlushEventsLimit = _config.autoFlushEventsLimit;
                        }
                        if ((0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__.isNumber)(_config[strMaxEventRetryAttempts])) {
                            _maxEventSendAttempts = _config[strMaxEventRetryAttempts];
                        }
                        if ((0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__.isNumber)(_config[strMaxUnloadEventRetryAttempts])) {
                            _maxUnloadEventSendAttempts = _config[strMaxUnloadEventRetryAttempts];
                        }
                        _setAutoLimits();
                        if (_config.httpXHROverride && _config.httpXHROverride.sendPOST) {
                            _xhrOverride = _config.httpXHROverride;
                        }
                        if ((0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_7__.isValueAssigned)(coreConfig.anonCookieName)) {
                            _httpManager.addQueryStringParameter("anoncknm", coreConfig.anonCookieName);
                        }
                        _httpManager.sendHook = _config.payloadPreprocessor;
                        _httpManager.sendListener = _config.payloadListener;
                        // Override endpointUrl if provided in Post config
                        var endpointUrl = _config.overrideEndpointUrl ? _config.overrideEndpointUrl : coreConfig.endpointUrl;
                        _self._notificationManager = core.getNotifyMgr();
                        _httpManager.initialize(endpointUrl, _self.core, _self, _xhrOverride, _config);
                        var excludePageUnloadEvents = coreConfig.disablePageUnloadEvents || [];
                        // When running in Web browsers try to send all telemetry if page is unloaded
                        (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_4__.addPageUnloadEventListener)(_handleUnloadEvents, excludePageUnloadEvents, _evtNamespace);
                        (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_4__.addPageHideEventListener)(_handleUnloadEvents, excludePageUnloadEvents, _evtNamespace);
                        (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_4__.addPageShowEventListener)(_handleShowEvents, coreConfig.disablePageShowEvents, _evtNamespace);
                    }
                    catch (e) {
                        // resetting the initialized state because of failure
                        _self.setInitialized(false);
                        throw e;
                    }
                }, function () { return ({ coreConfig: coreConfig, core: core, extensions: extensions }); });
            };
            _self.processTelemetry = function (ev, itemCtx) {
                (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_7__.setProcessTelemetryTimings)(ev, _self.identifier);
                itemCtx = _self._getTelCtx(itemCtx);
                // Get the channel instance from the current request/instance
                var channelConfig = itemCtx.getExtCfg(_self.identifier);
                // DisableTelemetry was defined in the config provided during initialization
                var disableTelemetry = !!_config.disableTelemetry;
                if (channelConfig) {
                    // DisableTelemetry is defined in the config for this request/instance
                    disableTelemetry = disableTelemetry || !!channelConfig.disableTelemetry;
                }
                var event = ev;
                if (!disableTelemetry && !_isTeardownCalled) {
                    // Override iKey if provided in Post config if provided for during initialization
                    if (_config[strOverrideInstrumentationKey]) {
                        event.iKey = _config[strOverrideInstrumentationKey];
                    }
                    // Override iKey if provided in Post config if provided for this instance
                    if (channelConfig && channelConfig[strOverrideInstrumentationKey]) {
                        event.iKey = channelConfig[strOverrideInstrumentationKey];
                    }
                    _addEventToQueues(event, true);
                    if (_isPageUnloadTriggered) {
                        // Unload event has been received so we need to try and flush new events
                        _releaseAllQueues(2 /* EventSendType.SendBeacon */, 2 /* SendRequestReason.Unload */);
                    }
                    else {
                        _scheduleTimer();
                    }
                }
                _self.processNext(event, itemCtx);
            };
            _self._doTeardown = function (unloadCtx, unloadState) {
                _releaseAllQueues(2 /* EventSendType.SendBeacon */, 2 /* SendRequestReason.Unload */);
                _isTeardownCalled = true;
                _httpManager.teardown();
                (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_4__.removePageUnloadEventListener)(null, _evtNamespace);
                (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_4__.removePageHideEventListener)(null, _evtNamespace);
                (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_4__.removePageShowEventListener)(null, _evtNamespace);
                // Just register to remove all events associated with this namespace
                _initDefaults();
            };
            function _hookWParam(extendedCore) {
                var existingGetWParamMethod = extendedCore.getWParam;
                extendedCore.getWParam = function () {
                    var wparam = 0;
                    if (_config.ignoreMc1Ms0CookieProcessing) {
                        wparam = wparam | 2;
                    }
                    return wparam | existingGetWParamMethod();
                };
            }
            // Moving event handlers out from the initialize closure so that any local variables can be garbage collected
            function _handleUnloadEvents(evt) {
                var theEvt = evt || (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_9__.getWindow)().event; // IE 8 does not pass the event
                if (theEvt.type !== "beforeunload") {
                    // Only set the unload trigger if not beforeunload event as beforeunload can be cancelled while the other events can't
                    _isPageUnloadTriggered = true;
                    _httpManager.setUnloading(_isPageUnloadTriggered);
                }
                _releaseAllQueues(2 /* EventSendType.SendBeacon */, 2 /* SendRequestReason.Unload */);
            }
            function _handleShowEvents(evt) {
                // Handle the page becoming visible again
                _isPageUnloadTriggered = false;
                _httpManager.setUnloading(_isPageUnloadTriggered);
            }
            function _addEventToQueues(event, append) {
                // If send attempt field is undefined we should set it to 0.
                if (!event.sendAttempt) {
                    event.sendAttempt = 0;
                }
                // Add default latency
                if (!event.latency) {
                    event.latency = 1 /* EventLatencyValue.Normal */;
                }
                // Remove extra AI properties if present
                if (event.ext && event.ext[_InternalConstants__WEBPACK_IMPORTED_MODULE_10__.STR_TRACE]) {
                    delete (event.ext[_InternalConstants__WEBPACK_IMPORTED_MODULE_10__.STR_TRACE]);
                }
                if (event.ext && event.ext[_InternalConstants__WEBPACK_IMPORTED_MODULE_10__.STR_USER] && event.ext[_InternalConstants__WEBPACK_IMPORTED_MODULE_10__.STR_USER]["id"]) {
                    delete (event.ext[_InternalConstants__WEBPACK_IMPORTED_MODULE_10__.STR_USER]["id"]);
                }
                // v8 performance optimization for iterating over the keys
                if (_optimizeObject) {
                    _microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_7__.setProcessTelemetryTimings;
                    event.ext = (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__.optimizeObject)(event.ext);
                    if (event.baseData) {
                        event.baseData = (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__.optimizeObject)(event.baseData);
                    }
                    if (event.data) {
                        event.data = (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__.optimizeObject)(event.data);
                    }
                }
                if (event.sync) {
                    // If the transmission is backed off then do not send synchronous events.
                    // We will convert these events to Real time latency instead.
                    if (_currentBackoffCount || _paused) {
                        event.latency = 3 /* EventLatencyValue.RealTime */;
                        event.sync = false;
                    }
                    else {
                        // Log the event synchronously
                        if (_httpManager) {
                            // v8 performance optimization for iterating over the keys
                            if (_optimizeObject) {
                                event = (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__.optimizeObject)(event);
                            }
                            _httpManager.sendSynchronousBatch(_EventBatch__WEBPACK_IMPORTED_MODULE_11__.EventBatch.create(event.iKey, [event]), event.sync === true ? 1 /* EventSendType.Synchronous */ : event.sync, 3 /* SendRequestReason.SyncEvent */);
                            return;
                        }
                    }
                }
                var evtLatency = event.latency;
                var queueSize = _queueSize;
                var queueLimit = _queueSizeLimit;
                if (evtLatency === 4 /* EventLatencyValue.Immediate */) {
                    queueSize = _immediateQueueSize;
                    queueLimit = _immediateQueueSizeLimit;
                }
                var eventDropped = false;
                // Only add the event if the queue isn't full or it's a direct event (which don't add to the queue sizes)
                if (queueSize < queueLimit) {
                    eventDropped = !_addEventToProperQueue(event, append);
                }
                else {
                    var dropLatency = 1 /* EventLatencyValue.Normal */;
                    var dropNumber = EventsDroppedAtOneTime;
                    if (evtLatency === 4 /* EventLatencyValue.Immediate */) {
                        // Only drop other immediate events as they are not technically sharing the general queue
                        dropLatency = 4 /* EventLatencyValue.Immediate */;
                        dropNumber = 1;
                    }
                    // Drop old event from lower or equal latency
                    eventDropped = true;
                    if (_dropEventWithLatencyOrLess(event.iKey, event.latency, dropLatency, dropNumber)) {
                        eventDropped = !_addEventToProperQueue(event, append);
                    }
                }
                if (eventDropped) {
                    // Can't drop events from current queues because the all the slots are taken by queues that are being flushed.
                    _notifyEvents(strEventsDiscarded, [event], _microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_12__.EventsDiscardedReason.QueueFull);
                }
            }
            _self.setEventQueueLimits = function (eventLimit, autoFlushLimit) {
                _queueSizeLimit = eventLimit > 0 ? eventLimit : 10000;
                _autoFlushEventsLimit = autoFlushLimit > 0 ? autoFlushLimit : 0;
                _setAutoLimits();
                // We only do this check here as during normal event addition if the queue is > then events start getting dropped
                var doFlush = _queueSize > eventLimit;
                if (!doFlush && _autoFlushBatchLimit > 0) {
                    // Check the auto flush max batch size
                    for (var latency = 1 /* EventLatencyValue.Normal */; !doFlush && latency <= 3 /* EventLatencyValue.RealTime */; latency++) {
                        var batchQueue = _batchQueues[latency];
                        if (batchQueue && batchQueue.batches) {
                            (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__.arrForEach)(batchQueue.batches, function (theBatch) {
                                if (theBatch && theBatch.count() >= _autoFlushBatchLimit) {
                                    // If any 1 batch is > than the limit then trigger an auto flush
                                    doFlush = true;
                                }
                            });
                        }
                    }
                }
                _performAutoFlush(true, doFlush);
            };
            _self.pause = function () {
                _clearScheduledTimer();
                _paused = true;
                _httpManager.pause();
            };
            _self.resume = function () {
                _paused = false;
                _httpManager.resume();
                _scheduleTimer();
            };
            _self.addResponseHandler = function (responseHandler) {
                _httpManager._responseHandlers.push(responseHandler);
            };
            _self._loadTransmitProfiles = function (profiles) {
                _resetTransmitProfiles();
                (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__.objForEachKey)(profiles, function (profileName, profileValue) {
                    var profLen = profileValue.length;
                    if (profLen >= 2) {
                        var directValue = (profLen > 2 ? profileValue[2] : 0);
                        profileValue.splice(0, profLen - 2);
                        // Make sure if a higher latency is set to not send then don't send lower latency
                        if (profileValue[1] < 0) {
                            profileValue[0] = -1;
                        }
                        // Make sure each latency is multiple of the latency higher then it. If not a multiple
                        // we round up so that it becomes a multiple.
                        if (profileValue[1] > 0 && profileValue[0] > 0) {
                            var timerMultiplier = profileValue[0] / profileValue[1];
                            profileValue[0] = Math.ceil(timerMultiplier) * profileValue[1];
                        }
                        // Add back the direct profile timeout
                        if (directValue >= 0 && profileValue[1] >= 0 && directValue > profileValue[1]) {
                            // Make sure if it's not disabled (< 0) then make sure it's not larger than RealTime
                            directValue = profileValue[1];
                        }
                        profileValue.push(directValue);
                        _profiles[profileName] = profileValue;
                    }
                });
            };
            _self.flush = function (async, callback, sendReason) {
                if (async === void 0) { async = true; }
                if (!_paused) {
                    sendReason = sendReason || 1 /* SendRequestReason.ManualFlush */;
                    if (async) {
                        if (_flushCallbackTimerId == null) {
                            // Clear the normal schedule timer as we are going to try and flush ASAP
                            _clearScheduledTimer();
                            // Move all queued events to the HttpManager so that we don't discard new events (Auto flush scenario)
                            _queueBatches(1 /* EventLatencyValue.Normal */, 0 /* EventSendType.Batched */, sendReason);
                            _flushCallbackTimerId = _createTimer(function () {
                                _flushCallbackTimerId = null;
                                _flushImpl(callback, sendReason);
                            }, 0);
                        }
                        else {
                            // Even if null (no callback) this will ensure after the flushImpl finishes waiting
                            // for a completely idle connection it will attempt to re-flush any queued events on the next cycle
                            _flushCallbackQueue.push(callback);
                        }
                    }
                    else {
                        // Clear the normal schedule timer as we are going to try and flush ASAP
                        var cleared = _clearScheduledTimer();
                        // Now cause all queued events to be sent synchronously
                        _sendEventsForLatencyAndAbove(1 /* EventLatencyValue.Normal */, 1 /* EventSendType.Synchronous */, sendReason);
                        if (callback !== null && callback !== undefined) {
                            callback();
                        }
                        if (cleared) {
                            // restart the normal event timer if it was cleared
                            _scheduleTimer();
                        }
                    }
                }
            };
            _self.setMsaAuthTicket = function (ticket) {
                _httpManager.addHeader(_InternalConstants__WEBPACK_IMPORTED_MODULE_10__.STR_MSA_DEVICE_TICKET, ticket);
            };
            _self.hasEvents = _hasEvents;
            _self._setTransmitProfile = function (profileName) {
                if (_currentProfile !== profileName && _profiles[profileName] !== undefined) {
                    _clearScheduledTimer();
                    _currentProfile = profileName;
                    _scheduleTimer();
                }
            };
            /**
             * Batch and send events currently in the queue for the given latency.
             * @param latency - Latency for which to send events.
             */
            function _sendEventsForLatencyAndAbove(latency, sendType, sendReason) {
                var queued = _queueBatches(latency, sendType, sendReason);
                // Always trigger the request as while the post channel may not have queued additional events, the httpManager may already have waiting events
                _httpManager.sendQueuedRequests(sendType, sendReason);
                return queued;
            }
            function _hasEvents() {
                return _queueSize > 0;
            }
            /**
             * Try to schedule the timer after which events will be sent. If there are
             * no events to be sent, or there is already a timer scheduled, or the
             * http manager doesn't have any idle connections this method is no-op.
             */
            function _scheduleTimer() {
                // If we had previously attempted to send requests, but the http manager didn't have any idle connections then the requests where delayed
                // so try and requeue then again now
                if (_delayedBatchSendLatency >= 0 && _queueBatches(_delayedBatchSendLatency, 0 /* EventSendType.Batched */, _delayedBatchReason)) {
                    _httpManager.sendQueuedRequests(0 /* EventSendType.Batched */, _delayedBatchReason);
                }
                if (_immediateQueueSize > 0 && !_immediateTimerId && !_paused) {
                    // During initialization _profiles enforce that the direct [2] is less than real time [1] timer value
                    // If the immediateTimeout is disabled the immediate events will be sent with Real Time events
                    var immediateTimeOut = _profiles[_currentProfile][2];
                    if (immediateTimeOut >= 0) {
                        _immediateTimerId = _createTimer(function () {
                            _immediateTimerId = null;
                            // Only try to send direct events
                            _sendEventsForLatencyAndAbove(4 /* EventLatencyValue.Immediate */, 0 /* EventSendType.Batched */, 1 /* SendRequestReason.NormalSchedule */);
                            _scheduleTimer();
                        }, immediateTimeOut);
                    }
                }
                // During initialization the _profiles enforce that the normal [0] is a multiple of the real time [1] timer value
                var timeOut = _profiles[_currentProfile][1];
                if (!_scheduledTimerId && !_flushCallbackTimerId && timeOut >= 0 && !_paused) {
                    if (_hasEvents()) {
                        _scheduledTimerId = _createTimer(function () {
                            _scheduledTimerId = null;
                            _sendEventsForLatencyAndAbove(_timerCount === 0 ? 3 /* EventLatencyValue.RealTime */ : 1 /* EventLatencyValue.Normal */, 0 /* EventSendType.Batched */, 1 /* SendRequestReason.NormalSchedule */);
                            // Increment the count for next cycle
                            _timerCount++;
                            _timerCount %= 2;
                            _scheduleTimer();
                        }, timeOut);
                    }
                    else {
                        _timerCount = 0;
                    }
                }
            }
            _self._backOffTransmission = function () {
                if (_currentBackoffCount < MaxBackoffCount) {
                    _currentBackoffCount++;
                    _clearScheduledTimer();
                    _scheduleTimer();
                }
            };
            _self._clearBackOff = function () {
                if (_currentBackoffCount) {
                    _currentBackoffCount = 0;
                    _clearScheduledTimer();
                    _scheduleTimer();
                }
            };
            function _initDefaults() {
                _config = null;
                _isTeardownCalled = false;
                _flushCallbackQueue = [];
                _flushCallbackTimerId = null;
                _paused = false;
                _immediateQueueSize = 0;
                _immediateQueueSizeLimit = 500;
                _queueSize = 0;
                _queueSizeLimit = 10000;
                _profiles = {};
                _currentProfile = _DataModels__WEBPACK_IMPORTED_MODULE_1__.RT_PROFILE;
                _scheduledTimerId = null;
                _immediateTimerId = null;
                _currentBackoffCount = 0;
                _timerCount = 0;
                _xhrOverride = null;
                _batchQueues = {};
                _autoFlushEventsLimit = undefined;
                // either MaxBatchSize * (1+ Max Connections) or _queueLimit / 6 (where 3 latency Queues [normal, realtime, cost deferred] * 2 [allow half full -- allow for retry])
                _autoFlushBatchLimit = 0;
                _delayedBatchSendLatency = -1;
                _delayedBatchReason = null;
                _optimizeObject = true;
                _isPageUnloadTriggered = false;
                _maxEventSendAttempts = MaxSendAttempts;
                _maxUnloadEventSendAttempts = MaxSyncUnloadSendAttempts;
                _evtNamespace = null;
                _timeoutWrapper = (0,_TimeoutOverrideWrapper__WEBPACK_IMPORTED_MODULE_6__.createTimeoutWrapper)();
                _httpManager = new _HttpManager__WEBPACK_IMPORTED_MODULE_13__.HttpManager(MaxNumberEventPerBatch, MaxConnections, MaxRequestRetriesBeforeBackoff, {
                    requeue: _requeueEvents,
                    send: _sendingEvent,
                    sent: _eventsSentEvent,
                    drop: _eventsDropped,
                    rspFail: _eventsResponseFail,
                    oth: _otherEvent
                }, _timeoutWrapper);
                _initializeProfiles();
                _clearQueues();
                _setAutoLimits();
            }
            function _createTimer(theTimerFunc, timeOut) {
                // If the transmission is backed off make the timer at least 1 sec to allow for back off.
                if (timeOut === 0 && _currentBackoffCount) {
                    timeOut = 1;
                }
                var timerMultiplier = 1000;
                if (_currentBackoffCount) {
                    timerMultiplier = (0,_RetryPolicy__WEBPACK_IMPORTED_MODULE_14__.retryPolicyGetMillisToBackoffForRetry)(_currentBackoffCount - 1);
                }
                return _timeoutWrapper.set(theTimerFunc, timeOut * timerMultiplier);
            }
            function _clearScheduledTimer() {
                if (_scheduledTimerId !== null) {
                    _timeoutWrapper.clear(_scheduledTimerId);
                    _scheduledTimerId = null;
                    _timerCount = 0;
                    return true;
                }
                return false;
            }
            // Try to send all queued events using beacons if available
            function _releaseAllQueues(sendType, sendReason) {
                _clearScheduledTimer();
                // Cancel all flush callbacks
                if (_flushCallbackTimerId) {
                    _timeoutWrapper.clear(_flushCallbackTimerId);
                    _flushCallbackTimerId = null;
                }
                if (!_paused) {
                    // Queue all the remaining requests to be sent. The requests will be sent using HTML5 Beacons if they are available.
                    _sendEventsForLatencyAndAbove(1 /* EventLatencyValue.Normal */, sendType, sendReason);
                }
            }
            /**
             * Add empty queues for all latencies in the inbound queues map. This is called
             * when Transmission Manager is being flushed. This ensures that new events added
             * after flush are stored separately till we flush the current events.
             */
            function _clearQueues() {
                _batchQueues[4 /* EventLatencyValue.Immediate */] = {
                    batches: [],
                    iKeyMap: {}
                };
                _batchQueues[3 /* EventLatencyValue.RealTime */] = {
                    batches: [],
                    iKeyMap: {}
                };
                _batchQueues[2 /* EventLatencyValue.CostDeferred */] = {
                    batches: [],
                    iKeyMap: {}
                };
                _batchQueues[1 /* EventLatencyValue.Normal */] = {
                    batches: [],
                    iKeyMap: {}
                };
            }
            function _getEventBatch(iKey, latency, create) {
                var batchQueue = _batchQueues[latency];
                if (!batchQueue) {
                    latency = 1 /* EventLatencyValue.Normal */;
                    batchQueue = _batchQueues[latency];
                }
                var eventBatch = batchQueue.iKeyMap[iKey];
                if (!eventBatch && create) {
                    eventBatch = _EventBatch__WEBPACK_IMPORTED_MODULE_11__.EventBatch.create(iKey);
                    batchQueue.batches.push(eventBatch);
                    batchQueue.iKeyMap[iKey] = eventBatch;
                }
                return eventBatch;
            }
            function _performAutoFlush(isAsync, doFlush) {
                // Only perform the auto flush check if the httpManager has an idle connection and we are not in a backoff situation
                if (_httpManager.canSendRequest() && !_currentBackoffCount) {
                    if (_autoFlushEventsLimit > 0 && _queueSize > _autoFlushEventsLimit) {
                        // Force flushing
                        doFlush = true;
                    }
                    if (doFlush && _flushCallbackTimerId == null) {
                        // Auto flush the queue
                        _self.flush(isAsync, null, 20 /* SendRequestReason.MaxQueuedEvents */);
                    }
                }
            }
            function _addEventToProperQueue(event, append) {
                // v8 performance optimization for iterating over the keys
                if (_optimizeObject) {
                    event = (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__.optimizeObject)(event);
                }
                var latency = event.latency;
                var eventBatch = _getEventBatch(event.iKey, latency, true);
                if (eventBatch.addEvent(event)) {
                    if (latency !== 4 /* EventLatencyValue.Immediate */) {
                        _queueSize++;
                        // Check for auto flushing based on total events in the queue, but not for requeued or retry events
                        if (append && event.sendAttempt === 0) {
                            // Force the flushing of the batch if the batch (specific iKey / latency combination) reaches it's auto flush limit
                            _performAutoFlush(!event.sync, _autoFlushBatchLimit > 0 && eventBatch.count() >= _autoFlushBatchLimit);
                        }
                    }
                    else {
                        // Direct events don't need auto flushing as they are scheduled (by default) for immediate delivery
                        _immediateQueueSize++;
                    }
                    return true;
                }
                return false;
            }
            function _dropEventWithLatencyOrLess(iKey, latency, currentLatency, dropNumber) {
                while (currentLatency <= latency) {
                    var eventBatch = _getEventBatch(iKey, latency, true);
                    if (eventBatch && eventBatch.count() > 0) {
                        // Dropped oldest events from lowest possible latency
                        var droppedEvents = eventBatch.split(0, dropNumber);
                        var droppedCount = droppedEvents.count();
                        if (droppedCount > 0) {
                            if (currentLatency === 4 /* EventLatencyValue.Immediate */) {
                                _immediateQueueSize -= droppedCount;
                            }
                            else {
                                _queueSize -= droppedCount;
                            }
                            _notifyBatchEvents(strEventsDiscarded, [droppedEvents], _microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_12__.EventsDiscardedReason.QueueFull);
                            return true;
                        }
                    }
                    currentLatency++;
                }
                // Unable to drop any events -- lets just make sure the queue counts are correct to avoid exhaustion
                _resetQueueCounts();
                return false;
            }
            /**
             * Internal helper to reset the queue counts, used as a backstop to avoid future queue exhaustion errors
             * that might occur because of counting issues.
             */
            function _resetQueueCounts() {
                var immediateQueue = 0;
                var normalQueue = 0;
                var _loop_1 = function (latency) {
                    var batchQueue = _batchQueues[latency];
                    if (batchQueue && batchQueue.batches) {
                        (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__.arrForEach)(batchQueue.batches, function (theBatch) {
                            if (latency === 4 /* EventLatencyValue.Immediate */) {
                                immediateQueue += theBatch.count();
                            }
                            else {
                                normalQueue += theBatch.count();
                            }
                        });
                    }
                };
                for (var latency = 1 /* EventLatencyValue.Normal */; latency <= 4 /* EventLatencyValue.Immediate */; latency++) {
                    _loop_1(latency);
                }
                _queueSize = normalQueue;
                _immediateQueueSize = immediateQueue;
            }
            function _queueBatches(latency, sendType, sendReason) {
                var eventsQueued = false;
                var isAsync = sendType === 0 /* EventSendType.Batched */;
                // Only queue batches (to the HttpManager) if this is a sync request or the httpManager has an idle connection
                // Thus keeping the events within the PostChannel until the HttpManager has a connection available
                // This is so we can drop "old" events if the queue is getting full because we can't successfully send events
                if (!isAsync || _httpManager.canSendRequest()) {
                    (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_3__.doPerf)(_self.core, function () { return "PostChannel._queueBatches"; }, function () {
                        var droppedEvents = [];
                        var latencyToProcess = 4 /* EventLatencyValue.Immediate */;
                        while (latencyToProcess >= latency) {
                            var batchQueue = _batchQueues[latencyToProcess];
                            if (batchQueue && batchQueue.batches && batchQueue.batches.length > 0) {
                                (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__.arrForEach)(batchQueue.batches, function (theBatch) {
                                    // Add the batch to the http manager to send the requests
                                    if (!_httpManager.addBatch(theBatch)) {
                                        // The events from this iKey are being dropped (killed)
                                        droppedEvents = droppedEvents.concat(theBatch.events());
                                    }
                                    else {
                                        eventsQueued = eventsQueued || (theBatch && theBatch.count() > 0);
                                    }
                                    if (latencyToProcess === 4 /* EventLatencyValue.Immediate */) {
                                        _immediateQueueSize -= theBatch.count();
                                    }
                                    else {
                                        _queueSize -= theBatch.count();
                                    }
                                });
                                // Remove all batches from this Queue
                                batchQueue.batches = [];
                                batchQueue.iKeyMap = {};
                            }
                            latencyToProcess--;
                        }
                        if (droppedEvents.length > 0) {
                            _notifyEvents(strEventsDiscarded, droppedEvents, _microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_12__.EventsDiscardedReason.KillSwitch);
                        }
                        if (eventsQueued && _delayedBatchSendLatency >= latency) {
                            // We have queued events at the same level as the delayed values so clear the setting
                            _delayedBatchSendLatency = -1;
                            _delayedBatchReason = 0 /* SendRequestReason.Undefined */;
                        }
                    }, function () { return ({ latency: latency, sendType: sendType, sendReason: sendReason }); }, !isAsync);
                }
                else {
                    // remember the min latency so that we can re-trigger later
                    _delayedBatchSendLatency = _delayedBatchSendLatency >= 0 ? Math.min(_delayedBatchSendLatency, latency) : latency;
                    _delayedBatchReason = Math.max(_delayedBatchReason, sendReason);
                }
                return eventsQueued;
            }
            /**
             * This is the callback method is called as part of the manual flushing process.
             * @param callback
             * @param sendReason
             */
            function _flushImpl(callback, sendReason) {
                // Add any additional queued events and cause all queued events to be sent asynchronously
                _sendEventsForLatencyAndAbove(1 /* EventLatencyValue.Normal */, 0 /* EventSendType.Batched */, sendReason);
                // All events (should) have been queue -- lets just make sure the queue counts are correct to avoid queue exhaustion (previous bug #9685112)
                _resetQueueCounts();
                _waitForIdleManager(function () {
                    // Only called AFTER the httpManager does not have any outstanding requests
                    if (callback) {
                        callback();
                    }
                    if (_flushCallbackQueue.length > 0) {
                        _flushCallbackTimerId = _createTimer(function () {
                            _flushCallbackTimerId = null;
                            _flushImpl(_flushCallbackQueue.shift(), sendReason);
                        }, 0);
                    }
                    else {
                        // No more flush requests
                        _flushCallbackTimerId = null;
                        // Restart the normal timer schedule
                        _scheduleTimer();
                    }
                });
            }
            function _waitForIdleManager(callback) {
                if (_httpManager.isCompletelyIdle()) {
                    callback();
                }
                else {
                    _flushCallbackTimerId = _createTimer(function () {
                        _flushCallbackTimerId = null;
                        _waitForIdleManager(callback);
                    }, FlushCheckTimer);
                }
            }
            /**
             * Resets the transmit profiles to the default profiles of Real Time, Near Real Time
             * and Best Effort. This removes all the custom profiles that were loaded.
             */
            function _resetTransmitProfiles() {
                _clearScheduledTimer();
                _initializeProfiles();
                _currentProfile = _DataModels__WEBPACK_IMPORTED_MODULE_1__.RT_PROFILE;
                _scheduleTimer();
            }
            function _initializeProfiles() {
                _profiles = {};
                _profiles[_DataModels__WEBPACK_IMPORTED_MODULE_1__.RT_PROFILE] = [2, 1, 0];
                _profiles[_DataModels__WEBPACK_IMPORTED_MODULE_1__.NRT_PROFILE] = [6, 3, 0];
                _profiles[_DataModels__WEBPACK_IMPORTED_MODULE_1__.BE_PROFILE] = [18, 9, 0];
            }
            /**
             * The notification handler for requeue events
             * @ignore
             */
            function _requeueEvents(batches, reason) {
                var droppedEvents = [];
                var maxSendAttempts = _maxEventSendAttempts;
                if (_isPageUnloadTriggered) {
                    // If a page unlaod has been triggered reduce the number of times we try to "retry"
                    maxSendAttempts = _maxUnloadEventSendAttempts;
                }
                (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__.arrForEach)(batches, function (theBatch) {
                    if (theBatch && theBatch.count() > 0) {
                        (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__.arrForEach)(theBatch.events(), function (theEvent) {
                            if (theEvent) {
                                // Check if the request being added back is for a sync event in which case mark it no longer a sync event
                                if (theEvent.sync) {
                                    theEvent.latency = 4 /* EventLatencyValue.Immediate */;
                                    theEvent.sync = false;
                                }
                                if (theEvent.sendAttempt < maxSendAttempts) {
                                    // Reset the event timings
                                    (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_7__.setProcessTelemetryTimings)(theEvent, _self.identifier);
                                    _addEventToQueues(theEvent, false);
                                }
                                else {
                                    droppedEvents.push(theEvent);
                                }
                            }
                        });
                    }
                });
                if (droppedEvents.length > 0) {
                    _notifyEvents(strEventsDiscarded, droppedEvents, _microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_12__.EventsDiscardedReason.NonRetryableStatus);
                }
                if (_isPageUnloadTriggered) {
                    // Unload event has been received so we need to try and flush new events
                    _releaseAllQueues(2 /* EventSendType.SendBeacon */, 2 /* SendRequestReason.Unload */);
                }
            }
            function _callNotification(evtName, theArgs) {
                var manager = (_self._notificationManager || {});
                var notifyFunc = manager[evtName];
                if (notifyFunc) {
                    try {
                        notifyFunc.apply(manager, theArgs);
                    }
                    catch (e) {
                        (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_15__._throwInternal)(_self.diagLog(), 1 /* eLoggingSeverity.CRITICAL */, 74 /* _eInternalMessageId.NotificationException */, evtName + " notification failed: " + e);
                    }
                }
            }
            function _notifyEvents(evtName, theEvents) {
                var extraArgs = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    extraArgs[_i - 2] = arguments[_i];
                }
                if (theEvents && theEvents.length > 0) {
                    _callNotification(evtName, [theEvents].concat(extraArgs));
                }
            }
            function _notifyBatchEvents(evtName, batches) {
                var extraArgs = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    extraArgs[_i - 2] = arguments[_i];
                }
                if (batches && batches.length > 0) {
                    (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__.arrForEach)(batches, function (theBatch) {
                        if (theBatch && theBatch.count() > 0) {
                            _callNotification(evtName, [theBatch.events()].concat(extraArgs));
                        }
                    });
                }
            }
            /**
             * The notification handler for when batches are about to be sent
             * @ignore
             */
            function _sendingEvent(batches, reason, isSyncRequest) {
                if (batches && batches.length > 0) {
                    _callNotification("eventsSendRequest", [(reason >= 1000 /* EventBatchNotificationReason.SendingUndefined */ && reason <= 1999 /* EventBatchNotificationReason.SendingEventMax */ ?
                            reason - 1000 /* EventBatchNotificationReason.SendingUndefined */ :
                            0 /* SendRequestReason.Undefined */), isSyncRequest !== true]);
                }
            }
            /**
             * This event represents that a batch of events have been successfully sent and a response received
             * @param batches The notification handler for when the batches have been successfully sent
             * @param reason For this event the reason will always be EventBatchNotificationReason.Complete
             */
            function _eventsSentEvent(batches, reason) {
                _notifyBatchEvents("eventsSent", batches, reason);
                // Try and schedule the processing timer if we have events
                _scheduleTimer();
            }
            function _eventsDropped(batches, reason) {
                _notifyBatchEvents(strEventsDiscarded, batches, (reason >= 8000 /* EventBatchNotificationReason.EventsDropped */ && reason <= 8999 /* EventBatchNotificationReason.EventsDroppedMax */ ?
                    reason - 8000 /* EventBatchNotificationReason.EventsDropped */ :
                    _microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_12__.EventsDiscardedReason.Unknown));
            }
            function _eventsResponseFail(batches) {
                _notifyBatchEvents(strEventsDiscarded, batches, _microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_12__.EventsDiscardedReason.NonRetryableStatus);
                // Try and schedule the processing timer if we have events
                _scheduleTimer();
            }
            function _otherEvent(batches, reason) {
                _notifyBatchEvents(strEventsDiscarded, batches, _microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_12__.EventsDiscardedReason.Unknown);
                // Try and schedule the processing timer if we have events
                _scheduleTimer();
            }
            function _setAutoLimits() {
                if (!_config || !_config.disableAutoBatchFlushLimit) {
                    _autoFlushBatchLimit = Math.max(MaxNumberEventPerBatch * (MaxConnections + 1), _queueSizeLimit / 6);
                }
                else {
                    _autoFlushBatchLimit = 0;
                }
            }
            // Provided for backward compatibility they are not "expected" to be in current use but they are public
            (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__.objDefineAccessors)(_self, "_setTimeoutOverride", function () { return _timeoutWrapper.set; }, function (value) {
                // Recreate the timeout wrapper
                _timeoutWrapper = (0,_TimeoutOverrideWrapper__WEBPACK_IMPORTED_MODULE_6__.createTimeoutWrapper)(value, _timeoutWrapper.clear);
            });
            (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_8__.objDefineAccessors)(_self, "_clearTimeoutOverride", function () { return _timeoutWrapper.clear; }, function (value) {
                // Recreate the timeout wrapper
                _timeoutWrapper = (0,_TimeoutOverrideWrapper__WEBPACK_IMPORTED_MODULE_6__.createTimeoutWrapper)(_timeoutWrapper.set, value);
            });
        });
        return _this;
    }
// Removed Stub for PostChannel.prototype.initialize.
// Removed Stub for PostChannel.prototype.processTelemetry.
// Removed Stub for PostChannel.prototype.setEventQueueLimits.
// Removed Stub for PostChannel.prototype.pause.
// Removed Stub for PostChannel.prototype.resume.
// Removed Stub for PostChannel.prototype.addResponseHandler.
// Removed Stub for PostChannel.prototype.flush.
// Removed Stub for PostChannel.prototype.setMsaAuthTicket.
// Removed Stub for PostChannel.prototype.hasEvents.
// Removed Stub for PostChannel.prototype._loadTransmitProfiles.
// Removed Stub for PostChannel.prototype._setTransmitProfile.
// Removed Stub for PostChannel.prototype._backOffTransmission.
// Removed Stub for PostChannel.prototype._clearBackOff.
    // This is a workaround for an IE8 bug when using dynamicProto() with classes that don't have any
    // non-dynamic functions or static properties/functions when using uglify-js to minify the resulting code.
    // this will be removed when ES3 support is dropped.
    PostChannel.__ieDyn=1;

    return PostChannel;
}(_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_16__.BaseTelemetryPlugin));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostChannel);
//# sourceMappingURL=PostChannel.js.map

/***/ }),

/***/ 564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "retryPolicyGetMillisToBackoffForRetry": () => (/* binding */ retryPolicyGetMillisToBackoffForRetry),
/* harmony export */   "retryPolicyShouldRetryForStatus": () => (/* binding */ retryPolicyShouldRetryForStatus)
/* harmony export */ });
/*
 * 1DS JS SDK POST plugin, 3.2.15
 * Copyright (c) Microsoft and contributors. All rights reserved.
 * (Microsoft Internal Only)
 */
/**
* RetryPolicy.ts
* @author Abhilash Panwar (abpanwar)
* @copyright Microsoft 2018
*/
var RandomizationLowerThreshold = 0.8;
var RandomizationUpperThreshold = 1.2;
var BaseBackoff = 3000;
var MaxBackoff = 600000;
/**
 * Determine if the request should be retried for the given status code.
 * The below expression reads that we should only retry for:
 *      - HttpStatusCodes that are smaller than 300.
 *      - HttpStatusCodes greater or equal to 500 (except for 501-NotImplement
 *        and 505-HttpVersionNotSupport).
 *      - HttpStatusCode 408-RequestTimeout.
 *      - HttpStatusCode 429.
 * This is based on Microsoft.WindowsAzure.Storage.RetryPolicies.ExponentialRetry class
 * @param httpStatusCode - The status code returned for the request.
 * @returns True if request should be retried, false otherwise.
 */
function retryPolicyShouldRetryForStatus(httpStatusCode) {
    /* tslint:disable:triple-equals */
    // Disabling triple-equals rule to avoid httpOverrides from failing because they are returning a string value
    return !((httpStatusCode >= 300 && httpStatusCode < 500 && httpStatusCode != 408 && httpStatusCode != 429)
        || (httpStatusCode == 501)
        || (httpStatusCode == 505));
    /* tslint:enable:triple-equals */
}
/**
 * Gets the number of milliseconds to back off before retrying the request. The
 * back off duration is exponentially scaled based on the number of retries already
 * done for the request.
 * @param retriesSoFar - The number of times the request has already been retried.
 * @returns The back off duration for the request before it can be retried.
 */
function retryPolicyGetMillisToBackoffForRetry(retriesSoFar) {
    var waitDuration = 0;
    var minBackoff = BaseBackoff * RandomizationLowerThreshold;
    var maxBackoff = BaseBackoff * RandomizationUpperThreshold;
    var randomBackoff = Math.floor(Math.random() * (maxBackoff - minBackoff)) + minBackoff;
    waitDuration = Math.pow(2, retriesSoFar) * randomBackoff;
    return Math.min(waitDuration, MaxBackoff);
}
//# sourceMappingURL=RetryPolicy.js.map

/***/ }),

/***/ 563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Serializer": () => (/* binding */ Serializer)
/* harmony export */ });
/* harmony import */ var _microsoft_dynamicproto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(526);
/* harmony import */ var _microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(530);
/* harmony import */ var _microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(518);
/* harmony import */ var _microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(532);
/* harmony import */ var _EventBatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(559);
/* harmony import */ var _InternalConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(558);
/*
 * 1DS JS SDK POST plugin, 3.2.15
 * Copyright (c) Microsoft and contributors. All rights reserved.
 * (Microsoft Internal Only)
 */
/**
* Serializer.ts
* @author Abhilash Panwar (abpanwar); Hector Hernandez (hectorh); Nev Wylie (newylie)
* @copyright Microsoft 2018-2020
*/
// @skip-file-minify




/**
 * Note: This is an optimization for V8-based browsers. When V8 concatenates a string,
 * the strings are only joined logically using a "cons string" or "constructed/concatenated
 * string". These containers keep references to one another and can result in very large
 * memory usage. For example, if a 2MB string is constructed by concatenating 4 bytes
 * together at a time, the memory usage will be ~44MB; so ~22x increase. The strings are
 * only joined together when an operation requiring their joining takes place, such as
 * substr(). This function is called when adding data to this buffer to ensure these
 * types of strings are periodically joined to reduce the memory footprint.
 * Setting to every 20 events as the JSON.stringify() may have joined many strings
 * and calling this too much causes a minor delay while processing.
 */
var _MAX_STRING_JOINS = 20;
var RequestSizeLimitBytes = 3984588; // approx 3.8 Mb
var BeaconRequestSizeLimitBytes = 65000; // approx 64kb (the current Edge, Firefox and Chrome max limit)
var MaxRecordSize = 2000000; // approx 2 Mb
var MaxBeaconRecordSize = Math.min(MaxRecordSize, BeaconRequestSizeLimitBytes);
var metadata = "metadata";
var f = "f";
var rCheckDot = /\./;
/**
* Class to handle serialization of event and request.
* Currently uses Bond for serialization. Please note that this may be subject to change.
*/
var Serializer = /** @class */ (function () {
    function Serializer(perfManager, valueSanitizer, stringifyObjects, enableCompoundKey) {
        var strData = "data";
        var strBaseData = "baseData";
        var strExt = "ext";
        var _checkForCompoundkey = !!enableCompoundKey;
        var _processSubMetaData = true;
        var _theSanitizer = valueSanitizer;
        var _isReservedCache = {};
        (0,_microsoft_dynamicproto_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Serializer, this, function (_self) {
            _self.createPayload = function (retryCnt, isTeardown, isSync, isReducedPayload, sendReason, sendType) {
                return {
                    apiKeys: [],
                    payloadBlob: _InternalConstants__WEBPACK_IMPORTED_MODULE_1__.STR_EMPTY,
                    overflow: null,
                    sizeExceed: [],
                    failedEvts: [],
                    batches: [],
                    numEvents: 0,
                    retryCnt: retryCnt,
                    isTeardown: isTeardown,
                    isSync: isSync,
                    isBeacon: isReducedPayload,
                    sendType: sendType,
                    sendReason: sendReason
                };
            };
            _self.appendPayload = function (payload, theBatch, maxEventsPerBatch) {
                var canAddEvents = payload && theBatch && !payload.overflow;
                if (canAddEvents) {
                    (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_2__.doPerf)(perfManager, function () { return "Serializer:appendPayload"; }, function () {
                        var theEvents = theBatch.events();
                        var payloadBlob = payload.payloadBlob;
                        var payloadEvents = payload.numEvents;
                        var eventsAdded = false;
                        var sizeExceeded = [];
                        var failedEvts = [];
                        var isBeaconPayload = payload.isBeacon;
                        var requestMaxSize = isBeaconPayload ? BeaconRequestSizeLimitBytes : RequestSizeLimitBytes;
                        var recordMaxSize = isBeaconPayload ? MaxBeaconRecordSize : MaxRecordSize;
                        var lp = 0;
                        var joinCount = 0;
                        while (lp < theEvents.length) {
                            var theEvent = theEvents[lp];
                            if (theEvent) {
                                if (payloadEvents >= maxEventsPerBatch) {
                                    // Maximum events per payload reached, so don't add any more
                                    payload.overflow = theBatch.split(lp);
                                    break;
                                }
                                var eventBlob = _self.getEventBlob(theEvent);
                                if (eventBlob && eventBlob.length <= recordMaxSize) {
                                    // This event will fit into the payload
                                    var blobLength = eventBlob.length;
                                    var currentSize = payloadBlob.length;
                                    if (currentSize + blobLength > requestMaxSize) {
                                        // Request or batch size exceeded, so don't add any more to the payload
                                        payload.overflow = theBatch.split(lp);
                                        break;
                                    }
                                    if (payloadBlob) {
                                        payloadBlob += "\n";
                                    }
                                    payloadBlob += eventBlob;
                                    joinCount++;
                                    // v8 memory optimization only
                                    if (joinCount > _MAX_STRING_JOINS) {
                                        // this substr() should cause the constructed string to join
                                        payloadBlob.substr(0, 1);
                                        joinCount = 0;
                                    }
                                    eventsAdded = true;
                                    payloadEvents++;
                                }
                                else {
                                    if (eventBlob) {
                                        // Single event size exceeded so remove from the batch
                                        sizeExceeded.push(theEvent);
                                    }
                                    else {
                                        failedEvts.push(theEvent);
                                    }
                                    // We also need to remove this event from the existing array, otherwise a notification will be sent
                                    // indicating that it was successfully sent
                                    theEvents.splice(lp, 1);
                                    lp--;
                                }
                            }
                            lp++;
                        }
                        if (sizeExceeded && sizeExceeded.length > 0) {
                            payload.sizeExceed.push(_EventBatch__WEBPACK_IMPORTED_MODULE_3__.EventBatch.create(theBatch.iKey(), sizeExceeded));
                            // Remove the exceeded events from the batch
                        }
                        if (failedEvts && failedEvts.length > 0) {
                            payload.failedEvts.push(_EventBatch__WEBPACK_IMPORTED_MODULE_3__.EventBatch.create(theBatch.iKey(), failedEvts));
                            // Remove the failed events from the batch
                        }
                        if (eventsAdded) {
                            payload.batches.push(theBatch);
                            payload.payloadBlob = payloadBlob;
                            payload.numEvents = payloadEvents;
                            var apiKey = theBatch.iKey();
                            if ((0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_4__.arrIndexOf)(payload.apiKeys, apiKey) === -1) {
                                payload.apiKeys.push(apiKey);
                            }
                        }
                    }, function () { return ({ payload: payload, theBatch: { iKey: theBatch.iKey(), evts: theBatch.events() }, max: maxEventsPerBatch }); });
                }
                return canAddEvents;
            };
            _self.getEventBlob = function (eventData) {
                try {
                    return (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_2__.doPerf)(perfManager, function () { return "Serializer.getEventBlob"; }, function () {
                        var serializedEvent = {};
                        // Adding as dynamic keys for v8 performance
                        serializedEvent.name = eventData.name;
                        serializedEvent.time = eventData.time;
                        serializedEvent.ver = eventData.ver;
                        serializedEvent.iKey = "o:" + (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_5__.getTenantId)(eventData.iKey);
                        // Assigning local var so usage in part b/c don't throw if there is no ext
                        var serializedExt = {};
                        // Part A
                        var eventExt = eventData[strExt];
                        if (eventExt) {
                            // Only assign ext if the event had one (There are tests covering this use case)
                            serializedEvent[strExt] = serializedExt;
                            (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_4__.objForEachKey)(eventExt, function (key, value) {
                                var data = serializedExt[key] = {};
                                // Don't include a metadata callback as we don't currently set metadata Part A fields
                                _processPathKeys(value, data, "ext." + key, true, null, null, true);
                            });
                        }
                        var serializedData = serializedEvent[strData] = {};
                        serializedData.baseType = eventData.baseType;
                        var serializedBaseData = serializedData[strBaseData] = {};
                        // Part B
                        _processPathKeys(eventData.baseData, serializedBaseData, strBaseData, false, [strBaseData], function (pathKeys, name, value) {
                            _addJSONPropertyMetaData(serializedExt, pathKeys, name, value);
                        }, _processSubMetaData);
                        // Part C
                        _processPathKeys(eventData.data, serializedData, strData, false, [], function (pathKeys, name, value) {
                            _addJSONPropertyMetaData(serializedExt, pathKeys, name, value);
                        }, _processSubMetaData);
                        return JSON.stringify(serializedEvent);
                    }, function () { return ({ item: eventData }); });
                }
                catch (e) {
                    return null;
                }
            };
            function _isReservedField(path, name) {
                var result = _isReservedCache[path];
                if (result === undefined) {
                    if (path.length >= 7) {
                        // Do not allow the changing of fields located in the ext.metadata or ext.web extension
                        result = (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_4__.strStartsWith)(path, "ext.metadata") || (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_4__.strStartsWith)(path, "ext.web");
                    }
                    _isReservedCache[path] = result;
                }
                return result;
            }
            function _processPathKeys(srcObj, target, thePath, checkReserved, metadataPathKeys, metadataCallback, processSubKeys) {
                (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_4__.objForEachKey)(srcObj, function (key, srcValue) {
                    var prop = null;
                    if (srcValue || (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_5__.isValueAssigned)(srcValue)) {
                        var path = thePath;
                        var name_1 = key;
                        var theMetaPathKeys = metadataPathKeys;
                        var destObj = target;
                        // Handle keys with embedded '.', like "TestObject.testProperty"
                        if (_checkForCompoundkey && !checkReserved && rCheckDot.test(key)) {
                            var subKeys = key.split(".");
                            var keyLen = subKeys.length;
                            if (keyLen > 1) {
                                if (theMetaPathKeys) {
                                    // Create a copy of the meta path keys so we can add the extra ones
                                    theMetaPathKeys = theMetaPathKeys.slice();
                                }
                                for (var lp = 0; lp < keyLen - 1; lp++) {
                                    var subKey = subKeys[lp];
                                    // Add/reuse the sub key object
                                    destObj = destObj[subKey] = destObj[subKey] || {};
                                    path += "." + subKey;
                                    if (theMetaPathKeys) {
                                        theMetaPathKeys.push(subKey);
                                    }
                                }
                                name_1 = subKeys[keyLen - 1];
                            }
                        }
                        var isReserved = checkReserved && _isReservedField(path, name_1);
                        if (!isReserved && _theSanitizer && _theSanitizer.handleField(path, name_1)) {
                            prop = _theSanitizer.value(path, name_1, srcValue, stringifyObjects);
                        }
                        else {
                            prop = (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_5__.sanitizeProperty)(name_1, srcValue, stringifyObjects);
                        }
                        if (prop) {
                            // Set the value
                            var newValue = prop.value;
                            destObj[name_1] = newValue;
                            if (metadataCallback) {
                                metadataCallback(theMetaPathKeys, name_1, prop);
                            }
                            if (processSubKeys && typeof newValue === "object" && !(0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_4__.isArray)(newValue)) {
                                var newPath = theMetaPathKeys;
                                if (newPath) {
                                    newPath = newPath.slice();
                                    newPath.push(name_1);
                                }
                                // Make sure we process sub objects as well (for value sanitization and metadata)
                                _processPathKeys(srcValue, newValue, path + "." + name_1, checkReserved, newPath, metadataCallback, processSubKeys);
                            }
                        }
                    }
                });
            }
        });
    }
// Removed Stub for Serializer.prototype.createPayload.
// Removed Stub for Serializer.prototype.appendPayload.
// Removed Stub for Serializer.prototype.getEventBlob.
// Removed Stub for Serializer.prototype.handleField.
// Removed Stub for Serializer.prototype.getSanitizer.
    // This is a workaround for an IE8 bug when using dynamicProto() with classes that don't have any
    // non-dynamic functions or static properties/functions when using uglify-js to minify the resulting code.
    // this will be removed when ES3 support is dropped.
    Serializer.__ieDyn=1;

    return Serializer;
}());

/**
 * @ignore
 */
function _addJSONPropertyMetaData(json, propKeys, name, propertyValue) {
    if (propertyValue && json) {
        var encodedTypeValue = (0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_5__.getCommonSchemaMetaData)(propertyValue.value, propertyValue.kind, propertyValue.propertyType);
        if (encodedTypeValue > -1) {
            // Add the root metadata
            var metaData = json[metadata];
            if (!metaData) {
                // Sets the root 'f'
                metaData = json[metadata] = { f: {} };
            }
            var metaTarget = metaData[f];
            if (!metaTarget) {
                // This can occur if someone has manually added an ext.metadata object
                // Such as ext.metadata.privLevel and ext.metadata.privTags
                metaTarget = metaData[f] = {};
            }
            // Traverse the metadata path and build each object (contains an 'f' key) -- if required
            if (propKeys) {
                for (var lp = 0; lp < propKeys.length; lp++) {
                    var key = propKeys[lp];
                    if (!metaTarget[key]) {
                        metaTarget[key] = { f: {} };
                    }
                    var newTarget = metaTarget[key][f];
                    if (!newTarget) {
                        // Not expected, but can occur if the metadata context was pre-created as part of the event
                        newTarget = metaTarget[key][f] = {};
                    }
                    metaTarget = newTarget;
                }
            }
            metaTarget = metaTarget[name] = {};
            if ((0,_microsoft_1ds_core_js__WEBPACK_IMPORTED_MODULE_4__.isArray)(propertyValue.value)) {
                metaTarget["a"] = {
                    t: encodedTypeValue
                };
            }
            else {
                metaTarget["t"] = encodedTypeValue;
            }
        }
    }
}
//# sourceMappingURL=Serializer.js.map

/***/ }),

/***/ 557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTimeoutWrapper": () => (/* binding */ createTimeoutWrapper),
/* harmony export */   "defaultClearTimeout": () => (/* binding */ defaultClearTimeout),
/* harmony export */   "defaultSetTimeout": () => (/* binding */ defaultSetTimeout)
/* harmony export */ });
/*
 * 1DS JS SDK POST plugin, 3.2.15
 * Copyright (c) Microsoft and contributors. All rights reserved.
 * (Microsoft Internal Only)
 */
/**
* TimeoutOverrideWrapper.ts
* @author  Nev Wylie (newylie)
* @copyright Microsoft 2022
* Simple internal timeout wrapper
*/
function defaultSetTimeout(callback, ms) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return setTimeout(callback, ms, args);
}
function defaultClearTimeout(timeoutId) {
    clearTimeout(timeoutId);
}
function createTimeoutWrapper(argSetTimeout, argClearTimeout) {
    return {
        set: argSetTimeout || defaultSetTimeout,
        clear: argClearTimeout || defaultClearTimeout
    };
}
//# sourceMappingURL=TimeoutOverrideWrapper.js.map

/***/ })

}]);
//# sourceMappingURL=6.js.map