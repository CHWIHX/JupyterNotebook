"use strict";
(self["webpackChunkpowerplatform_vscode"] = self["webpackChunkpowerplatform_vscode"] || []).push([[5],{

/***/ 541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STR_DEFAULT_ENDPOINT_URL": () => (/* binding */ STR_DEFAULT_ENDPOINT_URL),
/* harmony export */   "STR_EMPTY": () => (/* binding */ STR_EMPTY),
/* harmony export */   "STR_PLUGIN_VERSION_STRING": () => (/* binding */ STR_PLUGIN_VERSION_STRING),
/* harmony export */   "STR_PLUGIN_VERSION_STRING_ARR": () => (/* binding */ STR_PLUGIN_VERSION_STRING_ARR),
/* harmony export */   "STR_PROPERTIES": () => (/* binding */ STR_PROPERTIES),
/* harmony export */   "STR_VERSION": () => (/* binding */ STR_VERSION)
/* harmony export */ });
/*
 * 1DS JS SDK Core, 3.2.15
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
var STR_DEFAULT_ENDPOINT_URL = "https://browser.events.data.microsoft.com/OneCollector/1.0/";
var STR_PLUGIN_VERSION_STRING = "pluginVersionString";
var STR_PLUGIN_VERSION_STRING_ARR = STR_PLUGIN_VERSION_STRING + "Arr";
var STR_VERSION = "version";
var STR_PROPERTIES = "properties";
//# sourceMappingURL=InternalConstants.js.map

/***/ }),

/***/ 542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreUtils": () => (/* binding */ CoreUtils),
/* harmony export */   "FullVersionString": () => (/* binding */ FullVersionString),
/* harmony export */   "Utils": () => (/* binding */ Utils),
/* harmony export */   "Version": () => (/* binding */ Version),
/* harmony export */   "createGuid": () => (/* binding */ createGuid),
/* harmony export */   "deleteCookie": () => (/* binding */ deleteCookie),
/* harmony export */   "disableCookies": () => (/* binding */ disableCookies),
/* harmony export */   "extend": () => (/* binding */ extend),
/* harmony export */   "getCommonSchemaMetaData": () => (/* binding */ getCommonSchemaMetaData),
/* harmony export */   "getCookie": () => (/* binding */ getCookie),
/* harmony export */   "getCookieValue": () => (/* binding */ getCookieValue),
/* harmony export */   "getFieldValueType": () => (/* binding */ getFieldValueType),
/* harmony export */   "getTenantId": () => (/* binding */ getTenantId),
/* harmony export */   "getTime": () => (/* binding */ getTime),
/* harmony export */   "isArrayValid": () => (/* binding */ isArrayValid),
/* harmony export */   "isChromium": () => (/* binding */ isChromium),
/* harmony export */   "isDocumentObjectAvailable": () => (/* binding */ isDocumentObjectAvailable),
/* harmony export */   "isLatency": () => (/* binding */ isLatency),
/* harmony export */   "isUint8ArrayAvailable": () => (/* binding */ isUint8ArrayAvailable),
/* harmony export */   "isValueAssigned": () => (/* binding */ isValueAssigned),
/* harmony export */   "isValueKind": () => (/* binding */ isValueKind),
/* harmony export */   "isWindowObjectAvailable": () => (/* binding */ isWindowObjectAvailable),
/* harmony export */   "openXhr": () => (/* binding */ openXhr),
/* harmony export */   "sanitizeProperty": () => (/* binding */ sanitizeProperty),
/* harmony export */   "setCookie": () => (/* binding */ setCookie),
/* harmony export */   "setProcessTelemetryTimings": () => (/* binding */ setProcessTelemetryTimings)
/* harmony export */ });
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(538);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(528);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(543);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(544);
/* harmony import */ var _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(529);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(546);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(545);
/* harmony import */ var _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(532);
/* harmony import */ var _InternalConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(541);
/*
 * 1DS JS SDK Core, 3.2.15
 * Copyright (c) Microsoft and contributors. All rights reserved.
 * (Microsoft Internal Only)
 */
var _a;
/**
* Utils.ts
* @author  Abhilash Panwar (abpanwar) Hector Hernandez (hectorh)
* @copyright Microsoft 2018
* File containing utility functions.
*/



var Version = '3.2.15';
var FullVersionString = "1DS-Web-JS-" + Version;
// Defining here so we don't need to take (import) the ApplicationInsights Common module
var strDisabledPropertyName = "Microsoft_ApplicationInsights_BypassAjaxInstrumentation";
var strWithCredentials = "withCredentials";
var strTimeout = "timeout";
// If value is array just get the type for the first element
var _fieldTypeEventPropMap = (_a = {},
    _a[0 /* FieldValueSanitizerType.NotSet */] = 0 /* eEventPropertyType.Unspecified */,
    _a[2 /* FieldValueSanitizerType.Number */] = 6 /* eEventPropertyType.Double */,
    _a[1 /* FieldValueSanitizerType.String */] = 1 /* eEventPropertyType.String */,
    _a[3 /* FieldValueSanitizerType.Boolean */] = 7 /* eEventPropertyType.Bool */,
    _a[4096 /* FieldValueSanitizerType.Array */ | 2 /* FieldValueSanitizerType.Number */] = 6 /* eEventPropertyType.Double */,
    _a[4096 /* FieldValueSanitizerType.Array */ | 1 /* FieldValueSanitizerType.String */] = 1 /* eEventPropertyType.String */,
    _a[4096 /* FieldValueSanitizerType.Array */ | 3 /* FieldValueSanitizerType.Boolean */] = 7 /* eEventPropertyType.Bool */,
    _a);
/**
 * @ignore
 */
// let _uaDisallowsSameSiteNone = null;
var uInt8ArraySupported = null;
// var _areCookiesAvailable: boolean | undefined;
/**
 * Checks if document object is available
 */
var isDocumentObjectAvailable = Boolean((0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_0__.getDocument)());
/**
 * Checks if window object is available
 */
var isWindowObjectAvailable = Boolean((0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_0__.getWindow)());
/**
 * Checks if value is assigned to the given param.
 * @param value - The token from which the tenant id is to be extracted.
 * @returns True/false denoting if value is assigned to the param.
 */
function isValueAssigned(value) {
    /// <summary> takes a value and checks for undefined, null and empty string </summary>
    /// <param type="any"> value to be tested </param>
    /// <returns> true if value is null undefined or emptyString </returns>
    return !(value === _InternalConstants__WEBPACK_IMPORTED_MODULE_1__.STR_EMPTY || (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(value));
}
/**
 * Gets the tenant id from the tenant token.
 * @param apiKey - The token from which the tenant id is to be extracted.
 * @returns The tenant id.
 */
function getTenantId(apiKey) {
    if (apiKey) {
        var indexTenantId = apiKey.indexOf("-");
        if (indexTenantId > -1) {
            return apiKey.substring(0, indexTenantId);
        }
    }
    return _InternalConstants__WEBPACK_IMPORTED_MODULE_1__.STR_EMPTY;
}
/**
 * Checks if Uint8Array are available in the current environment. Safari and Firefox along with
 * ReactNative are known to not support Uint8Array properly.
 * @returns True if available, false otherwise.
 */
function isUint8ArrayAvailable() {
    if (uInt8ArraySupported === null) {
        uInt8ArraySupported = !(0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(Uint8Array) && !isSafariOrFirefox() && !(0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_0__.isReactNative)();
    }
    return uInt8ArraySupported;
}
/**
 * Checks if the value is a valid EventLatency.
 * @param value - The value that needs to be checked.
 * @returns True if the value is in AWTEventLatency, false otherwise.
 */
function isLatency(value) {
    if (value && (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isNumber)(value) && value >= 1 /* EventLatencyValue.Normal */ && value <= 4 /* EventLatencyValue.Immediate */) {
        return true;
    }
    return false;
}
/**
 * Sanitizes the Property. It checks the that the property name and value are valid. It also
 * checks/populates the correct type and pii of the property value.
 * @param name - property name                          - The property name.
 * @param property - The property value or an IEventProperty containing value,
 * type ,pii and customer content.
 * @returns IEventProperty containing valid name, value, pii and type or null if invalid.
 */
function sanitizeProperty(name, property, stringifyObjects) {
    // Check that property is valid
    if ((!property && !isValueAssigned(property)) || typeof name !== "string") {
        return null;
    }
    // Perf optimization -- only need to get the type once not multiple times
    var propType = typeof property;
    // If the property isn't IEventProperty (and is either string, number, boolean or array), convert it into one.
    if (propType === "string" || propType === "number" || propType === "boolean" || (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(property)) {
        property = { value: property };
    }
    else if (propType === "object" && !_microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_3__.ObjHasOwnProperty.call(property, "value")) {
        property = { value: stringifyObjects ? JSON.stringify(property) : property };
    }
    else if ((0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(property.value)
        || property.value === _InternalConstants__WEBPACK_IMPORTED_MODULE_1__.STR_EMPTY || (!(0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isString)(property.value)
        && !(0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isNumber)(property.value) && !(0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isBoolean)(property.value)
        && !(0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(property.value))) {
        // Since property is IEventProperty, we need to validate its value
        return null;
    }
    // We need to check that if the property value is an array, it is valid
    if ((0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(property.value) &&
        !isArrayValid(property.value)) {
        return null;
    }
    // If either pii or cc is set convert value to string (since only string pii/cc is allowed).
    // If the value is a complex type like an array that can't be converted to string we will drop
    // the property.
    if (!(0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(property.kind)) {
        if ((0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(property.value) || !isValueKind(property.kind)) {
            return null;
        }
        property.value = property.value.toString();
    }
    return property;
}
function getCommonSchemaMetaData(value, kind, type) {
    var encodedTypeValue = -1;
    if (!(0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(value)) {
        if (kind > 0) {
            if (kind === 32) {
                // encode customer content. Value can only be string. bit 13-16 are for cc
                encodedTypeValue = (1 << 13);
            }
            else if (kind <= 13) {
                // encode PII. Value can only be string. bits 5-12 are for Pii
                encodedTypeValue = (kind << 5);
            }
        }
        // isDataType checks that the "type" is a number so we don't need to check for undefined
        if (isDataType(type)) {
            // Data Type is provided and valid, so use that
            if (encodedTypeValue === -1) {
                // Don't return -1
                encodedTypeValue = 0;
            }
            encodedTypeValue |= type;
        }
        else {
            var propType = _fieldTypeEventPropMap[getFieldValueType(value)] || -1;
            if (encodedTypeValue !== -1 && propType !== -1) {
                // pii exists so we must return correct type
                encodedTypeValue |= propType;
            }
            else if (propType === 6 /* eEventPropertyType.Double */) {
                encodedTypeValue = propType;
            }
        }
    }
    return encodedTypeValue;
}
/**
 * @deprecated - Use the core.getCookieMgr().disable()
 * Force the SDK not to store and read any data from cookies.
 * Overriding the applicationinsights-core version for tree-shaking
 */
function disableCookies() {
    (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_4__.safeGetCookieMgr)(null).setEnabled(false);
}
/**
 * @deprecated - Use the oneDs.getCookieMgr().set()
 * Sets the value of a cookie.
 * @param name - Cookie name.
 * @param value - Cookie value.
 * @param days - Expiration days.
 */
function setCookie(name, value, days) {
    if ((0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_4__.areCookiesSupported)(null)) {
        (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_4__.safeGetCookieMgr)(null).set(name, value, days * 86400, null, "/");
    }
}
/**
 * @deprecated - Use the oneDs.getCookieMgr().del()
 * Deletes a cookie, by setting its expiration to -1.
 * @param name - Cookie name to delete.
 */
function deleteCookie(name) {
    if ((0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_4__.areCookiesSupported)(null)) {
        (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_4__.safeGetCookieMgr)(null).del(name);
    }
}
/**
 * @deprecated - Use the oneDs.getCookieMgr().get()
 * Gets the cookie value for the specified cookie.
 * if value is k1=v1&k2==v2 then will return 'v1' for key 'k1'
 * @param cookieName - Cookie name.
 */
function getCookie(name) {
    if ((0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_4__.areCookiesSupported)(null)) {
        return getCookieValue((0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_4__.safeGetCookieMgr)(null), name);
    }
    return _InternalConstants__WEBPACK_IMPORTED_MODULE_1__.STR_EMPTY;
}
/**
 * Helper to get and decode the cookie value using decodeURIComponent, this is for historical
 * backward compatibility where the document.cookie value was decoded before parsing.
 * @param cookieMgr - The cookie manager to use
 * @param name - The name of the cookie to get
 * @param decode - A flag to indicate whether the cookie value should be decoded
 * @returns The decoded cookie value (if available) otherwise an empty string.
 */
function getCookieValue(cookieMgr, name, decode) {
    if (decode === void 0) { decode = true; }
    var cookieValue;
    if (cookieMgr) {
        cookieValue = cookieMgr.get(name);
        if (decode && cookieValue && decodeURIComponent) {
            cookieValue = decodeURIComponent(cookieValue);
        }
    }
    return cookieValue || _InternalConstants__WEBPACK_IMPORTED_MODULE_1__.STR_EMPTY;
}
/**
 * Create a new guid.
 * @param style - The style of guid to generated, defaults to Digits
 * Digits (Default) : 32 digits separated by hyphens: 00000000-0000-0000-0000-000000000000
 * Braces - 32 digits separated by hyphens, enclosed in braces: {00000000-0000-0000-0000-000000000000}
 * Parentheses - 32 digits separated by hyphens, enclosed in parentheses: (00000000-0000-0000-0000-000000000000)
 * Numeric - 32 digits: 00000000000000000000000000000000
 * @returns The formatted guid.
 */
function createGuid(style) {
    if (style === void 0) { style = "D" /* GuidStyle.Digits */; }
    var theGuid = (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_5__.newGuid)();
    if (style === "B" /* GuidStyle.Braces */) {
        theGuid = "{" + theGuid + "}";
    }
    else if (style === "P" /* GuidStyle.Parentheses */) {
        theGuid = "(" + theGuid + ")";
    }
    else if (style === "N" /* GuidStyle.Numeric */) {
        theGuid = theGuid.replace(/-/g, _InternalConstants__WEBPACK_IMPORTED_MODULE_1__.STR_EMPTY);
    }
    return theGuid;
}
/**
 * Pass in the objects to merge as arguments.
 * @param obj1 - object to merge.  Set this argument to 'true' for a deep extend.
 * @param obj2 - object to merge.
 * @param obj3 - object to merge.
 * @param obj4 - object to merge.
 * @param obj5 - object to merge.
 * @returns The extended object.
 */
function extend(obj, obj2, obj3, obj4, obj5) {
    // Variables
    var extended = {};
    var deep = false;
    var i = 0;
    var length = arguments.length;
    var objProto = Object[_microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_3__.strShimPrototype];
    var theArgs = arguments;
    // Check if a deep merge
    if (objProto.toString.call(theArgs[0]) === "[object Boolean]") {
        deep = theArgs[0];
        i++;
    }
    // Loop through each object and conduct a merge
    for (; i < length; i++) {
        var obj = theArgs[i];
        (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.objForEachKey)(obj, function (prop, value) {
            // If deep merge and property is an object, merge properties
            if (deep && value && (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isObject)(value)) {
                if ((0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(value)) {
                    extended[prop] = extended[prop] || [];
                    (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.arrForEach)(value, function (arrayValue, arrayIndex) {
                        if (arrayValue && (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isObject)(arrayValue)) {
                            extended[prop][arrayIndex] = extend(true, extended[prop][arrayIndex], arrayValue);
                        }
                        else {
                            extended[prop][arrayIndex] = arrayValue;
                        }
                    });
                }
                else {
                    extended[prop] = extend(true, extended[prop], value);
                }
            }
            else {
                extended[prop] = value;
            }
        });
    }
    return extended;
}
var getTime = _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_5__.perfNow;
function isValueKind(value) {
    // Always assume that it's a number (no type checking) for performance as this is used during the JSON serialization
    if (value === 0 /* eValueKind.NotSet */ || ((value > 0 /* eValueKind.NotSet */ && value <= 13 /* eValueKind.Pii_IPV4AddressLegacy */) || value === 32 /* eValueKind.CustomerContent_GenericContent */)) {
        return true;
    }
    return false;
}
function isDataType(value) {
    // Remark: 0 returns false, but it doesn't affect encoding anyways
    // Always assume that it's a number (no type checking) for performance as this is used during the JSON serialization
    if (value >= 0 && value <= 9) {
        return true;
    }
    return false;
}
function isSafariOrFirefox() {
    var nav = (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_0__.getNavigator)();
    // If non-browser navigator will be undefined
    if (!(0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(nav) && nav.userAgent) {
        var ua = nav.userAgent.toLowerCase();
        if ((ua.indexOf("safari") >= 0 || ua.indexOf("firefox") >= 0) && ua.indexOf("chrome") < 0) {
            return true;
        }
    }
    return false;
}
function isArrayValid(value) {
    return value.length > 0;
}
function setProcessTelemetryTimings(event, identifier) {
    var evt = event;
    evt.timings = evt.timings || {};
    evt.timings.processTelemetryStart = evt.timings.processTelemetryStart || {};
    evt.timings.processTelemetryStart[identifier] = getTime();
}
/**
 * Returns a bitwise value for the FieldValueSanitizerType enum representing the decoded type of the passed value
 * @param value The value to determine the type
 */
function getFieldValueType(value) {
    var theType = 0 /* FieldValueSanitizerType.NotSet */;
    if (value !== null && value !== undefined) {
        var objType = typeof value;
        if (objType === "string") {
            theType = 1 /* FieldValueSanitizerType.String */;
        }
        else if (objType === "number") {
            theType = 2 /* FieldValueSanitizerType.Number */;
        }
        else if (objType === "boolean") {
            theType = 3 /* FieldValueSanitizerType.Boolean */;
        }
        else if (objType === _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_3__.strShimObject) {
            theType = 4 /* FieldValueSanitizerType.Object */;
            if ((0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(value)) {
                theType = 4096 /* FieldValueSanitizerType.Array */;
                if (value.length > 0) {
                    // Empty arrays are not supported and are considered to be the same as null
                    theType |= getFieldValueType(value[0]);
                }
            }
            else if (_microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_3__.ObjHasOwnProperty.call(value, "value")) {
                // Looks like an IEventProperty
                theType = 8192 /* FieldValueSanitizerType.EventProperty */ | getFieldValueType(value.value);
            }
        }
    }
    return theType;
}
var Utils = {
    Version: Version,
    FullVersionString: FullVersionString,
    strUndefined: _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_3__.strShimUndefined,
    strObject: _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_3__.strShimObject,
    Undefined: _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_3__.strShimUndefined,
    arrForEach: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.arrForEach,
    arrIndexOf: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.arrIndexOf,
    arrMap: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.arrMap,
    arrReduce: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.arrReduce,
    objKeys: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.objKeys,
    toISOString: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.toISOString,
    isReactNative: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_0__.isReactNative,
    isString: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isString,
    isNumber: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isNumber,
    isBoolean: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isBoolean,
    isFunction: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isFunction,
    isArray: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isArray,
    isObject: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isObject,
    strTrim: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.strTrim,
    isDocumentObjectAvailable: isDocumentObjectAvailable,
    isWindowObjectAvailable: isWindowObjectAvailable,
    isValueAssigned: isValueAssigned,
    getTenantId: getTenantId,
    isBeaconsSupported: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_0__.isBeaconsSupported,
    isUint8ArrayAvailable: isUint8ArrayAvailable,
    isLatency: isLatency,
    sanitizeProperty: sanitizeProperty,
    getISOString: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.toISOString,
    useXDomainRequest: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_0__.useXDomainRequest,
    getCommonSchemaMetaData: getCommonSchemaMetaData,
    cookieAvailable: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_4__.areCookiesSupported,
    disallowsSameSiteNone: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_4__.uaDisallowsSameSiteNone,
    setCookie: setCookie,
    deleteCookie: deleteCookie,
    getCookie: getCookie,
    createGuid: createGuid,
    extend: extend,
    getTime: getTime,
    isValueKind: isValueKind,
    isArrayValid: isArrayValid,
    objDefineAccessors: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.objDefineAccessors,
    addPageUnloadEventListener: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_6__.addPageUnloadEventListener,
    setProcessTelemetryTimings: setProcessTelemetryTimings,
    addEventHandler: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_6__.addEventHandler,
    getFieldValueType: getFieldValueType,
    strEndsWith: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.strEndsWith,
    objForEachKey: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.objForEachKey
};
/**
 * Provides a collection of utility functions, included for backward compatibility with previous releases.
 * @deprecated Marking this instance as deprecated in favor of direct usage of the helper functions
 * as direct usage provides better tree-shaking and minification by avoiding the inclusion of the unused items
 * in your resulting code.
 * Overriding the applicationinsights-core version for tree-shaking
 */
var CoreUtils = {
    _canUseCookies: undefined,
    isTypeof: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isTypeof,
    isUndefined: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isUndefined,
    isNullOrUndefined: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined,
    hasOwnProperty: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.hasOwnProperty,
    isFunction: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isFunction,
    isObject: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isObject,
    isDate: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isDate,
    isArray: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isArray,
    isError: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isError,
    isString: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isString,
    isNumber: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isNumber,
    isBoolean: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.isBoolean,
    toISOString: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.toISOString,
    arrForEach: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.arrForEach,
    arrIndexOf: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.arrIndexOf,
    arrMap: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.arrMap,
    arrReduce: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.arrReduce,
    strTrim: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.strTrim,
    objCreate: _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_7__.objCreateFn,
    objKeys: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.objKeys,
    objDefineAccessors: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.objDefineAccessors,
    addEventHandler: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_6__.addEventHandler,
    dateNow: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.dateNow,
    isIE: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_0__.isIE,
    disableCookies: disableCookies,
    newGuid: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_5__.newGuid,
    perfNow: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_5__.perfNow,
    newId: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_8__.newId,
    randomValue: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_8__.randomValue,
    random32: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_8__.random32,
    mwcRandomSeed: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_8__.mwcRandomSeed,
    mwcRandom32: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_8__.mwcRandom32,
    generateW3CId: _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_5__.generateW3CId
};
/**
 * Helper to identify whether we are running in a chromium based browser environment
 */
function isChromium() {
    return !!(0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_0__.getGlobalInst)("chrome");
}
/**
 * Create and open an XMLHttpRequest object
 * @param method - The request method
 * @param urlString - The url
 * @param withCredentials - Option flag indicating that credentials should be sent
 * @param disabled - Optional flag indicating that the XHR object should be marked as disabled and not tracked (default is false)
 * @param isSync - Optional flag indicating if the instance should be a synchronous request (defaults to false)
 * @param timeout - Optional value identifying the timeout value that should be assigned to the XHR request
 * @returns A new opened XHR request
 */
function openXhr(method, urlString, withCredentials, disabled, isSync, timeout) {
    if (disabled === void 0) { disabled = false; }
    if (isSync === void 0) { isSync = false; }
    function _wrapSetXhrProp(xhr, prop, value) {
        try {
            xhr[prop] = value;
        }
        catch (e) {
            // - Wrapping as depending on the environment setting the property may fail (non-terminally)
        }
    }
    var xhr = new XMLHttpRequest();
    if (disabled) {
        // Tag the instance so it's not tracked (trackDependency)
        // If the environment has locked down the XMLHttpRequest (preventExtensions and/or freeze), this would
        // cause the request to fail and we no telemetry would be sent
        _wrapSetXhrProp(xhr, strDisabledPropertyName, disabled);
    }
    if (withCredentials) {
        // Some libraries require that the withCredentials flag is set "before" open and
        // - Wrapping as IE 10 has started throwing when setting before open
        _wrapSetXhrProp(xhr, strWithCredentials, withCredentials);
    }
    xhr.open(method, urlString, !isSync);
    if (withCredentials) {
        // withCredentials should be set AFTER open (https://xhr.spec.whatwg.org/#the-withcredentials-attribute)
        // And older firefox instances from 11+ will throw for sync events (current versions don't) which happens during unload processing
        _wrapSetXhrProp(xhr, strWithCredentials, withCredentials);
    }
    // Only set the timeout for asynchronous requests as
    // "Timeout shouldn't be used for synchronous XMLHttpRequests requests used in a document environment or it will throw an InvalidAccessError exception.""
    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/timeout
    if (!isSync && timeout) {
        _wrapSetXhrProp(xhr, strTimeout, timeout);
    }
    return xhr;
}
//# sourceMappingURL=Utils.js.map

/***/ }),

/***/ 527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createEnumMap": () => (/* binding */ createEnumMap),
/* harmony export */   "createEnumStyle": () => (/* binding */ createEnumStyle),
/* harmony export */   "createValueMap": () => (/* binding */ createValueMap)
/* harmony export */ });
/* harmony import */ var _JavaScriptSDK_HelperFuncs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(528);
/*
 * Application Insights JavaScript SDK - Core, 2.8.16
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */



/**
 * Create an enum style object which has both the key => value and value => key mappings
 * @param values - The values to populate on the new object
 * @returns
 */
function createEnumStyle(values) {
    var enumClass = {};
    (0,_JavaScriptSDK_HelperFuncs__WEBPACK_IMPORTED_MODULE_0__.objForEachKey)(values, function (field, value) {
        enumClass[field] = value;
        enumClass[value] = field;
    });
    return (0,_JavaScriptSDK_HelperFuncs__WEBPACK_IMPORTED_MODULE_0__.deepFreeze)(enumClass);
}
/**
 * Create a 2 index map that maps an enum's key as both the key and value, X["key"] => "key" and X[0] => "keyof 0".
 * @param values - The values to populate on the new object
 * @returns
 */
function createEnumMap(values) {
    var mapClass = {};
    (0,_JavaScriptSDK_HelperFuncs__WEBPACK_IMPORTED_MODULE_0__.objForEachKey)(values, function (field, value) {
        mapClass[field] = field;
        mapClass[value] = field;
    });
    return (0,_JavaScriptSDK_HelperFuncs__WEBPACK_IMPORTED_MODULE_0__.deepFreeze)(mapClass);
}
/**
 * Create a 2 index map that maps an enum's key and value to the defined map value, X["key"] => mapValue and X[0] => mapValue.
 * Generic values
 * - E = the const enum type (typeof eRequestHeaders);
 * - V = Identifies the valid values for the keys, this should include both the enum numeric and string key of the type. The
 * resulting "Value" of each entry identifies the valid values withing the assignments.
 * @param values - The values to populate on the new object
 * @returns
 */
function createValueMap(values) {
    var mapClass = {};
    (0,_JavaScriptSDK_HelperFuncs__WEBPACK_IMPORTED_MODULE_0__.objForEachKey)(values, function (field, value) {
        mapClass[field] = value[1];
        mapClass[value[0]] = value[1];
    });
    return (0,_JavaScriptSDK_HelperFuncs__WEBPACK_IMPORTED_MODULE_0__.deepFreeze)(mapClass);
}
//# sourceMappingURL=EnumHelperFuncs.js.map

/***/ }),

/***/ 563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsDiscardedReason": () => (/* binding */ EventsDiscardedReason)
/* harmony export */ });
/* harmony import */ var _JavaScriptSDK_Enums_EnumHelperFuncs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(527);
/*
 * Application Insights JavaScript SDK - Core, 2.8.16
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */



/**
 * The EventsDiscardedReason enumeration contains a set of values that specify the reason for discarding an event.
 */
var EventsDiscardedReason = (0,_JavaScriptSDK_Enums_EnumHelperFuncs__WEBPACK_IMPORTED_MODULE_0__.createEnumStyle)({
    /**
     * Unknown.
     */
    Unknown: 0 /* eEventsDiscardedReason.Unknown */,
    /**
     * Status set to non-retryable.
     */
    NonRetryableStatus: 1 /* eEventsDiscardedReason.NonRetryableStatus */,
    /**
     * The event is invalid.
     */
    InvalidEvent: 2 /* eEventsDiscardedReason.InvalidEvent */,
    /**
     * The size of the event is too large.
     */
    SizeLimitExceeded: 3 /* eEventsDiscardedReason.SizeLimitExceeded */,
    /**
     * The server is not accepting events from this instrumentation key.
     */
    KillSwitch: 4 /* eEventsDiscardedReason.KillSwitch */,
    /**
     * The event queue is full.
     */
    QueueFull: 5 /* eEventsDiscardedReason.QueueFull */
});
//# sourceMappingURL=EventsDiscardedReason.js.map

/***/ }),

/***/ 555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTelemetryPlugin": () => (/* binding */ BaseTelemetryPlugin)
/* harmony export */ });
/* harmony import */ var _microsoft_dynamicproto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(536);
/* harmony import */ var _DynamicConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(530);
/* harmony import */ var _HelperFuncs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(528);
/* harmony import */ var _InternalConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(531);
/* harmony import */ var _ProcessTelemetryContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(551);
/* harmony import */ var _UnloadHandlerContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(556);
/*
 * Application Insights JavaScript SDK - Core, 2.8.16
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */









var strGetPlugin = "getPlugin";
/**
 * BaseTelemetryPlugin provides a basic implementation of the ITelemetryPlugin interface so that plugins
 * can avoid implementation the same set of boiler plate code as well as provide a base
 * implementation so that new default implementations can be added without breaking all plugins.
 */
var BaseTelemetryPlugin = /** @class */ (function () {
    function BaseTelemetryPlugin() {
        var _self = this; // Setting _self here as it's used outside of the dynamicProto as well
        // NOTE!: DON'T set default values here, instead set them in the _initDefaults() function as it is also called during teardown()
        var _isinitialized;
        var _rootCtx; // Used as the root context, holding the current config and initialized core
        var _nextPlugin; // Used for backward compatibility where plugins don't call the main pipeline
        var _unloadHandlerContainer;
        var _hooks;
        _initDefaults();
        (0,_microsoft_dynamicproto_js__WEBPACK_IMPORTED_MODULE_0__["default"])(BaseTelemetryPlugin, _self, function (_self) {
            _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_INITIALIZE /* @min:%2einitialize */] = function (config, core, extensions, pluginChain) {
                _setDefaults(config, core, pluginChain);
                _isinitialized = true;
            };
            _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_TEARDOWN /* @min:%2eteardown */] = function (unloadCtx, unloadState) {
                var _a;
                // If this plugin has already been torn down (not operational) or is not initialized (core is not set)
                // or the core being used for unload was not the same core used for initialization.
                var core = _self[_InternalConstants__WEBPACK_IMPORTED_MODULE_2__.STR_CORE /* @min:%2ecore */];
                if (!core || (unloadCtx && core !== unloadCtx[_InternalConstants__WEBPACK_IMPORTED_MODULE_2__.STR_CORE /* @min:%2ecore */]())) {
                    // Do Nothing as either the plugin is not initialized or was not initialized by the current core
                    return;
                }
                var result;
                var unloadDone = false;
                var theUnloadCtx = unloadCtx || (0,_ProcessTelemetryContext__WEBPACK_IMPORTED_MODULE_3__.createProcessTelemetryUnloadContext)(null, core, _nextPlugin && _nextPlugin[strGetPlugin] ? _nextPlugin[strGetPlugin]() : _nextPlugin);
                var theUnloadState = unloadState || (_a = {
                        reason: 0 /* TelemetryUnloadReason.ManualTeardown */
                    },
                    _a[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_IS_ASYNC /* @min:isAsync */] = false,
                    _a);
                function _unloadCallback() {
                    if (!unloadDone) {
                        unloadDone = true;
                        _unloadHandlerContainer.run(theUnloadCtx, unloadState);
                        var oldHooks = _hooks;
                        _hooks = [];
                        // Remove all instrumentation hooks
                        (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_4__.arrForEach)(oldHooks, function (fn) {
                            fn.rm();
                        });
                        if (result === true) {
                            theUnloadCtx[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_PROCESS_NEXT /* @min:%2eprocessNext */](theUnloadState);
                        }
                        _initDefaults();
                    }
                }
                if (!_self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN__DO_TEARDOWN /* @min:%2e_doTeardown */] || _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN__DO_TEARDOWN /* @min:%2e_doTeardown */](theUnloadCtx, theUnloadState, _unloadCallback) !== true) {
                    _unloadCallback();
                }
                else {
                    // Tell the caller that we will be calling processNext()
                    result = true;
                }
                return result;
            };
            _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_UPDATE /* @min:%2eupdate */] = function (updateCtx, updateState) {
                // If this plugin has already been torn down (not operational) or is not initialized (core is not set)
                // or the core being used for unload was not the same core used for initialization.
                var core = _self[_InternalConstants__WEBPACK_IMPORTED_MODULE_2__.STR_CORE /* @min:%2ecore */];
                if (!core || (updateCtx && core !== updateCtx[_InternalConstants__WEBPACK_IMPORTED_MODULE_2__.STR_CORE /* @min:%2ecore */]())) {
                    // Do Nothing
                    return;
                }
                var result;
                var updateDone = false;
                var theUpdateCtx = updateCtx || (0,_ProcessTelemetryContext__WEBPACK_IMPORTED_MODULE_3__.createProcessTelemetryUpdateContext)(null, core, _nextPlugin && _nextPlugin[strGetPlugin] ? _nextPlugin[strGetPlugin]() : _nextPlugin);
                var theUpdateState = updateState || {
                    reason: 0 /* TelemetryUpdateReason.Unknown */
                };
                function _updateCallback() {
                    if (!updateDone) {
                        updateDone = true;
                        _setDefaults(theUpdateCtx.getCfg(), theUpdateCtx.core(), theUpdateCtx[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_GET_NEXT /* @min:%2egetNext */]());
                    }
                }
                if (!_self._doUpdate || _self._doUpdate(theUpdateCtx, theUpdateState, _updateCallback) !== true) {
                    _updateCallback();
                }
                else {
                    result = true;
                }
                return result;
            };
            _self._addHook = function (hooks) {
                if (hooks) {
                    if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_4__.isArray)(hooks)) {
                        _hooks = _hooks.concat(hooks);
                    }
                    else {
                        _hooks[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_PUSH /* @min:%2epush */](hooks);
                    }
                }
            };
            (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_4__.proxyFunctionAs)(_self, "_addUnloadCb", function () { return _unloadHandlerContainer; }, "add");
        });
        // These are added after the dynamicProto so that are not moved to the prototype
        _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_DIAG_LOG /* @min:%2ediagLog */] = function (itemCtx) {
            return _getTelCtx(itemCtx)[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_DIAG_LOG /* @min:%2ediagLog */]();
        };
        _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_IS_INITIALIZED /* @min:%2eisInitialized */] = function () {
            return _isinitialized;
        };
        _self.setInitialized = function (isInitialized) {
            _isinitialized = isInitialized;
        };
        // _self.getNextPlugin = () => DO NOT IMPLEMENT
        // Sub-classes of this base class *should* not be relying on this value and instead
        // should use processNext() function. If you require access to the plugin use the
        // IProcessTelemetryContext.getNext().getPlugin() while in the pipeline, Note getNext() may return null.
        _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SET_NEXT_PLUGIN /* @min:%2esetNextPlugin */] = function (next) {
            _nextPlugin = next;
        };
        _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_PROCESS_NEXT /* @min:%2eprocessNext */] = function (env, itemCtx) {
            if (itemCtx) {
                // Normal core execution sequence
                itemCtx[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_PROCESS_NEXT /* @min:%2eprocessNext */](env);
            }
            else if (_nextPlugin && (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_4__.isFunction)(_nextPlugin[_InternalConstants__WEBPACK_IMPORTED_MODULE_2__.STR_PROCESS_TELEMETRY /* @min:%2eprocessTelemetry */])) {
                // Looks like backward compatibility or out of band processing. And as it looks
                // like a ITelemetryPlugin or ITelemetryPluginChain, just call processTelemetry
                _nextPlugin[_InternalConstants__WEBPACK_IMPORTED_MODULE_2__.STR_PROCESS_TELEMETRY /* @min:%2eprocessTelemetry */](env, null);
            }
        };
        _self._getTelCtx = _getTelCtx;
        function _getTelCtx(currentCtx) {
            if (currentCtx === void 0) { currentCtx = null; }
            var itemCtx = currentCtx;
            if (!itemCtx) {
                var rootCtx = _rootCtx || (0,_ProcessTelemetryContext__WEBPACK_IMPORTED_MODULE_3__.createProcessTelemetryContext)(null, {}, _self[_InternalConstants__WEBPACK_IMPORTED_MODULE_2__.STR_CORE /* @min:%2ecore */]);
                // tslint:disable-next-line: prefer-conditional-expression
                if (_nextPlugin && _nextPlugin[strGetPlugin]) {
                    // Looks like a chain object
                    itemCtx = rootCtx[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_CREATE_NEW /* @min:%2ecreateNew */](null, _nextPlugin[strGetPlugin]);
                }
                else {
                    itemCtx = rootCtx[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_CREATE_NEW /* @min:%2ecreateNew */](null, _nextPlugin);
                }
            }
            return itemCtx;
        }
        function _setDefaults(config, core, pluginChain) {
            if (config) {
                // Make sure the extensionConfig exists
                (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_4__.setValue)(config, _InternalConstants__WEBPACK_IMPORTED_MODULE_2__.STR_EXTENSION_CONFIG, [], null, _HelperFuncs__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined);
            }
            if (!pluginChain && core) {
                // Get the first plugin from the core
                pluginChain = core[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_GET_PROCESS_TEL_CONT0 /* @min:%2egetProcessTelContext */]()[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_GET_NEXT /* @min:%2egetNext */]();
            }
            var nextPlugin = _nextPlugin;
            if (_nextPlugin && _nextPlugin[strGetPlugin]) {
                // If it looks like a proxy/chain then get the plugin
                nextPlugin = _nextPlugin[strGetPlugin]();
            }
            // Support legacy plugins where core was defined as a property
            _self[_InternalConstants__WEBPACK_IMPORTED_MODULE_2__.STR_CORE /* @min:%2ecore */] = core;
            _rootCtx = (0,_ProcessTelemetryContext__WEBPACK_IMPORTED_MODULE_3__.createProcessTelemetryContext)(pluginChain, config, core, nextPlugin);
        }
        function _initDefaults() {
            _isinitialized = false;
            _self[_InternalConstants__WEBPACK_IMPORTED_MODULE_2__.STR_CORE /* @min:%2ecore */] = null;
            _rootCtx = null;
            _nextPlugin = null;
            _hooks = [];
            _unloadHandlerContainer = (0,_UnloadHandlerContainer__WEBPACK_IMPORTED_MODULE_5__.createUnloadHandlerContainer)();
        }
    }
// Removed Stub for BaseTelemetryPlugin.prototype.initialize.
// Removed Stub for BaseTelemetryPlugin.prototype.teardown.
// Removed Stub for BaseTelemetryPlugin.prototype.update.
// Removed Stub for BaseTelemetryPlugin.prototype._addUnloadCb.
// Removed Stub for BaseTelemetryPlugin.prototype._addHook.
    // This is a workaround for an IE8 bug when using dynamicProto() with classes that don't have any
    // non-dynamic functions or static properties/functions when using uglify-js to minify the resulting code.
    // this will be removed when ES3 support is dropped.
    BaseTelemetryPlugin.__ieDyn=1;

    return BaseTelemetryPlugin;
}());

//# sourceMappingURL=BaseTelemetryPlugin.js.map

/***/ }),

/***/ 543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_gblCookieMgr": () => (/* binding */ _gblCookieMgr),
/* harmony export */   "areCookiesSupported": () => (/* binding */ areCookiesSupported),
/* harmony export */   "createCookieMgr": () => (/* binding */ createCookieMgr),
/* harmony export */   "safeGetCookieMgr": () => (/* binding */ safeGetCookieMgr),
/* harmony export */   "uaDisallowsSameSiteNone": () => (/* binding */ uaDisallowsSameSiteNone)
/* harmony export */ });
/* harmony import */ var _DynamicConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(530);
/* harmony import */ var _DiagnosticLogger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(537);
/* harmony import */ var _EnvUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(538);
/* harmony import */ var _HelperFuncs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(528);
/* harmony import */ var _InternalConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(531);
/*
 * Application Insights JavaScript SDK - Core, 2.8.16
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */





var strToGMTString = "toGMTString";
var strToUTCString = "toUTCString";
var strCookie = "cookie";
var strExpires = "expires";
var strEnabled = "enabled";
var strIsCookieUseDisabled = "isCookieUseDisabled";
var strDisableCookiesUsage = "disableCookiesUsage";
var strConfigCookieMgr = "_ckMgr";
var _supportsCookies = null;
var _allowUaSameSite = null;
var _parsedCookieValue = null;
var _doc = (0,_EnvUtils__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
var _cookieCache = {};
var _globalCookieConfig = {};
/**
 * @ignore
 * DO NOT USE or export from the module, this is exposed as public to support backward compatibility of previous static utility methods only.
 * If you want to manager cookies either use the ICookieMgr available from the core instance via getCookieMgr() or create
 * your own instance of the CookieMgr and use that.
 * Using this directly for enabling / disabling cookie handling will not only affect your usage but EVERY user of cookies.
 * Example, if you are using a shared component that is also using Application Insights you will affect their cookie handling.
 * @param logger - The DiagnosticLogger to use for reporting errors.
 */
function _gblCookieMgr(config, logger) {
    // Stash the global instance against the BaseCookieMgr class
    var inst = createCookieMgr[strConfigCookieMgr] || _globalCookieConfig[strConfigCookieMgr];
    if (!inst) {
        // Note: not using the getSetValue() helper as that would require always creating a temporary cookieMgr
        // that ultimately is never used
        inst = createCookieMgr[strConfigCookieMgr] = createCookieMgr(config, logger);
        _globalCookieConfig[strConfigCookieMgr] = inst;
    }
    return inst;
}
function _isMgrEnabled(cookieMgr) {
    if (cookieMgr) {
        return cookieMgr.isEnabled();
    }
    return true;
}
function _createCookieMgrConfig(rootConfig) {
    var cookieMgrCfg = rootConfig[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_COOKIE_CFG /* @min:%2ecookieCfg */] = rootConfig[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_COOKIE_CFG /* @min:%2ecookieCfg */] || {};
    // Sets the values from the root config if not already present on the cookieMgrCfg
    (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.setValue)(cookieMgrCfg, "domain", rootConfig.cookieDomain, _HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isNotNullOrUndefined, _HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined);
    (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.setValue)(cookieMgrCfg, "path", rootConfig.cookiePath || "/", null, _HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined);
    if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(cookieMgrCfg[strEnabled])) {
        // Set the enabled from the provided setting or the legacy root values
        var cookieEnabled = void 0;
        if (!(0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(rootConfig[strIsCookieUseDisabled])) {
            cookieEnabled = !rootConfig[strIsCookieUseDisabled];
        }
        if (!(0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(rootConfig[strDisableCookiesUsage])) {
            cookieEnabled = !rootConfig[strDisableCookiesUsage];
        }
        cookieMgrCfg[strEnabled] = cookieEnabled;
    }
    return cookieMgrCfg;
}
function _isIgnoredCookie(cookieMgrCfg, name) {
    if (name && cookieMgrCfg && (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isArray)(cookieMgrCfg.ignoreCookies)) {
        return cookieMgrCfg.ignoreCookies[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_INDEX_OF /* @min:%2eindexOf */](name) !== -1;
    }
    return false;
}
function _isBlockedCookie(cookieMgrCfg, name) {
    if (name && cookieMgrCfg && (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isArray)(cookieMgrCfg.blockedCookies)) {
        if (cookieMgrCfg.blockedCookies[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_INDEX_OF /* @min:%2eindexOf */](name) !== -1) {
            return true;
        }
    }
    return _isIgnoredCookie(cookieMgrCfg, name);
}
/**
 * Helper to return the ICookieMgr from the core (if not null/undefined) or a default implementation
 * associated with the configuration or a legacy default.
 * @param core
 * @param config
 * @returns
 */
function safeGetCookieMgr(core, config) {
    var cookieMgr;
    if (core) {
        // Always returns an instance
        cookieMgr = core.getCookieMgr();
    }
    else if (config) {
        var cookieCfg = config[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_COOKIE_CFG /* @min:%2ecookieCfg */];
        if (cookieCfg[strConfigCookieMgr]) {
            cookieMgr = cookieCfg[strConfigCookieMgr];
        }
        else {
            cookieMgr = createCookieMgr(config);
        }
    }
    if (!cookieMgr) {
        // Get or initialize the default global (legacy) cookie manager if we couldn't find one
        cookieMgr = _gblCookieMgr(config, (core || {})[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_LOGGER /* @min:%2elogger */]);
    }
    return cookieMgr;
}
function createCookieMgr(rootConfig, logger) {
    var _a;
    var cookieMgrConfig = _createCookieMgrConfig(rootConfig || _globalCookieConfig);
    var _path = cookieMgrConfig.path || "/";
    var _domain = cookieMgrConfig.domain;
    // Explicitly checking against false, so that setting to undefined will === true
    var _enabled = cookieMgrConfig[strEnabled] !== false;
    var cookieMgr = (_a = {
            isEnabled: function () {
                var enabled = _enabled && areCookiesSupported(logger);
                // Using an indirect lookup for any global cookie manager to support tree shaking for SDK's
                // that don't use the "applicationinsights-core" version of the default cookie function
                var gblManager = _globalCookieConfig[strConfigCookieMgr];
                if (enabled && gblManager && cookieMgr !== gblManager) {
                    // Make sure the GlobalCookie Manager instance (if not this instance) is also enabled.
                    // As the global (deprecated) functions may have been called (for backward compatibility)
                    enabled = _isMgrEnabled(gblManager);
                }
                return enabled;
            }
        },
        _a[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SET_ENABLED /* @min:setEnabled */] = function (value) {
            // Explicitly checking against false, so that setting to undefined will === true
            _enabled = value !== false;
        },
        _a.set = function (name, value, maxAgeSec, domain, path) {
            var result = false;
            if (_isMgrEnabled(cookieMgr) && !_isBlockedCookie(cookieMgrConfig, name)) {
                var values = {};
                var theValue = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.strTrim)(value || _InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_EMPTY);
                var idx = theValue[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_INDEX_OF /* @min:%2eindexOf */](";");
                if (idx !== -1) {
                    theValue = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.strTrim)(value[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SUBSTRING /* @min:%2esubstring */](0, idx));
                    values = _extractParts(value[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SUBSTRING /* @min:%2esubstring */](idx + 1));
                }
                // Only update domain if not already present (isUndefined) and the value is truthy (not null, undefined or empty string)
                (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.setValue)(values, "domain", domain || _domain, _HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isTruthy, _HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isUndefined);
                if (!(0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(maxAgeSec)) {
                    var _isIE = (0,_EnvUtils__WEBPACK_IMPORTED_MODULE_0__.isIE)();
                    if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(values[strExpires])) {
                        var nowMs = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.dateNow)();
                        // Only add expires if not already present
                        var expireMs = nowMs + (maxAgeSec * 1000);
                        // Sanity check, if zero or -ve then ignore
                        if (expireMs > 0) {
                            var expiry = new Date();
                            expiry.setTime(expireMs);
                            (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.setValue)(values, strExpires, _formatDate(expiry, !_isIE ? strToUTCString : strToGMTString) || _formatDate(expiry, _isIE ? strToGMTString : strToUTCString) || _InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_EMPTY, _HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isTruthy);
                        }
                    }
                    if (!_isIE) {
                        // Only replace if not already present
                        (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.setValue)(values, "max-age", _InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_EMPTY + maxAgeSec, null, _HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isUndefined);
                    }
                }
                var location_1 = (0,_EnvUtils__WEBPACK_IMPORTED_MODULE_0__.getLocation)();
                if (location_1 && location_1.protocol === "https:") {
                    (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.setValue)(values, "secure", null, null, _HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isUndefined);
                    // Only set same site if not also secure
                    if (_allowUaSameSite === null) {
                        _allowUaSameSite = !uaDisallowsSameSiteNone(((0,_EnvUtils__WEBPACK_IMPORTED_MODULE_0__.getNavigator)() || {})[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_USER_AGENT /* @min:%2euserAgent */]);
                    }
                    if (_allowUaSameSite) {
                        (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.setValue)(values, "SameSite", "None", null, _HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isUndefined);
                    }
                }
                (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.setValue)(values, "path", path || _path, null, _HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isUndefined);
                var setCookieFn = cookieMgrConfig.setCookie || _setCookieValue;
                setCookieFn(name, _formatCookieValue(theValue, values));
                result = true;
            }
            return result;
        },
        _a.get = function (name) {
            var value = _InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_EMPTY;
            if (_isMgrEnabled(cookieMgr) && !_isIgnoredCookie(cookieMgrConfig, name)) {
                value = (cookieMgrConfig.getCookie || _getCookieValue)(name);
            }
            return value;
        },
        _a.del = function (name, path) {
            var result = false;
            if (_isMgrEnabled(cookieMgr)) {
                // Only remove the cookie if the manager and cookie support has not been disabled
                result = cookieMgr.purge(name, path);
            }
            return result;
        },
        _a.purge = function (name, path) {
            var _a;
            var result = false;
            if (areCookiesSupported(logger)) {
                // Setting the expiration date in the past immediately removes the cookie
                var values = (_a = {},
                    _a["path"] = path ? path : "/",
                    _a[strExpires] = "Thu, 01 Jan 1970 00:00:01 GMT",
                    _a);
                if (!(0,_EnvUtils__WEBPACK_IMPORTED_MODULE_0__.isIE)()) {
                    // Set max age to expire now
                    values["max-age"] = "0";
                }
                var delCookie = cookieMgrConfig.delCookie || _setCookieValue;
                delCookie(name, _formatCookieValue(_InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_EMPTY, values));
                result = true;
            }
            return result;
        },
        _a);
    // Associated this cookie manager with the config
    cookieMgr[strConfigCookieMgr] = cookieMgr;
    return cookieMgr;
}
/*
* Helper method to tell if document.cookie object is supported by the runtime
*/
function areCookiesSupported(logger) {
    if (_supportsCookies === null) {
        _supportsCookies = false;
        try {
            var doc = _doc || {};
            _supportsCookies = doc[strCookie] !== undefined;
        }
        catch (e) {
            (0,_DiagnosticLogger__WEBPACK_IMPORTED_MODULE_4__._throwInternal)(logger, 2 /* eLoggingSeverity.WARNING */, 68 /* _eInternalMessageId.CannotAccessCookie */, "Cannot access document.cookie - " + (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.getExceptionName)(e), { exception: (0,_EnvUtils__WEBPACK_IMPORTED_MODULE_0__.dumpObj)(e) });
        }
    }
    return _supportsCookies;
}
function _extractParts(theValue) {
    var values = {};
    if (theValue && theValue[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_LENGTH /* @min:%2elength */]) {
        var parts = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.strTrim)(theValue)[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SPLIT /* @min:%2esplit */](";");
        (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.arrForEach)(parts, function (thePart) {
            thePart = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.strTrim)(thePart || _InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_EMPTY);
            if (thePart) {
                var idx = thePart[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_INDEX_OF /* @min:%2eindexOf */]("=");
                if (idx === -1) {
                    values[thePart] = null;
                }
                else {
                    values[(0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.strTrim)(thePart[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SUBSTRING /* @min:%2esubstring */](0, idx))] = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.strTrim)(thePart[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SUBSTRING /* @min:%2esubstring */](idx + 1));
                }
            }
        });
    }
    return values;
}
function _formatDate(theDate, func) {
    if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isFunction)(theDate[func])) {
        return theDate[func]();
    }
    return null;
}
function _formatCookieValue(value, values) {
    var cookieValue = value || _InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_EMPTY;
    (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.objForEachKey)(values, function (name, theValue) {
        cookieValue += "; " + name + (!(0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(theValue) ? "=" + theValue : _InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_EMPTY);
    });
    return cookieValue;
}
function _getCookieValue(name) {
    var cookieValue = _InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_EMPTY;
    if (_doc) {
        var theCookie = _doc[strCookie] || _InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_EMPTY;
        if (_parsedCookieValue !== theCookie) {
            _cookieCache = _extractParts(theCookie);
            _parsedCookieValue = theCookie;
        }
        cookieValue = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.strTrim)(_cookieCache[name] || _InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_EMPTY);
    }
    return cookieValue;
}
function _setCookieValue(name, cookieValue) {
    if (_doc) {
        _doc[strCookie] = name + "=" + cookieValue;
    }
}
function uaDisallowsSameSiteNone(userAgent) {
    if (!(0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isString)(userAgent)) {
        return false;
    }
    // Cover all iOS based browsers here. This includes:
    // - Safari on iOS 12 for iPhone, iPod Touch, iPad
    // - WkWebview on iOS 12 for iPhone, iPod Touch, iPad
    // - Chrome on iOS 12 for iPhone, iPod Touch, iPad
    // All of which are broken by SameSite=None, because they use the iOS networking stack
    if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.strContains)(userAgent, "CPU iPhone OS 12") || (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.strContains)(userAgent, "iPad; CPU OS 12")) {
        return true;
    }
    // Cover Mac OS X based browsers that use the Mac OS networking stack. This includes:
    // - Safari on Mac OS X
    // This does not include:
    // - Internal browser on Mac OS X
    // - Chrome on Mac OS X
    // - Chromium on Mac OS X
    // Because they do not use the Mac OS networking stack.
    if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.strContains)(userAgent, "Macintosh; Intel Mac OS X 10_14") && (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.strContains)(userAgent, "Version/") && (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.strContains)(userAgent, "Safari")) {
        return true;
    }
    // Cover Mac OS X internal browsers that use the Mac OS networking stack. This includes:
    // - Internal browser on Mac OS X
    // This does not include:
    // - Safari on Mac OS X
    // - Chrome on Mac OS X
    // - Chromium on Mac OS X
    // Because they do not use the Mac OS networking stack.
    if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.strContains)(userAgent, "Macintosh; Intel Mac OS X 10_14") && (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.strEndsWith)(userAgent, "AppleWebKit/605.1.15 (KHTML, like Gecko)")) {
        return true;
    }
    // Cover Chrome 50-69, because some versions are broken by SameSite=None, and none in this range require it.
    // Note: this covers some pre-Chromium Edge versions, but pre-Chromim Edge does not require SameSite=None, so this is fine.
    // Note: this regex applies to Windows, Mac OS X, and Linux, deliberately.
    if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.strContains)(userAgent, "Chrome/5") || (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.strContains)(userAgent, "Chrome/6")) {
        return true;
    }
    // Unreal Engine runs Chromium 59, but does not advertise as Chrome until 4.23. Treat versions of Unreal
    // that don't specify their Chrome version as lacking support for SameSite=None.
    if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.strContains)(userAgent, "UnrealEngine") && !(0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.strContains)(userAgent, "Chrome")) {
        return true;
    }
    // UCBrowser < 12.13.2 ignores Set-Cookie headers with SameSite=None
    // NB: this rule isn't complete - you need regex to make a complete rule.
    // See: https://www.chromium.org/updates/same-site/incompatible-clients
    if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.strContains)(userAgent, "UCBrowser/12") || (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.strContains)(userAgent, "UCBrowser/11")) {
        return true;
    }
    return false;
}
//# sourceMappingURL=CookieMgr.js.map

/***/ }),

/***/ 544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreUtils": () => (/* binding */ CoreUtils),
/* harmony export */   "EventHelper": () => (/* binding */ EventHelper),
/* harmony export */   "Undefined": () => (/* binding */ Undefined),
/* harmony export */   "_legacyCookieMgr": () => (/* binding */ _legacyCookieMgr),
/* harmony export */   "canUseCookies": () => (/* binding */ canUseCookies),
/* harmony export */   "deleteCookie": () => (/* binding */ deleteCookie),
/* harmony export */   "disableCookies": () => (/* binding */ disableCookies),
/* harmony export */   "generateW3CId": () => (/* binding */ generateW3CId),
/* harmony export */   "getCookie": () => (/* binding */ getCookie),
/* harmony export */   "newGuid": () => (/* binding */ newGuid),
/* harmony export */   "perfNow": () => (/* binding */ perfNow),
/* harmony export */   "setCookie": () => (/* binding */ setCookie),
/* harmony export */   "strEndsWith": () => (/* binding */ strEndsWith)
/* harmony export */ });
/* harmony import */ var _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(529);
/* harmony import */ var _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(532);
/* harmony import */ var _DynamicConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(530);
/* harmony import */ var _CookieMgr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(543);
/* harmony import */ var _EnvUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(538);
/* harmony import */ var _EventHelpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(546);
/* harmony import */ var _HelperFuncs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(528);
/* harmony import */ var _InternalConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(531);
/* harmony import */ var _RandomHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(545);
/*
 * Application Insights JavaScript SDK - Core, 2.8.16
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */











var _cookieMgrs = null;
var _canUseCookies; // legacy supported config
// Added to help with minfication
var Undefined = _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.strShimUndefined;
function newGuid() {
    var uuid = generateW3CId();
    return uuid[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SUBSTRING /* @min:%2esubstring */](0, 8) + "-" + uuid[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SUBSTRING /* @min:%2esubstring */](8, 12) + "-" + uuid[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SUBSTRING /* @min:%2esubstring */](12, 16) + "-" + uuid[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SUBSTRING /* @min:%2esubstring */](16, 20) + "-" + uuid[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SUBSTRING /* @min:%2esubstring */](20);
}
/**
 * Return the current value of the Performance Api now() function (if available) and fallback to dateNow() if it is unavailable (IE9 or less)
 * https://caniuse.com/#search=performance.now
 */
function perfNow() {
    var perf = (0,_EnvUtils__WEBPACK_IMPORTED_MODULE_2__.getPerformance)();
    if (perf && perf.now) {
        return perf.now();
    }
    return (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.dateNow)();
}
/**
 * The strEndsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
 * @param value - The value to check whether it ends with the search value.
 * @param search - The characters to be searched for at the end of the value.
 * @returns true if the given search value is found at the end of the string, otherwise false.
 */
function strEndsWith(value, search) {
    if (value && search) {
        var len = value[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_LENGTH /* @min:%2elength */];
        var start = len - search[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_LENGTH /* @min:%2elength */];
        return value[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SUBSTRING /* @min:%2esubstring */](start >= 0 ? start : 0, len) === search;
    }
    return false;
}
/**
 * generate W3C trace id
 */
function generateW3CId() {
    var hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    // rfc4122 version 4 UUID without dashes and with lowercase letters
    var oct = _InternalConstants__WEBPACK_IMPORTED_MODULE_4__.STR_EMPTY, tmp;
    for (var a = 0; a < 4; a++) {
        tmp = (0,_RandomHelper__WEBPACK_IMPORTED_MODULE_5__.random32)();
        oct +=
            hexValues[tmp & 0xF] +
                hexValues[tmp >> 4 & 0xF] +
                hexValues[tmp >> 8 & 0xF] +
                hexValues[tmp >> 12 & 0xF] +
                hexValues[tmp >> 16 & 0xF] +
                hexValues[tmp >> 20 & 0xF] +
                hexValues[tmp >> 24 & 0xF] +
                hexValues[tmp >> 28 & 0xF];
    }
    // "Set the two most significant bits (bits 6 and 7) of the clock_seq_hi_and_reserved to zero and one, respectively"
    var clockSequenceHi = hexValues[8 + ((0,_RandomHelper__WEBPACK_IMPORTED_MODULE_5__.random32)() & 0x03) | 0];
    return oct[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SUBSTR /* @min:%2esubstr */](0, 8) + oct[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SUBSTR /* @min:%2esubstr */](9, 4) + "4" + oct[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SUBSTR /* @min:%2esubstr */](13, 3) + clockSequenceHi + oct[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SUBSTR /* @min:%2esubstr */](16, 3) + oct[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SUBSTR /* @min:%2esubstr */](19, 12);
}
/**
 * Provides a collection of utility functions, included for backward compatibility with previous releases.
 * @deprecated Marking this instance as deprecated in favor of direct usage of the helper functions
 * as direct usage provides better tree-shaking and minification by avoiding the inclusion of the unused items
 * in your resulting code.
 */
var CoreUtils = {
    _canUseCookies: undefined,
    isTypeof: _HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.isTypeof,
    isUndefined: _HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.isUndefined,
    isNullOrUndefined: _HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.isNullOrUndefined,
    hasOwnProperty: _HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.hasOwnProperty,
    isFunction: _HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.isFunction,
    isObject: _HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.isObject,
    isDate: _HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.isDate,
    isArray: _HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.isArray,
    isError: _HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.isError,
    isString: _HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.isString,
    isNumber: _HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.isNumber,
    isBoolean: _HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.isBoolean,
    toISOString: _HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.toISOString,
    arrForEach: _HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.arrForEach,
    arrIndexOf: _HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.arrIndexOf,
    arrMap: _HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.arrMap,
    arrReduce: _HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.arrReduce,
    strTrim: _HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.strTrim,
    objCreate: _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_6__.objCreateFn,
    objKeys: _HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.objKeys,
    objDefineAccessors: _HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.objDefineAccessors,
    addEventHandler: _EventHelpers__WEBPACK_IMPORTED_MODULE_7__.addEventHandler,
    dateNow: _HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.dateNow,
    isIE: _EnvUtils__WEBPACK_IMPORTED_MODULE_2__.isIE,
    disableCookies: disableCookies,
    newGuid: newGuid,
    perfNow: perfNow,
    newId: _RandomHelper__WEBPACK_IMPORTED_MODULE_5__.newId,
    randomValue: _RandomHelper__WEBPACK_IMPORTED_MODULE_5__.randomValue,
    random32: _RandomHelper__WEBPACK_IMPORTED_MODULE_5__.random32,
    mwcRandomSeed: _RandomHelper__WEBPACK_IMPORTED_MODULE_5__.mwcRandomSeed,
    mwcRandom32: _RandomHelper__WEBPACK_IMPORTED_MODULE_5__.mwcRandom32,
    generateW3CId: generateW3CId
};
var GuidRegex = /[xy]/g;
var EventHelper = {
    Attach: _EventHelpers__WEBPACK_IMPORTED_MODULE_7__.attachEvent,
    AttachEvent: _EventHelpers__WEBPACK_IMPORTED_MODULE_7__.attachEvent,
    Detach: _EventHelpers__WEBPACK_IMPORTED_MODULE_7__.detachEvent,
    DetachEvent: _EventHelpers__WEBPACK_IMPORTED_MODULE_7__.detachEvent
};
/**
 * Helper to support backward compatibility for users that use the legacy cookie handling functions and the use the internal
 * CoreUtils._canUseCookies global flag to enable/disable cookies usage.
 * Note: This has the following deliberate side-effects
 * - Creates the global (legacy) cookie manager if it does not already exist
 * - Attempts to add "listeners" to the CoreUtils._canUseCookies property to support the legacy usage
 * @param config
 * @param logger
 * @returns
 */
function _legacyCookieMgr(config, logger) {
    var cookieMgr = (0,_CookieMgr__WEBPACK_IMPORTED_MODULE_8__._gblCookieMgr)(config, logger);
    var legacyCanUseCookies = CoreUtils._canUseCookies;
    if (_cookieMgrs === null) {
        _cookieMgrs = [];
        _canUseCookies = legacyCanUseCookies;
        // Dynamically create get/set property accessors for backward compatibility for enabling / disabling cookies
        // this WILL NOT work for ES3 browsers (< IE8)
        (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.objDefineAccessors)(CoreUtils, "_canUseCookies", function () {
            return _canUseCookies;
        }, function (value) {
            _canUseCookies = value;
            (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.arrForEach)(_cookieMgrs, function (mgr) {
                mgr[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SET_ENABLED /* @min:%2esetEnabled */](value);
            });
        });
    }
    if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.arrIndexOf)(_cookieMgrs, cookieMgr) === -1) {
        _cookieMgrs[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_PUSH /* @min:%2epush */](cookieMgr);
    }
    if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.isBoolean)(legacyCanUseCookies)) {
        cookieMgr[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SET_ENABLED /* @min:%2esetEnabled */](legacyCanUseCookies);
    }
    if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.isBoolean)(_canUseCookies)) {
        cookieMgr[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SET_ENABLED /* @min:%2esetEnabled */](_canUseCookies);
    }
    return cookieMgr;
}
/**
 * @deprecated - Use the core.getCookieMgr().disable()
 * Force the SDK not to store and read any data from cookies.
 */
function disableCookies() {
    _legacyCookieMgr()[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SET_ENABLED /* @min:%2esetEnabled */](false);
}
/**
 * @deprecated - Use the core.getCookieMgr().isEnabled()
 * Helper method to tell if document.cookie object is available and whether it can be used.
 */
function canUseCookies(logger) {
    return _legacyCookieMgr(null, logger).isEnabled();
}
/**
 * @deprecated - Use the core.getCookieMgr().get()
 * helper method to access userId and sessionId cookie
 */
function getCookie(logger, name) {
    return _legacyCookieMgr(null, logger).get(name);
}
/**
 * @deprecated - Use the core.getCookieMgr().set()
 * helper method to set userId and sessionId cookie
 */
function setCookie(logger, name, value, domain) {
    _legacyCookieMgr(null, logger).set(name, value, null, domain);
}
/**
 * @deprecated - Use the core.getCookieMgr().del()
 * Deletes a cookie by setting it's expiration time in the past.
 * @param name - The name of the cookie to delete.
 */
function deleteCookie(logger, name) {
    return _legacyCookieMgr(null, logger).del(name);
}
//# sourceMappingURL=CoreUtils.js.map

/***/ }),

/***/ 547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElmNodeData": () => (/* binding */ createElmNodeData),
/* harmony export */   "createUniqueNamespace": () => (/* binding */ createUniqueNamespace)
/* harmony export */ });
/* harmony import */ var _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(529);
/* harmony import */ var _DynamicConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(530);
/* harmony import */ var _HelperFuncs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(528);
/* harmony import */ var _InternalConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(531);
/* harmony import */ var _RandomHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(545);
/*
 * Application Insights JavaScript SDK - Core, 2.8.16
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */







var _objDefineProperty = _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.ObjDefineProperty;
var version = '2.8.16';
var instanceName = "." + (0,_RandomHelper__WEBPACK_IMPORTED_MODULE_1__.newId)(6);
var _dataUid = 0;
function _createAccessor(target, prop, value) {
    if (_objDefineProperty) {
        try {
            _objDefineProperty(target, prop, {
                value: value,
                enumerable: false,
                configurable: true
            });
            return true;
        }
        catch (e) {
            // IE8 Defines a defineProperty on Object but it's only supported for DOM elements so it will throw
            // We will just ignore this here.
        }
    }
    return false;
}
// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
function _canAcceptData(target) {
    return target[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_NODE_TYPE /* @min:%2enodeType */] === 1 || target[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_NODE_TYPE /* @min:%2enodeType */] === 9 || !(+target[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_NODE_TYPE /* @min:%2enodeType */]);
}
function _getCache(data, target) {
    var theCache = target[data.id];
    if (!theCache) {
        theCache = {};
        try {
            if (_canAcceptData(target)) {
                if (!_createAccessor(target, data.id, theCache)) {
                    // Environment doesn't support accessor, so just use direct assignment
                    target[data.id] = theCache;
                }
            }
        }
        catch (e) {
            // Not all environments allow extending all objects, so just ignore the cache in those cases
        }
    }
    return theCache;
}
function createUniqueNamespace(name, includeVersion) {
    if (includeVersion === void 0) { includeVersion = false; }
    return (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.normalizeJsName)(name + (_dataUid++) + (includeVersion ? "." + version : _InternalConstants__WEBPACK_IMPORTED_MODULE_4__.STR_EMPTY) + instanceName);
}
function createElmNodeData(name) {
    var data = {
        id: createUniqueNamespace("_aiData-" + (name || _InternalConstants__WEBPACK_IMPORTED_MODULE_4__.STR_EMPTY) + "." + version),
        accept: function (target) {
            return _canAcceptData(target);
        },
        get: function (target, name, defValue, addDefault) {
            var theCache = target[data.id];
            if (!theCache) {
                if (addDefault) {
                    // Side effect is adds the cache
                    theCache = _getCache(data, target);
                    theCache[(0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.normalizeJsName)(name)] = defValue;
                }
                return defValue;
            }
            return theCache[(0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.normalizeJsName)(name)];
        },
        kill: function (target, name) {
            if (target && target[name]) {
                try {
                    delete target[name];
                }
                catch (e) {
                    // Just cleaning up, so if this fails -- ignore
                }
            }
        }
    };
    return data;
}
//# sourceMappingURL=DataCacheHelper.js.map

/***/ }),

/***/ 539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDebugExt": () => (/* binding */ getDebugExt),
/* harmony export */   "getDebugListener": () => (/* binding */ getDebugListener)
/* harmony export */ });
/* harmony import */ var _DynamicConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(530);
/* harmony import */ var _EnvUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(538);
/*
 * Application Insights JavaScript SDK - Core, 2.8.16
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */




var listenerFuncs = ["eventsSent", "eventsDiscarded", "eventsSendRequest", "perfEvent"];
var _aiNamespace = null;
var _debugListener;
function _listenerProxyFunc(name, config) {
    return function () {
        var args = arguments;
        var dbgExt = getDebugExt(config);
        if (dbgExt) {
            var listener = dbgExt.listener;
            if (listener && listener[name]) {
                listener[name][_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_APPLY /* @min:%2eapply */](listener, args);
            }
        }
    };
}
function _getExtensionNamespace() {
    // Cache the lookup of the global namespace object
    var target = (0,_EnvUtils__WEBPACK_IMPORTED_MODULE_1__.getGlobalInst)("Microsoft");
    if (target) {
        _aiNamespace = target["ApplicationInsights"];
    }
    return _aiNamespace;
}
function getDebugExt(config) {
    var ns = _aiNamespace;
    if (!ns && config.disableDbgExt !== true) {
        ns = _aiNamespace || _getExtensionNamespace();
    }
    return ns ? ns["ChromeDbgExt"] : null;
}
function getDebugListener(config) {
    if (!_debugListener) {
        _debugListener = {};
        for (var lp = 0; lp < listenerFuncs[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_LENGTH /* @min:%2elength */]; lp++) {
            _debugListener[listenerFuncs[lp]] = _listenerProxyFunc(listenerFuncs[lp], config);
        }
    }
    return _debugListener;
}
//# sourceMappingURL=DbgExtensionUtils.js.map

/***/ }),

/***/ 537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagnosticLogger": () => (/* binding */ DiagnosticLogger),
/* harmony export */   "_InternalLogMessage": () => (/* binding */ _InternalLogMessage),
/* harmony export */   "_logInternalMessage": () => (/* binding */ _logInternalMessage),
/* harmony export */   "_throwInternal": () => (/* binding */ _throwInternal),
/* harmony export */   "_warnToConsole": () => (/* binding */ _warnToConsole),
/* harmony export */   "safeGetLogger": () => (/* binding */ safeGetLogger)
/* harmony export */ });
/* harmony import */ var _microsoft_dynamicproto_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(536);
/* harmony import */ var _DynamicConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(530);
/* harmony import */ var _DbgExtensionUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(539);
/* harmony import */ var _EnvUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(538);
/* harmony import */ var _HelperFuncs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(528);
/* harmony import */ var _InternalConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(531);
/*
 * Application Insights JavaScript SDK - Core, 2.8.16
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */









/**
 * For user non actionable traces use AI Internal prefix.
 */
var AiNonUserActionablePrefix = "AI (Internal): ";
/**
 * Prefix of the traces in portal.
 */
var AiUserActionablePrefix = "AI: ";
/**
 *  Session storage key for the prefix for the key indicating message type already logged
 */
var AIInternalMessagePrefix = "AITR_";
function _sanitizeDiagnosticText(text) {
    if (text) {
        return "\"" + text[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_REPLACE /* @min:%2ereplace */](/\"/g, _InternalConstants__WEBPACK_IMPORTED_MODULE_1__.STR_EMPTY) + "\"";
    }
    return _InternalConstants__WEBPACK_IMPORTED_MODULE_1__.STR_EMPTY;
}
function _logToConsole(func, message) {
    var theConsole = (0,_EnvUtils__WEBPACK_IMPORTED_MODULE_2__.getConsole)();
    if (!!theConsole) {
        var logFunc = "log";
        if (theConsole[func]) {
            logFunc = func;
        }
        if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.isFunction)(theConsole[logFunc])) {
            theConsole[logFunc](message);
        }
    }
}
var _InternalLogMessage = /** @class */ (function () {
    function _InternalLogMessage(msgId, msg, isUserAct, properties) {
        if (isUserAct === void 0) { isUserAct = false; }
        var _self = this;
        _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_MESSAGE_ID /* @min:%2emessageId */] = msgId;
        _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_MESSAGE /* @min:%2emessage */] =
            (isUserAct ? AiUserActionablePrefix : AiNonUserActionablePrefix) +
                msgId;
        var strProps = _InternalConstants__WEBPACK_IMPORTED_MODULE_1__.STR_EMPTY;
        if ((0,_EnvUtils__WEBPACK_IMPORTED_MODULE_2__.hasJSON)()) {
            strProps = (0,_EnvUtils__WEBPACK_IMPORTED_MODULE_2__.getJSON)().stringify(properties);
        }
        var diagnosticText = (msg ? " message:" + _sanitizeDiagnosticText(msg) : _InternalConstants__WEBPACK_IMPORTED_MODULE_1__.STR_EMPTY) +
            (properties ? " props:" + _sanitizeDiagnosticText(strProps) : _InternalConstants__WEBPACK_IMPORTED_MODULE_1__.STR_EMPTY);
        _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_MESSAGE /* @min:%2emessage */] += diagnosticText;
    }
    _InternalLogMessage.dataType = "MessageData";
    return _InternalLogMessage;
}());

function safeGetLogger(core, config) {
    return (core || {})[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_LOGGER /* @min:%2elogger */] || new DiagnosticLogger(config);
}
var DiagnosticLogger = /** @class */ (function () {
    function DiagnosticLogger(config) {
        this.identifier = "DiagnosticLogger";
        /**
         * The internal logging queue
         */
        this.queue = [];
        /**
         * Count of internal messages sent
         */
        var _messageCount = 0;
        /**
         * Holds information about what message types were already logged to console or sent to server.
         */
        var _messageLogged = {};
        var _loggingLevelConsole;
        var _loggingLevelTelemetry;
        var _maxInternalMessageLimit;
        var _enableDebug;
        (0,_microsoft_dynamicproto_js__WEBPACK_IMPORTED_MODULE_4__["default"])(DiagnosticLogger, this, function (_self) {
            _setDefaultsFromConfig(config || {});
            _self.consoleLoggingLevel = function () { return _loggingLevelConsole; };
            _self.telemetryLoggingLevel = function () { return _loggingLevelTelemetry; };
            _self.maxInternalMessageLimit = function () { return _maxInternalMessageLimit; };
            _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_ENABLE_DEBUG_EXCEPTI4 /* @min:%2eenableDebugExceptions */] = function () { return _enableDebug; };
            /**
             * This method will throw exceptions in debug mode or attempt to log the error as a console warning.
             * @param severity {LoggingSeverity} - The severity of the log message
             * @param message {_InternalLogMessage} - The log message.
             */
            _self.throwInternal = function (severity, msgId, msg, properties, isUserAct) {
                if (isUserAct === void 0) { isUserAct = false; }
                var message = new _InternalLogMessage(msgId, msg, isUserAct, properties);
                if (_enableDebug) {
                    throw (0,_EnvUtils__WEBPACK_IMPORTED_MODULE_2__.dumpObj)(message);
                }
                else {
                    // Get the logging function and fallback to warnToConsole of for some reason errorToConsole doesn't exist
                    var logFunc = severity === 1 /* eLoggingSeverity.CRITICAL */ ? _InternalConstants__WEBPACK_IMPORTED_MODULE_1__.STR_ERROR_TO_CONSOLE : _InternalConstants__WEBPACK_IMPORTED_MODULE_1__.STR_WARN_TO_CONSOLE;
                    if (!(0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.isUndefined)(message[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_MESSAGE /* @min:%2emessage */])) {
                        if (isUserAct) {
                            // check if this message type was already logged to console for this page view and if so, don't log it again
                            var messageKey = +message[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_MESSAGE_ID /* @min:%2emessageId */];
                            if (!_messageLogged[messageKey] && _loggingLevelConsole >= severity) {
                                _self[logFunc](message[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_MESSAGE /* @min:%2emessage */]);
                                _messageLogged[messageKey] = true;
                            }
                        }
                        else {
                            // Only log traces if the console Logging Level is >= the throwInternal severity level
                            if (_loggingLevelConsole >= severity) {
                                _self[logFunc](message[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_MESSAGE /* @min:%2emessage */]);
                            }
                        }
                        _logInternalMessage(severity, message);
                    }
                    else {
                        _debugExtMsg("throw" + (severity === 1 /* eLoggingSeverity.CRITICAL */ ? "Critical" : "Warning"), message);
                    }
                }
            };
            /**
             * This will write a warning to the console if possible
             * @param message {string} - The warning message
             */
            _self[_InternalConstants__WEBPACK_IMPORTED_MODULE_1__.STR_WARN_TO_CONSOLE /* @min:%2ewarnToConsole */] = function (message) {
                _logToConsole("warn", message);
                _debugExtMsg("warning", message);
            };
            /**
             * This will write an error to the console if possible
             * @param message {string} - The error message
             */
            _self[_InternalConstants__WEBPACK_IMPORTED_MODULE_1__.STR_ERROR_TO_CONSOLE /* @min:%2eerrorToConsole */] = function (message) {
                _logToConsole("error", message);
                _debugExtMsg("error", message);
            };
            /**
             * Resets the internal message count
             */
            _self.resetInternalMessageCount = function () {
                _messageCount = 0;
                _messageLogged = {};
            };
            /**
             * Logs a message to the internal queue.
             * @param severity {LoggingSeverity} - The severity of the log message
             * @param message {_InternalLogMessage} - The message to log.
             */
            _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_LOG_INTERNAL_MESSAGE /* @min:%2elogInternalMessage */] = _logInternalMessage;
            function _logInternalMessage(severity, message) {
                if (_areInternalMessagesThrottled()) {
                    return;
                }
                // check if this message type was already logged for this session and if so, don't log it again
                var logMessage = true;
                var messageKey = AIInternalMessagePrefix + message[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_MESSAGE_ID /* @min:%2emessageId */];
                // if the session storage is not available, limit to only one message type per page view
                if (_messageLogged[messageKey]) {
                    logMessage = false;
                }
                else {
                    _messageLogged[messageKey] = true;
                }
                if (logMessage) {
                    // Push the event in the internal queue
                    if (severity <= _loggingLevelTelemetry) {
                        _self.queue[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_PUSH /* @min:%2epush */](message);
                        _messageCount++;
                        _debugExtMsg((severity === 1 /* eLoggingSeverity.CRITICAL */ ? "error" : "warn"), message);
                    }
                    // When throttle limit reached, send a special event
                    if (_messageCount === _maxInternalMessageLimit) {
                        var throttleLimitMessage = "Internal events throttle limit per PageView reached for this app.";
                        var throttleMessage = new _InternalLogMessage(23 /* _eInternalMessageId.MessageLimitPerPVExceeded */, throttleLimitMessage, false);
                        _self.queue[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_PUSH /* @min:%2epush */](throttleMessage);
                        if (severity === 1 /* eLoggingSeverity.CRITICAL */) {
                            _self[_InternalConstants__WEBPACK_IMPORTED_MODULE_1__.STR_ERROR_TO_CONSOLE /* @min:%2eerrorToConsole */](throttleLimitMessage);
                        }
                        else {
                            _self[_InternalConstants__WEBPACK_IMPORTED_MODULE_1__.STR_WARN_TO_CONSOLE /* @min:%2ewarnToConsole */](throttleLimitMessage);
                        }
                    }
                }
            }
            function _setDefaultsFromConfig(config) {
                _loggingLevelConsole = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.getCfgValue)(config.loggingLevelConsole, 0);
                _loggingLevelTelemetry = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.getCfgValue)(config.loggingLevelTelemetry, 1);
                _maxInternalMessageLimit = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.getCfgValue)(config.maxMessageLimit, 25);
                _enableDebug = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.getCfgValue)(config.enableDebug, (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.getCfgValue)(config[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_ENABLE_DEBUG_EXCEPTI4 /* @min:%2eenableDebugExceptions */], false));
            }
            function _areInternalMessagesThrottled() {
                return _messageCount >= _maxInternalMessageLimit;
            }
            function _debugExtMsg(name, data) {
                var dbgExt = (0,_DbgExtensionUtils__WEBPACK_IMPORTED_MODULE_5__.getDebugExt)(config || {});
                if (dbgExt && dbgExt[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_DIAG_LOG /* @min:%2ediagLog */]) {
                    dbgExt[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_DIAG_LOG /* @min:%2ediagLog */](name, data);
                }
            }
        });
    }
// Removed Stub for DiagnosticLogger.prototype.enableDebugExceptions.
// Removed Stub for DiagnosticLogger.prototype.consoleLoggingLevel.
// Removed Stub for DiagnosticLogger.prototype.telemetryLoggingLevel.
// Removed Stub for DiagnosticLogger.prototype.maxInternalMessageLimit.
// Removed Stub for DiagnosticLogger.prototype.throwInternal.
// Removed Stub for DiagnosticLogger.prototype.warnToConsole.
// Removed Stub for DiagnosticLogger.prototype.errorToConsole.
// Removed Stub for DiagnosticLogger.prototype.resetInternalMessageCount.
// Removed Stub for DiagnosticLogger.prototype.logInternalMessage.
    // This is a workaround for an IE8 bug when using dynamicProto() with classes that don't have any
    // non-dynamic functions or static properties/functions when using uglify-js to minify the resulting code.
    // this will be removed when ES3 support is dropped.
    DiagnosticLogger.__ieDyn=1;

    return DiagnosticLogger;
}());

function _getLogger(logger) {
    return (logger || new DiagnosticLogger());
}
/**
 * This is a helper method which will call throwInternal on the passed logger, will throw exceptions in
 * debug mode or attempt to log the error as a console warning. This helper is provided mostly to better
 * support minification as logger.throwInternal() will not compress the publish "throwInternal" used throughout
 * the code.
 * @param logger - The Diagnostic Logger instance to use.
 * @param severity {LoggingSeverity} - The severity of the log message
 * @param message {_InternalLogMessage} - The log message.
 */
function _throwInternal(logger, severity, msgId, msg, properties, isUserAct) {
    if (isUserAct === void 0) { isUserAct = false; }
    _getLogger(logger).throwInternal(severity, msgId, msg, properties, isUserAct);
}
/**
 * This is a helper method which will call warnToConsole on the passed logger with the provided message.
 * @param logger - The Diagnostic Logger instance to use.
 * @param message {_InternalLogMessage} - The log message.
 */
function _warnToConsole(logger, message) {
    _getLogger(logger)[_InternalConstants__WEBPACK_IMPORTED_MODULE_1__.STR_WARN_TO_CONSOLE /* @min:%2ewarnToConsole */](message);
}
/**
 * Logs a message to the internal queue.
 * @param logger - The Diagnostic Logger instance to use.
 * @param severity {LoggingSeverity} - The severity of the log message
 * @param message {_InternalLogMessage} - The message to log.
 */
function _logInternalMessage(logger, severity, message) {
    _getLogger(logger)[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_LOG_INTERNAL_MESSAGE /* @min:%2elogInternalMessage */](severity, message);
}
//# sourceMappingURL=DiagnosticLogger.js.map

/***/ }),

/***/ 538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCustomDomEvent": () => (/* binding */ createCustomDomEvent),
/* harmony export */   "dispatchEvent": () => (/* binding */ dispatchEvent),
/* harmony export */   "dumpObj": () => (/* binding */ dumpObj),
/* harmony export */   "findMetaTag": () => (/* binding */ findMetaTag),
/* harmony export */   "findNamedServerTiming": () => (/* binding */ findNamedServerTiming),
/* harmony export */   "getConsole": () => (/* binding */ getConsole),
/* harmony export */   "getCrypto": () => (/* binding */ getCrypto),
/* harmony export */   "getDocument": () => (/* binding */ getDocument),
/* harmony export */   "getGlobalInst": () => (/* binding */ getGlobalInst),
/* harmony export */   "getHistory": () => (/* binding */ getHistory),
/* harmony export */   "getIEVersion": () => (/* binding */ getIEVersion),
/* harmony export */   "getJSON": () => (/* binding */ getJSON),
/* harmony export */   "getLocation": () => (/* binding */ getLocation),
/* harmony export */   "getMsCrypto": () => (/* binding */ getMsCrypto),
/* harmony export */   "getNavigator": () => (/* binding */ getNavigator),
/* harmony export */   "getPerformance": () => (/* binding */ getPerformance),
/* harmony export */   "getWindow": () => (/* binding */ getWindow),
/* harmony export */   "hasDocument": () => (/* binding */ hasDocument),
/* harmony export */   "hasHistory": () => (/* binding */ hasHistory),
/* harmony export */   "hasJSON": () => (/* binding */ hasJSON),
/* harmony export */   "hasNavigator": () => (/* binding */ hasNavigator),
/* harmony export */   "hasWindow": () => (/* binding */ hasWindow),
/* harmony export */   "isBeaconsSupported": () => (/* binding */ isBeaconsSupported),
/* harmony export */   "isFetchSupported": () => (/* binding */ isFetchSupported),
/* harmony export */   "isIE": () => (/* binding */ isIE),
/* harmony export */   "isReactNative": () => (/* binding */ isReactNative),
/* harmony export */   "isSafari": () => (/* binding */ isSafari),
/* harmony export */   "isXhrSupported": () => (/* binding */ isXhrSupported),
/* harmony export */   "sendCustomEvent": () => (/* binding */ sendCustomEvent),
/* harmony export */   "setEnableEnvMocks": () => (/* binding */ setEnableEnvMocks),
/* harmony export */   "useXDomainRequest": () => (/* binding */ useXDomainRequest)
/* harmony export */ });
/* harmony import */ var _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(529);
/* harmony import */ var _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(532);
/* harmony import */ var _DynamicConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(530);
/* harmony import */ var _HelperFuncs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(528);
/* harmony import */ var _InternalConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(531);
/*
 * Application Insights JavaScript SDK - Core, 2.8.16
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */







/**
 * This file exists to hold environment utilities that are required to check and
 * validate the current operating environment. Unless otherwise required, please
 * only use defined methods (functions) in this class so that users of these
 * functions/properties only need to include those that are used within their own modules.
 */
var strWindow = "window";
var strDocument = "document";
var strDocumentMode = "documentMode";
var strNavigator = "navigator";
var strHistory = "history";
var strLocation = "location";
var strConsole = "console";
var strPerformance = "performance";
var strJSON = "JSON";
var strCrypto = "crypto";
var strMsCrypto = "msCrypto";
var strReactNative = "ReactNative";
var strMsie = "msie";
var strTrident = "trident/";
var strXMLHttpRequest = "XMLHttpRequest";
var _isTrident = null;
var _navUserAgentCheck = null;
var _enableMocks = false;
var _useXDomainRequest = null;
var _beaconsSupported = null;
function _hasProperty(theClass, property) {
    var supported = false;
    if (theClass) {
        try {
            supported = property in theClass;
            if (!supported) {
                var proto = theClass[_microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.strShimPrototype];
                if (proto) {
                    supported = property in proto;
                }
            }
        }
        catch (e) {
            // Do Nothing
        }
        if (!supported) {
            try {
                var tmp = new theClass();
                supported = !(0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(tmp[property]);
            }
            catch (e) {
                // Do Nothing
            }
        }
    }
    return supported;
}
/**
 * Enable the lookup of test mock objects if requested
 * @param enabled
 */
function setEnableEnvMocks(enabled) {
    _enableMocks = enabled;
}
/**
 * Return the named global object if available, will return null if the object is not available.
 * @param name The globally named object
 */
function getGlobalInst(name) {
    var gbl = (0,_microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_2__.getGlobal)();
    if (gbl && gbl[name]) {
        return gbl[name];
    }
    // Test workaround, for environments where <global>.window (when global == window) doesn't return the base window
    if (name === strWindow && hasWindow()) {
        // tslint:disable-next-line: no-angle-bracket-type-assertion
        return window;
    }
    return null;
}
/**
 * Checks if window object is available, this is required as we support the API running without a
 * window /document (eg. Node server, electron webworkers) and if we attempt to assign a window
 * object to a local variable or pass as an argument an "Uncaught ReferenceError: window is not defined"
 * exception will be thrown.
 * Defined as a function to support lazy / late binding environments.
 */
function hasWindow() {
    return Boolean(typeof window === _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.strShimObject && window);
}
/**
 * Returns the global window object if it is present otherwise null.
 * This helper is used to access the window object without causing an exception
 * "Uncaught ReferenceError: window is not defined"
 */
function getWindow() {
    if (hasWindow()) {
        return window;
    }
    // Return the global instance or null
    return getGlobalInst(strWindow);
}
/**
 * Checks if document object is available, this is required as we support the API running without a
 * window /document (eg. Node server, electron webworkers) and if we attempt to assign a document
 * object to a local variable or pass as an argument an "Uncaught ReferenceError: document is not defined"
 * exception will be thrown.
 * Defined as a function to support lazy / late binding environments.
 */
function hasDocument() {
    return Boolean(typeof document === _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.strShimObject && document);
}
/**
 * Returns the global document object if it is present otherwise null.
 * This helper is used to access the document object without causing an exception
 * "Uncaught ReferenceError: document is not defined"
 */
function getDocument() {
    if (hasDocument()) {
        return document;
    }
    return getGlobalInst(strDocument);
}
/**
 * Checks if navigator object is available, this is required as we support the API running without a
 * window /document (eg. Node server, electron webworkers) and if we attempt to assign a navigator
 * object to a local variable or pass as an argument an "Uncaught ReferenceError: navigator is not defined"
 * exception will be thrown.
 * Defined as a function to support lazy / late binding environments.
 */
function hasNavigator() {
    return Boolean(typeof navigator === _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.strShimObject && navigator);
}
/**
 * Returns the global navigator object if it is present otherwise null.
 * This helper is used to access the navigator object without causing an exception
 * "Uncaught ReferenceError: navigator is not defined"
 */
function getNavigator() {
    if (hasNavigator()) {
        return navigator;
    }
    return getGlobalInst(strNavigator);
}
/**
 * Checks if history object is available, this is required as we support the API running without a
 * window /document (eg. Node server, electron webworkers) and if we attempt to assign a history
 * object to a local variable or pass as an argument an "Uncaught ReferenceError: history is not defined"
 * exception will be thrown.
 * Defined as a function to support lazy / late binding environments.
 */
function hasHistory() {
    return Boolean(typeof history === _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.strShimObject && history);
}
/**
 * Returns the global history object if it is present otherwise null.
 * This helper is used to access the history object without causing an exception
 * "Uncaught ReferenceError: history is not defined"
 */
function getHistory() {
    if (hasHistory()) {
        return history;
    }
    return getGlobalInst(strHistory);
}
/**
 * Returns the global location object if it is present otherwise null.
 * This helper is used to access the location object without causing an exception
 * "Uncaught ReferenceError: location is not defined"
 */
function getLocation(checkForMock) {
    if (checkForMock && _enableMocks) {
        var mockLocation = getGlobalInst("__mockLocation");
        if (mockLocation) {
            return mockLocation;
        }
    }
    if (typeof location === _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.strShimObject && location) {
        return location;
    }
    return getGlobalInst(strLocation);
}
/**
 * Returns the global console object
 */
function getConsole() {
    if (typeof console !== _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.strShimUndefined) {
        return console;
    }
    return getGlobalInst(strConsole);
}
/**
 * Returns the performance object if it is present otherwise null.
 * This helper is used to access the performance object from the current
 * global instance which could be window or globalThis for a web worker
 */
function getPerformance() {
    return getGlobalInst(strPerformance);
}
/**
 * Checks if JSON object is available, this is required as we support the API running without a
 * window /document (eg. Node server, electron webworkers) and if we attempt to assign a history
 * object to a local variable or pass as an argument an "Uncaught ReferenceError: JSON is not defined"
 * exception will be thrown.
 * Defined as a function to support lazy / late binding environments.
 */
function hasJSON() {
    return Boolean((typeof JSON === _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.strShimObject && JSON) || getGlobalInst(strJSON) !== null);
}
/**
 * Returns the global JSON object if it is present otherwise null.
 * This helper is used to access the JSON object without causing an exception
 * "Uncaught ReferenceError: JSON is not defined"
 */
function getJSON() {
    if (hasJSON()) {
        return JSON || getGlobalInst(strJSON);
    }
    return null;
}
/**
 * Returns the crypto object if it is present otherwise null.
 * This helper is used to access the crypto object from the current
 * global instance which could be window or globalThis for a web worker
 */
function getCrypto() {
    return getGlobalInst(strCrypto);
}
/**
 * Returns the crypto object if it is present otherwise null.
 * This helper is used to access the crypto object from the current
 * global instance which could be window or globalThis for a web worker
 */
function getMsCrypto() {
    return getGlobalInst(strMsCrypto);
}
/**
 * Returns whether the environment is reporting that we are running in a React Native Environment
 */
function isReactNative() {
    // If running in React Native, navigator.product will be populated
    var nav = getNavigator();
    if (nav && nav.product) {
        return nav.product === strReactNative;
    }
    return false;
}
/**
 * Identifies whether the current environment appears to be IE
 */
function isIE() {
    var nav = getNavigator();
    if (nav && (nav[_DynamicConstants__WEBPACK_IMPORTED_MODULE_3__._DYN_USER_AGENT /* @min:%2euserAgent */] !== _navUserAgentCheck || _isTrident === null)) {
        // Added to support test mocking of the user agent
        _navUserAgentCheck = nav[_DynamicConstants__WEBPACK_IMPORTED_MODULE_3__._DYN_USER_AGENT /* @min:%2euserAgent */];
        var userAgent = (_navUserAgentCheck || _InternalConstants__WEBPACK_IMPORTED_MODULE_4__.STR_EMPTY)[_DynamicConstants__WEBPACK_IMPORTED_MODULE_3__._DYN_TO_LOWER_CASE /* @min:%2etoLowerCase */]();
        _isTrident = ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.strContains)(userAgent, strMsie) || (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.strContains)(userAgent, strTrident));
    }
    return _isTrident;
}
/**
 * Gets IE version returning the document emulation mode if we are running on IE, or null otherwise
 */
function getIEVersion(userAgentStr) {
    if (userAgentStr === void 0) { userAgentStr = null; }
    if (!userAgentStr) {
        var navigator_1 = getNavigator() || {};
        userAgentStr = navigator_1 ? (navigator_1[_DynamicConstants__WEBPACK_IMPORTED_MODULE_3__._DYN_USER_AGENT /* @min:%2euserAgent */] || _InternalConstants__WEBPACK_IMPORTED_MODULE_4__.STR_EMPTY)[_DynamicConstants__WEBPACK_IMPORTED_MODULE_3__._DYN_TO_LOWER_CASE /* @min:%2etoLowerCase */]() : _InternalConstants__WEBPACK_IMPORTED_MODULE_4__.STR_EMPTY;
    }
    var ua = (userAgentStr || _InternalConstants__WEBPACK_IMPORTED_MODULE_4__.STR_EMPTY)[_DynamicConstants__WEBPACK_IMPORTED_MODULE_3__._DYN_TO_LOWER_CASE /* @min:%2etoLowerCase */]();
    // Also check for documentMode in case X-UA-Compatible meta tag was included in HTML.
    if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.strContains)(ua, strMsie)) {
        var doc = getDocument() || {};
        return Math.max(parseInt(ua[_DynamicConstants__WEBPACK_IMPORTED_MODULE_3__._DYN_SPLIT /* @min:%2esplit */](strMsie)[1]), (doc[strDocumentMode] || 0));
    }
    else if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.strContains)(ua, strTrident)) {
        var tridentVer = parseInt(ua[_DynamicConstants__WEBPACK_IMPORTED_MODULE_3__._DYN_SPLIT /* @min:%2esplit */](strTrident)[1]);
        if (tridentVer) {
            return tridentVer + 4;
        }
    }
    return null;
}
/**
 * Returns string representation of an object suitable for diagnostics logging.
 */
function dumpObj(object) {
    var objectTypeDump = Object[_microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.strShimPrototype].toString[_DynamicConstants__WEBPACK_IMPORTED_MODULE_3__._DYN_CALL /* @min:%2ecall */](object);
    var propertyValueDump = _InternalConstants__WEBPACK_IMPORTED_MODULE_4__.STR_EMPTY;
    if (objectTypeDump === "[object Error]") {
        propertyValueDump = "{ stack: '" + object.stack + "', message: '" + object.message + "', name: '" + object[_DynamicConstants__WEBPACK_IMPORTED_MODULE_3__._DYN_NAME /* @min:%2ename */] + "'";
    }
    else if (hasJSON()) {
        propertyValueDump = getJSON().stringify(object);
    }
    return objectTypeDump + propertyValueDump;
}
function isSafari(userAgentStr) {
    if (!userAgentStr || !(0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.isString)(userAgentStr)) {
        var navigator_2 = getNavigator() || {};
        userAgentStr = navigator_2 ? (navigator_2[_DynamicConstants__WEBPACK_IMPORTED_MODULE_3__._DYN_USER_AGENT /* @min:%2euserAgent */] || _InternalConstants__WEBPACK_IMPORTED_MODULE_4__.STR_EMPTY)[_DynamicConstants__WEBPACK_IMPORTED_MODULE_3__._DYN_TO_LOWER_CASE /* @min:%2etoLowerCase */]() : _InternalConstants__WEBPACK_IMPORTED_MODULE_4__.STR_EMPTY;
    }
    var ua = (userAgentStr || _InternalConstants__WEBPACK_IMPORTED_MODULE_4__.STR_EMPTY)[_DynamicConstants__WEBPACK_IMPORTED_MODULE_3__._DYN_TO_LOWER_CASE /* @min:%2etoLowerCase */]();
    return (ua[_DynamicConstants__WEBPACK_IMPORTED_MODULE_3__._DYN_INDEX_OF /* @min:%2eindexOf */]("safari") >= 0);
}
/**
 * Checks if HTML5 Beacons are supported in the current environment.
 * @returns True if supported, false otherwise.
 */
function isBeaconsSupported() {
    if (_beaconsSupported === null) {
        _beaconsSupported = hasNavigator() && Boolean(getNavigator().sendBeacon);
    }
    return _beaconsSupported;
}
/**
 * Checks if the Fetch API is supported in the current environment.
 * @param withKeepAlive - [Optional] If True, check if fetch is available and it supports the keepalive feature, otherwise only check if fetch is supported
 * @returns True if supported, otherwise false
 */
function isFetchSupported(withKeepAlive) {
    var isSupported = false;
    try {
        isSupported = !!getGlobalInst("fetch");
        var request = getGlobalInst("Request");
        if (isSupported && withKeepAlive && request) {
            isSupported = _hasProperty(request, "keepalive");
        }
    }
    catch (e) {
        // Just Swallow any failure during availability checks
    }
    return isSupported;
}
function useXDomainRequest() {
    if (_useXDomainRequest === null) {
        _useXDomainRequest = (typeof XDomainRequest !== _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.strShimUndefined);
        if (_useXDomainRequest && isXhrSupported()) {
            _useXDomainRequest = _useXDomainRequest && !_hasProperty(getGlobalInst(strXMLHttpRequest), "withCredentials");
        }
    }
    return _useXDomainRequest;
}
/**
 * Checks if XMLHttpRequest is supported
 * @returns True if supported, otherwise false
 */
function isXhrSupported() {
    var isSupported = false;
    try {
        var xmlHttpRequest = getGlobalInst(strXMLHttpRequest);
        isSupported = !!xmlHttpRequest;
    }
    catch (e) {
        // Just Swallow any failure during availability checks
    }
    return isSupported;
}
function _getNamedValue(values, name) {
    if (values) {
        for (var i = 0; i < values[_DynamicConstants__WEBPACK_IMPORTED_MODULE_3__._DYN_LENGTH /* @min:%2elength */]; i++) {
            var value = values[i];
            if (value[_DynamicConstants__WEBPACK_IMPORTED_MODULE_3__._DYN_NAME /* @min:%2ename */]) {
                if (value[_DynamicConstants__WEBPACK_IMPORTED_MODULE_3__._DYN_NAME /* @min:%2ename */] === name) {
                    return value;
                }
            }
        }
    }
    return {};
}
/**
 * Helper function to fetch the named meta-tag from the page.
 * @param name
 */
function findMetaTag(name) {
    var doc = getDocument();
    if (doc && name) {
        // Look for a meta-tag
        return _getNamedValue(doc.querySelectorAll("meta"), name).content;
    }
    return null;
}
/**
 * Helper function to fetch the named server timing value from the page response (first navigation event).
 * @param name
 */
function findNamedServerTiming(name) {
    var value;
    var perf = getPerformance();
    if (perf) {
        // Try looking for a server-timing header
        var navPerf = perf.getEntriesByType("navigation") || [];
        value = _getNamedValue((navPerf[_DynamicConstants__WEBPACK_IMPORTED_MODULE_3__._DYN_LENGTH /* @min:%2elength */] > 0 ? navPerf[0] : {}).serverTiming, name).description;
    }
    return value;
}
// TODO: should reuse this method for analytics plugin
function dispatchEvent(target, evnt) {
    if (target && target.dispatchEvent && evnt) {
        target.dispatchEvent(evnt);
        return true;
    }
    return false;
}
function createCustomDomEvent(eventName, details) {
    var event = null;
    var detail = { detail: details || null };
    if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.isFunction)(CustomEvent)) { // Use CustomEvent constructor when available
        event = new CustomEvent(eventName, detail);
    }
    else { // CustomEvent has no constructor in IE
        var doc = getDocument();
        if (doc && doc.createEvent) {
            event = doc.createEvent("CustomEvent");
            event.initCustomEvent(eventName, true, true, detail);
        }
    }
    return event;
}
function sendCustomEvent(evtName, cfg, customDetails) {
    var global = (0,_microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_2__.getGlobal)();
    if (global && global.CustomEvent) {
        try {
            var details = { cfg: cfg || null, customDetails: customDetails || null };
            return dispatchEvent(global, createCustomDomEvent(evtName, details));
        }
        catch (e) {
            // eslint-disable-next-line no-empty
        }
    }
    return false;
}
//# sourceMappingURL=EnvUtils.js.map

/***/ }),

/***/ 546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__getRegisteredEvents": () => (/* binding */ __getRegisteredEvents),
/* harmony export */   "addEventHandler": () => (/* binding */ addEventHandler),
/* harmony export */   "addEventListeners": () => (/* binding */ addEventListeners),
/* harmony export */   "addPageHideEventListener": () => (/* binding */ addPageHideEventListener),
/* harmony export */   "addPageShowEventListener": () => (/* binding */ addPageShowEventListener),
/* harmony export */   "addPageUnloadEventListener": () => (/* binding */ addPageUnloadEventListener),
/* harmony export */   "attachEvent": () => (/* binding */ attachEvent),
/* harmony export */   "detachEvent": () => (/* binding */ detachEvent),
/* harmony export */   "eventOff": () => (/* binding */ eventOff),
/* harmony export */   "eventOn": () => (/* binding */ eventOn),
/* harmony export */   "mergeEvtNamespace": () => (/* binding */ mergeEvtNamespace),
/* harmony export */   "removeEventHandler": () => (/* binding */ removeEventHandler),
/* harmony export */   "removeEventListeners": () => (/* binding */ removeEventListeners),
/* harmony export */   "removePageHideEventListener": () => (/* binding */ removePageHideEventListener),
/* harmony export */   "removePageShowEventListener": () => (/* binding */ removePageShowEventListener),
/* harmony export */   "removePageUnloadEventListener": () => (/* binding */ removePageUnloadEventListener)
/* harmony export */ });
/* harmony import */ var _DynamicConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(530);
/* harmony import */ var _DataCacheHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(547);
/* harmony import */ var _EnvUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(538);
/* harmony import */ var _HelperFuncs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(528);
/* harmony import */ var _InternalConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(531);
/*
 * Application Insights JavaScript SDK - Core, 2.8.16
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */







// Added to help with minfication
var strOnPrefix = "on";
var strAttachEvent = "attachEvent";
var strAddEventHelper = "addEventListener";
var strDetachEvent = "detachEvent";
var strRemoveEventListener = "removeEventListener";
var strEvents = "events";
var strVisibilityChangeEvt = "visibilitychange";
var strPageHide = "pagehide";
var strPageShow = "pageshow";
var strUnload = "unload";
var strBeforeUnload = "beforeunload";
var strPageHideNamespace = (0,_DataCacheHelper__WEBPACK_IMPORTED_MODULE_0__.createUniqueNamespace)("aiEvtPageHide");
var strPageShowNamespace = (0,_DataCacheHelper__WEBPACK_IMPORTED_MODULE_0__.createUniqueNamespace)("aiEvtPageShow");
var rRemoveEmptyNs = /\.[\.]+/g;
var rRemoveTrailingEmptyNs = /[\.]+$/;
var _guid = 1;
var elmNodeData = (0,_DataCacheHelper__WEBPACK_IMPORTED_MODULE_0__.createElmNodeData)("events");
var eventNamespace = /^([^.]*)(?:\.(.+)|)/;
function _normalizeNamespace(name) {
    if (name && name[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_REPLACE /* @min:%2ereplace */]) {
        return name[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_REPLACE /* @min:%2ereplace */](/^[\s\.]+|(?=[\s\.])[\.\s]+$/g, _InternalConstants__WEBPACK_IMPORTED_MODULE_2__.STR_EMPTY);
    }
    return name;
}
function _getEvtNamespace(eventName, evtNamespace) {
    var _a;
    if (evtNamespace) {
        var theNamespace_1 = _InternalConstants__WEBPACK_IMPORTED_MODULE_2__.STR_EMPTY;
        if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.isArray)(evtNamespace)) {
            theNamespace_1 = _InternalConstants__WEBPACK_IMPORTED_MODULE_2__.STR_EMPTY;
            (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.arrForEach)(evtNamespace, function (name) {
                name = _normalizeNamespace(name);
                if (name) {
                    if (name[0] !== ".") {
                        name = "." + name;
                    }
                    theNamespace_1 += name;
                }
            });
        }
        else {
            theNamespace_1 = _normalizeNamespace(evtNamespace);
        }
        if (theNamespace_1) {
            if (theNamespace_1[0] !== ".") {
                theNamespace_1 = "." + theNamespace_1;
            }
            // We may only have the namespace and not an eventName
            eventName = (eventName || _InternalConstants__WEBPACK_IMPORTED_MODULE_2__.STR_EMPTY) + theNamespace_1;
        }
    }
    var parsedEvent = (eventNamespace.exec(eventName || _InternalConstants__WEBPACK_IMPORTED_MODULE_2__.STR_EMPTY) || []);
    return _a = {},
        _a[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_TYPE /* @min:type */] = parsedEvent[1],
        _a.ns = ((parsedEvent[2] || _InternalConstants__WEBPACK_IMPORTED_MODULE_2__.STR_EMPTY).replace(rRemoveEmptyNs, ".").replace(rRemoveTrailingEmptyNs, _InternalConstants__WEBPACK_IMPORTED_MODULE_2__.STR_EMPTY)[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SPLIT /* @min:%2esplit */](".").sort()).join("."),
        _a;
}
/**
 * Get all of the registered events on the target object, this is primarily used for testing cleanup but may also be used by
 * applications to remove their own events
 * @param target - The EventTarget that has registered events
 * @param eventName - [Optional] The name of the event to return the registered handlers and full name (with namespaces)
 * @param evtNamespace - [Optional] Additional namespace(s) to append to the event listeners so they can be uniquely identified and removed based on this namespace,
 * if the eventName also includes a namespace the namespace(s) are merged into a single namespace
 */
function __getRegisteredEvents(target, eventName, evtNamespace) {
    var theEvents = [];
    var eventCache = elmNodeData.get(target, strEvents, {}, false);
    var evtName = _getEvtNamespace(eventName, evtNamespace);
    (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.objForEachKey)(eventCache, function (evtType, registeredEvents) {
        (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.arrForEach)(registeredEvents, function (value) {
            var _a;
            if (!evtName[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_TYPE /* @min:%2etype */] || evtName[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_TYPE /* @min:%2etype */] === value.evtName[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_TYPE /* @min:%2etype */]) {
                if (!evtName.ns || evtName.ns === evtName.ns) {
                    theEvents[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_PUSH /* @min:%2epush */]((_a = {},
                        _a[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_NAME /* @min:name */] = value.evtName[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_TYPE /* @min:%2etype */] + (value.evtName.ns ? "." + value.evtName.ns : _InternalConstants__WEBPACK_IMPORTED_MODULE_2__.STR_EMPTY),
                        _a.handler = value[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_HANDLER /* @min:%2ehandler */],
                        _a));
                }
            }
        });
    });
    return theEvents;
}
// Exported for internal unit testing only
function _getRegisteredEvents(target, evtName, addDefault) {
    if (addDefault === void 0) { addDefault = true; }
    var aiEvts = elmNodeData.get(target, strEvents, {}, addDefault);
    var registeredEvents = aiEvts[evtName];
    if (!registeredEvents) {
        registeredEvents = aiEvts[evtName] = [];
    }
    return registeredEvents;
}
function _doDetach(obj, evtName, handlerRef, useCapture) {
    if (obj && evtName && evtName[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_TYPE /* @min:%2etype */]) {
        if (obj[strRemoveEventListener]) {
            obj[strRemoveEventListener](evtName[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_TYPE /* @min:%2etype */], handlerRef, useCapture);
        }
        else if (obj[strDetachEvent]) {
            obj[strDetachEvent](strOnPrefix + evtName[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_TYPE /* @min:%2etype */], handlerRef);
        }
    }
}
function _doAttach(obj, evtName, handlerRef, useCapture) {
    var result = false;
    if (obj && evtName && evtName[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_TYPE /* @min:%2etype */] && handlerRef) {
        if (obj[strAddEventHelper]) {
            // all browsers except IE before version 9
            obj[strAddEventHelper](evtName[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_TYPE /* @min:%2etype */], handlerRef, useCapture);
            result = true;
        }
        else if (obj[strAttachEvent]) {
            // IE before version 9
            obj[strAttachEvent](strOnPrefix + evtName[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_TYPE /* @min:%2etype */], handlerRef);
            result = true;
        }
    }
    return result;
}
function _doUnregister(target, events, evtName, unRegFn) {
    var idx = events[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_LENGTH /* @min:%2elength */];
    while (idx--) {
        var theEvent = events[idx];
        if (theEvent) {
            if (!evtName.ns || evtName.ns === theEvent.evtName.ns) {
                if (!unRegFn || unRegFn(theEvent)) {
                    _doDetach(target, theEvent.evtName, theEvent[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_HANDLER /* @min:%2ehandler */], theEvent.capture);
                    // Remove the registered event
                    events[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SPLICE /* @min:%2esplice */](idx, 1);
                }
            }
        }
    }
}
function _unregisterEvents(target, evtName, unRegFn) {
    if (evtName[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_TYPE /* @min:%2etype */]) {
        _doUnregister(target, _getRegisteredEvents(target, evtName[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_TYPE /* @min:%2etype */]), evtName, unRegFn);
    }
    else {
        var eventCache = elmNodeData.get(target, strEvents, {});
        (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.objForEachKey)(eventCache, function (evtType, events) {
            _doUnregister(target, events, evtName, unRegFn);
        });
        // Cleanup
        if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.objKeys)(eventCache)[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_LENGTH /* @min:%2elength */] === 0) {
            elmNodeData.kill(target, strEvents);
        }
    }
}
function mergeEvtNamespace(theNamespace, namespaces) {
    var newNamespaces;
    if (namespaces) {
        if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.isArray)(namespaces)) {
            newNamespaces = [theNamespace].concat(namespaces);
        }
        else {
            newNamespaces = [theNamespace, namespaces];
        }
        // resort the namespaces so they are always in order
        newNamespaces = (_getEvtNamespace("xx", newNamespaces).ns)[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SPLIT /* @min:%2esplit */](".");
    }
    else {
        newNamespaces = theNamespace;
    }
    return newNamespaces;
}
/**
 * Binds the specified function to an event, so that the function gets called whenever the event fires on the object
 * @param obj Object to add the event too.
 * @param eventName String that specifies any of the standard DHTML Events without "on" prefix, if may also include an optional (dot "." prefixed)
 * namespaces "click" "click.mynamespace" in addition to specific namespaces.
 * @param handlerRef Pointer that specifies the function to call when event fires
 * @param evtNamespace - [Optional] Additional namespace(s) to append to the event listeners so they can be uniquely identified and removed based on this namespace,
 * if the eventName also includes a namespace the namespace(s) are merged into a single namespace
 * @param useCapture [Optional] Defaults to false
 * @returns True if the function was bound successfully to the event, otherwise false
 */
function eventOn(target, eventName, handlerRef, evtNamespace, useCapture) {
    var _a;
    if (useCapture === void 0) { useCapture = false; }
    var result = false;
    if (target) {
        try {
            var evtName = _getEvtNamespace(eventName, evtNamespace);
            result = _doAttach(target, evtName, handlerRef, useCapture);
            if (result && elmNodeData.accept(target)) {
                var registeredEvent = (_a = {
                        guid: _guid++,
                        evtName: evtName
                    },
                    _a[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_HANDLER /* @min:handler */] = handlerRef,
                    _a.capture = useCapture,
                    _a);
                _getRegisteredEvents(target, evtName.type)[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_PUSH /* @min:%2epush */](registeredEvent);
            }
        }
        catch (e) {
            // Just Ignore any error so that we don't break any execution path
        }
    }
    return result;
}
/**
 * Removes an event handler for the specified event
 * @param Object to remove the event from
 * @param eventName {string} - The name of the event, with optional namespaces or just the namespaces,
 * such as "click", "click.mynamespace" or ".mynamespace"
 * @param handlerRef {any} - The callback function that needs to be removed from the given event, when using a
 * namespace (with or without a qualifying event) this may be null to remove all previously attached event handlers
 * otherwise this will only remove events with this specific handler.
 * @param evtNamespace - [Optional] Additional namespace(s) to append to the event listeners so they can be uniquely identified and removed based on this namespace,
 * if the eventName also includes a namespace the namespace(s) are merged into a single namespace
 * @param useCapture [Optional] Defaults to false
 */
function eventOff(target, eventName, handlerRef, evtNamespace, useCapture) {
    if (useCapture === void 0) { useCapture = false; }
    if (target) {
        try {
            var evtName_1 = _getEvtNamespace(eventName, evtNamespace);
            var found_1 = false;
            _unregisterEvents(target, evtName_1, function (regEvent) {
                if ((evtName_1.ns && !handlerRef) || regEvent[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_HANDLER /* @min:%2ehandler */] === handlerRef) {
                    found_1 = true;
                    return true;
                }
                return false;
            });
            if (!found_1) {
                // fallback to try and remove as requested
                _doDetach(target, evtName_1, handlerRef, useCapture);
            }
        }
        catch (e) {
            // Just Ignore any error so that we don't break any execution path
        }
    }
}
/**
 * Binds the specified function to an event, so that the function gets called whenever the event fires on the object
 * @param obj Object to add the event too.
 * @param eventNameWithoutOn String that specifies any of the standard DHTML Events without "on" prefix and optional (dot "." prefixed) namespaces "click" "click.mynamespace".
 * @param handlerRef Pointer that specifies the function to call when event fires
 * @param useCapture [Optional] Defaults to false
 * @returns True if the function was bound successfully to the event, otherwise false
 */
function attachEvent(obj, eventNameWithoutOn, handlerRef, useCapture) {
    if (useCapture === void 0) { useCapture = false; }
    return eventOn(obj, eventNameWithoutOn, handlerRef, null, useCapture);
}
/**
 * Removes an event handler for the specified event
 * @param Object to remove the event from
 * @param eventNameWithoutOn {string} - The name of the event, with optional namespaces or just the namespaces,
 * such as "click", "click.mynamespace" or ".mynamespace"
 * @param handlerRef {any} - The callback function that needs to be removed from the given event, when using a
 * namespace (with or without a qualifying event) this may be null to remove all previously attached event handlers
 * otherwise this will only remove events with this specific handler.
 * @param useCapture [Optional] Defaults to false
 */
function detachEvent(obj, eventNameWithoutOn, handlerRef, useCapture) {
    if (useCapture === void 0) { useCapture = false; }
    eventOff(obj, eventNameWithoutOn, handlerRef, null, useCapture);
}
/**
 * Trys to add an event handler for the specified event to the window, body and document
 * @param eventName {string} - The name of the event
 * @param callback {any} - The callback function that needs to be executed for the given event
 * @param evtNamespace - [Optional] Namespace(s) to append to the event listeners so they can be uniquely identified and removed based on this namespace.
 * @return {boolean} - true if the handler was successfully added
 */
function addEventHandler(eventName, callback, evtNamespace) {
    var result = false;
    var w = (0,_EnvUtils__WEBPACK_IMPORTED_MODULE_4__.getWindow)();
    if (w) {
        result = eventOn(w, eventName, callback, evtNamespace);
        result = eventOn(w["body"], eventName, callback, evtNamespace) || result;
    }
    var doc = (0,_EnvUtils__WEBPACK_IMPORTED_MODULE_4__.getDocument)();
    if (doc) {
        result = eventOn(doc, eventName, callback, evtNamespace) || result;
    }
    return result;
}
/**
 * Trys to remove event handler(s) for the specified event/namespace to the window, body and document
 * @param eventName {string} - The name of the event, with optional namespaces or just the namespaces,
 * such as "click", "click.mynamespace" or ".mynamespace"
 * @param callback {any} - - The callback function that needs to be removed from the given event, when using a
 * namespace (with or without a qualifying event) this may be null to remove all previously attached event handlers
 * otherwise this will only remove events with this specific handler.
 * @param evtNamespace - [Optional] Namespace(s) to append to the event listeners so they can be uniquely identified and removed based on this namespace.
 */
function removeEventHandler(eventName, callback, evtNamespace) {
    var w = (0,_EnvUtils__WEBPACK_IMPORTED_MODULE_4__.getWindow)();
    if (w) {
        eventOff(w, eventName, callback, evtNamespace);
        eventOff(w["body"], eventName, callback, evtNamespace);
    }
    var doc = (0,_EnvUtils__WEBPACK_IMPORTED_MODULE_4__.getDocument)();
    if (doc) {
        eventOff(doc, eventName, callback, evtNamespace);
    }
}
/**
 * Bind the listener to the array of events
 * @param events An string array of event names to bind the listener to
 * @param listener The event callback to call when the event is triggered
 * @param excludeEvents - [Optional] An array of events that should not be hooked (if possible), unless no other events can be.
 * @param evtNamespace - [Optional] Namespace(s) to append to the event listeners so they can be uniquely identified and removed based on this namespace.
 * @returns true - when at least one of the events was registered otherwise false
 */
function _addEventListeners(events, listener, excludeEvents, evtNamespace) {
    var added = false;
    if (listener && events && events[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_LENGTH /* @min:%2elength */] > 0) {
        (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.arrForEach)(events, function (name) {
            if (name) {
                if (!excludeEvents || (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.arrIndexOf)(excludeEvents, name) === -1) {
                    added = addEventHandler(name, listener, evtNamespace) || added;
                }
            }
        });
    }
    return added;
}
/**
 * Bind the listener to the array of events
 * @param events An string array of event names to bind the listener to
 * @param listener The event callback to call when the event is triggered
 * @param excludeEvents - [Optional] An array of events that should not be hooked (if possible), unless no other events can be.
 * @param evtNamespace - [Optional] Namespace(s) to append to the event listeners so they can be uniquely identified and removed based on this namespace.
 * @returns true - when at least one of the events was registered otherwise false
 */
function addEventListeners(events, listener, excludeEvents, evtNamespace) {
    var added = false;
    if (listener && events && (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.isArray)(events)) {
        added = _addEventListeners(events, listener, excludeEvents, evtNamespace);
        if (!added && excludeEvents && excludeEvents[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_LENGTH /* @min:%2elength */] > 0) {
            // Failed to add any listeners and we excluded some, so just attempt to add the excluded events
            added = _addEventListeners(events, listener, null, evtNamespace);
        }
    }
    return added;
}
/**
 * Remove the listener from the array of events
 * @param events An string array of event names to bind the listener to
 * @param listener The event callback to call when the event is triggered
 * @param evtNamespace - [Optional] Namespace(s) to append to the event listeners so they can be uniquely identified and removed based on this namespace.
 */
function removeEventListeners(events, listener, evtNamespace) {
    if (events && (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.isArray)(events)) {
        (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.arrForEach)(events, function (name) {
            if (name) {
                removeEventHandler(name, listener, evtNamespace);
            }
        });
    }
}
/**
 * Listen to the 'beforeunload', 'unload' and 'pagehide' events which indicates a page unload is occurring,
 * this does NOT listen to the 'visibilitychange' event as while it does indicate that the page is being hidden
 * it does not *necessarily* mean that the page is being completely unloaded, it can mean that the user is
 * just navigating to a different Tab and may come back (without unloading the page). As such you may also
 * need to listen to the 'addPageHideEventListener' and 'addPageShowEventListener' events.
 * @param listener - The event callback to call when a page unload event is triggered
 * @param excludeEvents - [Optional] An array of events that should not be hooked, unless no other events can be.
 * @param evtNamespace - [Optional] Namespace(s) to append to the event listeners so they can be uniquely identified and removed based on this namespace.
 * @returns true - when at least one of the events was registered otherwise false
 */
function addPageUnloadEventListener(listener, excludeEvents, evtNamespace) {
    // Hook the unload event for the document, window and body to ensure that the client events are flushed to the server
    // As just hooking the window does not always fire (on chrome) for page navigation's.
    return addEventListeners([strBeforeUnload, strUnload, strPageHide], listener, excludeEvents, evtNamespace);
}
/**
 * Remove any matching 'beforeunload', 'unload' and 'pagehide' events that may have been added via addEventListener,
 * addEventListeners, addPageUnloadEventListener or addPageHideEventListener.
 * @param listener - The specific event callback to to be removed
 * @param evtNamespace - [Optional] Namespace(s) uniquely identified and removed based on this namespace.
 * @returns true - when at least one of the events was registered otherwise false
 */
function removePageUnloadEventListener(listener, evtNamespace) {
    removeEventListeners([strBeforeUnload, strUnload, strPageHide], listener, evtNamespace);
}
/**
 * Listen to the pagehide and visibility changing to 'hidden' events, because the 'visibilitychange' uses
 * an internal proxy to detect the visibility state you SHOULD use a unique namespace when if you plan to call
 * removePageShowEventListener as the remove ignores the listener argument for the 'visibilitychange' event.
 * @param listener - The event callback to call when a page hide event is triggered
 * @param excludeEvents - [Optional] An array of events that should not be hooked (if possible), unless no other events can be.
 * @param evtNamespace - [Optional] A Namespace to append to the event listeners so they can be uniquely identified and removed
 * based on this namespace. This call also adds an additional unique "pageshow" namespace to the events
 * so that only the matching "removePageHideEventListener" can remove these events.
 * Suggestion: pass as true if you are also calling addPageUnloadEventListener as that also hooks pagehide
 * @returns true - when at least one of the events was registered otherwise false
 */
function addPageHideEventListener(listener, excludeEvents, evtNamespace) {
    function _handlePageVisibility(evt) {
        var doc = (0,_EnvUtils__WEBPACK_IMPORTED_MODULE_4__.getDocument)();
        if (listener && doc && doc.visibilityState === "hidden") {
            listener(evt);
        }
    }
    // add the unique page show namespace to any provided namespace so we can only remove the ones added by "pagehide"
    var newNamespaces = mergeEvtNamespace(strPageHideNamespace, evtNamespace);
    var pageUnloadAdded = _addEventListeners([strPageHide], listener, excludeEvents, newNamespaces);
    if (!excludeEvents || (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.arrIndexOf)(excludeEvents, strVisibilityChangeEvt) === -1) {
        pageUnloadAdded = _addEventListeners([strVisibilityChangeEvt], _handlePageVisibility, excludeEvents, newNamespaces) || pageUnloadAdded;
    }
    if (!pageUnloadAdded && excludeEvents) {
        // Failed to add any listeners and we where requested to exclude some, so just call again without excluding anything
        pageUnloadAdded = addPageHideEventListener(listener, null, evtNamespace);
    }
    return pageUnloadAdded;
}
/**
 * Removes the pageHide event listeners added by addPageHideEventListener, because the 'visibilitychange' uses
 * an internal proxy to detect the visibility state you SHOULD use a unique namespace when calling addPageHideEventListener
 * as the remove ignores the listener argument for the 'visibilitychange' event.
 * @param listener - The specific listener to remove for the 'pageshow' event only (ignored for 'visibilitychange')
 * @param evtNamespace - The unique namespace used when calling addPageShowEventListener
 */
function removePageHideEventListener(listener, evtNamespace) {
    // add the unique page show namespace to any provided namespace so we only remove the ones added by "pagehide"
    var newNamespaces = mergeEvtNamespace(strPageHideNamespace, evtNamespace);
    removeEventListeners([strPageHide], listener, newNamespaces);
    removeEventListeners([strVisibilityChangeEvt], null, newNamespaces);
}
/**
 * Listen to the pageshow and visibility changing to 'visible' events, because the 'visibilitychange' uses
 * an internal proxy to detect the visibility state you SHOULD use a unique namespace when if you plan to call
 * removePageShowEventListener as the remove ignores the listener argument for the 'visibilitychange' event.
 * @param listener - The event callback to call when a page is show event is triggered
 * @param excludeEvents - [Optional] An array of events that should not be hooked (if possible), unless no other events can be.
 * @param evtNamespace - [Optional/Recommended] A Namespace to append to the event listeners so they can be uniquely
 * identified and removed based on this namespace. This call also adds an additional unique "pageshow" namespace to the events
 * so that only the matching "removePageShowEventListener" can remove these events.
 * @returns true - when at least one of the events was registered otherwise false
 */
function addPageShowEventListener(listener, excludeEvents, evtNamespace) {
    function _handlePageVisibility(evt) {
        var doc = (0,_EnvUtils__WEBPACK_IMPORTED_MODULE_4__.getDocument)();
        if (listener && doc && doc.visibilityState === "visible") {
            listener(evt);
        }
    }
    // add the unique page show namespace to any provided namespace so we can only remove the ones added by "pageshow"
    var newNamespaces = mergeEvtNamespace(strPageShowNamespace, evtNamespace);
    var pageShowAdded = _addEventListeners([strPageShow], listener, excludeEvents, newNamespaces);
    pageShowAdded = _addEventListeners([strVisibilityChangeEvt], _handlePageVisibility, excludeEvents, newNamespaces) || pageShowAdded;
    if (!pageShowAdded && excludeEvents) {
        // Failed to add any listeners and we where requested to exclude some, so just call again without excluding anything
        pageShowAdded = addPageShowEventListener(listener, null, evtNamespace);
    }
    return pageShowAdded;
}
/**
 * Removes the pageShow event listeners added by addPageShowEventListener, because the 'visibilitychange' uses
 * an internal proxy to detect the visibility state you SHOULD use a unique namespace when calling addPageShowEventListener
 * as the remove ignores the listener argument for the 'visibilitychange' event.
 * @param listener - The specific listener to remove for the 'pageshow' event only (ignored for 'visibilitychange')
 * @param evtNamespace - The unique namespace used when calling addPageShowEventListener
 */
function removePageShowEventListener(listener, evtNamespace) {
    // add the unique page show namespace to any provided namespace so we only remove the ones added by "pageshow"
    var newNamespaces = mergeEvtNamespace(strPageShowNamespace, evtNamespace);
    removeEventListeners([strPageShow], listener, newNamespaces);
    removeEventListeners([strVisibilityChangeEvt], null, newNamespaces);
}
//# sourceMappingURL=EventHelpers.js.map

/***/ }),

/***/ 528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_getObjProto": () => (/* binding */ _getObjProto),
/* harmony export */   "_strEndsWithPoly": () => (/* binding */ _strEndsWithPoly),
/* harmony export */   "_strStartsWithPoly": () => (/* binding */ _strStartsWithPoly),
/* harmony export */   "_toISOStringPoly": () => (/* binding */ _toISOStringPoly),
/* harmony export */   "arrForEach": () => (/* binding */ arrForEach),
/* harmony export */   "arrIndexOf": () => (/* binding */ arrIndexOf),
/* harmony export */   "arrMap": () => (/* binding */ arrMap),
/* harmony export */   "arrReduce": () => (/* binding */ arrReduce),
/* harmony export */   "createClassFromInterface": () => (/* binding */ createClassFromInterface),
/* harmony export */   "dateNow": () => (/* binding */ dateNow),
/* harmony export */   "deepFreeze": () => (/* binding */ deepFreeze),
/* harmony export */   "getCfgValue": () => (/* binding */ getCfgValue),
/* harmony export */   "getExceptionName": () => (/* binding */ getExceptionName),
/* harmony export */   "getSetValue": () => (/* binding */ getSetValue),
/* harmony export */   "hasOwnProperty": () => (/* binding */ hasOwnProperty),
/* harmony export */   "isArray": () => (/* binding */ isArray),
/* harmony export */   "isBoolean": () => (/* binding */ isBoolean),
/* harmony export */   "isDate": () => (/* binding */ isDate),
/* harmony export */   "isError": () => (/* binding */ isError),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "isNotNullOrUndefined": () => (/* binding */ isNotNullOrUndefined),
/* harmony export */   "isNotTruthy": () => (/* binding */ isNotTruthy),
/* harmony export */   "isNotUndefined": () => (/* binding */ isNotUndefined),
/* harmony export */   "isNullOrUndefined": () => (/* binding */ isNullOrUndefined),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "isPlainObject": () => (/* binding */ isPlainObject),
/* harmony export */   "isPromiseLike": () => (/* binding */ isPromiseLike),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "isSymbol": () => (/* binding */ isSymbol),
/* harmony export */   "isTruthy": () => (/* binding */ isTruthy),
/* harmony export */   "isTypeof": () => (/* binding */ isTypeof),
/* harmony export */   "isUndefined": () => (/* binding */ isUndefined),
/* harmony export */   "normalizeJsName": () => (/* binding */ normalizeJsName),
/* harmony export */   "objDefineAccessors": () => (/* binding */ objDefineAccessors),
/* harmony export */   "objExtend": () => (/* binding */ objExtend),
/* harmony export */   "objForEachKey": () => (/* binding */ objForEachKey),
/* harmony export */   "objFreeze": () => (/* binding */ objFreeze),
/* harmony export */   "objKeys": () => (/* binding */ objKeys),
/* harmony export */   "objSeal": () => (/* binding */ objSeal),
/* harmony export */   "objToString": () => (/* binding */ objToString),
/* harmony export */   "optimizeObject": () => (/* binding */ optimizeObject),
/* harmony export */   "proxyAssign": () => (/* binding */ proxyAssign),
/* harmony export */   "proxyFunctionAs": () => (/* binding */ proxyFunctionAs),
/* harmony export */   "proxyFunctions": () => (/* binding */ proxyFunctions),
/* harmony export */   "setValue": () => (/* binding */ setValue),
/* harmony export */   "strContains": () => (/* binding */ strContains),
/* harmony export */   "strEndsWith": () => (/* binding */ strEndsWith),
/* harmony export */   "strStartsWith": () => (/* binding */ strStartsWith),
/* harmony export */   "strTrim": () => (/* binding */ strTrim),
/* harmony export */   "throwError": () => (/* binding */ throwError),
/* harmony export */   "toISOString": () => (/* binding */ toISOString)
/* harmony export */ });
/* harmony import */ var _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(529);
/* harmony import */ var _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(532);
/* harmony import */ var _DynamicConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(530);
/* harmony import */ var _InternalConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(531);
/*
 * Application Insights JavaScript SDK - Core, 2.8.16
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */





// RESTRICT and AVOID circular dependencies you should not import other contained modules or export the contents of this file directly
// Added to help with minfication
var strToISOString = "toISOString";
var cStrEndsWith = "endsWith";
var cStrStartsWith = "startsWith";
var strIndexOf = "indexOf";
var strMap = "map";
var strReduce = "reduce";
var cStrTrim = "trim";
var strToString = "toString";
/**
 * Constant string defined to support minimization
 * @ignore
 */
var str__Proto = "__proto__";
/**
  * Constant string defined to support minimization
  * @ignore
  */
var strConstructor = "constructor";
var _objDefineProperty = _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.ObjDefineProperty;
var _objFreeze = _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.ObjClass.freeze;
var _objSeal = _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.ObjClass.seal;
var _objKeys = _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.ObjClass.keys;
var StringProto = String[_microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.strShimPrototype];
var _strTrim = StringProto[cStrTrim];
var _strEndsWith = StringProto[cStrEndsWith];
var _strStartsWith = StringProto[cStrStartsWith];
var DateProto = Date[_microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.strShimPrototype];
var _dataToISOString = DateProto[strToISOString];
var _isArray = Array.isArray;
var _objToString = _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.ObjProto[strToString];
var _fnToString = _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.ObjHasOwnProperty[strToString];
// Cache what this browser reports as the object function constructor (as a string)
var _objFunctionString = _fnToString[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_CALL /* @min:%2ecall */](_microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.ObjClass);
var rCamelCase = /-([a-z])/g;
var rNormalizeInvalid = /([^\w\d_$])/g;
var rLeadingNumeric = /^(\d+[\w\d_$])/;
/**
 * Pre-lookup to check if we are running on a modern browser (i.e. not IE8)
 * @ignore
 */
var _objGetPrototypeOf = Object["getPrototypeOf"];
/**
  * Helper used to get the prototype of the target object as getPrototypeOf is not available in an ES3 environment.
  * @ignore
  */
function _getObjProto(target) {
    if (target) {
        // This method doesn't existing in older browsers (e.g. IE8)
        if (_objGetPrototypeOf) {
            return _objGetPrototypeOf(target);
        }
        // target[Constructor] May break if the constructor has been changed or removed
        var newProto = target[str__Proto] || target[_microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.strShimPrototype] || target[strConstructor];
        if (newProto) {
            return newProto;
        }
    }
    return null;
}
function objToString(obj) {
    return _objToString[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_CALL /* @min:%2ecall */](obj);
}
function isTypeof(value, theType) {
    return typeof value === theType;
}
function isUndefined(value) {
    return value === undefined || typeof value === _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.strShimUndefined;
}
function isNotUndefined(value) {
    return !isUndefined(value);
}
function isNullOrUndefined(value) {
    return (value === null || isUndefined(value));
}
function isNotNullOrUndefined(value) {
    return !isNullOrUndefined(value);
}
function hasOwnProperty(obj, prop) {
    return !!(obj && _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.ObjHasOwnProperty[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_CALL /* @min:%2ecall */](obj, prop));
}
function isObject(value) {
    // Changing to inline for performance
    return !!(value && typeof value === _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.strShimObject);
}
function isFunction(value) {
    // Changing to inline for performance
    return !!(value && typeof value === _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.strShimFunction);
}
function isPromiseLike(value) {
    return value && isFunction(value.then);
}
/**
 * Validates that the string name conforms to the JS IdentifierName specification and if not
 * normalizes the name so that it would. This method does not identify or change any keywords
 * meaning that if you pass in a known keyword the same value will be returned.
 * This is a simplified version
 * @param name The name to validate
 */
function normalizeJsName(name) {
    var value = name;
    if (value && isString(value)) {
        // CamelCase everything after the "-" and remove the dash
        value = value[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_REPLACE /* @min:%2ereplace */](rCamelCase, function (_all, letter) {
            return letter.toUpperCase();
        });
        value = value[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_REPLACE /* @min:%2ereplace */](rNormalizeInvalid, "_");
        value = value[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_REPLACE /* @min:%2ereplace */](rLeadingNumeric, function (_all, match) {
            return "_" + match;
        });
    }
    return value;
}
/**
 * This is a helper function for the equivalent of arForEach(objKeys(target), callbackFn), this is a
 * performance optimization to avoid the creation of a new array for large objects
 * @param target The target object to find and process the keys
 * @param callbackfn The function to call with the details
 */
function objForEachKey(target, callbackfn) {
    if (target) {
        for (var prop in target) {
            if (_microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.ObjHasOwnProperty[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_CALL /* @min:%2ecall */](target, prop)) {
                callbackfn[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_CALL /* @min:%2ecall */](target, prop, target[prop]);
            }
        }
    }
}
/**
 * The strEndsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
 * @param value - The value to check whether it ends with the search value.
 * @param search - The characters to be searched for at the end of the value.
 * @returns true if the given search value is found at the end of the string, otherwise false.
 */
function strEndsWith(value, search) {
    var result = false;
    if (value && search && !(result = value === search)) {
        // For Performance try and use the native instance, using string lookup of the function to easily pass the ES3 build checks and minification
        result = _strEndsWith ? value[cStrEndsWith](search) : _strEndsWithPoly(value, search);
    }
    return result;
}
/**
 * The _strEndsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
 * @param value - The value to check whether it ends with the search value.
 * @param search - The characters to be searched for at the end of the value.
 * @returns true if the given search value is found at the end of the string, otherwise false.
 */
function _strEndsWithPoly(value, search) {
    var result = false;
    var searchLen = search ? search[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_LENGTH /* @min:%2elength */] : 0;
    var valLen = value ? value[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_LENGTH /* @min:%2elength */] : 0;
    if (searchLen && valLen && valLen >= searchLen && !(result = value === search)) {
        var pos = valLen - 1;
        for (var lp = searchLen - 1; lp >= 0; lp--) {
            if (value[pos] != search[lp]) {
                return false;
            }
            pos--;
        }
        result = true;
    }
    return result;
}
/**
 * The strStartsWith() method determines whether a string starts with the characters of the specified string, returning true or false as appropriate.
 * @param value - The value to check whether it ends with the search value.
 * @param checkValue - The characters to be searched for at the start of the value.
 * @returns true if the given search value is found at the start of the string, otherwise false.
 */
function strStartsWith(value, checkValue) {
    var result = false;
    if (value && checkValue && !(result = value === checkValue)) {
        // For Performance try and use the native instance, using string lookup of the function to easily pass the ES3 build checks and minification
        result = _strStartsWith ? value[cStrStartsWith](checkValue) : _strStartsWithPoly(value, checkValue);
    }
    return result;
}
/**
 * The strStartsWith() method determines whether a string starts with the characters of the specified string, returning true or false as appropriate.
 * @param value - The value to check whether it ends with the search value.
 * @param checkValue - The characters to be searched for at the start of the value.
 * @returns true if the given search value is found at the start of the string, otherwise false.
 */
function _strStartsWithPoly(value, checkValue) {
    // Using helper for performance and because string startsWith() is not available on IE
    var result = false;
    var chkLen = checkValue ? checkValue[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_LENGTH /* @min:%2elength */] : 0;
    if (value && chkLen && value[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_LENGTH /* @min:%2elength */] >= chkLen && !(result = value === checkValue)) {
        for (var lp = 0; lp < chkLen; lp++) {
            if (value[lp] !== checkValue[lp]) {
                return false;
            }
        }
        result = true;
    }
    return result;
}
/**
 * A simple wrapper (for minification support) to check if the value contains the search string.
 * @param value - The string value to check for the existence of the search value
 * @param search - The value search within the value
 */
function strContains(value, search) {
    if (value && search) {
        return value[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_INDEX_OF /* @min:%2eindexOf */](search) !== -1;
    }
    return false;
}
/**
 * Check if an object is of type Date
 */
function isDate(obj) {
    return !!(obj && _objToString[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_CALL /* @min:%2ecall */](obj) === "[object Date]");
}
/**
 * Check if an object is of type Array with optional generic T, the generic type is not validated
 * and exists to help with TypeScript validation only.
 */
var isArray = _isArray || _isArrayPoly;
function _isArrayPoly(obj) {
    return !!(obj && _objToString[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_CALL /* @min:%2ecall */](obj) === "[object Array]");
}
/**
 * Check if an object is of type Error
 */
function isError(obj) {
    return !!(obj && _objToString[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_CALL /* @min:%2ecall */](obj) === "[object Error]");
}
/**
 * Checks if the type of value is a string.
 * @param {any} value - Value to be checked.
 * @return {boolean} True if the value is a string, false otherwise.
 */
function isString(value) {
    // Changing to inline for performance
    return typeof value === "string";
}
/**
 * Checks if the type of value is a number.
 * @param {any} value - Value to be checked.
 * @return {boolean} True if the value is a number, false otherwise.
 */
function isNumber(value) {
    // Changing to inline for performance
    return typeof value === "number";
}
/**
 * Checks if the type of value is a boolean.
 * @param {any} value - Value to be checked.
 * @return {boolean} True if the value is a boolean, false otherwise.
 */
function isBoolean(value) {
    // Changing to inline for performance
    return typeof value === "boolean";
}
/**
 * Checks if the type of value is a Symbol.
 * This only returns a boolean as returning value is Symbol will cause issues for older TypeScript consumers
 * @param {any} value - Value to be checked.
 * @return {boolean} True if the value is a Symbol, false otherwise.
 */
function isSymbol(value) {
    return typeof value === "symbol";
}
/**
 * Checks if the type of the value is a normal plain object (not a null or data)
 * @param value
 */
function isPlainObject(value) {
    var result = false;
    if (value && typeof value === "object") {
        // Inlining _objGetPrototypeOf for performance to avoid an additional function call
        var proto = _objGetPrototypeOf ? _objGetPrototypeOf(value) : _getObjProto(value);
        if (!proto) {
            // No prototype found so this is a plain Object eg. 'Object.create(null)'
            result = true;
        }
        else {
            // Objects that have a prototype are plain only if they were created using the Object global (native) function
            if (proto[strConstructor] && _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.ObjHasOwnProperty[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_CALL /* @min:%2ecall */](proto, strConstructor)) {
                proto = proto[strConstructor];
            }
            result = typeof proto === _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.strShimFunction && _fnToString[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_CALL /* @min:%2ecall */](proto) === _objFunctionString;
        }
    }
    return result;
}
/**
 * Convert a date to I.S.O. format in IE8
 */
function toISOString(date) {
    if (date) {
        // For Performance try and use the native instance, using string lookup of the function to easily pass the ES3 build checks and minification
        return _dataToISOString ? date[strToISOString]() : _toISOStringPoly(date);
    }
}
/**
 * Convert a date to I.S.O. format in IE8
 */
function _toISOStringPoly(date) {
    if (date && date.getUTCFullYear) {
        var pad = function (num) {
            var r = String(num);
            if (r[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_LENGTH /* @min:%2elength */] === 1) {
                r = "0" + r;
            }
            return r;
        };
        return date.getUTCFullYear()
            + "-" + pad(date.getUTCMonth() + 1)
            + "-" + pad(date.getUTCDate())
            + "T" + pad(date.getUTCHours())
            + ":" + pad(date.getUTCMinutes())
            + ":" + pad(date.getUTCSeconds())
            + "." + String((date.getUTCMilliseconds() / 1000).toFixed(3)).slice(2, 5)
            + "Z";
    }
}
/**
 * Performs the specified action for each element in an array. This helper exists to avoid adding a polyfil for older browsers
 * that do not define Array.prototype.xxxx (eg. ES3 only, IE8) just in case any page checks for presence/absence of the prototype
 * implementation. Note: For consistency this will not use the Array.prototype.xxxx implementation if it exists as this would
 * cause a testing requirement to test with and without the implementations
 * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. It can return -1 to break out of the loop
 * @param thisArg  [Optional] An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
 */
function arrForEach(arr, callbackfn, thisArg) {
    var len = arr[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_LENGTH /* @min:%2elength */];
    try {
        for (var idx = 0; idx < len; idx++) {
            if (idx in arr) {
                if (callbackfn[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_CALL /* @min:%2ecall */](thisArg || arr, arr[idx], idx, arr) === -1) {
                    break;
                }
            }
        }
    }
    catch (e) {
        // This can happen with some native browser objects, but should not happen for the type we are checking for
    }
}
/**
 * Returns the index of the first occurrence of a value in an array. This helper exists to avoid adding a polyfil for older browsers
 * that do not define Array.prototype.xxxx (eg. ES3 only, IE8) just in case any page checks for presence/absence of the prototype
 * implementation. Note: For consistency this will not use the Array.prototype.xxxx implementation if it exists as this would
 * cause a testing requirement to test with and without the implementations
 * @param searchElement The value to locate in the array.
 * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
 */
function arrIndexOf(arr, searchElement, fromIndex) {
    if (arr) {
        // For Performance try and use the native instance, using string lookup of the function to easily pass the ES3 build checks and minification
        if (arr[strIndexOf]) {
            return arr[strIndexOf](searchElement, fromIndex);
        }
        var len = arr[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_LENGTH /* @min:%2elength */];
        var from = fromIndex || 0;
        try {
            for (var lp = Math.max(from >= 0 ? from : len - Math.abs(from), 0); lp < len; lp++) {
                if (lp in arr && arr[lp] === searchElement) {
                    return lp;
                }
            }
        }
        catch (e) {
            // This can happen with some native browser objects, but should not happen for the type we are checking for
        }
    }
    return -1;
}
/**
 * Calls a defined callback function on each element of an array, and returns an array that contains the results. This helper exists
 * to avoid adding a polyfil for older browsers that do not define Array.prototype.xxxx (eg. ES3 only, IE8) just in case any page
 * checks for presence/absence of the prototype implementation. Note: For consistency this will not use the Array.prototype.xxxx
 * implementation if it exists as this would cause a testing requirement to test with and without the implementations
 * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
 * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
 */
function arrMap(arr, callbackfn, thisArg) {
    var results;
    if (arr) {
        // For Performance try and use the native instance, using string lookup of the function to easily pass the ES3 build checks and minification
        if (arr[strMap]) {
            return arr[strMap](callbackfn, thisArg);
        }
        var len = arr[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_LENGTH /* @min:%2elength */];
        var _this = thisArg || arr;
        results = new Array(len);
        try {
            for (var lp = 0; lp < len; lp++) {
                if (lp in arr) {
                    results[lp] = callbackfn[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_CALL /* @min:%2ecall */](_this, arr[lp], arr);
                }
            }
        }
        catch (e) {
            // This can happen with some native browser objects, but should not happen for the type we are checking for
        }
    }
    return results;
}
/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is
 * provided as an argument in the next call to the callback function. This helper exists to avoid adding a polyfil for older browsers that do not define
 * Array.prototype.xxxx (eg. ES3 only, IE8) just in case any page checks for presence/absence of the prototype implementation. Note: For consistency
 * this will not use the Array.prototype.xxxx implementation if it exists as this would cause a testing requirement to test with and without the implementations
 * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
 * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
 */
function arrReduce(arr, callbackfn, initialValue) {
    var value;
    if (arr) {
        // For Performance try and use the native instance, using string lookup of the function to easily pass the ES3 build checks and minification
        if (arr[strReduce]) {
            return arr[strReduce](callbackfn, initialValue);
        }
        var len = arr[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_LENGTH /* @min:%2elength */];
        var lp = 0;
        // Specifically checking the number of passed arguments as the value could be anything
        if (arguments[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_LENGTH /* @min:%2elength */] >= 3) {
            value = arguments[2];
        }
        else {
            while (lp < len && !(lp in arr)) {
                lp++;
            }
            value = arr[lp++];
        }
        while (lp < len) {
            if (lp in arr) {
                value = callbackfn(value, arr[lp], lp, arr);
            }
            lp++;
        }
    }
    return value;
}
/**
 * helper method to trim strings (IE8 does not implement String.prototype.trim)
 */
function strTrim(str) {
    if (str) {
        // For Performance try and use the native instance, using string lookup of the function to easily pass the ES3 build checks and minification
        str = (_strTrim && str[cStrTrim]) ? str[cStrTrim]() : (str[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_REPLACE /* @min:%2ereplace */] ? str[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_REPLACE /* @min:%2ereplace */](/^\s+|(?=\s)\s+$/g, _InternalConstants__WEBPACK_IMPORTED_MODULE_2__.STR_EMPTY) : str);
    }
    return str;
}
var _objKeysHasDontEnumBug = !({ toString: null }).propertyIsEnumerable("toString");
var _objKeysDontEnums = [
    "toString",
    "toLocaleString",
    "valueOf",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "constructor"
];
/**
 * Returns the names of the enumerable string properties and methods of an object. This helper exists to avoid adding a polyfil for older browsers
 * that do not define Object.keys eg. ES3 only, IE8 just in case any page checks for presence/absence of the prototype implementation.
 * Note: For consistency this will not use the Object.keys implementation if it exists as this would cause a testing requirement to test with and without the implementations
 * @param obj Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
 */
function objKeys(obj) {
    var objType = typeof obj;
    if (objType !== _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.strShimFunction && (objType !== _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.strShimObject || obj === null)) {
        (0,_microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_3__.throwTypeError)("objKeys called on non-object");
    }
    // For Performance try and use the native instance, using string lookup of the function to easily pass the ES3 build checks and minification
    if (!_objKeysHasDontEnumBug && _objKeys) {
        return _objKeys(obj);
    }
    var result = [];
    for (var prop in obj) {
        if (obj && _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.ObjHasOwnProperty[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_CALL /* @min:%2ecall */](obj, prop)) {
            result[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_PUSH /* @min:%2epush */](prop);
        }
    }
    if (_objKeysHasDontEnumBug) {
        var dontEnumsLength = _objKeysDontEnums[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_LENGTH /* @min:%2elength */];
        for (var lp = 0; lp < dontEnumsLength; lp++) {
            if (obj && _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.ObjHasOwnProperty[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_CALL /* @min:%2ecall */](obj, _objKeysDontEnums[lp])) {
                result[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_PUSH /* @min:%2epush */](_objKeysDontEnums[lp]);
            }
        }
    }
    return result;
}
/**
 * Try to define get/set object property accessors for the target object/prototype, this will provide compatibility with
 * existing API definition when run within an ES5+ container that supports accessors but still enable the code to be loaded
 * and executed in an ES3 container, providing basic IE8 compatibility.
 * @param target The object on which to define the property.
 * @param prop The name of the property to be defined or modified.
 * @param getProp The getter function to wire against the getter.
 * @param setProp The setter function to wire against the setter.
 * @returns True if it was able to create the accessors otherwise false
 */
function objDefineAccessors(target, prop, getProp, setProp) {
    if (_objDefineProperty) {
        try {
            var descriptor = {
                enumerable: true,
                configurable: true
            };
            if (getProp) {
                descriptor.get = getProp;
            }
            if (setProp) {
                descriptor.set = setProp;
            }
            _objDefineProperty(target, prop, descriptor);
            return true;
        }
        catch (e) {
            // IE8 Defines a defineProperty on Object but it's only supported for DOM elements so it will throw
            // We will just ignore this here.
        }
    }
    return false;
}
function _doNothing(value) {
    return value;
}
function deepFreeze(obj) {
    if (_objFreeze) {
        objForEachKey(obj, function (name, value) {
            if (isArray(value) || isObject(value)) {
                _objFreeze(value);
            }
        });
    }
    return objFreeze(obj);
}
var objFreeze = _objFreeze || _doNothing;
var objSeal = _objSeal || _doNothing;
/**
 * Return the current time via the Date now() function (if available) and falls back to (new Date()).getTime() if now() is unavailable (IE8 or less)
 * https://caniuse.com/#search=Date.now
 */
function dateNow() {
    var dt = Date;
    return dt.now ? dt.now() : new dt().getTime();
}
/**
 * Returns the name of object if it's an Error. Otherwise, returns empty string.
 */
function getExceptionName(object) {
    if (isError(object)) {
        return object[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_NAME /* @min:%2ename */];
    }
    return _InternalConstants__WEBPACK_IMPORTED_MODULE_2__.STR_EMPTY;
}
/**
 * Sets the provided value on the target instance using the field name when the provided chk function returns true, the chk
 * function will only be called if the new value is no equal to the original value.
 * @param target - The target object
 * @param field - The key of the target
 * @param value - The value to set
 * @param valChk - [Optional] Callback to check the value that if supplied will be called check if the new value can be set
 * @param srcChk - [Optional] Callback to check to original value that if supplied will be called if the new value should be set (if allowed)
 * @returns The existing or new value, depending what was set
 */
function setValue(target, field, value, valChk, srcChk) {
    var theValue = value;
    if (target) {
        theValue = target[field];
        if (theValue !== value && (!srcChk || srcChk(theValue)) && (!valChk || valChk(value))) {
            theValue = value;
            target[field] = theValue;
        }
    }
    return theValue;
}
/**
 * Returns the current value from the target object if not null or undefined otherwise sets the new value and returns it
 * @param target - The target object to return or set the default value
 * @param field - The key for the field to set on the target
 * @param defValue - [Optional] The value to set if not already present, when not provided a empty object will be added
 */
function getSetValue(target, field, defValue) {
    var theValue;
    if (target) {
        theValue = target[field];
        if (!theValue && isNullOrUndefined(theValue)) {
            // Supports having the default as null
            theValue = !isUndefined(defValue) ? defValue : {};
            target[field] = theValue;
        }
    }
    else {
        // Expanded for performance so we only check defValue if required
        theValue = !isUndefined(defValue) ? defValue : {};
    }
    return theValue;
}
/**
 * Get the mapped config value, if null or undefined any supplied defaultValue will be returned.
 * @param field - The name of the field as the named enum value (number) or the string name.
 * @param defaultValue - The default value to return if the config field is not present, null or undefined.
 */
function getCfgValue(theValue, defaultValue) {
    return !isNullOrUndefined(theValue) ? theValue : defaultValue;
}
function isNotTruthy(value) {
    return !value;
}
function isTruthy(value) {
    return !!value;
}
function throwError(message) {
    throw new Error(message);
}
function _createProxyFunction(source, funcName) {
    var srcFunc = null;
    var src = null;
    if (isFunction(source)) {
        srcFunc = source;
    }
    else {
        src = source;
    }
    return function () {
        // Capture the original arguments passed to the method
        var originalArguments = arguments;
        if (srcFunc) {
            src = srcFunc();
        }
        if (src) {
            return src[funcName][_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_APPLY /* @min:%2eapply */](src, originalArguments);
        }
    };
}
/**
 * Effectively assigns all enumerable properties (not just own properties) and functions (including inherited prototype) from
 * the source object to the target, it attempts to use proxy getters / setters (if possible) and proxy functions to avoid potential
 * implementation issues by assigning prototype functions as instance ones
 *
 * This method is the primary method used to "update" the snippet proxy with the ultimate implementations.
 *
 * Special ES3 Notes:
 * Updates (setting) of direct property values on the target or indirectly on the source object WILL NOT WORK PROPERLY, updates to the
 * properties of "referenced" object will work (target.context.newValue = 10 => will be reflected in the source.context as it's the
 * same object). ES3 Failures: assigning target.myProp = 3 -> Won't change source.myProp = 3, likewise the reverse would also fail.
 * @param target - The target object to be assigned with the source properties and functions
 * @param source - The source object which will be assigned / called by setting / calling the targets proxies
 * @param chkSet - An optional callback to determine whether a specific property/function should be proxied
 */
function proxyAssign(target, source, chkSet) {
    if (target && source && isObject(target) && isObject(source)) {
        var _loop_1 = function (field) {
            if (isString(field)) {
                var value = source[field];
                if (isFunction(value)) {
                    if (!chkSet || chkSet(field, true, source, target)) {
                        // Create a proxy function rather than just copying the (possible) prototype to the new object as an instance function
                        target[field] = _createProxyFunction(source, field);
                    }
                }
                else if (!chkSet || chkSet(field, false, source, target)) {
                    if (hasOwnProperty(target, field)) {
                        // Remove any previous instance property
                        delete target[field];
                    }
                    if (!objDefineAccessors(target, field, function () {
                        return source[field];
                    }, function (theValue) {
                        source[field] = theValue;
                    })) {
                        // Unable to create an accessor, so just assign the values as a fallback
                        // -- this will (mostly) work for objects
                        // -- but will fail for accessing primitives (if the source changes it) and all types of "setters" as the source won't be modified
                        target[field] = value;
                    }
                }
            }
        };
        // effectively apply/proxy full source to the target instance
        for (var field in source) {
            _loop_1(field);
        }
    }
    return target;
}
/**
 * Creates a proxy function on the target which internally will call the source version with all arguments passed to the target method.
 *
 * @param target - The target object to be assigned with the source properties and functions
 * @param name - The function name that will be added on the target
 * @param source - The source object which will be assigned / called by setting / calling the targets proxies
 * @param theFunc - The function name on the source that will be proxied on the target
 * @param overwriteTarget - If `false` this will not replace any pre-existing name otherwise (the default) it will overwrite any existing name
 */
function proxyFunctionAs(target, name, source, theFunc, overwriteTarget) {
    if (target && name && source) {
        if (overwriteTarget !== false || isUndefined(target[name])) {
            target[name] = _createProxyFunction(source, theFunc);
        }
    }
}
/**
 * Creates proxy functions on the target which internally will call the source version with all arguments passed to the target method.
 *
 * @param target - The target object to be assigned with the source properties and functions
 * @param source - The source object which will be assigned / called by setting / calling the targets proxies
 * @param functionsToProxy - An array of function names that will be proxied on the target
 * @param overwriteTarget - If false this will not replace any pre-existing name otherwise (the default) it will overwrite any existing name
 */
function proxyFunctions(target, source, functionsToProxy, overwriteTarget) {
    if (target && source && isObject(target) && isArray(functionsToProxy)) {
        arrForEach(functionsToProxy, function (theFuncName) {
            if (isString(theFuncName)) {
                proxyFunctionAs(target, theFuncName, source, theFuncName, overwriteTarget);
            }
        });
    }
    return target;
}
/**
 * Simpler helper to create a dynamic class that implements the interface and populates the values with the defaults.
 * Only instance properties (hasOwnProperty) values are copied from the defaults to the new instance
 * @param defaults Simple helper
 */
function createClassFromInterface(defaults) {
    return /** @class */ (function () {
        function class_1() {
            var _this_1 = this;
            if (defaults) {
                objForEachKey(defaults, function (field, value) {
                    _this_1[field] = value;
                });
            }
        }
        return class_1;
    }());
}
/**
 * A helper function to assist with JIT performance for objects that have properties added / removed dynamically
 * this is primarily for chromium based browsers and has limited effects on Firefox and none of IE. Only call this
 * function after you have finished "updating" the object, calling this within loops reduces or defeats the benefits.
 * This helps when iterating using for..in, objKeys() and objForEach()
 * @param theObject - The object to be optimized if possible
 */
function optimizeObject(theObject) {
    // V8 Optimization to cause the JIT compiler to create a new optimized object for looking up the own properties
    // primarily for object with <= 19 properties for >= 20 the effect is reduced or non-existent
    if (theObject && _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.ObjAssign) {
        theObject = (0,_microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.ObjClass)((0,_microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.ObjAssign)({}, theObject));
    }
    return theObject;
}
function objExtend(obj1, obj2, obj3, obj4, obj5, obj6) {
    // Variables
    var theArgs = arguments;
    var extended = theArgs[0] || {};
    var argLen = theArgs[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_LENGTH /* @min:%2elength */];
    var deep = false;
    var idx = 1;
    // Check for "Deep" flag
    if (argLen > 0 && isBoolean(extended)) {
        deep = extended;
        extended = theArgs[idx] || {};
        idx++;
    }
    // Handle case when target is a string or something (possible in deep copy)
    if (!isObject(extended)) {
        extended = {};
    }
    // Loop through each remaining object and conduct a merge
    for (; idx < argLen; idx++) {
        var arg = theArgs[idx];
        var isArgArray = isArray(arg);
        var isArgObj = isObject(arg);
        for (var prop in arg) {
            var propOk = (isArgArray && (prop in arg)) || (isArgObj && (_microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.ObjHasOwnProperty[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_CALL /* @min:%2ecall */](arg, prop)));
            if (!propOk) {
                continue;
            }
            var newValue = arg[prop];
            var isNewArray = void 0;
            // If deep merge and property is an object, merge properties
            if (deep && newValue && ((isNewArray = isArray(newValue)) || isPlainObject(newValue))) {
                // Grab the current value of the extended object
                var clone = extended[prop];
                if (isNewArray) {
                    if (!isArray(clone)) {
                        // We can't "merge" an array with a non-array so overwrite the original
                        clone = [];
                    }
                }
                else if (!isPlainObject(clone)) {
                    // We can't "merge" an object with a non-object
                    clone = {};
                }
                // Never move the original objects always clone them
                newValue = objExtend(deep, clone, newValue);
            }
            // Assign the new (or previous) value (unless undefined)
            if (newValue !== undefined) {
                extended[prop] = newValue;
            }
        }
    }
    return extended;
}
//# sourceMappingURL=HelperFuncs.js.map

/***/ }),

/***/ 531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STR_CHANNELS": () => (/* binding */ STR_CHANNELS),
/* harmony export */   "STR_CORE": () => (/* binding */ STR_CORE),
/* harmony export */   "STR_CREATE_PERF_MGR": () => (/* binding */ STR_CREATE_PERF_MGR),
/* harmony export */   "STR_DISABLED": () => (/* binding */ STR_DISABLED),
/* harmony export */   "STR_EMPTY": () => (/* binding */ STR_EMPTY),
/* harmony export */   "STR_ERROR_TO_CONSOLE": () => (/* binding */ STR_ERROR_TO_CONSOLE),
/* harmony export */   "STR_EVENTS_DISCARDED": () => (/* binding */ STR_EVENTS_DISCARDED),
/* harmony export */   "STR_EVENTS_SEND_REQUEST": () => (/* binding */ STR_EVENTS_SEND_REQUEST),
/* harmony export */   "STR_EVENTS_SENT": () => (/* binding */ STR_EVENTS_SENT),
/* harmony export */   "STR_EXTENSIONS": () => (/* binding */ STR_EXTENSIONS),
/* harmony export */   "STR_EXTENSION_CONFIG": () => (/* binding */ STR_EXTENSION_CONFIG),
/* harmony export */   "STR_GET_PERF_MGR": () => (/* binding */ STR_GET_PERF_MGR),
/* harmony export */   "STR_PERF_EVENT": () => (/* binding */ STR_PERF_EVENT),
/* harmony export */   "STR_PRIORITY": () => (/* binding */ STR_PRIORITY),
/* harmony export */   "STR_PROCESS_TELEMETRY": () => (/* binding */ STR_PROCESS_TELEMETRY),
/* harmony export */   "STR_WARN_TO_CONSOLE": () => (/* binding */ STR_WARN_TO_CONSOLE)
/* harmony export */ });
/*
 * Application Insights JavaScript SDK - Core, 2.8.16
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */


// ###################################################################################################################################################
// Note: DON'T Export these const from the package as we are still targeting ES3 this will export a mutable variables that someone could change!!!
// ###################################################################################################################################################
var STR_EMPTY = "";
var STR_CHANNELS = "channels";
var STR_CORE = "core";
var STR_CREATE_PERF_MGR = "createPerfMgr";
var STR_DISABLED = "disabled";
var STR_EXTENSION_CONFIG = "extensionConfig";
var STR_EXTENSIONS = "extensions";
var STR_PROCESS_TELEMETRY = "processTelemetry";
var STR_PRIORITY = "priority";
var STR_EVENTS_SENT = "eventsSent";
var STR_EVENTS_DISCARDED = "eventsDiscarded";
var STR_EVENTS_SEND_REQUEST = "eventsSendRequest";
var STR_PERF_EVENT = "perfEvent";
var STR_ERROR_TO_CONSOLE = "errorToConsole";
var STR_WARN_TO_CONSOLE = "warnToConsole";
var STR_GET_PERF_MGR = "getPerfMgr";
//# sourceMappingURL=InternalConstants.js.map

/***/ }),

/***/ 540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfEvent": () => (/* binding */ PerfEvent),
/* harmony export */   "PerfManager": () => (/* binding */ PerfManager),
/* harmony export */   "doPerf": () => (/* binding */ doPerf),
/* harmony export */   "getGblPerfMgr": () => (/* binding */ getGblPerfMgr),
/* harmony export */   "setGblPerfMgr": () => (/* binding */ setGblPerfMgr)
/* harmony export */ });
/* harmony import */ var _microsoft_dynamicproto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(536);
/* harmony import */ var _DynamicConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(530);
/* harmony import */ var _HelperFuncs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(528);
/* harmony import */ var _InternalConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(531);
/*
 * Application Insights JavaScript SDK - Core, 2.8.16
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */






var strExecutionContextKey = "ctx";
var strParentContextKey = "ParentContextKey";
var strChildrenContextKey = "ChildrenContextKey";
var _defaultPerfManager = null;
var PerfEvent = /** @class */ (function () {
    function PerfEvent(name, payloadDetails, isAsync) {
        var _self = this;
        var accessorDefined = false;
        _self.start = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_0__.dateNow)();
        _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_NAME /* @min:%2ename */] = name;
        _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_IS_ASYNC /* @min:%2eisAsync */] = isAsync;
        _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_IS_CHILD_EVT /* @min:%2eisChildEvt */] = function () { return false; };
        if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_0__.isFunction)(payloadDetails)) {
            // Create an accessor to minimize the potential performance impact of executing the payloadDetails callback
            var theDetails_1;
            accessorDefined = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_0__.objDefineAccessors)(_self, "payload", function () {
                // Delay the execution of the payloadDetails until needed
                if (!theDetails_1 && (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_0__.isFunction)(payloadDetails)) {
                    theDetails_1 = payloadDetails();
                    // clear it out now so the referenced objects can be garbage collected
                    payloadDetails = null;
                }
                return theDetails_1;
            });
        }
        _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_GET_CTX /* @min:%2egetCtx */] = function (key) {
            if (key) {
                // The parent and child links are located directly on the object (for better viewing in the DebugPlugin)
                if (key === PerfEvent[strParentContextKey] || key === PerfEvent[strChildrenContextKey]) {
                    return _self[key];
                }
                return (_self[strExecutionContextKey] || {})[key];
            }
            return null;
        };
        _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SET_CTX /* @min:%2esetCtx */] = function (key, value) {
            if (key) {
                // Put the parent and child links directly on the object (for better viewing in the DebugPlugin)
                if (key === PerfEvent[strParentContextKey]) {
                    // Simple assumption, if we are setting a parent then we must be a child
                    if (!_self[key]) {
                        _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_IS_CHILD_EVT /* @min:%2eisChildEvt */] = function () { return true; };
                    }
                    _self[key] = value;
                }
                else if (key === PerfEvent[strChildrenContextKey]) {
                    _self[key] = value;
                }
                else {
                    var ctx = _self[strExecutionContextKey] = _self[strExecutionContextKey] || {};
                    ctx[key] = value;
                }
            }
        };
        _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_COMPLETE /* @min:%2ecomplete */] = function () {
            var childTime = 0;
            var childEvts = _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_GET_CTX /* @min:%2egetCtx */](PerfEvent[strChildrenContextKey]);
            if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_0__.isArray)(childEvts)) {
                for (var lp = 0; lp < childEvts[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_LENGTH /* @min:%2elength */]; lp++) {
                    var childEvt = childEvts[lp];
                    if (childEvt) {
                        childTime += childEvt[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_TIME /* @min:%2etime */];
                    }
                }
            }
            _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_TIME /* @min:%2etime */] = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_0__.dateNow)() - _self.start;
            _self.exTime = _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_TIME /* @min:%2etime */] - childTime;
            _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_COMPLETE /* @min:%2ecomplete */] = function () { };
            if (!accessorDefined && (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_0__.isFunction)(payloadDetails)) {
                // If we couldn't define the property set during complete -- to minimize the perf impact until after the time
                _self.payload = payloadDetails();
            }
        };
    }
    PerfEvent.ParentContextKey = "parent";
    PerfEvent.ChildrenContextKey = "childEvts";
    return PerfEvent;
}());

var PerfManager = /** @class */ (function () {
    function PerfManager(manager) {
        /**
         * General bucket used for execution context set and retrieved via setCtx() and getCtx.
         * Defined as private so it can be visualized via the DebugPlugin
         */
        this.ctx = {};
        (0,_microsoft_dynamicproto_js__WEBPACK_IMPORTED_MODULE_2__["default"])(PerfManager, this, function (_self) {
            _self.create = function (src, payloadDetails, isAsync) {
                // TODO (@MSNev): at some point we will want to add additional configuration to "select" which events to instrument
                // for now this is just a simple do everything.
                return new PerfEvent(src, payloadDetails, isAsync);
            };
            _self.fire = function (perfEvent) {
                if (perfEvent) {
                    perfEvent[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_COMPLETE /* @min:%2ecomplete */]();
                    if (manager && (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_0__.isFunction)(manager[_InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_PERF_EVENT /* @min:%2eperfEvent */])) {
                        manager[_InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_PERF_EVENT /* @min:%2eperfEvent */](perfEvent);
                    }
                }
            };
            _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SET_CTX /* @min:%2esetCtx */] = function (key, value) {
                if (key) {
                    var ctx = _self[strExecutionContextKey] = _self[strExecutionContextKey] || {};
                    ctx[key] = value;
                }
            };
            _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_GET_CTX /* @min:%2egetCtx */] = function (key) {
                return (_self[strExecutionContextKey] || {})[key];
            };
        });
    }
// Removed Stub for PerfManager.prototype.create.
// Removed Stub for PerfManager.prototype.fire.
// Removed Stub for PerfManager.prototype.setCtx.
// Removed Stub for PerfManager.prototype.getCtx.
    // This is a workaround for an IE8 bug when using dynamicProto() with classes that don't have any
    // non-dynamic functions or static properties/functions when using uglify-js to minify the resulting code.
    // this will be removed when ES3 support is dropped.
    PerfManager.__ieDyn=1;

    return PerfManager;
}());

var doPerfActiveKey = "CoreUtils.doPerf";
/**
 * Helper function to wrap a function with a perf event
 * @param mgrSource - The Performance Manager or a Performance provider source (may be null)
 * @param getSource - The callback to create the source name for the event (if perf monitoring is enabled)
 * @param func - The function to call and measure
 * @param details - A function to return the payload details
 * @param isAsync - Is the event / function being call asynchronously or synchronously
 */
function doPerf(mgrSource, getSource, func, details, isAsync) {
    if (mgrSource) {
        var perfMgr = mgrSource;
        if (perfMgr[_InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_GET_PERF_MGR]) {
            // Looks like a perf manager provider object
            perfMgr = perfMgr[_InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_GET_PERF_MGR]();
        }
        if (perfMgr) {
            var perfEvt = void 0;
            var currentActive = perfMgr[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_GET_CTX /* @min:%2egetCtx */](doPerfActiveKey);
            try {
                perfEvt = perfMgr.create(getSource(), details, isAsync);
                if (perfEvt) {
                    if (currentActive && perfEvt[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SET_CTX /* @min:%2esetCtx */]) {
                        perfEvt[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SET_CTX /* @min:%2esetCtx */](PerfEvent[strParentContextKey], currentActive);
                        if (currentActive[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_GET_CTX /* @min:%2egetCtx */] && currentActive[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SET_CTX /* @min:%2esetCtx */]) {
                            var children = currentActive[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_GET_CTX /* @min:%2egetCtx */](PerfEvent[strChildrenContextKey]);
                            if (!children) {
                                children = [];
                                currentActive[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SET_CTX /* @min:%2esetCtx */](PerfEvent[strChildrenContextKey], children);
                            }
                            children[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_PUSH /* @min:%2epush */](perfEvt);
                        }
                    }
                    // Set this event as the active event now
                    perfMgr[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SET_CTX /* @min:%2esetCtx */](doPerfActiveKey, perfEvt);
                    return func(perfEvt);
                }
            }
            catch (ex) {
                if (perfEvt && perfEvt[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SET_CTX /* @min:%2esetCtx */]) {
                    perfEvt[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SET_CTX /* @min:%2esetCtx */]("exception", ex);
                }
            }
            finally {
                // fire the perf event
                if (perfEvt) {
                    perfMgr.fire(perfEvt);
                }
                // Reset the active event to the previous value
                perfMgr[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SET_CTX /* @min:%2esetCtx */](doPerfActiveKey, currentActive);
            }
        }
    }
    return func();
}
/**
 * Set the global performance manager to use when there is no core instance or it has not been initialized yet.
 * @param perfManager - The IPerfManager instance to use when no performance manager is supplied.
 */
function setGblPerfMgr(perfManager) {
    _defaultPerfManager = perfManager;
}
/**
 * Get the current global performance manager that will be used with no performance manager is supplied.
 * @returns - The current default manager
 */
function getGblPerfMgr() {
    return _defaultPerfManager;
}
//# sourceMappingURL=PerfManager.js.map

/***/ }),

/***/ 551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcessTelemetryContext": () => (/* binding */ ProcessTelemetryContext),
/* harmony export */   "createProcessTelemetryContext": () => (/* binding */ createProcessTelemetryContext),
/* harmony export */   "createProcessTelemetryUnloadContext": () => (/* binding */ createProcessTelemetryUnloadContext),
/* harmony export */   "createProcessTelemetryUpdateContext": () => (/* binding */ createProcessTelemetryUpdateContext),
/* harmony export */   "createTelemetryPluginProxy": () => (/* binding */ createTelemetryPluginProxy),
/* harmony export */   "createTelemetryProxyChain": () => (/* binding */ createTelemetryProxyChain)
/* harmony export */ });
/* harmony import */ var _DynamicConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(530);
/* harmony import */ var _DiagnosticLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(537);
/* harmony import */ var _EnvUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(538);
/* harmony import */ var _HelperFuncs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(528);
/* harmony import */ var _InternalConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(531);
/* harmony import */ var _PerfManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(540);
/* harmony import */ var _TelemetryHelpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(552);
/*
 * Application Insights JavaScript SDK - Core, 2.8.16
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */










var strTelemetryPluginChain = "TelemetryPluginChain";
var strHasRunFlags = "_hasRun";
var strGetTelCtx = "_getTelCtx";
var _chainId = 0;
function _getNextProxyStart(proxy, core, startAt) {
    while (proxy) {
        if (proxy[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_GET_PLUGIN /* @min:%2egetPlugin */]() === startAt) {
            return proxy;
        }
        proxy = proxy[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_GET_NEXT /* @min:%2egetNext */]();
    }
    // This wasn't found in the existing chain so create an isolated one with just this plugin
    return createTelemetryProxyChain([startAt], core[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_CONFIG /* @min:%2econfig */] || {}, core);
}
/**
 * @ignore
 * @param telemetryChain
 * @param config
 * @param core
 * @param startAt - Identifies the next plugin to execute, if null there is no "next" plugin and if undefined it should assume the start of the chain
 * @returns
 */
function _createInternalContext(telemetryChain, config, core, startAt) {
    // We have a special case where we want to start execution from this specific plugin
    // or we simply reuse the existing telemetry plugin chain (normal execution case)
    var _nextProxy = null; // By Default set as no next plugin
    var _onComplete = [];
    if (startAt !== null) {
        // There is no next element (null) vs not defined (undefined) so use the full chain
        _nextProxy = startAt ? _getNextProxyStart(telemetryChain, core, startAt) : telemetryChain;
    }
    var context = {
        _next: _moveNext,
        ctx: {
            core: function () {
                return core;
            },
            diagLog: function () {
                return (0,_DiagnosticLogger__WEBPACK_IMPORTED_MODULE_1__.safeGetLogger)(core, config);
            },
            getCfg: function () {
                return config;
            },
            getExtCfg: _getExtCfg,
            getConfig: _getConfig,
            hasNext: function () {
                return !!_nextProxy;
            },
            getNext: function () {
                return _nextProxy;
            },
            setNext: function (nextPlugin) {
                _nextProxy = nextPlugin;
            },
            iterate: _iterateChain,
            onComplete: _addOnComplete
        }
    };
    function _addOnComplete(onComplete, that) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        if (onComplete) {
            _onComplete[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_PUSH /* @min:%2epush */]({
                func: onComplete,
                self: !(0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(that) ? that : context.ctx,
                args: args
            });
        }
    }
    function _moveNext() {
        var nextProxy = _nextProxy;
        // Automatically move to the next plugin
        _nextProxy = nextProxy ? nextProxy[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_GET_NEXT /* @min:%2egetNext */]() : null;
        if (!nextProxy) {
            var onComplete = _onComplete;
            if (onComplete && onComplete[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_LENGTH /* @min:%2elength */] > 0) {
                (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.arrForEach)(onComplete, function (completeDetails) {
                    try {
                        completeDetails.func[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_CALL /* @min:%2ecall */](completeDetails.self, completeDetails.args);
                    }
                    catch (e) {
                        (0,_DiagnosticLogger__WEBPACK_IMPORTED_MODULE_1__._throwInternal)(core[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_LOGGER /* @min:%2elogger */], 2 /* eLoggingSeverity.WARNING */, 73 /* _eInternalMessageId.PluginException */, "Unexpected Exception during onComplete - " + (0,_EnvUtils__WEBPACK_IMPORTED_MODULE_3__.dumpObj)(e));
                    }
                });
                _onComplete = [];
            }
        }
        return nextProxy;
    }
    function _getExtCfg(identifier, defaultValue, mergeDefault) {
        if (defaultValue === void 0) { defaultValue = {}; }
        if (mergeDefault === void 0) { mergeDefault = 0 /* GetExtCfgMergeType.None */; }
        var theConfig;
        if (config) {
            var extConfig = config[_InternalConstants__WEBPACK_IMPORTED_MODULE_4__.STR_EXTENSION_CONFIG /* @min:%2eextensionConfig */];
            if (extConfig && identifier) {
                theConfig = extConfig[identifier];
            }
        }
        if (!theConfig) {
            // Just use the defaults
            theConfig = defaultValue;
        }
        else if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isObject)(defaultValue)) {
            if (mergeDefault !== 0 /* GetExtCfgMergeType.None */) {
                // Merge the defaults and configured values
                var newConfig_1 = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.objExtend)(true, defaultValue, theConfig);
                if (config && mergeDefault === 2 /* GetExtCfgMergeType.MergeDefaultFromRootOrDefault */) {
                    // Enumerate over the defaultValues and if not already populated attempt to
                    // find a value from the root config
                    (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.objForEachKey)(defaultValue, function (field) {
                        // for each unspecified field, set the default value
                        if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(newConfig_1[field])) {
                            var cfgValue = config[field];
                            if (!(0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(cfgValue)) {
                                newConfig_1[field] = cfgValue;
                            }
                        }
                    });
                }
                theConfig = newConfig_1;
            }
        }
        return theConfig;
    }
    function _getConfig(identifier, field, defaultValue) {
        if (defaultValue === void 0) { defaultValue = false; }
        var theValue;
        var extConfig = _getExtCfg(identifier, null);
        if (extConfig && !(0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(extConfig[field])) {
            theValue = extConfig[field];
        }
        else if (config && !(0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(config[field])) {
            theValue = config[field];
        }
        return !(0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(theValue) ? theValue : defaultValue;
    }
    function _iterateChain(cb) {
        // Keep processing until we reach the end of the chain
        var nextPlugin;
        while (!!(nextPlugin = context._next())) {
            var plugin = nextPlugin[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_GET_PLUGIN /* @min:%2egetPlugin */]();
            if (plugin) {
                // callback with the current on
                cb(plugin);
            }
        }
    }
    return context;
}
/**
 * Creates a new Telemetry Item context with the current config, core and plugin execution chain
 * @param plugins - The plugin instances that will be executed
 * @param config - The current config
 * @param core - The current core instance
 * @param startAt - Identifies the next plugin to execute, if null there is no "next" plugin and if undefined it should assume the start of the chain
 */
function createProcessTelemetryContext(telemetryChain, config, core, startAt) {
    var internalContext = _createInternalContext(telemetryChain, config, core, startAt);
    var context = internalContext.ctx;
    function _processNext(env) {
        var nextPlugin = internalContext._next();
        // Run the next plugin which will call "processNext()"
        nextPlugin && nextPlugin[_InternalConstants__WEBPACK_IMPORTED_MODULE_4__.STR_PROCESS_TELEMETRY /* @min:%2eprocessTelemetry */](env, context);
        return !nextPlugin;
    }
    function _createNew(plugins, startAt) {
        if (plugins === void 0) { plugins = null; }
        if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isArray)(plugins)) {
            plugins = createTelemetryProxyChain(plugins, config, core, startAt);
        }
        return createProcessTelemetryContext(plugins || context[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_GET_NEXT /* @min:%2egetNext */](), config, core, startAt);
    }
    context[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_PROCESS_NEXT /* @min:%2eprocessNext */] = _processNext;
    context[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_CREATE_NEW /* @min:%2ecreateNew */] = _createNew;
    return context;
}
/**
 * Creates a new Telemetry Item context with the current config, core and plugin execution chain for handling the unloading of the chain
 * @param plugins - The plugin instances that will be executed
 * @param config - The current config
 * @param core - The current core instance
 * @param startAt - Identifies the next plugin to execute, if null there is no "next" plugin and if undefined it should assume the start of the chain
 */
function createProcessTelemetryUnloadContext(telemetryChain, core, startAt) {
    var config = core[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_CONFIG /* @min:%2econfig */] || {};
    var internalContext = _createInternalContext(telemetryChain, config, core, startAt);
    var context = internalContext.ctx;
    function _processNext(unloadState) {
        var nextPlugin = internalContext._next();
        nextPlugin && nextPlugin.unload(context, unloadState);
        return !nextPlugin;
    }
    function _createNew(plugins, startAt) {
        if (plugins === void 0) { plugins = null; }
        if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isArray)(plugins)) {
            plugins = createTelemetryProxyChain(plugins, config, core, startAt);
        }
        return createProcessTelemetryUnloadContext(plugins || context[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_GET_NEXT /* @min:%2egetNext */](), core, startAt);
    }
    context[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_PROCESS_NEXT /* @min:%2eprocessNext */] = _processNext;
    context[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_CREATE_NEW /* @min:%2ecreateNew */] = _createNew;
    return context;
}
/**
 * Creates a new Telemetry Item context with the current config, core and plugin execution chain for updating the configuration
 * @param plugins - The plugin instances that will be executed
 * @param config - The current config
 * @param core - The current core instance
 * @param startAt - Identifies the next plugin to execute, if null there is no "next" plugin and if undefined it should assume the start of the chain
 */
function createProcessTelemetryUpdateContext(telemetryChain, core, startAt) {
    var config = core[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_CONFIG /* @min:%2econfig */] || {};
    var internalContext = _createInternalContext(telemetryChain, config, core, startAt);
    var context = internalContext.ctx;
    function _processNext(updateState) {
        return context.iterate(function (plugin) {
            if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isFunction)(plugin[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_UPDATE /* @min:%2eupdate */])) {
                plugin[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_UPDATE /* @min:%2eupdate */](context, updateState);
            }
        });
    }
    function _createNew(plugins, startAt) {
        if (plugins === void 0) { plugins = null; }
        if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isArray)(plugins)) {
            plugins = createTelemetryProxyChain(plugins, config, core, startAt);
        }
        return createProcessTelemetryUpdateContext(plugins || context[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_GET_NEXT /* @min:%2egetNext */](), core, startAt);
    }
    context[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_PROCESS_NEXT /* @min:%2eprocessNext */] = _processNext;
    context[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_CREATE_NEW /* @min:%2ecreateNew */] = _createNew;
    return context;
}
/**
 * Creates an execution chain from the array of plugins
 * @param plugins - The array of plugins that will be executed in this order
 * @param defItemCtx - The default execution context to use when no telemetry context is passed to processTelemetry(), this
 * should be for legacy plugins only. Currently, only used for passing the current core instance and to provide better error
 * reporting (hasRun) when errors occur.
 */
function createTelemetryProxyChain(plugins, config, core, startAt) {
    var firstProxy = null;
    var add = startAt ? false : true;
    if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isArray)(plugins) && plugins[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_LENGTH /* @min:%2elength */] > 0) {
        // Create the proxies and wire up the next plugin chain
        var lastProxy_1 = null;
        (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.arrForEach)(plugins, function (thePlugin) {
            if (!add && startAt === thePlugin) {
                add = true;
            }
            if (add && thePlugin && (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isFunction)(thePlugin[_InternalConstants__WEBPACK_IMPORTED_MODULE_4__.STR_PROCESS_TELEMETRY /* @min:%2eprocessTelemetry */])) {
                // Only add plugins that are processors
                var newProxy = createTelemetryPluginProxy(thePlugin, config, core);
                if (!firstProxy) {
                    firstProxy = newProxy;
                }
                if (lastProxy_1) {
                    // Set this new proxy as the next for the previous one
                    lastProxy_1._setNext(newProxy);
                }
                lastProxy_1 = newProxy;
            }
        });
    }
    if (startAt && !firstProxy) {
        // Special case where the "startAt" was not in the original list of plugins
        return createTelemetryProxyChain([startAt], config, core);
    }
    return firstProxy;
}
/**
 * Create the processing telemetry proxy instance, the proxy is used to abstract the current plugin to allow monitoring and
 * execution plugins while passing around the dynamic execution state (IProcessTelemetryContext), the proxy instance no longer
 * contains any execution state and can be reused between requests (this was not the case for 2.7.2 and earlier with the
 * TelemetryPluginChain class).
 * @param plugin - The plugin instance to proxy
 * @param config - The default execution context to use when no telemetry context is passed to processTelemetry(), this
 * should be for legacy plugins only. Currently, only used for passing the current core instance and to provide better error
 * reporting (hasRun) when errors occur.
 * @returns
 */
function createTelemetryPluginProxy(plugin, config, core) {
    var nextProxy = null;
    var hasProcessTelemetry = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isFunction)(plugin[_InternalConstants__WEBPACK_IMPORTED_MODULE_4__.STR_PROCESS_TELEMETRY /* @min:%2eprocessTelemetry */]);
    var hasSetNext = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isFunction)(plugin[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_SET_NEXT_PLUGIN /* @min:%2esetNextPlugin */]);
    var chainId;
    if (plugin) {
        chainId = plugin[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_IDENTIFIER /* @min:%2eidentifier */] + "-" + plugin[_InternalConstants__WEBPACK_IMPORTED_MODULE_4__.STR_PRIORITY /* @min:%2epriority */] + "-" + _chainId++;
    }
    else {
        chainId = "Unknown-0-" + _chainId++;
    }
    var proxyChain = {
        getPlugin: function () {
            return plugin;
        },
        getNext: function () {
            return nextProxy;
        },
        processTelemetry: _processTelemetry,
        unload: _unloadPlugin,
        update: _updatePlugin,
        _id: chainId,
        _setNext: function (nextPlugin) {
            nextProxy = nextPlugin;
        }
    };
    function _getTelCtx() {
        var itemCtx;
        // Looks like a plugin didn't pass the (optional) context, so create a new one
        if (plugin && (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isFunction)(plugin[strGetTelCtx])) {
            // This plugin extends from the BaseTelemetryPlugin so lets use it
            itemCtx = plugin[strGetTelCtx]();
        }
        if (!itemCtx) {
            // Create a temporary one
            itemCtx = createProcessTelemetryContext(proxyChain, config, core);
        }
        return itemCtx;
    }
    function _processChain(itemCtx, processPluginFn, name, details, isAsync) {
        var hasRun = false;
        var identifier = plugin ? plugin[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_IDENTIFIER /* @min:%2eidentifier */] : strTelemetryPluginChain;
        var hasRunContext = itemCtx[strHasRunFlags];
        if (!hasRunContext) {
            // Assign and populate
            hasRunContext = itemCtx[strHasRunFlags] = {};
        }
        // Ensure that we keep the context in sync
        itemCtx.setNext(nextProxy);
        if (plugin) {
            (0,_PerfManager__WEBPACK_IMPORTED_MODULE_5__.doPerf)(itemCtx[_InternalConstants__WEBPACK_IMPORTED_MODULE_4__.STR_CORE /* @min:%2ecore */](), function () { return identifier + ":" + name; }, function () {
                // Mark this component as having run
                hasRunContext[chainId] = true;
                try {
                    // Set a flag on the next plugin so we know if it was attempted to be executed
                    var nextId = nextProxy ? nextProxy._id : _InternalConstants__WEBPACK_IMPORTED_MODULE_4__.STR_EMPTY;
                    if (nextId) {
                        hasRunContext[nextId] = false;
                    }
                    hasRun = processPluginFn(itemCtx);
                }
                catch (error) {
                    var hasNextRun = nextProxy ? hasRunContext[nextProxy._id] : true;
                    if (hasNextRun) {
                        // The next plugin after us has already run so set this one as complete
                        hasRun = true;
                    }
                    if (!nextProxy || !hasNextRun) {
                        // Either we have no next plugin or the current one did not attempt to call the next plugin
                        // Which means the current one is the root of the failure so log/report this failure
                        (0,_DiagnosticLogger__WEBPACK_IMPORTED_MODULE_1__._throwInternal)(itemCtx[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_DIAG_LOG /* @min:%2ediagLog */](), 1 /* eLoggingSeverity.CRITICAL */, 73 /* _eInternalMessageId.PluginException */, "Plugin [" + identifier + "] failed during " + name + " - " + (0,_EnvUtils__WEBPACK_IMPORTED_MODULE_3__.dumpObj)(error) + ", run flags: " + (0,_EnvUtils__WEBPACK_IMPORTED_MODULE_3__.dumpObj)(hasRunContext));
                    }
                }
            }, details, isAsync);
        }
        return hasRun;
    }
    function _processTelemetry(env, itemCtx) {
        itemCtx = itemCtx || _getTelCtx();
        function _callProcessTelemetry(itemCtx) {
            if (!plugin || !hasProcessTelemetry) {
                return false;
            }
            var pluginState = (0,_TelemetryHelpers__WEBPACK_IMPORTED_MODULE_6__._getPluginState)(plugin);
            if (pluginState[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_TEARDOWN /* @min:%2eteardown */] || pluginState[_InternalConstants__WEBPACK_IMPORTED_MODULE_4__.STR_DISABLED]) {
                return false;
            }
            // Ensure that we keep the context in sync (for processNext()), just in case a plugin
            // doesn't calls processTelemetry() instead of itemContext.processNext() or some
            // other form of error occurred
            if (hasSetNext) {
                // Backward compatibility setting the next plugin on the instance
                plugin[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_SET_NEXT_PLUGIN /* @min:%2esetNextPlugin */](nextProxy);
            }
            plugin[_InternalConstants__WEBPACK_IMPORTED_MODULE_4__.STR_PROCESS_TELEMETRY /* @min:%2eprocessTelemetry */](env, itemCtx);
            // Process Telemetry is expected to call itemCtx.processNext() or nextPlugin.processTelemetry()
            return true;
        }
        if (!_processChain(itemCtx, _callProcessTelemetry, "processTelemetry", function () { return ({ item: env }); }, !(env.sync))) {
            // The underlying plugin is either not defined, not enabled or does not have a processTelemetry implementation
            // so we still want the next plugin to be executed.
            itemCtx[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_PROCESS_NEXT /* @min:%2eprocessNext */](env);
        }
    }
    function _unloadPlugin(unloadCtx, unloadState) {
        function _callTeardown() {
            // Setting default of hasRun as false so the proxyProcessFn() is called as teardown() doesn't have to exist or call unloadNext().
            var hasRun = false;
            if (plugin) {
                var pluginState = (0,_TelemetryHelpers__WEBPACK_IMPORTED_MODULE_6__._getPluginState)(plugin);
                var pluginCore = plugin[_InternalConstants__WEBPACK_IMPORTED_MODULE_4__.STR_CORE] || pluginState[_InternalConstants__WEBPACK_IMPORTED_MODULE_4__.STR_CORE /* @min:%2ecore */];
                // Only teardown the plugin if it was initialized by the current core (i.e. It's not a shared plugin)
                if (plugin && (!pluginCore || pluginCore === unloadCtx.core()) && !pluginState[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_TEARDOWN /* @min:%2eteardown */]) {
                    // Handle plugins that don't extend from the BaseTelemetryPlugin
                    pluginState[_InternalConstants__WEBPACK_IMPORTED_MODULE_4__.STR_CORE /* @min:%2ecore */] = null;
                    pluginState[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_TEARDOWN /* @min:%2eteardown */] = true;
                    pluginState[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_IS_INITIALIZED /* @min:%2eisInitialized */] = false;
                    if (plugin[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_TEARDOWN /* @min:%2eteardown */] && plugin[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_TEARDOWN /* @min:%2eteardown */](unloadCtx, unloadState) === true) {
                        // plugin told us that it was going to (or has) call unloadCtx.processNext()
                        hasRun = true;
                    }
                }
            }
            return hasRun;
        }
        if (!_processChain(unloadCtx, _callTeardown, "unload", function () { }, unloadState[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_IS_ASYNC /* @min:%2eisAsync */])) {
            // Only called if we hasRun was not true
            unloadCtx[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_PROCESS_NEXT /* @min:%2eprocessNext */](unloadState);
        }
    }
    function _updatePlugin(updateCtx, updateState) {
        function _callUpdate() {
            // Setting default of hasRun as false so the proxyProcessFn() is called as teardown() doesn't have to exist or call unloadNext().
            var hasRun = false;
            if (plugin) {
                var pluginState = (0,_TelemetryHelpers__WEBPACK_IMPORTED_MODULE_6__._getPluginState)(plugin);
                var pluginCore = plugin[_InternalConstants__WEBPACK_IMPORTED_MODULE_4__.STR_CORE] || pluginState[_InternalConstants__WEBPACK_IMPORTED_MODULE_4__.STR_CORE /* @min:%2ecore */];
                // Only update the plugin if it was initialized by the current core (i.e. It's not a shared plugin)
                if (plugin && (!pluginCore || pluginCore === updateCtx.core()) && !pluginState[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_TEARDOWN /* @min:%2eteardown */]) {
                    if (plugin[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_UPDATE /* @min:%2eupdate */] && plugin[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_UPDATE /* @min:%2eupdate */](updateCtx, updateState) === true) {
                        // plugin told us that it was going to (or has) call unloadCtx.processNext()
                        hasRun = true;
                    }
                }
            }
            return hasRun;
        }
        if (!_processChain(updateCtx, _callUpdate, "update", function () { }, false)) {
            // Only called if we hasRun was not true
            updateCtx[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_PROCESS_NEXT /* @min:%2eprocessNext */](updateState);
        }
    }
    return (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.objFreeze)(proxyChain);
}
/**
 * This class will be removed!
 * @deprecated use createProcessTelemetryContext() instead
 */
var ProcessTelemetryContext = /** @class */ (function () {
    /**
     * Creates a new Telemetry Item context with the current config, core and plugin execution chain
     * @param plugins - The plugin instances that will be executed
     * @param config - The current config
     * @param core - The current core instance
     */
    function ProcessTelemetryContext(pluginChain, config, core, startAt) {
        var _self = this;
        var context = createProcessTelemetryContext(pluginChain, config, core, startAt);
        // Proxy all functions of the context to this object
        (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.proxyFunctions)(_self, context, (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.objKeys)(context));
    }
    return ProcessTelemetryContext;
}());

//# sourceMappingURL=ProcessTelemetryContext.js.map

/***/ }),

/***/ 545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mwcRandom32": () => (/* binding */ mwcRandom32),
/* harmony export */   "mwcRandomSeed": () => (/* binding */ mwcRandomSeed),
/* harmony export */   "newId": () => (/* binding */ newId),
/* harmony export */   "random32": () => (/* binding */ random32),
/* harmony export */   "randomValue": () => (/* binding */ randomValue)
/* harmony export */ });
/* harmony import */ var _DynamicConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(530);
/* harmony import */ var _EnvUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(538);
/* harmony import */ var _HelperFuncs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(528);
/* harmony import */ var _InternalConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(531);
/*
 * Application Insights JavaScript SDK - Core, 2.8.16
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */






var UInt32Mask = 0x100000000;
var MaxUInt32 = 0xffffffff;
// MWC based Random generator (for IE)
var _mwcSeeded = false;
var _mwcW = 123456789;
var _mwcZ = 987654321;
// Takes any integer
function _mwcSeed(seedValue) {
    if (seedValue < 0) {
        // Make sure we end up with a positive number and not -ve one.
        seedValue >>>= 0;
    }
    _mwcW = (123456789 + seedValue) & MaxUInt32;
    _mwcZ = (987654321 - seedValue) & MaxUInt32;
    _mwcSeeded = true;
}
function _autoSeedMwc() {
    // Simple initialization using default Math.random() - So we inherit any entropy from the browser
    // and bitwise XOR with the current milliseconds
    try {
        var now = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_0__.dateNow)() & 0x7fffffff;
        _mwcSeed(((Math.random() * UInt32Mask) ^ now) + now);
    }
    catch (e) {
        // Don't crash if something goes wrong
    }
}
/**
 * Generate a random value between 0 and maxValue, max value should be limited to a 32-bit maximum.
 * So maxValue(16) will produce a number from 0..16 (range of 17)
 * @param maxValue
 */
function randomValue(maxValue) {
    if (maxValue > 0) {
        return Math.floor((random32() / MaxUInt32) * (maxValue + 1)) >>> 0;
    }
    return 0;
}
/**
 * generate a random 32-bit number (0x000000..0xFFFFFFFF) or (-0x80000000..0x7FFFFFFF), defaults un-unsigned.
 * @param signed - True to return a signed 32-bit number (-0x80000000..0x7FFFFFFF) otherwise an unsigned one (0x000000..0xFFFFFFFF)
 */
function random32(signed) {
    var value = 0;
    var c = (0,_EnvUtils__WEBPACK_IMPORTED_MODULE_1__.getCrypto)() || (0,_EnvUtils__WEBPACK_IMPORTED_MODULE_1__.getMsCrypto)();
    if (c && c.getRandomValues) {
        // Make sure the number is converted into the specified range (-0x80000000..0x7FFFFFFF)
        value = c.getRandomValues(new Uint32Array(1))[0] & MaxUInt32;
    }
    if (value === 0 && (0,_EnvUtils__WEBPACK_IMPORTED_MODULE_1__.isIE)()) {
        // For IE 6, 7, 8 (especially on XP) Math.random is not very random
        if (!_mwcSeeded) {
            // Set the seed for the Mwc algorithm
            _autoSeedMwc();
        }
        // Don't use Math.random for IE
        // Make sure the number is converted into the specified range (-0x80000000..0x7FFFFFFF)
        value = mwcRandom32() & MaxUInt32;
    }
    if (value === 0) {
        // Make sure the number is converted into the specified range (-0x80000000..0x7FFFFFFF)
        value = Math.floor((UInt32Mask * Math.random()) | 0);
    }
    if (!signed) {
        // Make sure we end up with a positive number and not -ve one.
        value >>>= 0;
    }
    return value;
}
/**
 * Seed the MWC random number generator with the specified seed or a random value
 * @param value - optional the number to used as the seed, if undefined, null or zero a random value will be chosen
 */
function mwcRandomSeed(value) {
    if (!value) {
        _autoSeedMwc();
    }
    else {
        _mwcSeed(value);
    }
}
/**
 * Generate a random 32-bit number between (0x000000..0xFFFFFFFF) or (-0x80000000..0x7FFFFFFF), using MWC (Multiply with carry)
 * instead of Math.random() defaults to un-signed.
 * Used as a replacement random generator for IE to avoid issues with older IE instances.
 * @param signed - True to return a signed 32-bit number (-0x80000000..0x7FFFFFFF) otherwise an unsigned one (0x000000..0xFFFFFFFF)
 */
function mwcRandom32(signed) {
    _mwcZ = (36969 * (_mwcZ & 0xFFFF) + (_mwcZ >> 16)) & MaxUInt32;
    _mwcW = (18000 * (_mwcW & 0xFFFF) + (_mwcW >> 16)) & MaxUInt32;
    var value = (((_mwcZ << 16) + (_mwcW & 0xFFFF)) >>> 0) & MaxUInt32 | 0;
    if (!signed) {
        // Make sure we end up with a positive number and not -ve one.
        value >>>= 0;
    }
    return value;
}
/**
 * Generate random base64 id string.
 * The default length is 22 which is 132-bits so almost the same as a GUID but as base64 (the previous default was 5)
 * @param maxLength - Optional value to specify the length of the id to be generated, defaults to 22
 */
function newId(maxLength) {
    if (maxLength === void 0) { maxLength = 22; }
    var base64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    // Start with an initial random number, consuming the value in reverse byte order
    var number = random32() >>> 0; // Make sure it's a +ve number
    var chars = 0;
    var result = _InternalConstants__WEBPACK_IMPORTED_MODULE_2__.STR_EMPTY;
    while (result[_DynamicConstants__WEBPACK_IMPORTED_MODULE_3__._DYN_LENGTH /* @min:%2elength */] < maxLength) {
        chars++;
        result += base64chars.charAt(number & 0x3F);
        number >>>= 6; // Zero fill with right shift
        if (chars === 5) {
            // 5 base64 characters === 30 bits so we don't have enough bits for another base64 char
            // So add on another 30 bits and make sure it's +ve
            number = (((random32() << 2) & 0xFFFFFFFF) | (number & 0x03)) >>> 0;
            chars = 0; // We need to reset the number every 5 chars (30 bits)
        }
    }
    return result;
}
//# sourceMappingURL=RandomHelper.js.map

/***/ }),

/***/ 552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_getPluginState": () => (/* binding */ _getPluginState),
/* harmony export */   "createDistributedTraceContext": () => (/* binding */ createDistributedTraceContext),
/* harmony export */   "initializePlugins": () => (/* binding */ initializePlugins),
/* harmony export */   "sortPlugins": () => (/* binding */ sortPlugins),
/* harmony export */   "unloadComponents": () => (/* binding */ unloadComponents)
/* harmony export */ });
/* harmony import */ var _DynamicConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(530);
/* harmony import */ var _DataCacheHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(547);
/* harmony import */ var _HelperFuncs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(528);
/* harmony import */ var _InternalConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(531);
/* harmony import */ var _W3cTraceParent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(553);
/*
 * Application Insights JavaScript SDK - Core, 2.8.16
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */








var pluginStateData = (0,_DataCacheHelper__WEBPACK_IMPORTED_MODULE_0__.createElmNodeData)("plugin");
function _getPluginState(plugin) {
    return pluginStateData.get(plugin, "state", {}, true);
}
/**
 * Initialize the queue of plugins
 * @param plugins - The array of plugins to initialize and setting of the next plugin
 * @param config The current config for the instance
 * @param core THe current core instance
 * @param extensions The extensions
 */
function initializePlugins(processContext, extensions) {
    // Set the next plugin and identified the uninitialized plugins
    var initPlugins = [];
    var lastPlugin = null;
    var proxy = processContext[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_GET_NEXT /* @min:%2egetNext */]();
    var pluginState;
    while (proxy) {
        var thePlugin = proxy[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_GET_PLUGIN /* @min:%2egetPlugin */]();
        if (thePlugin) {
            if (lastPlugin &&
                (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isFunction)(lastPlugin[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SET_NEXT_PLUGIN /* @min:%2esetNextPlugin */]) &&
                (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isFunction)(thePlugin[_InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_PROCESS_TELEMETRY /* @min:%2eprocessTelemetry */])) {
                // Set this plugin as the next for the previous one
                lastPlugin[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SET_NEXT_PLUGIN /* @min:%2esetNextPlugin */](thePlugin);
            }
            var isInitialized = false;
            if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isFunction)(thePlugin[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_IS_INITIALIZED /* @min:%2eisInitialized */])) {
                isInitialized = thePlugin[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_IS_INITIALIZED /* @min:%2eisInitialized */]();
            }
            else {
                pluginState = _getPluginState(thePlugin);
                isInitialized = pluginState[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_IS_INITIALIZED /* @min:%2eisInitialized */];
            }
            if (!isInitialized) {
                initPlugins[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_PUSH /* @min:%2epush */](thePlugin);
            }
            lastPlugin = thePlugin;
            proxy = proxy[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_GET_NEXT /* @min:%2egetNext */]();
        }
    }
    // Now initialize the plugins
    (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.arrForEach)(initPlugins, function (thePlugin) {
        var core = processContext[_InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_CORE]();
        thePlugin[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_INITIALIZE /* @min:%2einitialize */](processContext.getCfg(), core, extensions, processContext[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_GET_NEXT /* @min:%2egetNext */]());
        pluginState = _getPluginState(thePlugin);
        // Only add the core to the state if the plugin didn't set it (doesn't extent from BaseTelemetryPlugin)
        if (!thePlugin[_InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_CORE] && !pluginState[_InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_CORE]) {
            pluginState[_InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_CORE] = core;
        }
        pluginState[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_IS_INITIALIZED /* @min:%2eisInitialized */] = true;
        delete pluginState[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_TEARDOWN /* @min:%2eteardown */];
    });
}
function sortPlugins(plugins) {
    // Sort by priority
    return plugins.sort(function (extA, extB) {
        var result = 0;
        if (extB) {
            var bHasProcess = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isFunction)(extB[_InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_PROCESS_TELEMETRY]);
            if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isFunction)(extA[_InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_PROCESS_TELEMETRY])) {
                result = bHasProcess ? extA[_InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_PRIORITY] - extB[_InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_PRIORITY] : 1;
            }
            else if (bHasProcess) {
                result = -1;
            }
        }
        else {
            result = extA ? 1 : -1;
        }
        return result;
    });
    // sort complete
}
/**
 * Teardown / Unload helper to perform teardown/unloading operations for the provided components synchronously or asynchronously, this will call any
 * _doTeardown() or _doUnload() functions on the provided components to allow them to finish removal.
 * @param components - The components you want to unload
 * @param unloadCtx - This is the context that should be used during unloading.
 * @param unloadState - The details / state of the unload process, it holds details like whether it should be unloaded synchronously or asynchronously and the reason for the unload.
 * @param asyncCallback - An optional callback that the plugin must call if it returns true to inform the caller that it has completed any async unload/teardown operations.
 * @returns boolean - true if the plugin has or will call asyncCallback, this allows the plugin to perform any asynchronous operations.
 */
function unloadComponents(components, unloadCtx, unloadState, asyncCallback) {
    var idx = 0;
    function _doUnload() {
        while (idx < components[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_LENGTH /* @min:%2elength */]) {
            var component = components[idx++];
            if (component) {
                var func = component._doUnload || component[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN__DO_TEARDOWN /* @min:%2e_doTeardown */];
                if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isFunction)(func)) {
                    if (func[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_CALL /* @min:%2ecall */](component, unloadCtx, unloadState, _doUnload) === true) {
                        return true;
                    }
                }
            }
        }
    }
    return _doUnload();
}
/**
 * Creates a IDistributedTraceContext which optionally also "sets" the value on a parent
 * @param parentCtx - An optional parent distributed trace instance
 * @returns A new IDistributedTraceContext instance that uses an internal temporary object
 */
function createDistributedTraceContext(parentCtx) {
    var trace = {};
    return {
        getName: function () {
            return trace[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_NAME /* @min:%2ename */];
        },
        setName: function (newValue) {
            parentCtx && parentCtx.setName(newValue);
            trace[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_NAME /* @min:%2ename */] = newValue;
        },
        getTraceId: function () {
            return trace[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_TRACE_ID /* @min:%2etraceId */];
        },
        setTraceId: function (newValue) {
            parentCtx && parentCtx.setTraceId(newValue);
            if ((0,_W3cTraceParent__WEBPACK_IMPORTED_MODULE_4__.isValidTraceId)(newValue)) {
                trace[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_TRACE_ID /* @min:%2etraceId */] = newValue;
            }
        },
        getSpanId: function () {
            return trace[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SPAN_ID /* @min:%2espanId */];
        },
        setSpanId: function (newValue) {
            parentCtx && parentCtx.setSpanId(newValue);
            if ((0,_W3cTraceParent__WEBPACK_IMPORTED_MODULE_4__.isValidSpanId)(newValue)) {
                trace[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_SPAN_ID /* @min:%2espanId */] = newValue;
            }
        },
        getTraceFlags: function () {
            return trace[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_TRACE_FLAGS /* @min:%2etraceFlags */];
        },
        setTraceFlags: function (newTraceFlags) {
            parentCtx && parentCtx.setTraceFlags(newTraceFlags);
            trace[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_TRACE_FLAGS /* @min:%2etraceFlags */] = newTraceFlags;
        }
    };
}
//# sourceMappingURL=TelemetryHelpers.js.map

/***/ }),

/***/ 556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createUnloadHandlerContainer": () => (/* binding */ createUnloadHandlerContainer)
/* harmony export */ });
/* harmony import */ var _DynamicConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(530);
/* harmony import */ var _DiagnosticLogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(537);
/* harmony import */ var _EnvUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(538);
/* harmony import */ var _HelperFuncs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(528);
/*
 * Application Insights JavaScript SDK - Core, 2.8.16
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */






function createUnloadHandlerContainer() {
    var handlers = [];
    function _addHandler(handler) {
        if (handler) {
            handlers[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_PUSH /* @min:%2epush */](handler);
        }
    }
    function _runHandlers(unloadCtx, unloadState) {
        (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.arrForEach)(handlers, function (handler) {
            try {
                handler(unloadCtx, unloadState);
            }
            catch (e) {
                (0,_DiagnosticLogger__WEBPACK_IMPORTED_MODULE_2__._throwInternal)(unloadCtx[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_DIAG_LOG /* @min:%2ediagLog */](), 2 /* eLoggingSeverity.WARNING */, 73 /* _eInternalMessageId.PluginException */, "Unexpected error calling unload handler - " + (0,_EnvUtils__WEBPACK_IMPORTED_MODULE_3__.dumpObj)(e));
            }
        });
        handlers = [];
    }
    return {
        add: _addHandler,
        run: _runHandlers
    };
}
//# sourceMappingURL=UnloadHandlerContainer.js.map

/***/ }),

/***/ 553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTraceParent": () => (/* binding */ createTraceParent),
/* harmony export */   "findW3cTraceParent": () => (/* binding */ findW3cTraceParent),
/* harmony export */   "formatTraceParent": () => (/* binding */ formatTraceParent),
/* harmony export */   "isSampledFlag": () => (/* binding */ isSampledFlag),
/* harmony export */   "isValidSpanId": () => (/* binding */ isValidSpanId),
/* harmony export */   "isValidTraceId": () => (/* binding */ isValidTraceId),
/* harmony export */   "isValidTraceParent": () => (/* binding */ isValidTraceParent),
/* harmony export */   "parseTraceParent": () => (/* binding */ parseTraceParent)
/* harmony export */ });
/* harmony import */ var _DynamicConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(530);
/* harmony import */ var _CoreUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(544);
/* harmony import */ var _EnvUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(538);
/* harmony import */ var _HelperFuncs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(528);
/* harmony import */ var _InternalConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(531);
/*
 * Application Insights JavaScript SDK - Core, 2.8.16
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */





// using {0,16} for leading and trailing whitespace just to constrain the possible runtime of a random string
var TRACE_PARENT_REGEX = /^([\da-f]{2})-([\da-f]{32})-([\da-f]{16})-([\da-f]{2})(-[^\s]{1,64})?$/i;
var DEFAULT_VERSION = "00";
var INVALID_VERSION = "ff";
var INVALID_TRACE_ID = "00000000000000000000000000000000";
var INVALID_SPAN_ID = "0000000000000000";
var SAMPLED_FLAG = 0x01;
function _isValid(value, len, invalidValue) {
    if (value && value[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_LENGTH /* @min:%2elength */] === len && value !== invalidValue) {
        return !!value.match(/^[\da-f]*$/i);
    }
    return false;
}
function _formatValue(value, len, defValue) {
    if (_isValid(value, len)) {
        return value;
    }
    return defValue;
}
function _formatFlags(value) {
    if (isNaN(value) || value < 0 || value > 255) {
        value = 0x01;
    }
    var result = value.toString(16);
    while (result[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_LENGTH /* @min:%2elength */] < 2) {
        result = "0" + result;
    }
    return result;
}
/**
 * Create a new ITraceParent instance using the provided values.
 * @param traceId - The traceId to use, when invalid a new random W3C id will be generated.
 * @param spanId - The parent/span id to use, a new random value will be generated if it is invalid.
 * @param flags - The traceFlags to use, defaults to zero (0) if not supplied or invalid
 * @param version - The version to used, defaults to version "01" if not supplied or invalid.
 * @returns
 */
function createTraceParent(traceId, spanId, flags, version) {
    var _a;
    return _a = {},
        _a[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_VERSION /* @min:version */] = _isValid(version, 2, INVALID_VERSION) ? version : DEFAULT_VERSION,
        _a[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_TRACE_ID /* @min:traceId */] = isValidTraceId(traceId) ? traceId : (0,_CoreUtils__WEBPACK_IMPORTED_MODULE_1__.generateW3CId)(),
        _a.spanId = isValidSpanId(spanId) ? spanId : (0,_CoreUtils__WEBPACK_IMPORTED_MODULE_1__.generateW3CId)()[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_SUBSTR /* @min:%2esubstr */](0, 16),
        _a.traceFlags = flags >= 0 && flags <= 0xFF ? flags : 1,
        _a;
}
/**
 * Attempt to parse the provided string as a W3C TraceParent header value (https://www.w3.org/TR/trace-context/#traceparent-header)
 *
 * @param value - The value to be parsed
 * @param selectIdx - If the found value is comma separated which is the preferred entry to select, defaults to the first
 * @returns
 */
function parseTraceParent(value, selectIdx) {
    var _a;
    if (!value) {
        // Don't pass a null/undefined or empty string
        return null;
    }
    if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isArray)(value)) {
        // The value may have been encoded on the page into an array so handle this automatically
        value = value[0] || "";
    }
    if (!value || !(0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.isString)(value) || value[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_LENGTH /* @min:%2elength */] > 8192) {
        // limit potential processing based on total length
        return null;
    }
    if (value[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_INDEX_OF /* @min:%2eindexOf */](",") !== -1) {
        var values = value[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_SPLIT /* @min:%2esplit */](",");
        value = values[selectIdx > 0 && values[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_LENGTH /* @min:%2elength */] > selectIdx ? selectIdx : 0];
    }
    // See https://www.w3.org/TR/trace-context/#versioning-of-traceparent
    var match = TRACE_PARENT_REGEX.exec((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_2__.strTrim)(value));
    if (!match || // No match
        match[1] === INVALID_VERSION || // version ff is forbidden
        match[2] === INVALID_TRACE_ID || // All zeros is considered to be invalid
        match[3] === INVALID_SPAN_ID) { // All zeros is considered to be invalid
        return null;
    }
    return _a = {
            version: (match[1] || _InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_EMPTY)[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_TO_LOWER_CASE /* @min:%2etoLowerCase */](),
            traceId: (match[2] || _InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_EMPTY)[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_TO_LOWER_CASE /* @min:%2etoLowerCase */](),
            spanId: (match[3] || _InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_EMPTY)[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_TO_LOWER_CASE /* @min:%2etoLowerCase */]()
        },
        _a[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_TRACE_FLAGS /* @min:traceFlags */] = parseInt(match[4], 16),
        _a;
}
/**
 * Is the provided W3c Trace Id a valid string representation, it must be a 32-character string
 * of lowercase hexadecimal characters for example, 4bf92f3577b34da6a3ce929d0e0e4736.
 * If all characters as zero (00000000000000000000000000000000) it will be considered an invalid value.
 * @param value - The W3c trace Id to be validated
 * @returns true if valid otherwise false
 */
function isValidTraceId(value) {
    return _isValid(value, 32, INVALID_TRACE_ID);
}
/**
 * Is the provided W3c span id (aka. parent id) a valid string representation, it must be a 16-character
 * string of lowercase hexadecimal characters, for example, 00f067aa0ba902b7.
 * If all characters are zero (0000000000000000) this is considered an invalid value.
 * @param value - The W3c span id to be validated
 * @returns true if valid otherwise false
 */
function isValidSpanId(value) {
    return _isValid(value, 16, INVALID_SPAN_ID);
}
/**
 * Validates that the provided ITraceParent instance conforms to the currently supported specifications
 * @param value
 * @returns
 */
function isValidTraceParent(value) {
    if (!value ||
        !_isValid(value[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_VERSION /* @min:%2eversion */], 2, INVALID_VERSION) ||
        !_isValid(value[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_TRACE_ID /* @min:%2etraceId */], 32, INVALID_TRACE_ID) ||
        !_isValid(value[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_SPAN_ID /* @min:%2espanId */], 16, INVALID_SPAN_ID) ||
        !_isValid(_formatFlags(value[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_TRACE_FLAGS /* @min:%2etraceFlags */]), 2)) {
        // Each known field must contain a valid value
        return false;
    }
    return true;
}
/**
 * Is the parsed traceParent indicating that the trace is currently sampled.
 * @param value - The parsed traceParent value
 * @returns
 */
function isSampledFlag(value) {
    if (isValidTraceParent(value)) {
        return (value[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_TRACE_FLAGS /* @min:%2etraceFlags */] & SAMPLED_FLAG) === SAMPLED_FLAG;
    }
    return false;
}
/**
 * Format the ITraceParent value as a string using the supported and know version formats.
 * So even if the passed traceParent is a later version the string value returned from this
 * function will convert it to only the known version formats.
 * This currently only supports version "00" and invalid "ff"
 * @param value - The parsed traceParent value
 * @returns
 */
function formatTraceParent(value) {
    if (value) {
        // Special Note: This only supports formatting as version 00, future versions should encode any known supported version
        // So parsing a future version will populate the correct version value but reformatting will reduce it to version 00.
        var flags = _formatFlags(value[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_TRACE_FLAGS /* @min:%2etraceFlags */]);
        if (!_isValid(flags, 2)) {
            flags = "01";
        }
        var version = value[_DynamicConstants__WEBPACK_IMPORTED_MODULE_0__._DYN_VERSION /* @min:%2eversion */] || DEFAULT_VERSION;
        if (version !== "00" && version !== "ff") {
            // Reduce version to "00"
            version = DEFAULT_VERSION;
        }
        // Format as version 00
        return "".concat(version.toLowerCase(), "-").concat(_formatValue(value.traceId, 32, INVALID_TRACE_ID).toLowerCase(), "-").concat(_formatValue(value.spanId, 16, INVALID_SPAN_ID).toLowerCase(), "-").concat(flags.toLowerCase());
    }
    return "";
}
/**
 * Helper function to fetch the passed traceparent from the page, looking for it as a meta-tag or a Server-Timing header.
 * @param selectIdx - If the found value is comma separated which is the preferred entry to select, defaults to the first
 * @returns
 */
function findW3cTraceParent(selectIdx) {
    var name = "traceparent";
    var traceParent = parseTraceParent((0,_EnvUtils__WEBPACK_IMPORTED_MODULE_4__.findMetaTag)(name), selectIdx);
    if (!traceParent) {
        traceParent = parseTraceParent((0,_EnvUtils__WEBPACK_IMPORTED_MODULE_4__.findNamedServerTiming)(name), selectIdx);
    }
    return traceParent;
}
//# sourceMappingURL=W3cTraceParent.js.map

/***/ }),

/***/ 530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_DYN_ADD_NOTIFICATION_LIS1": () => (/* binding */ _DYN_ADD_NOTIFICATION_LIS1),
/* harmony export */   "_DYN_APPLY": () => (/* binding */ _DYN_APPLY),
/* harmony export */   "_DYN_CALL": () => (/* binding */ _DYN_CALL),
/* harmony export */   "_DYN_COMPLETE": () => (/* binding */ _DYN_COMPLETE),
/* harmony export */   "_DYN_CONFIG": () => (/* binding */ _DYN_CONFIG),
/* harmony export */   "_DYN_COOKIE_CFG": () => (/* binding */ _DYN_COOKIE_CFG),
/* harmony export */   "_DYN_CREATE_NEW": () => (/* binding */ _DYN_CREATE_NEW),
/* harmony export */   "_DYN_DIAG_LOG": () => (/* binding */ _DYN_DIAG_LOG),
/* harmony export */   "_DYN_ENABLE_DEBUG_EXCEPTI4": () => (/* binding */ _DYN_ENABLE_DEBUG_EXCEPTI4),
/* harmony export */   "_DYN_FLUSH": () => (/* binding */ _DYN_FLUSH),
/* harmony export */   "_DYN_GET_CTX": () => (/* binding */ _DYN_GET_CTX),
/* harmony export */   "_DYN_GET_NEXT": () => (/* binding */ _DYN_GET_NEXT),
/* harmony export */   "_DYN_GET_NOTIFY_MGR": () => (/* binding */ _DYN_GET_NOTIFY_MGR),
/* harmony export */   "_DYN_GET_PLUGIN": () => (/* binding */ _DYN_GET_PLUGIN),
/* harmony export */   "_DYN_GET_PROCESS_TEL_CONT0": () => (/* binding */ _DYN_GET_PROCESS_TEL_CONT0),
/* harmony export */   "_DYN_HANDLER": () => (/* binding */ _DYN_HANDLER),
/* harmony export */   "_DYN_IDENTIFIER": () => (/* binding */ _DYN_IDENTIFIER),
/* harmony export */   "_DYN_INDEX_OF": () => (/* binding */ _DYN_INDEX_OF),
/* harmony export */   "_DYN_INITIALIZE": () => (/* binding */ _DYN_INITIALIZE),
/* harmony export */   "_DYN_INSTRUMENTATION_KEY": () => (/* binding */ _DYN_INSTRUMENTATION_KEY),
/* harmony export */   "_DYN_IS_ASYNC": () => (/* binding */ _DYN_IS_ASYNC),
/* harmony export */   "_DYN_IS_CHILD_EVT": () => (/* binding */ _DYN_IS_CHILD_EVT),
/* harmony export */   "_DYN_IS_INITIALIZED": () => (/* binding */ _DYN_IS_INITIALIZED),
/* harmony export */   "_DYN_LENGTH": () => (/* binding */ _DYN_LENGTH),
/* harmony export */   "_DYN_LISTENERS": () => (/* binding */ _DYN_LISTENERS),
/* harmony export */   "_DYN_LOGGER": () => (/* binding */ _DYN_LOGGER),
/* harmony export */   "_DYN_LOG_INTERNAL_MESSAGE": () => (/* binding */ _DYN_LOG_INTERNAL_MESSAGE),
/* harmony export */   "_DYN_MESSAGE": () => (/* binding */ _DYN_MESSAGE),
/* harmony export */   "_DYN_MESSAGE_ID": () => (/* binding */ _DYN_MESSAGE_ID),
/* harmony export */   "_DYN_NAME": () => (/* binding */ _DYN_NAME),
/* harmony export */   "_DYN_NODE_TYPE": () => (/* binding */ _DYN_NODE_TYPE),
/* harmony export */   "_DYN_ON_COMPLETE": () => (/* binding */ _DYN_ON_COMPLETE),
/* harmony export */   "_DYN_PROCESS_NEXT": () => (/* binding */ _DYN_PROCESS_NEXT),
/* harmony export */   "_DYN_PUSH": () => (/* binding */ _DYN_PUSH),
/* harmony export */   "_DYN_REMOVE_NOTIFICATION_2": () => (/* binding */ _DYN_REMOVE_NOTIFICATION_2),
/* harmony export */   "_DYN_REPLACE": () => (/* binding */ _DYN_REPLACE),
/* harmony export */   "_DYN_SET_CTX": () => (/* binding */ _DYN_SET_CTX),
/* harmony export */   "_DYN_SET_ENABLED": () => (/* binding */ _DYN_SET_ENABLED),
/* harmony export */   "_DYN_SET_NEXT_PLUGIN": () => (/* binding */ _DYN_SET_NEXT_PLUGIN),
/* harmony export */   "_DYN_SPAN_ID": () => (/* binding */ _DYN_SPAN_ID),
/* harmony export */   "_DYN_SPLICE": () => (/* binding */ _DYN_SPLICE),
/* harmony export */   "_DYN_SPLIT": () => (/* binding */ _DYN_SPLIT),
/* harmony export */   "_DYN_STOP_POLLING_INTERNA3": () => (/* binding */ _DYN_STOP_POLLING_INTERNA3),
/* harmony export */   "_DYN_SUBSTR": () => (/* binding */ _DYN_SUBSTR),
/* harmony export */   "_DYN_SUBSTRING": () => (/* binding */ _DYN_SUBSTRING),
/* harmony export */   "_DYN_TEARDOWN": () => (/* binding */ _DYN_TEARDOWN),
/* harmony export */   "_DYN_TIME": () => (/* binding */ _DYN_TIME),
/* harmony export */   "_DYN_TO_LOWER_CASE": () => (/* binding */ _DYN_TO_LOWER_CASE),
/* harmony export */   "_DYN_TRACE_FLAGS": () => (/* binding */ _DYN_TRACE_FLAGS),
/* harmony export */   "_DYN_TRACE_ID": () => (/* binding */ _DYN_TRACE_ID),
/* harmony export */   "_DYN_TYPE": () => (/* binding */ _DYN_TYPE),
/* harmony export */   "_DYN_UPDATE": () => (/* binding */ _DYN_UPDATE),
/* harmony export */   "_DYN_USER_AGENT": () => (/* binding */ _DYN_USER_AGENT),
/* harmony export */   "_DYN_VERSION": () => (/* binding */ _DYN_VERSION),
/* harmony export */   "_DYN__DO_TEARDOWN": () => (/* binding */ _DYN__DO_TEARDOWN),
/* harmony export */   "_DYN__EXTENSIONS": () => (/* binding */ _DYN__EXTENSIONS)
/* harmony export */ });
/*
 * Application Insights JavaScript SDK - Core, 2.8.16
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */


// @skip-file-minify
// ##############################################################
// AUTO GENERATED FILE: This file is Auto Generated during build.
// ##############################################################
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Note: DON'T Export these const from the package as we are still targeting ES3 this will export a mutable variables that someone could change!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var _DYN_INITIALIZE = "initialize"; // Count: 8
var _DYN_NAME = "name"; // Count: 11
var _DYN_GET_NOTIFY_MGR = "getNotifyMgr"; // Count: 3
var _DYN_IDENTIFIER = "identifier"; // Count: 8
var _DYN_PUSH = "push"; // Count: 30
var _DYN_IS_INITIALIZED = "isInitialized"; // Count: 10
var _DYN_CONFIG = "config"; // Count: 7
var _DYN_INSTRUMENTATION_KEY = "instrumentationKey"; // Count: 3
var _DYN_LOGGER = "logger"; // Count: 10
var _DYN_LENGTH = "length"; // Count: 45
var _DYN_TIME = "time"; // Count: 5
var _DYN_PROCESS_NEXT = "processNext"; // Count: 21
var _DYN_GET_PROCESS_TEL_CONT0 = "getProcessTelContext"; // Count: 2
var _DYN_ADD_NOTIFICATION_LIS1 = "addNotificationListener"; // Count: 5
var _DYN_REMOVE_NOTIFICATION_2 = "removeNotificationListener"; // Count: 5
var _DYN_STOP_POLLING_INTERNA3 = "stopPollingInternalLogs"; // Count: 2
var _DYN_ON_COMPLETE = "onComplete"; // Count: 6
var _DYN_GET_PLUGIN = "getPlugin"; // Count: 5
var _DYN_FLUSH = "flush"; // Count: 5
var _DYN__EXTENSIONS = "_extensions"; // Count: 4
var _DYN_SPLICE = "splice"; // Count: 6
var _DYN_TEARDOWN = "teardown"; // Count: 10
var _DYN_MESSAGE_ID = "messageId"; // Count: 4
var _DYN_MESSAGE = "message"; // Count: 7
var _DYN_IS_ASYNC = "isAsync"; // Count: 7
var _DYN__DO_TEARDOWN = "_doTeardown"; // Count: 4
var _DYN_UPDATE = "update"; // Count: 7
var _DYN_GET_NEXT = "getNext"; // Count: 12
var _DYN_DIAG_LOG = "diagLog"; // Count: 8
var _DYN_SET_NEXT_PLUGIN = "setNextPlugin"; // Count: 5
var _DYN_CREATE_NEW = "createNew"; // Count: 6
var _DYN_COOKIE_CFG = "cookieCfg"; // Count: 3
var _DYN_INDEX_OF = "indexOf"; // Count: 7
var _DYN_SUBSTRING = "substring"; // Count: 10
var _DYN_USER_AGENT = "userAgent"; // Count: 5
var _DYN_SPLIT = "split"; // Count: 6
var _DYN_SET_ENABLED = "setEnabled"; // Count: 5
var _DYN_SUBSTR = "substr"; // Count: 6
var _DYN_NODE_TYPE = "nodeType"; // Count: 3
var _DYN_APPLY = "apply"; // Count: 6
var _DYN_REPLACE = "replace"; // Count: 10
var _DYN_ENABLE_DEBUG_EXCEPTI4 = "enableDebugExceptions"; // Count: 2
var _DYN_LOG_INTERNAL_MESSAGE = "logInternalMessage"; // Count: 2
var _DYN_TO_LOWER_CASE = "toLowerCase"; // Count: 8
var _DYN_CALL = "call"; // Count: 18
var _DYN_TYPE = "type"; // Count: 14
var _DYN_HANDLER = "handler"; // Count: 5
var _DYN_LISTENERS = "listeners"; // Count: 6
var _DYN_IS_CHILD_EVT = "isChildEvt"; // Count: 3
var _DYN_GET_CTX = "getCtx"; // Count: 6
var _DYN_SET_CTX = "setCtx"; // Count: 10
var _DYN_COMPLETE = "complete"; // Count: 3
var _DYN_TRACE_ID = "traceId"; // Count: 5
var _DYN_SPAN_ID = "spanId"; // Count: 5
var _DYN_TRACE_FLAGS = "traceFlags"; // Count: 6
var _DYN_VERSION = "version"; // Count: 4
//# sourceMappingURL=__DynamicConstants.js.map

/***/ }),

/***/ 529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjAssign": () => (/* binding */ ObjAssign),
/* harmony export */   "ObjClass": () => (/* binding */ ObjClass),
/* harmony export */   "ObjCreate": () => (/* binding */ ObjCreate),
/* harmony export */   "ObjDefineProperty": () => (/* binding */ ObjDefineProperty),
/* harmony export */   "ObjHasOwnProperty": () => (/* binding */ ObjHasOwnProperty),
/* harmony export */   "ObjProto": () => (/* binding */ ObjProto),
/* harmony export */   "strDefault": () => (/* binding */ strDefault),
/* harmony export */   "strShimFunction": () => (/* binding */ strShimFunction),
/* harmony export */   "strShimHasOwnProperty": () => (/* binding */ strShimHasOwnProperty),
/* harmony export */   "strShimObject": () => (/* binding */ strShimObject),
/* harmony export */   "strShimPrototype": () => (/* binding */ strShimPrototype),
/* harmony export */   "strShimUndefined": () => (/* binding */ strShimUndefined)
/* harmony export */ });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var strShimFunction = "function";
var strShimObject = "object";
var strShimUndefined = "undefined";
var strShimPrototype = "prototype";
var strShimHasOwnProperty = "hasOwnProperty";
var strDefault = "default";
var ObjClass = Object;
var ObjProto = ObjClass[strShimPrototype];
var ObjAssign = ObjClass["assign"];
var ObjCreate = ObjClass["create"];
var ObjDefineProperty = ObjClass["defineProperty"];
var ObjHasOwnProperty = ObjProto[strShimHasOwnProperty];
//# sourceMappingURL=Constants.js.map

/***/ }),

/***/ 532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGlobal": () => (/* binding */ getGlobal),
/* harmony export */   "objCreateFn": () => (/* binding */ objCreateFn),
/* harmony export */   "throwTypeError": () => (/* binding */ throwTypeError)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(529);
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

var _cachedGlobal = null;
/**
 * Returns the current global scope object, for a normal web page this will be the current
 * window, for a Web Worker this will be current worker global scope via "self". The internal
 * implementation returns the first available instance object in the following order
 * - globalThis (New standard)
 * - self (Will return the current window instance for supported browsers)
 * - window (fallback for older browser implementations)
 * - global (NodeJS standard)
 * - <null> (When all else fails)
 * While the return type is a Window for the normal case, not all environments will support all
 * of the properties or functions.
 */
function getGlobal(useCached) {
    if (useCached === void 0) { useCached = true; }
    var result = useCached === false ? null : _cachedGlobal;
    if (!result) {
        if (typeof globalThis !== _Constants__WEBPACK_IMPORTED_MODULE_0__.strShimUndefined) {
            result = globalThis;
        }
        if (!result && typeof self !== _Constants__WEBPACK_IMPORTED_MODULE_0__.strShimUndefined) {
            result = self;
        }
        if (!result && typeof window !== _Constants__WEBPACK_IMPORTED_MODULE_0__.strShimUndefined) {
            result = window;
        }
        if (!result && typeof __webpack_require__.g !== _Constants__WEBPACK_IMPORTED_MODULE_0__.strShimUndefined) {
            result = __webpack_require__.g;
        }
        _cachedGlobal = result;
    }
    return result;
}
function throwTypeError(message) {
    throw new TypeError(message);
}
/**
 * Creates an object that has the specified prototype, and that optionally contains specified properties. This helper exists to avoid adding a polyfil
 * for older browsers that do not define Object.create eg. ES3 only, IE8 just in case any page checks for presence/absence of the prototype implementation.
 * Note: For consistency this will not use the Object.create implementation if it exists as this would cause a testing requirement to test with and without the implementations
 * @param obj Object to use as a prototype. May be null
 */
function objCreateFn(obj) {
    var func = _Constants__WEBPACK_IMPORTED_MODULE_0__.ObjCreate;
    // Use build in Object.create
    if (func) {
        // Use Object create method if it exists
        return func(obj);
    }
    if (obj == null) {
        return {};
    }
    var type = typeof obj;
    if (type !== _Constants__WEBPACK_IMPORTED_MODULE_0__.strShimObject && type !== _Constants__WEBPACK_IMPORTED_MODULE_0__.strShimFunction) {
        throwTypeError("Object prototype may only be an Object:" + obj);
    }
    function tmpFunc() { }
    tmpFunc[_Constants__WEBPACK_IMPORTED_MODULE_0__.strShimPrototype] = obj;
    return new tmpFunc();
}
//# sourceMappingURL=Helpers.js.map

/***/ }),

/***/ 533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReflectObj": () => (/* binding */ ReflectObj),
/* harmony export */   "SymbolObj": () => (/* binding */ SymbolObj),
/* harmony export */   "__assignFn": () => (/* binding */ __assignFn),
/* harmony export */   "__createBindingFn": () => (/* binding */ __createBindingFn),
/* harmony export */   "__decorateFn": () => (/* binding */ __decorateFn),
/* harmony export */   "__exportStarFn": () => (/* binding */ __exportStarFn),
/* harmony export */   "__extendsFn": () => (/* binding */ __extendsFn),
/* harmony export */   "__hasReflect": () => (/* binding */ __hasReflect),
/* harmony export */   "__hasSymbol": () => (/* binding */ __hasSymbol),
/* harmony export */   "__importDefaultFn": () => (/* binding */ __importDefaultFn),
/* harmony export */   "__importStarFn": () => (/* binding */ __importStarFn),
/* harmony export */   "__makeTemplateObjectFn": () => (/* binding */ __makeTemplateObjectFn),
/* harmony export */   "__metadataFn": () => (/* binding */ __metadataFn),
/* harmony export */   "__objAssignFnImpl": () => (/* binding */ __objAssignFnImpl),
/* harmony export */   "__paramFn": () => (/* binding */ __paramFn),
/* harmony export */   "__readFn": () => (/* binding */ __readFn),
/* harmony export */   "__restFn": () => (/* binding */ __restFn),
/* harmony export */   "__spreadArrayFn": () => (/* binding */ __spreadArrayFn),
/* harmony export */   "__spreadArraysFn": () => (/* binding */ __spreadArraysFn),
/* harmony export */   "__valuesFn": () => (/* binding */ __valuesFn)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(529);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(532);
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.


// Most of these functions have been directly shamelessly "lifted" from the https://github.com/@microsoft/tslib and
// modified to be ES3 compatible and applying several minification and tree-shaking techniques so that Application Insights
// can successfully use TypeScript "importHelpers" which imports tslib during compilation but it will use these at runtime
// Which is also why all of the functions have not been included as Application Insights currently doesn't use or require
// them.
var SymbolObj = ((0,_Helpers__WEBPACK_IMPORTED_MODULE_0__.getGlobal)() || {})["Symbol"];
var ReflectObj = ((0,_Helpers__WEBPACK_IMPORTED_MODULE_0__.getGlobal)() || {})["Reflect"];
var __hasSymbol = !!SymbolObj;
var __hasReflect = !!ReflectObj;
var strDecorate = "decorate";
var strMetadata = "metadata";
var strGetOwnPropertySymbols = "getOwnPropertySymbols";
var strIterator = "iterator";
var __objAssignFnImpl = function (t) {
    // tslint:disable-next-line: ban-comma-operator
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (_Constants__WEBPACK_IMPORTED_MODULE_1__.ObjProto[_Constants__WEBPACK_IMPORTED_MODULE_1__.strShimHasOwnProperty].call(s, p)) {
                t[p] = s[p];
            }
        }
    }
    return t;
};
var __assignFn = _Constants__WEBPACK_IMPORTED_MODULE_1__.ObjAssign || __objAssignFnImpl;
// tslint:disable-next-line: only-arrow-functions
var extendStaticsFn = function (d, b) {
    extendStaticsFn = _Constants__WEBPACK_IMPORTED_MODULE_1__.ObjClass.setPrototypeOf ||
        // tslint:disable-next-line: only-arrow-functions
        ({ __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        }) ||
        // tslint:disable-next-line: only-arrow-functions
        function (d, b) {
            for (var p in b) {
                if (b[_Constants__WEBPACK_IMPORTED_MODULE_1__.strShimHasOwnProperty](p)) {
                    d[p] = b[p];
                }
            }
        };
    return extendStaticsFn(d, b);
};
function __extendsFn(d, b) {
    if (typeof b !== _Constants__WEBPACK_IMPORTED_MODULE_1__.strShimFunction && b !== null) {
        (0,_Helpers__WEBPACK_IMPORTED_MODULE_0__.throwTypeError)("Class extends value " + String(b) + " is not a constructor or null");
    }
    extendStaticsFn(d, b);
    function __() {
        this.constructor = d;
    }
    // tslint:disable-next-line: ban-comma-operator
    d[_Constants__WEBPACK_IMPORTED_MODULE_1__.strShimPrototype] = b === null ? (0,_Helpers__WEBPACK_IMPORTED_MODULE_0__.objCreateFn)(b) : (__[_Constants__WEBPACK_IMPORTED_MODULE_1__.strShimPrototype] = b[_Constants__WEBPACK_IMPORTED_MODULE_1__.strShimPrototype], new __());
}
function __restFn(s, e) {
    var t = {};
    for (var k in s) {
        if (_Constants__WEBPACK_IMPORTED_MODULE_1__.ObjHasOwnProperty.call(s, k) && e.indexOf(k) < 0) {
            t[k] = s[k];
        }
    }
    if (s != null && typeof _Constants__WEBPACK_IMPORTED_MODULE_1__.ObjClass[strGetOwnPropertySymbols] === _Constants__WEBPACK_IMPORTED_MODULE_1__.strShimFunction) {
        for (var i = 0, p = _Constants__WEBPACK_IMPORTED_MODULE_1__.ObjClass[strGetOwnPropertySymbols](s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && _Constants__WEBPACK_IMPORTED_MODULE_1__.ObjProto.propertyIsEnumerable.call(s, p[i])) {
                t[p[i]] = s[p[i]];
            }
        }
    }
    return t;
}
function __decorateFn(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = _Constants__WEBPACK_IMPORTED_MODULE_1__.ObjClass.getOwnPropertyDescriptor(target, key) : desc, d;
    if (__hasReflect && typeof ReflectObj[strDecorate] === _Constants__WEBPACK_IMPORTED_MODULE_1__.strShimFunction) {
        r = ReflectObj[strDecorate](decorators, target, key, desc);
    }
    else {
        for (var i = decorators.length - 1; i >= 0; i--) {
            // eslint-disable-next-line no-cond-assign
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    // tslint:disable-next-line:ban-comma-operator
    return c > 3 && r && (0,_Constants__WEBPACK_IMPORTED_MODULE_1__.ObjDefineProperty)(target, key, r), r;
}
function __paramFn(paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadataFn(metadataKey, metadataValue) {
    if (__hasReflect && ReflectObj[strMetadata] === _Constants__WEBPACK_IMPORTED_MODULE_1__.strShimFunction) {
        return ReflectObj[strMetadata](metadataKey, metadataValue);
    }
}
function __exportStarFn(m, o) {
    for (var p in m) {
        if (p !== _Constants__WEBPACK_IMPORTED_MODULE_1__.strDefault && !_Constants__WEBPACK_IMPORTED_MODULE_1__.ObjHasOwnProperty.call(o, p)) {
            __createBindingFn(o, m, p);
        }
    }
}
function __createBindingFn(o, m, k, k2) {
    if (k2 === undefined) {
        k2 = k;
    }
    if (!!_Constants__WEBPACK_IMPORTED_MODULE_1__.ObjCreate) {
        (0,_Constants__WEBPACK_IMPORTED_MODULE_1__.ObjDefineProperty)(o, k2, {
            enumerable: true,
            get: function () {
                return m[k];
            }
        });
    }
    else {
        o[k2] = m[k];
    }
}
function __valuesFn(o) {
    var s = typeof SymbolObj === _Constants__WEBPACK_IMPORTED_MODULE_1__.strShimFunction && SymbolObj[strIterator], m = s && o[s], i = 0;
    if (m) {
        return m.call(o);
    }
    if (o && typeof o.length === "number") {
        return {
            next: function () {
                if (o && i >= o.length) {
                    o = void 0;
                }
                return { value: o && o[i++], done: !o };
            }
        };
    }
    (0,_Helpers__WEBPACK_IMPORTED_MODULE_0__.throwTypeError)(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __readFn(o, n) {
    var m = typeof SymbolObj === _Constants__WEBPACK_IMPORTED_MODULE_1__.strShimFunction && o[SymbolObj[strIterator]];
    if (!m) {
        return o;
    }
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
        }
    }
    catch (error) {
        e = {
            error: error
        };
    }
    finally {
        try {
            // tslint:disable-next-line:no-conditional-assignment
            if (r && !r.done && (m = i["return"])) {
                m.call(i);
            }
        }
        finally {
            if (e) {
                // eslint-disable-next-line no-unsafe-finally
                throw e.error;
            }
        }
    }
    return ar;
}
/** @deprecated */
function __spreadArraysFn() {
    var theArgs = arguments;
    // Calculate new total size
    for (var s = 0, i = 0, il = theArgs.length; i < il; i++) {
        s += theArgs[i].length;
    }
    // Create new full array
    for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = theArgs[i], j = 0, jl = a.length; j < jl; j++, k++) {
            r[k] = a[j];
        }
    }
    return r;
}
function __spreadArrayFn(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
        to[j] = from[i];
    }
    return to;
}
function __makeTemplateObjectFn(cooked, raw) {
    if (_Constants__WEBPACK_IMPORTED_MODULE_1__.ObjDefineProperty) {
        (0,_Constants__WEBPACK_IMPORTED_MODULE_1__.ObjDefineProperty)(cooked, "raw", { value: raw });
    }
    else {
        cooked.raw = raw;
    }
    return cooked;
}
function __importStarFn(mod) {
    if (mod && mod.__esModule) {
        return mod;
    }
    var result = {};
    if (mod != null) {
        for (var k in mod) {
            if (k !== _Constants__WEBPACK_IMPORTED_MODULE_1__.strDefault && Object.prototype.hasOwnProperty.call(mod, k)) {
                __createBindingFn(result, mod, k);
            }
        }
    }
    // Set default module
    if (!!_Constants__WEBPACK_IMPORTED_MODULE_1__.ObjCreate) {
        (0,_Constants__WEBPACK_IMPORTED_MODULE_1__.ObjDefineProperty)(result, _Constants__WEBPACK_IMPORTED_MODULE_1__.strDefault, { enumerable: true, value: mod });
    }
    else {
        result[_Constants__WEBPACK_IMPORTED_MODULE_1__.strDefault] = mod;
    }
    return result;
}
function __importDefaultFn(mod) {
    return (mod && mod.__esModule) ? mod : { strDefault: mod };
}
//# sourceMappingURL=TsLibShims.js.map

/***/ }),

/***/ 536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dynamicProto)
/* harmony export */ });
/*!
 * Microsoft Dynamic Proto Utility, 1.1.10
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */
var _a;
var UNDEFINED = "undefined";
/**
 * Constant string defined to support minimization
 * @ignore
 */
var Constructor = 'constructor';
/**
 * Constant string defined to support minimization
 * @ignore
 */
var Prototype = 'prototype';
/**
 * Constant string defined to support minimization
 * @ignore
 */
var strFunction = 'function';
/**
 * Used to define the name of the instance function lookup table
 * @ignore
 */
var DynInstFuncTable = '_dynInstFuncs';
/**
 * Name used to tag the dynamic prototype function
 * @ignore
 */
var DynProxyTag = '_isDynProxy';
/**
 * Name added to a prototype to define the dynamic prototype "class" name used to lookup the function table
 * @ignore
 */
var DynClassName = '_dynClass';
/**
 * Prefix added to the classname to avoid any name clashes with other instance level properties
 * @ignore
 */
var DynClassNamePrefix = '_dynCls$';
/**
 * A tag which is used to check if we have already to attempted to set the instance function if one is not present
 * @ignore
 */
var DynInstChkTag = '_dynInstChk';
/**
 * A tag which is used to check if we are allows to try and set an instance function is one is not present. Using the same
 * tag name as the function level but a different const name for readability only.
 */
var DynAllowInstChkTag = DynInstChkTag;
/**
 * The global (imported) instances where the global performance options are stored
 */
var DynProtoDefaultOptions = '_dfOpts';
/**
 * Value used as the name of a class when it cannot be determined
 * @ignore
 */
var UnknownValue = '_unknown_';
/**
 * Constant string defined to support minimization
 * @ignore
 */
var str__Proto = "__proto__";
/**
 * The polyfill version of __proto__ so that it doesn't cause issues for anyone not expecting it to exist
 */
var DynProtoBaseProto = "_dyn" + str__Proto;
/**
 * Runtime Global holder for dynamicProto settings
 */
var DynProtoGlobalSettings = "__dynProto$Gbl";
/**
 * Track the current prototype for IE8 as you can't look back to get the prototype
 */
var DynProtoCurrent = "_dynInstProto";
/**
 * Constant string defined to support minimization
 * @ignore
 */
var strUseBaseInst = 'useBaseInst';
/**
 * Constant string defined to support minimization
 * @ignore
 */
var strSetInstFuncs = 'setInstFuncs';
var Obj = Object;
/**
 * Pre-lookup to check if we are running on a modern browser (i.e. not IE8)
 * @ignore
 */
var _objGetPrototypeOf = Obj["getPrototypeOf"];
/**
 * Pre-lookup to check for the existence of this function
 */
var _objGetOwnProps = Obj["getOwnPropertyNames"];
/**
 * Gets the runtime global reference
 * @returns
 */
function _getGlobal() {
    var result;
    if (typeof globalThis !== UNDEFINED) {
        result = globalThis;
    }
    if (!result && typeof self !== UNDEFINED) {
        result = self;
    }
    if (!result && typeof window !== UNDEFINED) {
        result = window;
    }
    if (!result && typeof __webpack_require__.g !== UNDEFINED) {
        result = __webpack_require__.g;
    }
    return result || {};
}
// Since 1.1.7 moving these to the runtime global to work around mixed version and module issues
// See Issue https://github.com/microsoft/DynamicProto-JS/issues/57 for details
var _gbl = _getGlobal();
var _gblInst = _gbl[DynProtoGlobalSettings] || (_gbl[DynProtoGlobalSettings] = {
    o: (_a = {},
        _a[strSetInstFuncs] = true,
        _a[strUseBaseInst] = true,
        _a),
    n: 1000 // Start new global index @ 1000 so we "fix" some cases when mixed with 1.1.6 or earlier
});
/**
 * Helper to check if the object contains a property of the name
 * @ignore
 */
function _hasOwnProperty(obj, prop) {
    return obj && Obj[Prototype].hasOwnProperty.call(obj, prop);
}
/**
 * Helper used to check whether the target is an Object prototype or Array prototype
 * @ignore
 */
function _isObjectOrArrayPrototype(target) {
    return target && (target === Obj[Prototype] || target === Array[Prototype]);
}
/**
 * Helper used to check whether the target is an Object prototype, Array prototype or Function prototype
 * @ignore
 */
function _isObjectArrayOrFunctionPrototype(target) {
    return _isObjectOrArrayPrototype(target) || target === Function[Prototype];
}
/**
 * Helper used to get the prototype of the target object as getPrototypeOf is not available in an ES3 environment.
 * @ignore
 */
function _getObjProto(target) {
    var newProto;
    if (target) {
        // This method doesn't exist in older browsers (e.g. IE8)
        if (_objGetPrototypeOf) {
            return _objGetPrototypeOf(target);
        }
        var curProto = target[str__Proto] || target[Prototype] || (target[Constructor] ? target[Constructor][Prototype] : null);
        // Using the pre-calculated value as IE8 doesn't support looking up the prototype of a prototype and thus fails for more than 1 base class
        newProto = target[DynProtoBaseProto] || curProto;
        if (!_hasOwnProperty(target, DynProtoBaseProto)) {
            // As this prototype doesn't have this property then this is from an inherited class so newProto is the base to return so save it
            // so we can look it up value (which for a multiple hierarchy dynamicProto will be the base class)
            delete target[DynProtoCurrent]; // Delete any current value allocated to this instance so we pick up the value from prototype hierarchy
            newProto = target[DynProtoBaseProto] = target[DynProtoCurrent] || target[DynProtoBaseProto];
            target[DynProtoCurrent] = curProto;
        }
    }
    return newProto;
}
/**
 * Helper to get the properties of an object, including none enumerable ones as functions on a prototype in ES6
 * are not enumerable.
 * @param target
 */
function _forEachProp(target, func) {
    var props = [];
    if (_objGetOwnProps) {
        props = _objGetOwnProps(target);
    }
    else {
        for (var name_1 in target) {
            if (typeof name_1 === "string" && _hasOwnProperty(target, name_1)) {
                props.push(name_1);
            }
        }
    }
    if (props && props.length > 0) {
        for (var lp = 0; lp < props.length; lp++) {
            func(props[lp]);
        }
    }
}
/**
 * Helper function to check whether the provided function name is a potential candidate for dynamic
 * callback and prototype generation.
 * @param target The target object, may be a prototype or class object
 * @param funcName The function name
 * @param skipOwn Skips the check for own property
 * @ignore
 */
function _isDynamicCandidate(target, funcName, skipOwn) {
    return (funcName !== Constructor && typeof target[funcName] === strFunction && (skipOwn || _hasOwnProperty(target, funcName)) && funcName !== str__Proto && funcName !== Prototype);
}
/**
 * Helper to throw a TypeError exception
 * @param message the message
 * @ignore
 */
function _throwTypeError(message) {
    throw new TypeError("DynamicProto: " + message);
}
function _newObject() {
    return Object.create ? (function(obj) { /* ai_es3_polyfil create */ var func = Object["create"]; if (func) { return func(obj); } if (obj == null) { return {}; } var type = typeof obj; if (type !== 'object' && type !== 'function') { throw new TypeError('Object prototype may only be an Object:' + obj); } function tmpFunc() {} tmpFunc.prototype = obj; return new tmpFunc(); })(null) : {};
}
/**
 * Returns a collection of the instance functions that are defined directly on the thisTarget object, it does
 * not return any inherited functions
 * @param thisTarget The object to get the instance functions from
 * @ignore
 */
function _getInstanceFuncs(thisTarget) {
    // Get the base proto
    var instFuncs = _newObject();
    // Save any existing instance functions
    _forEachProp(thisTarget, function (name) {
        // Don't include any dynamic prototype instances - as we only want the real functions
        if (!instFuncs[name] && _isDynamicCandidate(thisTarget, name, false)) {
            // Create an instance callback for passing the base function to the caller
            instFuncs[name] = thisTarget[name];
        }
    });
    return instFuncs;
}
/**
 * Returns whether the value is included in the array
 * @param values The array of values
 * @param value  The value
 */
function _hasVisited(values, value) {
    for (var lp = values.length - 1; lp >= 0; lp--) {
        if (values[lp] === value) {
            return true;
        }
    }
    return false;
}
/**
 * Returns an object that contains callback functions for all "base/super" functions, this is used to "save"
 * enabling calling super.xxx() functions without requiring that the base "class" has defined a prototype references
 * @param target The current instance
 * @ignore
 */
function _getBaseFuncs(classProto, thisTarget, instFuncs, useBaseInst) {
    function _instFuncProxy(target, funcHost, funcName) {
        var theFunc = funcHost[funcName];
        if (theFunc[DynProxyTag] && useBaseInst) {
            // grab and reuse the hosted looking function (if available) otherwise the original passed function
            var instFuncTable = target[DynInstFuncTable] || {};
            if (instFuncTable[DynAllowInstChkTag] !== false) {
                theFunc = (instFuncTable[funcHost[DynClassName]] || {})[funcName] || theFunc;
            }
        }
        return function () {
            // eslint-disable-next-line prefer-rest-params
            return theFunc.apply(target, arguments);
        };
    }
    // Start creating a new baseFuncs by creating proxies for the instance functions (as they may get replaced)
    var baseFuncs = _newObject();
    _forEachProp(instFuncs, function (name) {
        // Create an instance callback for passing the base function to the caller
        baseFuncs[name] = _instFuncProxy(thisTarget, instFuncs, name);
    });
    // Get the base prototype functions
    var baseProto = _getObjProto(classProto);
    var visited = [];
    // Don't include base object functions for Object, Array or Function
    while (baseProto && !_isObjectArrayOrFunctionPrototype(baseProto) && !_hasVisited(visited, baseProto)) {
        // look for prototype functions
        _forEachProp(baseProto, function (name) {
            // Don't include any dynamic prototype instances - as we only want the real functions
            // For IE 7/8 the prototype lookup doesn't provide the full chain so we need to bypass the 
            // hasOwnProperty check we get all of the methods, main difference is that IE7/8 doesn't return
            // the Object prototype methods while bypassing the check
            if (!baseFuncs[name] && _isDynamicCandidate(baseProto, name, !_objGetPrototypeOf)) {
                // Create an instance callback for passing the base function to the caller
                baseFuncs[name] = _instFuncProxy(thisTarget, baseProto, name);
            }
        });
        // We need to find all possible functions that might be overloaded by walking the entire prototype chain
        // This avoids the caller from needing to check whether it's direct base class implements the function or not
        // by walking the entire chain it simplifies the usage and issues from upgrading any of the base classes.
        visited.push(baseProto);
        baseProto = _getObjProto(baseProto);
    }
    return baseFuncs;
}
function _getInstFunc(target, funcName, proto, currentDynProtoProxy) {
    var instFunc = null;
    // We need to check whether the class name is defined directly on this prototype otherwise
    // it will walk the proto chain and return any parent proto classname.
    if (target && _hasOwnProperty(proto, DynClassName)) {
        var instFuncTable = target[DynInstFuncTable] || _newObject();
        instFunc = (instFuncTable[proto[DynClassName]] || _newObject())[funcName];
        if (!instFunc) {
            // Avoid stack overflow from recursive calling the same function
            _throwTypeError("Missing [" + funcName + "] " + strFunction);
        }
        // We have the instance function, lets check it we can speed up further calls
        // by adding the instance function back directly on the instance (avoiding the dynamic func lookup)
        if (!instFunc[DynInstChkTag] && instFuncTable[DynAllowInstChkTag] !== false) {
            // If the instance already has an instance function we can't replace it
            var canAddInst = !_hasOwnProperty(target, funcName);
            // Get current prototype
            var objProto = _getObjProto(target);
            var visited = [];
            // Lookup the function starting at the top (instance level prototype) and traverse down, if the first matching function
            // if nothing is found or if the first hit is a dynamic proto instance then we can safely add an instance shortcut
            while (canAddInst && objProto && !_isObjectArrayOrFunctionPrototype(objProto) && !_hasVisited(visited, objProto)) {
                var protoFunc = objProto[funcName];
                if (protoFunc) {
                    canAddInst = (protoFunc === currentDynProtoProxy);
                    break;
                }
                // We need to find all possible initial functions to ensure that we don't bypass a valid override function
                visited.push(objProto);
                objProto = _getObjProto(objProto);
            }
            try {
                if (canAddInst) {
                    // This instance doesn't have an instance func and the class hierarchy does have a higher level prototype version
                    // so it's safe to directly assign for any subsequent calls (for better performance)
                    target[funcName] = instFunc;
                }
                // Block further attempts to set the instance function for any
                instFunc[DynInstChkTag] = 1;
            }
            catch (e) {
                // Don't crash if the object is readonly or the runtime doesn't allow changing this
                // And set a flag so we don't try again for any function
                instFuncTable[DynAllowInstChkTag] = false;
            }
        }
    }
    return instFunc;
}
function _getProtoFunc(funcName, proto, currentDynProtoProxy) {
    var protoFunc = proto[funcName];
    // Check that the prototype function is not a self reference -- try to avoid stack overflow!
    if (protoFunc === currentDynProtoProxy) {
        // It is so lookup the base prototype
        protoFunc = _getObjProto(proto)[funcName];
    }
    if (typeof protoFunc !== strFunction) {
        _throwTypeError("[" + funcName + "] is not a " + strFunction);
    }
    return protoFunc;
}
/**
 * Add the required dynamic prototype methods to the the class prototype
 * @param proto - The class prototype
 * @param className - The instance classname
 * @param target - The target instance
 * @param baseInstFuncs - The base instance functions
 * @param setInstanceFunc - Flag to allow prototype function to reset the instance function if one does not exist
 * @ignore
 */
function _populatePrototype(proto, className, target, baseInstFuncs, setInstanceFunc) {
    function _createDynamicPrototype(proto, funcName) {
        var dynProtoProxy = function () {
            // Use the instance or prototype function
            var instFunc = _getInstFunc(this, funcName, proto, dynProtoProxy) || _getProtoFunc(funcName, proto, dynProtoProxy);
            // eslint-disable-next-line prefer-rest-params
            return instFunc.apply(this, arguments);
        };
        // Tag this function as a proxy to support replacing dynamic proxy elements (primary use case is for unit testing
        // via which can dynamically replace the prototype function reference)
        dynProtoProxy[DynProxyTag] = 1;
        return dynProtoProxy;
    }
    if (!_isObjectOrArrayPrototype(proto)) {
        var instFuncTable = target[DynInstFuncTable] = target[DynInstFuncTable] || _newObject();
        if (!_isObjectOrArrayPrototype(instFuncTable)) {
            var instFuncs_1 = instFuncTable[className] = (instFuncTable[className] || _newObject()); // fetch and assign if as it may not exist yet
            // Set whether we are allow to lookup instances, if someone has set to false then do not re-enable
            if (instFuncTable[DynAllowInstChkTag] !== false) {
                instFuncTable[DynAllowInstChkTag] = !!setInstanceFunc;
            }
            if (!_isObjectOrArrayPrototype(instFuncs_1)) {
                _forEachProp(target, function (name) {
                    // Only add overridden functions
                    if (_isDynamicCandidate(target, name, false) && target[name] !== baseInstFuncs[name]) {
                        // Save the instance Function to the lookup table and remove it from the instance as it's not a dynamic proto function
                        instFuncs_1[name] = target[name];
                        delete target[name];
                        // Add a dynamic proto if one doesn't exist or if a prototype function exists and it's not a dynamic one
                        if (!_hasOwnProperty(proto, name) || (proto[name] && !proto[name][DynProxyTag])) {
                            proto[name] = _createDynamicPrototype(proto, name);
                        }
                    }
                });
            }
        }
    }
}
/**
 * Checks whether the passed prototype object appears to be correct by walking the prototype hierarchy of the instance
 * @param classProto The class prototype instance
 * @param thisTarget The current instance that will be checked whether the passed prototype instance is in the hierarchy
 * @ignore
 */
function _checkPrototype(classProto, thisTarget) {
    // This method doesn't existing in older browsers (e.g. IE8)
    if (_objGetPrototypeOf) {
        // As this is primarily a coding time check, don't bother checking if running in IE8 or lower
        var visited = [];
        var thisProto = _getObjProto(thisTarget);
        while (thisProto && !_isObjectArrayOrFunctionPrototype(thisProto) && !_hasVisited(visited, thisProto)) {
            if (thisProto === classProto) {
                return true;
            }
            // This avoids the caller from needing to check whether it's direct base class implements the function or not
            // by walking the entire chain it simplifies the usage and issues from upgrading any of the base classes.
            visited.push(thisProto);
            thisProto = _getObjProto(thisProto);
        }
        return false;
    }
    // If objGetPrototypeOf doesn't exist then just assume everything is ok.
    return true;
}
/**
 * Gets the current prototype name using the ES6 name if available otherwise falling back to a use unknown as the name.
 * It's not critical for this to return a name, it's used to decorate the generated unique name for easier debugging only.
 * @param target
 * @param unknownValue
 * @ignore
 */
function _getObjName(target, unknownValue) {
    if (_hasOwnProperty(target, Prototype)) {
        // Look like a prototype
        return target.name || unknownValue || UnknownValue;
    }
    return (((target || {})[Constructor]) || {}).name || unknownValue || UnknownValue;
}
/**
 * Helper function when creating dynamic (inline) functions for classes, this helper performs the following tasks :-
 * - Saves references to all defined base class functions
 * - Calls the delegateFunc with the current target (this) and a base object reference that can be used to call all "super" functions.
 * - Will populate the class prototype for all overridden functions to support class extension that call the prototype instance.
 * Callers should use this helper when declaring all function within the constructor of a class, as mentioned above the delegateFunc is
 * passed both the target "this" and an object that can be used to call any base (super) functions, using this based object in place of
 * super.XXX() (which gets expanded to _super.prototype.XXX()) provides a better minification outcome and also ensures the correct "this"
 * context is maintained as TypeScript creates incorrect references using super.XXXX() for dynamically defined functions i.e. Functions
 * defined in the constructor or some other function (rather than declared as complete typescript functions).
 * ### Usage
 * ```typescript
 * import dynamicProto from "@microsoft/dynamicproto-js";
 * class ExampleClass extends BaseClass {
 *     constructor() {
 *         dynamicProto(ExampleClass, this, (_self, base) => {
 *             // This will define a function that will be converted to a prototype function
 *             _self.newFunc = () => {
 *                 // Access any "this" instance property
 *                 if (_self.someProperty) {
 *                     ...
 *                 }
 *             }
 *             // This will define a function that will be converted to a prototype function
 *             _self.myFunction = () => {
 *                 // Access any "this" instance property
 *                 if (_self.someProperty) {
 *                     // Call the base version of the function that we are overriding
 *                     base.myFunction();
 *                 }
 *                 ...
 *             }
 *             _self.initialize = () => {
 *                 ...
 *             }
 *             // Warnings: While the following will work as _self is simply a reference to
 *             // this, if anyone overrides myFunction() the overridden will be called first
 *             // as the normal JavaScript method resolution will occur and the defined
 *             // _self.initialize() function is actually gets removed from the instance and
 *             // a proxy prototype version is created to reference the created method.
 *             _self.initialize();
 *         });
 *     }
 * }
 * ```
 * @typeparam DPType This is the generic type of the class, used to keep intellisense valid
 * @typeparam DPCls The type that contains the prototype of the current class
 * @param theClass - This is the current class instance which contains the prototype for the current class
 * @param target - The current "this" (target) reference, when the class has been extended this.prototype will not be the 'theClass' value.
 * @param delegateFunc - The callback function (closure) that will create the dynamic function
 * @param options - Additional options to configure how the dynamic prototype operates
 */
function dynamicProto(theClass, target, delegateFunc, options) {
    // Make sure that the passed theClass argument looks correct
    if (!_hasOwnProperty(theClass, Prototype)) {
        _throwTypeError("theClass is an invalid class definition.");
    }
    // Quick check to make sure that the passed theClass argument looks correct (this is a common copy/paste error)
    var classProto = theClass[Prototype];
    if (!_checkPrototype(classProto, target)) {
        _throwTypeError("[" + _getObjName(theClass) + "] not in hierarchy of [" + _getObjName(target) + "]");
    }
    var className = null;
    if (_hasOwnProperty(classProto, DynClassName)) {
        // Only grab the class name if it's defined on this prototype (i.e. don't walk the prototype chain)
        className = classProto[DynClassName];
    }
    else {
        // As not all browser support name on the prototype creating a unique dynamic one if we have not already
        // assigned one, so we can use a simple string as the lookup rather than an object for the dynamic instance
        // function table lookup.
        className = DynClassNamePrefix + _getObjName(theClass, "_") + "$" + _gblInst.n;
        _gblInst.n++;
        classProto[DynClassName] = className;
    }
    var perfOptions = dynamicProto[DynProtoDefaultOptions];
    var useBaseInst = !!perfOptions[strUseBaseInst];
    if (useBaseInst && options && options[strUseBaseInst] !== undefined) {
        useBaseInst = !!options[strUseBaseInst];
    }
    // Get the current instance functions
    var instFuncs = _getInstanceFuncs(target);
    // Get all of the functions for any base instance (before they are potentially overridden)
    var baseFuncs = _getBaseFuncs(classProto, target, instFuncs, useBaseInst);
    // Execute the delegate passing in both the current target "this" and "base" function references
    // Note casting the same type as we don't actually have the base class here and this will provide some intellisense support
    delegateFunc(target, baseFuncs);
    // Don't allow setting instance functions for older IE instances
    var setInstanceFunc = !!_objGetPrototypeOf && !!perfOptions[strSetInstFuncs];
    if (setInstanceFunc && options) {
        setInstanceFunc = !!options[strSetInstFuncs];
    }
    // Populate the Prototype for any overridden instance functions
    _populatePrototype(classProto, className, target, instFuncs, setInstanceFunc !== false);
}
/**
 * Exposes the default global options to allow global configuration, if the global values are disabled these will override
 * any passed values. This is primarily exposed to support unit-testing without the need for individual classes to expose
 * their internal usage of dynamic proto.
 */
dynamicProto[DynProtoDefaultOptions] = _gblInst.o;


//# sourceMappingURL=dynamicproto-js.js.map


/***/ })

}]);
//# sourceMappingURL=5.js.map