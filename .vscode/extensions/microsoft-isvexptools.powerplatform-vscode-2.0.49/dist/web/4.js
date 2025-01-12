"use strict";
(self["webpackChunkpowerplatform_vscode"] = self["webpackChunkpowerplatform_vscode"] || []).push([[4],{

/***/ 535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(533);
/* harmony import */ var _microsoft_dynamicproto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(536);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(537);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(540);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(528);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(538);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(548);
/* harmony import */ var _InternalConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(541);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(542);
/*
 * 1DS JS SDK Core, 3.2.15
 * Copyright (c) Microsoft and contributors. All rights reserved.
 * (Microsoft Internal Only)
 */

/**
* AppInsightsCore.ts
* @author Abhilash Panwar (abpanwar) Hector Hernandez (hectorh)
* @copyright Microsoft 2018
*/




var AppInsightsCore = /** @class */ (function (_super) {
    (0,_microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.__extendsFn)(AppInsightsCore, _super);
    function AppInsightsCore() {
        var _this = _super.call(this) || this;
        _this.pluginVersionStringArr = [];
        (0,_microsoft_dynamicproto_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AppInsightsCore, _this, function (_self, _base) {
            if (!_self.logger || !_self.logger.queue) {
                // The AI Base can inject a No-Op logger so if not defined or the No-Op, change to use a default logger so initialization errors
                // are not dropped on the floor if one is not already defined
                _self.logger = new _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.DiagnosticLogger({ loggingLevelConsole: 1 /* eLoggingSeverity.CRITICAL */ });
            }
            _self.initialize = function (config, extensions, logger, notificationManager) {
                (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_3__.doPerf)(_self, function () { return "AppInsightsCore.initialize"; }, function () {
                    var _pluginVersionStringArr = _self.pluginVersionStringArr;
                    // Add default collector url
                    if (config) {
                        if (!config.endpointUrl) {
                            config.endpointUrl = _InternalConstants__WEBPACK_IMPORTED_MODULE_4__.STR_DEFAULT_ENDPOINT_URL;
                        }
                        var propertyStorageOverride = config.propertyStorageOverride;
                        // Validate property storage override
                        if (propertyStorageOverride && (!propertyStorageOverride.getProperty || !propertyStorageOverride.setProperty)) {
                            (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_5__.throwError)("Invalid property storage override passed.");
                        }
                        if (config.channels) {
                            (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_5__.arrForEach)(config.channels, function (channels) {
                                if (channels) {
                                    (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_5__.arrForEach)(channels, function (channel) {
                                        if (channel.identifier && channel.version) {
                                            var ver = channel.identifier + "=" + channel.version;
                                            _pluginVersionStringArr.push(ver);
                                        }
                                    });
                                }
                            });
                        }
                    }
                    _self.getWParam = function () {
                        return (typeof document !== "undefined" || !!config.enableWParam) ? 0 : -1;
                    };
                    if (extensions) {
                        (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_5__.arrForEach)(extensions, function (ext) {
                            if (ext && ext.identifier && ext.version) {
                                var ver = ext.identifier + "=" + ext.version;
                                _pluginVersionStringArr.push(ver);
                            }
                        });
                    }
                    _self.pluginVersionString = _pluginVersionStringArr.join(";");
                    _self.pluginVersionStringArr = _pluginVersionStringArr;
                    try {
                        _base.initialize(config, extensions, logger, notificationManager);
                        _self.pollInternalLogs("InternalLog");
                    }
                    catch (e) {
                        var logger_1 = _self.logger;
                        var message = (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_6__.dumpObj)(e);
                        if (message.indexOf("channels") !== -1) {
                            // Add some additional context to the underlying reported error
                            message += "\n - Channels must be provided through config.channels only!";
                        }
                        (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__._throwInternal)(logger_1, 1 /* eLoggingSeverity.CRITICAL */, 514 /* _eExtendedInternalMessageId.FailedToInitializeSDK */, "SDK Initialization Failed - no telemetry will be sent: " + message);
                    }
                }, function () { return ({ config: config, extensions: extensions, logger: logger, notificationManager: notificationManager }); });
            };
            _self.track = function (item) {
                (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_3__.doPerf)(_self, function () { return "AppInsightsCore.track"; }, function () {
                    var telemetryItem = item;
                    if (telemetryItem) {
                        telemetryItem.timings = telemetryItem.timings || {};
                        telemetryItem.timings.trackStart = (0,_Utils__WEBPACK_IMPORTED_MODULE_7__.getTime)();
                        if (!(0,_Utils__WEBPACK_IMPORTED_MODULE_7__.isLatency)(telemetryItem.latency)) {
                            telemetryItem.latency = 1 /* EventLatencyValue.Normal */;
                        }
                        var itemExt = telemetryItem.ext = telemetryItem.ext || {};
                        itemExt.sdk = itemExt.sdk || {};
                        itemExt.sdk.ver = _Utils__WEBPACK_IMPORTED_MODULE_7__.FullVersionString;
                        var baseData = telemetryItem.baseData = telemetryItem.baseData || {};
                        baseData[_InternalConstants__WEBPACK_IMPORTED_MODULE_4__.STR_PROPERTIES] = baseData[_InternalConstants__WEBPACK_IMPORTED_MODULE_4__.STR_PROPERTIES] || {};
                        var itemProperties = baseData[_InternalConstants__WEBPACK_IMPORTED_MODULE_4__.STR_PROPERTIES];
                        itemProperties[_InternalConstants__WEBPACK_IMPORTED_MODULE_4__.STR_VERSION] = itemProperties[_InternalConstants__WEBPACK_IMPORTED_MODULE_4__.STR_VERSION] || _self.pluginVersionString || _InternalConstants__WEBPACK_IMPORTED_MODULE_4__.STR_EMPTY;
                    }
                    _base.track(telemetryItem);
                }, function () { return ({ item: item }); }, !(item.sync));
            };
        });
        return _this;
    }
// Removed Stub for AppInsightsCore.prototype.initialize.
// Removed Stub for AppInsightsCore.prototype.track.
    // This is a workaround for an IE8 bug when using dynamicProto() with classes that don't have any
    // non-dynamic functions or static properties/functions when using uglify-js to minify the resulting code.
    // this will be removed when ES3 support is dropped.
    AppInsightsCore.__ieDyn=1;

    return AppInsightsCore;
}(_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_8__.AppInsightsCore));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppInsightsCore);
//# sourceMappingURL=AppInsightsCore.js.map

/***/ }),

/***/ 558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(533);
/* harmony import */ var _microsoft_dynamicproto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(536);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(537);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(538);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(550);
/* harmony import */ var _InternalConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(541);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(542);
/*
 * 1DS JS SDK Core, 3.2.15
 * Copyright (c) Microsoft and contributors. All rights reserved.
 * (Microsoft Internal Only)
 */

/**
* BaseCore.ts
* Base Core is a subset of 1DS Web SDK Core. The purpose of Base Core is to generate a smaller bundle size while providing essential features of Core. Features that are not included in Base Core are:
* 1. Internal logging
* 2. Sending notifications on telemetry sent/discarded
* @author Abhilash Panwar (abpanwar) Hector Hernandez (hectorh)
* @copyright Microsoft 2018
*/




var BaseCore = /** @class */ (function (_super) {
    (0,_microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.__extendsFn)(BaseCore, _super);
    function BaseCore() {
        var _this = _super.call(this) || this;
        (0,_microsoft_dynamicproto_js__WEBPACK_IMPORTED_MODULE_1__["default"])(BaseCore, _this, function (_self, _base) {
            _self.initialize = function (config, extensions, logger, notificationManager) {
                if (config && !config.endpointUrl) {
                    config.endpointUrl = _InternalConstants__WEBPACK_IMPORTED_MODULE_2__.STR_DEFAULT_ENDPOINT_URL;
                }
                _self.getWParam = function () {
                    return (_Utils__WEBPACK_IMPORTED_MODULE_3__.isDocumentObjectAvailable || !!config.enableWParam) ? 0 : -1;
                };
                try {
                    _base.initialize(config, extensions, logger, notificationManager);
                }
                catch (e) {
                    (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_4__._throwInternal)(_self.logger, 1 /* eLoggingSeverity.CRITICAL */, 514 /* _eExtendedInternalMessageId.FailedToInitializeSDK */, "Initialization Failed: " + (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_5__.dumpObj)(e) + "\n - Note: Channels must be provided through config.channels only");
                }
            };
            _self.track = function (item) {
                var telemetryItem = item;
                if (telemetryItem) {
                    var ext = telemetryItem.ext = telemetryItem.ext || {};
                    ext.sdk = ext.sdk || {};
                    ext.sdk.ver = _Utils__WEBPACK_IMPORTED_MODULE_3__.FullVersionString;
                }
                _base.track(telemetryItem);
            };
        });
        return _this;
    }
// Removed Stub for BaseCore.prototype.initialize.
// Removed Stub for BaseCore.prototype.track.
    // This is a workaround for an IE8 bug when using dynamicProto() with classes that don't have any
    // non-dynamic functions or static properties/functions when using uglify-js to minify the resulting code.
    // this will be removed when ES3 support is dropped.
    BaseCore.__ieDyn=1;

    return BaseCore;
}(_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_6__.BaseCore));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseCore);
//# sourceMappingURL=BaseCore.js.map

/***/ }),

/***/ 559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _microsoft_dynamicproto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(536);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(528);
/*
 * 1DS JS SDK Core, 3.2.15
 * Copyright (c) Microsoft and contributors. All rights reserved.
 * (Microsoft Internal Only)
 */
/**
* ESPromise.ts
* @author  Nev Wylie (newylie))
* @copyright Microsoft 2019
* Simplified wrapper to provide ES6 style Promise callback handling for older browsers
*/


/**
 * @ignore -- Don't include in the generated documentation
 * Using a local variable to assist with minfication
 */
var _isFunction = _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_0__.isFunction;
/**
 * @ignore -- Don't include in the generated documentation
 * This function will be used as onFulfilled handler for any Promise found in the iterable passed to Promise.all.
 * The goal here is to capture in a closure the index of the current item from the iterable. If we did not create
 * this closure, the captured index variable would be the same one that the for loop updates and thus would always
 * be pointing to the last index in the iterable by the time that the onFulfilled handler is called.
 * However, note that for the resolvedCallback callback we want the opposite. For this one we do want to capture
 * the same variable that the for loop updates so that we have the full count of pending promises by the time
 * the onFulfilled handlers start getting called.
 * @param values The resolving promise values
 * @param index The index of this callback function
 * @param resolvedCallback THe callback function used to check if the "all" promise is complete
 */
function _createPromiseAllOnResolvedFunction(values, index, resolvedCallback) {
    return function (value) {
        values[index] = value;
        resolvedCallback();
    };
}
/**
 * Simplified wrapper to provide ES6 style Promise callback handling for older browsers
 */
var ESPromise = /** @class */ (function () {
    /**
     * The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
     * @param resolverFunc A function that is passed with the arguments resolve and reject. The executor function is executed
     * immediately by the Promise implementation, passing resolve and reject functions (the executor is called before the Promise
     * constructor even returns the created object). The resolve and reject functions, when called, resolve or reject the promise,
     * respectively. The executor normally initiates some asynchronous work, and then, once that completes, either calls the resolve
     * function to resolve the promise or else rejects it if an error occurred. If an error is thrown in the executor function, the
     * promise is rejected. The return value of the executor is ignored.
     */
    function ESPromise(resolverFunc) {
        var _state = 0 /* PromiseState.Pending */;
        var _settledValue = null;
        var _queue = [];
        (0,_microsoft_dynamicproto_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ESPromise, this, function (_this) {
            _this.then = function (onResolved, onRejected) {
                return new ESPromise(function (resolve, reject) {
                    // Queue the new promise returned to be resolved or rejected
                    // when this promise settles.
                    _enqueue(onResolved, onRejected, resolve, reject);
                });
            };
            _this["catch"] = function (onRejected) {
                return _this.then(null, onRejected);
            };
        });
        function _enqueue(onResolved, onRejected, resolve, reject) {
            _queue.push(function () {
                var value;
                try {
                    // First call the onFulfilled or onRejected handler, on the settled value
                    // of this promise. If the corresponding handler does not exist, simply
                    // pass through the settled value.
                    if (_state === 1 /* PromiseState.Resolved */) {
                        value = _isFunction(onResolved) ? onResolved(_settledValue) : _settledValue;
                    }
                    else {
                        value = _isFunction(onRejected) ? onRejected(_settledValue) : _settledValue;
                    }
                    if (value instanceof ESPromise) {
                        // The called handlers returned a new promise, so the chained promise
                        // will follow the state of this promise.
                        value.then(resolve, reject);
                    }
                    else if (_state === 2 /* PromiseState.Rejected */ && !_isFunction(onRejected)) {
                        // If there wasn't an onRejected handler and this promise is rejected, then
                        // the chained promise also rejects with the same reason.
                        reject(value);
                    }
                    else {
                        // If this promise is fulfilled, then the chained promise is also fulfilled
                        // with either the settled value of this promise (if no onFulfilled handler
                        // was available) or the return value of the handler. If this promise is
                        // rejected and there was an onRejected handler, then the chained promise is
                        // fulfilled with the return value of the handler.
                        resolve(value);
                    }
                }
                catch (error) {
                    // The chained promise will reject if there is any exception thrown while
                    // calling the onFulfilled or onRejected handlers.
                    reject(error);
                    return;
                }
            });
            // If this promise is already settled, then immediately process the callback we
            // just added to the queue.
            if (_state !== 0 /* PromiseState.Pending */) {
                _processQueue();
            }
        }
        function _processQueue() {
            if (_queue.length > 0) {
                // The onFulfilled and onRejected handlers must be called asynchronously. Thus,
                // we make a copy of the queue and work on it once the current call stack unwinds.
                var pending_1 = _queue.slice();
                _queue = [];
                setTimeout(function () {
                    for (var i = 0, len = pending_1.length; i < len; ++i) {
                        try {
                            pending_1[i]();
                        }
                        catch (e) {
                            // Don't let 1 failing handler break all others
                            // TODO (newylie): Add some form of error reporting (i.e. Call any registered JS error handler so the error is reported)
                        }
                    }
                }, 0);
            }
        }
        function _resolve(value) {
            if (_state === 0 /* PromiseState.Pending */) {
                _settledValue = value;
                _state = 1 /* PromiseState.Resolved */;
                _processQueue();
            }
        }
        function _reject(reason) {
            if (_state === 0 /* PromiseState.Pending */) {
                _settledValue = reason;
                _state = 2 /* PromiseState.Rejected */;
                _processQueue();
            }
        }
        (function _initialize() {
            if (!_isFunction(resolverFunc)) {
                throw new TypeError("ESPromise: resolvedFunc argument is not a Function");
            }
            try {
                resolverFunc(_resolve, _reject);
            }
            catch (error) {
                // This promise will immediately reject if any exception is thrown
                // from within the executor function.
                _reject(error);
            }
        })();
    }
    /**
     * The Promise.resolve() method returns a Promise object that is resolved with a given value. If the value is a promise, that promise is returned;
     * if the value is a thenable (i.e. has a "then" method), the returned promise will "follow" that thenable, adopting its eventual state; otherwise
     * the returned promise will be fulfilled with the value. This function flattens nested layers of promise-like objects (e.g. a promise that resolves
     * to a promise that resolves to something) into a single layer.
     * @param value Argument to be resolved by this Promise. Can also be a Promise or a thenable to resolve.
     */
    ESPromise.resolve = function (value) {
        if (value instanceof ESPromise) {
            // Value is a Promise so just return it
            return value;
        }
        else if (value && _isFunction(value.then)) {
            // Value looks like a promise or thenable (has a then function)
            return new ESPromise(function (resolve, reject) {
                try {
                    value.then(resolve, reject);
                }
                catch (error) {
                    reject(error);
                }
            });
        }
        return new ESPromise(function (resolve) {
            resolve(value);
        });
    };
    /**
     * The Promise.reject() method returns a Promise object that is rejected with a given reason.
     * @param reason The reason why this Promise rejected.
     */
    ESPromise.reject = function (reason) {
        return new ESPromise(function (resolve, reject) {
            reject(reason);
        });
    };
    /**
     * The Promise.all() method returns a single Promise that resolves when all of the promises passed as an iterable
     * have resolved or when the iterable contains no promises. It rejects with the reason of the first promise that
     * rejects. There is no implied ordering in the execution of the array of Promises given. On some computers, they
     * may be executed in parallel, or in some sense concurrently, while on others they may be executed serially. For
     * this reason, there must be no dependency in any Promise on the order of execution of the Promises.
     * This method can be useful for aggregating the results of multiple promises.
     * FulfillmentSection - The returned promise is fulfilled with an array containing all the values of the iterable
     * passed as argument (also non-promise values).
     * If an empty iterable is passed, then this method returns (synchronously) an already resolved promise.
     * If all of the passed-in promises fulfill, or are not promises, the promise returned by Promise.all is fulfilled
     * asynchronously.
     * RejectionSection - If any of the passed-in promises reject, Promise.all asynchronously rejects with the value of
     * the promise that rejected, whether or not the other promises have resolved.
     * @param iterable
     */
    ESPromise.all = function (iterable) {
        if (!iterable || !iterable.length) {
            return;
        }
        return new ESPromise(function (resolve, reject) {
            try {
                var values_1 = [];
                var pending_2 = 0;
                for (var lp = 0; lp < iterable.length; lp++) {
                    var item = iterable[lp];
                    // Quick and direct check for a Promise (will also catch a thenable)
                    if (item && _isFunction(item.then)) {
                        pending_2++;
                        item.then(_createPromiseAllOnResolvedFunction(values_1, lp, function () {
                            if (--pending_2 === 0) {
                                resolve(values_1);
                            }
                        }), reject);
                    }
                    else {
                        values_1[lp] = item;
                    }
                }
                if (pending_2 === 0) {
                    // All promises were either resolved or where not a promise
                    setTimeout(function () {
                        resolve(values_1);
                    }, 0);
                }
            }
            catch (error) {
                reject(error);
            }
        });
    };
    /**
     * The race function returns a Promise that is settled the same way (and takes the same value) as the first promise
     * that settles amongst the promises of the iterable passed as an argument.
     * If the iterable passed is empty, the promise returned will be forever pending.
     * If the iterable contains one or more non-promise value and/or an already settled promise, then Promise.race will
     * resolve to the first of these values found in the iterable.
     * @param iterable
     */
    ESPromise.race = function (iterable) {
        return new ESPromise(function (resolve, reject) {
            if (!iterable || !iterable.length) {
                return;
            }
            try {
                var _loop_1 = function (lp) {
                    var item = iterable[lp];
                    // Quick and direct check for a Promise (will also catch a thenable)
                    if (item && _isFunction(item.then)) {
                        item.then(resolve, reject);
                    }
                    else {
                        setTimeout(function () {
                            resolve(item);
                        }, 0);
                    }
                };
                for (var lp = 0; lp < iterable.length; lp++) {
                    _loop_1(lp);
                }
            }
            catch (error) {
                reject(error);
            }
        });
    };
// Removed Stub for ESPromise.prototype.then.
// Removed Stub for ESPromise.prototype["catch"].
    return ESPromise;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ESPromise);
//# sourceMappingURL=ESPromise.js.map

/***/ }),

/***/ 560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _microsoft_dynamicproto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(536);
/* harmony import */ var _ESPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(559);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(532);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(537);
/*
 * 1DS JS SDK Core, 3.2.15
 * Copyright (c) Microsoft and contributors. All rights reserved.
 * (Microsoft Internal Only)
 */
/**
* ESPromiseScheduler.ts
* @author Nev Wylie (newylie)
* @copyright Microsoft 2019
*/



/** This is a default timeout that will cause outstanding running promises to be removed/rejected to avoid filling up memory with blocked events */
var LazyRejectPeriod = 600000; // 10 Minutes
// These are global variables that are shared across ALL instances of the scheduler
/**
 * @ignore
 */
var _schedulerId = 0;
/**
 * @ignore
 */
var _running = [];
/**
 * @ignore
 */
var _waiting = [];
/**
 * @ignore
 */
var _timedOut = [];
/**
 * @ignore
 */
function _getTime() {
    return new Date().getTime();
}
/**
 * Provides a simple mechanism queueing mechanism for scheduling events based on the ESPromise callbacks, this is used to ensure
 * order of async operations that are required to be executed in a specific order.
 */
var ESPromiseScheduler = /** @class */ (function () {
    function ESPromiseScheduler(name, diagLog) {
        var _promiseId = 0;
        var _scheduledName = (name || "<unnamed>") + "." + _schedulerId;
        _schedulerId++;
        (0,_microsoft_dynamicproto_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ESPromiseScheduler, this, function (_this) {
            var _lastEvent = null;
            var _eventCount = 0;
            _this.scheduleEvent = function (startEventAction, eventName, timeout) {
                var uniqueId = _scheduledName + "." + _eventCount;
                _eventCount++;
                if (eventName) {
                    uniqueId += "-(" + eventName + ")";
                }
                var uniqueEventId = uniqueId + "{" + _promiseId + "}";
                _promiseId++;
                // Create the next scheduled event details
                var newScheduledEvent = {
                    evt: null,
                    tm: _getTime(),
                    id: uniqueEventId,
                    isRunning: false,
                    isAborted: false
                };
                if (!_lastEvent) {
                    // We don't have any currently running event, so just start the next event
                    newScheduledEvent.evt = _startWaitingEvent(newScheduledEvent);
                }
                else {
                    // Start a new promise which will wait until all current active events are complete before starting
                    // the new event, it does not resolve this scheduled event until after the new event is resolve to
                    // ensure that all scheduled events are completed in the correct order
                    newScheduledEvent.evt = _waitForPreviousEvent(newScheduledEvent, _lastEvent);
                }
                // Set this new event as the last one, so that any future events will wait for this one
                _lastEvent = newScheduledEvent;
                _lastEvent.evt._schId = uniqueEventId;
                return newScheduledEvent.evt;
                function _abortAndRemoveOldEvents(eventQueue) {
                    var now = _getTime();
                    var expired = now - LazyRejectPeriod;
                    var len = eventQueue.length;
                    var lp = 0;
                    while (lp < len) {
                        var evt = eventQueue[lp];
                        if (evt && evt.tm < expired) {
                            var message = null;
                            if (evt.abort) {
                                message = "Aborting [" + evt.id + "] due to Excessive runtime (" + (now - evt.tm) + " ms)";
                                evt.abort(message);
                            }
                            else {
                                message = "Removing [" + evt.id + "] due to Excessive runtime (" + (now - evt.tm) + " ms)";
                            }
                            _warnLog(message);
                            eventQueue.splice(lp, 1);
                            len--;
                        }
                        else {
                            lp++;
                        }
                    }
                }
                function _cleanup(eventId, completed) {
                    var toQueue = false;
                    var removed = _removeQueuedEvent(_running, eventId);
                    if (!removed) {
                        removed = _removeQueuedEvent(_timedOut, eventId);
                        toQueue = true;
                    }
                    if (removed) {
                        if (removed.to) {
                            // If there was a timeout stop it
                            clearTimeout(removed.to);
                            removed.to = null;
                        }
                        // TODO (newylie): Convert this into reportable metrics
                        var tm = _getTime() - removed.tm;
                        if (completed) {
                            if (!toQueue) {
                                _debugLog("Promise [" + eventId + "] Complete -- " + tm + " ms");
                            }
                            else {
                                _warnLog("Timed out event [" + eventId + "] finally complete -- " + tm + " ms");
                            }
                        }
                        else {
                            _timedOut.push(removed);
                            _warnLog("Event [" + eventId + "] Timed out and removed -- " + tm + " ms");
                        }
                    }
                    else {
                        _debugLog("Failed to remove [" + eventId + "] from running queue");
                    }
                    // Also if the last scheduled event was this event then clear it as we are now finished
                    if (_lastEvent && _lastEvent.id === eventId) {
                        _lastEvent = null;
                    }
                    _abortAndRemoveOldEvents(_running);
                    _abortAndRemoveOldEvents(_waiting);
                    _abortAndRemoveOldEvents(_timedOut);
                }
                // Return a callback function that will be called when the waiting promise is resolved or rejected to ensure
                // that any outer promise is also resolved or rejected
                function _removeScheduledEvent(eventId, callback) {
                    return function (value) {
                        _cleanup(eventId, true);
                        callback && callback(value);
                        return value;
                    };
                }
                function _waitForFinalResult(eventId, startResult, schEventResolve, schEventReject) {
                    startResult.then(function (value) {
                        if (value instanceof _ESPromise__WEBPACK_IMPORTED_MODULE_1__["default"]) {
                            // If the result is a promise then this appears to be a chained result, so wait for this promise to complete
                            _debugLog("Event [" + eventId + "] returned a promise -- waiting");
                            _waitForFinalResult(eventId, value, schEventResolve, schEventReject);
                            return value;
                        }
                        else {
                            return _removeScheduledEvent(eventId, schEventResolve)(value);
                        }
                    }, _removeScheduledEvent(eventId, schEventReject));
                }
                // Add the passed event to the active event list with resolve and reject callbacks that will remove
                // it from the active event list
                function _createScheduledEvent(eventDetails, startEvent) {
                    var eventId = eventDetails.id;
                    return new _ESPromise__WEBPACK_IMPORTED_MODULE_1__["default"](function (schEventResolve, schEventReject) {
                        _debugLog("Event [" + eventId + "] Starting -- waited for " + (eventDetails.wTm || "--") + " ms");
                        eventDetails.isRunning = true;
                        eventDetails.abort = function (message) {
                            eventDetails.abort = null;
                            eventDetails.isAborted = true;
                            _cleanup(eventId, false);
                            schEventReject(new Error(message));
                        };
                        var startResult = startEvent(eventId);
                        if (startResult instanceof _ESPromise__WEBPACK_IMPORTED_MODULE_1__["default"]) {
                            if (timeout) {
                                // Note: Only starting a timer if a timeout was specified
                                eventDetails.to = setTimeout(function () {
                                    _cleanup(eventId, false);
                                    // Cause the listeners to reject (Note: We can't actually reject the waiting event)
                                    schEventReject(new Error("Timed out after [" + timeout + "] ms"));
                                }, timeout);
                            }
                            _waitForFinalResult(eventId, startResult, function (theResult) {
                                _debugLog("Event [" + eventId + "] Resolving after " + (_getTime() - eventDetails.tm) + " ms");
                                schEventResolve(theResult);
                            }, schEventReject);
                        }
                        else {
                            // The startEvent didn't return a promise so just return a resolved promise
                            _debugLog("Promise [" + eventId + "] Auto completed as the start action did not return a promise");
                            schEventResolve();
                        }
                    });
                }
                function _startWaitingEvent(eventDetails) {
                    var now = _getTime();
                    eventDetails.wTm = now - eventDetails.tm;
                    eventDetails.tm = now;
                    if (eventDetails.isAborted) {
                        return _ESPromise__WEBPACK_IMPORTED_MODULE_1__["default"].reject(new Error("[" + uniqueId + "] was aborted"));
                    }
                    _running.push(eventDetails);
                    return _createScheduledEvent(eventDetails, startEventAction);
                }
                // Start a new promise which will wait until all current active events are complete before starting
                // the new event, it does not resolve this scheduled event until after the new event is resolve to
                // ensure that all scheduled events are completed in the correct order
                function _waitForPreviousEvent(eventDetails, waitForEvent) {
                    var waitEvent = new _ESPromise__WEBPACK_IMPORTED_MODULE_1__["default"](function (waitResolve, waitReject) {
                        var runTime = _getTime() - waitForEvent.tm;
                        var prevId = waitForEvent.id;
                        _debugLog("[" + uniqueId + "] is waiting for [" + prevId + ":" + runTime + " ms] to complete before starting -- [" + _waiting.length + "] waiting and [" + _running.length + "] running");
                        eventDetails.abort = function (message) {
                            eventDetails.abort = null;
                            _removeQueuedEvent(_waiting, uniqueId);
                            eventDetails.isAborted = true;
                            waitReject(new Error(message));
                        };
                        // Wait for the previous event to complete
                        waitForEvent.evt.then(function (value) {
                            _removeQueuedEvent(_waiting, uniqueId);
                            // Wait for the last event to complete before starting the new one, this ensures the execution
                            // order so that we don't try and remove events that havn't been committed yet
                            _startWaitingEvent(eventDetails).then(waitResolve, waitReject);
                        }, function (reason) {
                            _removeQueuedEvent(_waiting, uniqueId);
                            // Wait for the last event to complete before starting the new one, this ensures the execution
                            // order so that we don't try and remove events that havn't been committed yet
                            _startWaitingEvent(eventDetails).then(waitResolve, waitReject);
                        });
                    });
                    _waiting.push(eventDetails);
                    return waitEvent;
                }
            };
            function _removeQueuedEvent(queue, eventId) {
                for (var lp = 0; lp < queue.length; lp++) {
                    if (queue[lp].id === eventId) {
                        return queue.splice(lp, 1)[0];
                    }
                }
                return null;
            }
        });
        function _debugLog(message) {
            // Only log if running within test harness
            var global = (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_2__.getGlobal)();
            if (global && global["QUnit"]) {
                // tslint:disable-next-line:no-console
                console && console.log("ESPromiseScheduler[" + _scheduledName + "] " + message);
            }
        }
        function _warnLog(message) {
            (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_3__._warnToConsole)(diagLog, "ESPromiseScheduler[" + _scheduledName + "] " + message);
        }
    }
    ESPromiseScheduler.incomplete = function () {
        return _running;
    };
    ESPromiseScheduler.waitingToStart = function () {
        return _waiting;
    };
// Removed Stub for ESPromiseScheduler.prototype.scheduleEvent.
    return ESPromiseScheduler;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ESPromiseScheduler);
//# sourceMappingURL=ESPromiseScheduler.js.map

/***/ }),

/***/ 526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventLatency": () => (/* binding */ EventLatency),
/* harmony export */   "EventPersistence": () => (/* binding */ EventPersistence),
/* harmony export */   "EventPropertyType": () => (/* binding */ EventPropertyType),
/* harmony export */   "TraceLevel": () => (/* binding */ TraceLevel),
/* harmony export */   "ValueKind": () => (/* binding */ ValueKind),
/* harmony export */   "_ExtendedInternalMessageId": () => (/* binding */ _ExtendedInternalMessageId)
/* harmony export */ });
/* harmony import */ var _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(533);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(527);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(528);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(534);
/*
 * 1DS JS SDK Core, 3.2.15
 * Copyright (c) Microsoft and contributors. All rights reserved.
 * (Microsoft Internal Only)
 */
/**
* Enums.ts
* @author Abhilash Panwar (abpanwar)
* @copyright Microsoft 2018
* File containing the enums as constants.
*/


/**
 * The ValueKind contains a set of values that specify value kind of the property.
 * Either PII (Personal Identifiable Information) or customer content.
 */
var ValueKind = (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_0__.createEnumStyle)({
    NotSet: 0 /* eValueKind.NotSet */,
    Pii_DistinguishedName: 1 /* eValueKind.Pii_DistinguishedName */,
    Pii_GenericData: 2 /* eValueKind.Pii_GenericData */,
    Pii_IPV4Address: 3 /* eValueKind.Pii_IPV4Address */,
    Pii_IPv6Address: 4 /* eValueKind.Pii_IPv6Address */,
    Pii_MailSubject: 5 /* eValueKind.Pii_MailSubject */,
    Pii_PhoneNumber: 6 /* eValueKind.Pii_PhoneNumber */,
    Pii_QueryString: 7 /* eValueKind.Pii_QueryString */,
    Pii_SipAddress: 8 /* eValueKind.Pii_SipAddress */,
    Pii_SmtpAddress: 9 /* eValueKind.Pii_SmtpAddress */,
    Pii_Identity: 10 /* eValueKind.Pii_Identity */,
    Pii_Uri: 11 /* eValueKind.Pii_Uri */,
    Pii_Fqdn: 12 /* eValueKind.Pii_Fqdn */,
    Pii_IPV4AddressLegacy: 13 /* eValueKind.Pii_IPV4AddressLegacy */,
    CustomerContent_GenericContent: 32 /* eValueKind.CustomerContent_GenericContent */
});
/**
 * The EventLatency contains a set of values that specify the latency with which an event is sent.
 */
var EventLatency = (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_0__.createEnumStyle)({
    /**
     * Normal latency.
     */
    Normal: 1 /* EventLatencyValue.Normal */,
    /**
     * Cost deferred latency. At the moment this latency is treated as Normal latency.
     */
    CostDeferred: 2 /* EventLatencyValue.CostDeferred */,
    /**
     * Real time latency.
     */
    RealTime: 3 /* EventLatencyValue.RealTime */,
    /**
     * Bypass normal batching/timing and send as soon as possible, this will still send asynchronously.
     * Added in v3.1.1
     */
    Immediate: 4 /* EventLatencyValue.Immediate */
});
/**
 * Enum for property types.
 */
var EventPropertyType = (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_0__.createEnumStyle)({
    Unspecified: 0 /* eEventPropertyType.Unspecified */,
    String: 1 /* eEventPropertyType.String */,
    Int32: 2 /* eEventPropertyType.Int32 */,
    UInt32: 3 /* eEventPropertyType.UInt32 */,
    Int64: 4 /* eEventPropertyType.Int64 */,
    UInt64: 5 /* eEventPropertyType.UInt64 */,
    Double: 6 /* eEventPropertyType.Double */,
    Bool: 7 /* eEventPropertyType.Bool */,
    Guid: 8 /* eEventPropertyType.Guid */,
    DateTime: 9 /* eEventPropertyType.DateTime */
});
/**
 * The EventPersistence contains a set of values that specify the event's persistence.
 */
var EventPersistence = (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_0__.createEnumStyle)({
    /**
     * Normal persistence.
     */
    Normal: 1 /* EventPersistenceValue.Normal */,
    /**
     * Critical persistence.
     */
    Critical: 2 /* EventPersistenceValue.Critical */
});
var TraceLevel = (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_0__.createEnumStyle)({
    NONE: 0 /* eTraceLevel.NONE */,
    ERROR: 1 /* eTraceLevel.ERROR */,
    WARNING: 2 /* eTraceLevel.WARNING */,
    INFORMATION: 3 /* eTraceLevel.INFORMATION */
});
var _ExtendedInternalMessageId = (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_1__.objFreeze)((0,_microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_2__.__assignFn)((0,_microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_2__.__assignFn)({}, _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_3__._InternalMessageId), (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_0__.createEnumStyle)({
    AuthHandShakeError: 501 /* _eExtendedInternalMessageId.AuthHandShakeError */,
    AuthRedirectFail: 502 /* _eExtendedInternalMessageId.AuthRedirectFail */,
    BrowserCannotReadLocalStorage: 503 /* _eExtendedInternalMessageId.BrowserCannotReadLocalStorage */,
    BrowserCannotWriteLocalStorage: 504 /* _eExtendedInternalMessageId.BrowserCannotWriteLocalStorage */,
    BrowserDoesNotSupportLocalStorage: 505 /* _eExtendedInternalMessageId.BrowserDoesNotSupportLocalStorage */,
    CannotParseBiBlobValue: 506 /* _eExtendedInternalMessageId.CannotParseBiBlobValue */,
    CannotParseDataAttribute: 507 /* _eExtendedInternalMessageId.CannotParseDataAttribute */,
    CVPluginNotAvailable: 508 /* _eExtendedInternalMessageId.CVPluginNotAvailable */,
    DroppedEvent: 509 /* _eExtendedInternalMessageId.DroppedEvent */,
    ErrorParsingAISessionCookie: 510 /* _eExtendedInternalMessageId.ErrorParsingAISessionCookie */,
    ErrorProvidedChannels: 511 /* _eExtendedInternalMessageId.ErrorProvidedChannels */,
    FailedToGetCookies: 512 /* _eExtendedInternalMessageId.FailedToGetCookies */,
    FailedToInitializeCorrelationVector: 513 /* _eExtendedInternalMessageId.FailedToInitializeCorrelationVector */,
    FailedToInitializeSDK: 514 /* _eExtendedInternalMessageId.FailedToInitializeSDK */,
    InvalidContentBlob: 515 /* _eExtendedInternalMessageId.InvalidContentBlob */,
    InvalidCorrelationValue: 516 /* _eExtendedInternalMessageId.InvalidCorrelationValue */,
    SessionRenewalDateIsZero: 517 /* _eExtendedInternalMessageId.SessionRenewalDateIsZero */,
    SendPostOnCompleteFailure: 518 /* _eExtendedInternalMessageId.SendPostOnCompleteFailure */,
    PostResponseHandler: 519 /* _eExtendedInternalMessageId.PostResponseHandler */,
    SDKNotInitialized: 520 /* _eExtendedInternalMessageId.SDKNotInitialized */
})));
//# sourceMappingURL=Enums.js.map

/***/ }),

/***/ 525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppInsightsCore": () => (/* reexport safe */ _AppInsightsCore__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "BaseCore": () => (/* reexport safe */ _BaseCore__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "BaseTelemetryPlugin": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_7__.BaseTelemetryPlugin),
/* harmony export */   "CoreUtils": () => (/* reexport safe */ _Utils__WEBPACK_IMPORTED_MODULE_28__.CoreUtils),
/* harmony export */   "DiagnosticLogger": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_11__.DiagnosticLogger),
/* harmony export */   "ESPromise": () => (/* reexport safe */ _ESPromise__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "ESPromiseScheduler": () => (/* reexport safe */ _ESPromiseScheduler__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "EventHelper": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_14__.EventHelper),
/* harmony export */   "EventLatency": () => (/* reexport safe */ _Enums__WEBPACK_IMPORTED_MODULE_0__.EventLatency),
/* harmony export */   "EventPersistence": () => (/* reexport safe */ _Enums__WEBPACK_IMPORTED_MODULE_0__.EventPersistence),
/* harmony export */   "EventPropertyType": () => (/* reexport safe */ _Enums__WEBPACK_IMPORTED_MODULE_0__.EventPropertyType),
/* harmony export */   "EventsDiscardedReason": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_10__.EventsDiscardedReason),
/* harmony export */   "FullVersionString": () => (/* reexport safe */ _Utils__WEBPACK_IMPORTED_MODULE_28__.FullVersionString),
/* harmony export */   "InternalAppInsightsCore": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_15__.AppInsightsCore),
/* harmony export */   "InternalBaseCore": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_16__.BaseCore),
/* harmony export */   "LoggingSeverity": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_12__.LoggingSeverity),
/* harmony export */   "MinChannelPriorty": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_9__.MinChannelPriorty),
/* harmony export */   "NotificationManager": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_6__.NotificationManager),
/* harmony export */   "PerfEvent": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_13__.PerfEvent),
/* harmony export */   "PerfManager": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_13__.PerfManager),
/* harmony export */   "ProcessTelemetryContext": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_8__.ProcessTelemetryContext),
/* harmony export */   "TraceLevel": () => (/* reexport safe */ _Enums__WEBPACK_IMPORTED_MODULE_0__.TraceLevel),
/* harmony export */   "Undefined": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_23__.strShimUndefined),
/* harmony export */   "Utils": () => (/* reexport safe */ _Utils__WEBPACK_IMPORTED_MODULE_28__.Utils),
/* harmony export */   "ValueKind": () => (/* reexport safe */ _Enums__WEBPACK_IMPORTED_MODULE_0__.ValueKind),
/* harmony export */   "ValueSanitizer": () => (/* reexport safe */ _ValueSanitizer__WEBPACK_IMPORTED_MODULE_5__.ValueSanitizer),
/* harmony export */   "Version": () => (/* reexport safe */ _Utils__WEBPACK_IMPORTED_MODULE_28__.Version),
/* harmony export */   "_ExtendedInternalMessageId": () => (/* reexport safe */ _Enums__WEBPACK_IMPORTED_MODULE_0__._ExtendedInternalMessageId),
/* harmony export */   "_InternalLogMessage": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_11__._InternalLogMessage),
/* harmony export */   "_InternalMessageId": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_12__._InternalMessageId),
/* harmony export */   "__getRegisteredEvents": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_19__.__getRegisteredEvents),
/* harmony export */   "_logInternalMessage": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_11__._logInternalMessage),
/* harmony export */   "_throwInternal": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_11__._throwInternal),
/* harmony export */   "_warnToConsole": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_11__._warnToConsole),
/* harmony export */   "addEventHandler": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_19__.addEventHandler),
/* harmony export */   "addEventListeners": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_19__.addEventListeners),
/* harmony export */   "addPageHideEventListener": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_19__.addPageHideEventListener),
/* harmony export */   "addPageShowEventListener": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_19__.addPageShowEventListener),
/* harmony export */   "addPageUnloadEventListener": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_19__.addPageUnloadEventListener),
/* harmony export */   "areCookiesSupported": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_24__.areCookiesSupported),
/* harmony export */   "arrForEach": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.arrForEach),
/* harmony export */   "arrIndexOf": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.arrIndexOf),
/* harmony export */   "arrMap": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.arrMap),
/* harmony export */   "arrReduce": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.arrReduce),
/* harmony export */   "attachEvent": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_19__.attachEvent),
/* harmony export */   "cookieAvailable": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_24__.areCookiesSupported),
/* harmony export */   "createCookieMgr": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_24__.createCookieMgr),
/* harmony export */   "createEnumStyle": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_17__.createEnumStyle),
/* harmony export */   "createGuid": () => (/* reexport safe */ _Utils__WEBPACK_IMPORTED_MODULE_28__.createGuid),
/* harmony export */   "createProcessTelemetryContext": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_8__.createProcessTelemetryContext),
/* harmony export */   "createTraceParent": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_27__.createTraceParent),
/* harmony export */   "createUniqueNamespace": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_25__.createUniqueNamespace),
/* harmony export */   "createUnloadHandlerContainer": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_26__.createUnloadHandlerContainer),
/* harmony export */   "dateNow": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.dateNow),
/* harmony export */   "deleteCookie": () => (/* reexport safe */ _Utils__WEBPACK_IMPORTED_MODULE_28__.deleteCookie),
/* harmony export */   "detachEvent": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_19__.detachEvent),
/* harmony export */   "disableCookies": () => (/* reexport safe */ _Utils__WEBPACK_IMPORTED_MODULE_28__.disableCookies),
/* harmony export */   "disallowsSameSiteNone": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_24__.uaDisallowsSameSiteNone),
/* harmony export */   "doPerf": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_13__.doPerf),
/* harmony export */   "dumpObj": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_22__.dumpObj),
/* harmony export */   "eventOff": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_19__.eventOff),
/* harmony export */   "eventOn": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_19__.eventOn),
/* harmony export */   "extend": () => (/* reexport safe */ _Utils__WEBPACK_IMPORTED_MODULE_28__.extend),
/* harmony export */   "findW3cTraceParent": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_27__.findW3cTraceParent),
/* harmony export */   "formatTraceParent": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_27__.formatTraceParent),
/* harmony export */   "generateW3CId": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_14__.generateW3CId),
/* harmony export */   "getCommonSchemaMetaData": () => (/* reexport safe */ _Utils__WEBPACK_IMPORTED_MODULE_28__.getCommonSchemaMetaData),
/* harmony export */   "getConsole": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_22__.getConsole),
/* harmony export */   "getCookie": () => (/* reexport safe */ _Utils__WEBPACK_IMPORTED_MODULE_28__.getCookie),
/* harmony export */   "getCookieValue": () => (/* reexport safe */ _Utils__WEBPACK_IMPORTED_MODULE_28__.getCookieValue),
/* harmony export */   "getCrypto": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_22__.getCrypto),
/* harmony export */   "getDocument": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_22__.getDocument),
/* harmony export */   "getExceptionName": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.getExceptionName),
/* harmony export */   "getFieldValueType": () => (/* reexport safe */ _Utils__WEBPACK_IMPORTED_MODULE_28__.getFieldValueType),
/* harmony export */   "getGlobal": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_20__.getGlobal),
/* harmony export */   "getGlobalInst": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_22__.getGlobalInst),
/* harmony export */   "getHistory": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_22__.getHistory),
/* harmony export */   "getIEVersion": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_22__.getIEVersion),
/* harmony export */   "getISOString": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.toISOString),
/* harmony export */   "getJSON": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_22__.getJSON),
/* harmony export */   "getLocation": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_22__.getLocation),
/* harmony export */   "getMsCrypto": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_22__.getMsCrypto),
/* harmony export */   "getNavigator": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_22__.getNavigator),
/* harmony export */   "getPerformance": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_22__.getPerformance),
/* harmony export */   "getSetValue": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.getSetValue),
/* harmony export */   "getTenantId": () => (/* reexport safe */ _Utils__WEBPACK_IMPORTED_MODULE_28__.getTenantId),
/* harmony export */   "getTime": () => (/* reexport safe */ _Utils__WEBPACK_IMPORTED_MODULE_28__.getTime),
/* harmony export */   "getWindow": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_22__.getWindow),
/* harmony export */   "hasDocument": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_22__.hasDocument),
/* harmony export */   "hasHistory": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_22__.hasHistory),
/* harmony export */   "hasJSON": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_22__.hasJSON),
/* harmony export */   "hasNavigator": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_22__.hasNavigator),
/* harmony export */   "hasOwnProperty": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.hasOwnProperty),
/* harmony export */   "hasWindow": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_22__.hasWindow),
/* harmony export */   "isArray": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.isArray),
/* harmony export */   "isArrayValid": () => (/* reexport safe */ _Utils__WEBPACK_IMPORTED_MODULE_28__.isArrayValid),
/* harmony export */   "isBeaconsSupported": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_22__.isBeaconsSupported),
/* harmony export */   "isBoolean": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.isBoolean),
/* harmony export */   "isChromium": () => (/* reexport safe */ _Utils__WEBPACK_IMPORTED_MODULE_28__.isChromium),
/* harmony export */   "isDate": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.isDate),
/* harmony export */   "isDocumentObjectAvailable": () => (/* reexport safe */ _Utils__WEBPACK_IMPORTED_MODULE_28__.isDocumentObjectAvailable),
/* harmony export */   "isError": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.isError),
/* harmony export */   "isFetchSupported": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_22__.isFetchSupported),
/* harmony export */   "isFunction": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.isFunction),
/* harmony export */   "isIE": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_22__.isIE),
/* harmony export */   "isLatency": () => (/* reexport safe */ _Utils__WEBPACK_IMPORTED_MODULE_28__.isLatency),
/* harmony export */   "isNotTruthy": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.isNotTruthy),
/* harmony export */   "isNullOrUndefined": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.isNullOrUndefined),
/* harmony export */   "isNumber": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.isNumber),
/* harmony export */   "isObject": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.isObject),
/* harmony export */   "isReactNative": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_22__.isReactNative),
/* harmony export */   "isSampledFlag": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_27__.isSampledFlag),
/* harmony export */   "isString": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.isString),
/* harmony export */   "isTruthy": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.isTruthy),
/* harmony export */   "isTypeof": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.isTypeof),
/* harmony export */   "isUint8ArrayAvailable": () => (/* reexport safe */ _Utils__WEBPACK_IMPORTED_MODULE_28__.isUint8ArrayAvailable),
/* harmony export */   "isUndefined": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.isUndefined),
/* harmony export */   "isValidSpanId": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_27__.isValidSpanId),
/* harmony export */   "isValidTraceId": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_27__.isValidTraceId),
/* harmony export */   "isValidTraceParent": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_27__.isValidTraceParent),
/* harmony export */   "isValueAssigned": () => (/* reexport safe */ _Utils__WEBPACK_IMPORTED_MODULE_28__.isValueAssigned),
/* harmony export */   "isValueKind": () => (/* reexport safe */ _Utils__WEBPACK_IMPORTED_MODULE_28__.isValueKind),
/* harmony export */   "isWindowObjectAvailable": () => (/* reexport safe */ _Utils__WEBPACK_IMPORTED_MODULE_28__.isWindowObjectAvailable),
/* harmony export */   "isXhrSupported": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_22__.isXhrSupported),
/* harmony export */   "mergeEvtNamespace": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_19__.mergeEvtNamespace),
/* harmony export */   "newGuid": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_14__.newGuid),
/* harmony export */   "newId": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_21__.newId),
/* harmony export */   "normalizeJsName": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.normalizeJsName),
/* harmony export */   "objCreate": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_20__.objCreateFn),
/* harmony export */   "objDefineAccessors": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.objDefineAccessors),
/* harmony export */   "objForEachKey": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.objForEachKey),
/* harmony export */   "objFreeze": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.objFreeze),
/* harmony export */   "objKeys": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.objKeys),
/* harmony export */   "objSeal": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.objSeal),
/* harmony export */   "openXhr": () => (/* reexport safe */ _Utils__WEBPACK_IMPORTED_MODULE_28__.openXhr),
/* harmony export */   "optimizeObject": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.optimizeObject),
/* harmony export */   "parseTraceParent": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_27__.parseTraceParent),
/* harmony export */   "perfNow": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_14__.perfNow),
/* harmony export */   "proxyAssign": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.proxyAssign),
/* harmony export */   "proxyFunctionAs": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.proxyFunctionAs),
/* harmony export */   "proxyFunctions": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.proxyFunctions),
/* harmony export */   "random32": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_21__.random32),
/* harmony export */   "randomValue": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_21__.randomValue),
/* harmony export */   "removeEventHandler": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_19__.removeEventHandler),
/* harmony export */   "removeEventListeners": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_19__.removeEventListeners),
/* harmony export */   "removePageHideEventListener": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_19__.removePageHideEventListener),
/* harmony export */   "removePageShowEventListener": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_19__.removePageShowEventListener),
/* harmony export */   "removePageUnloadEventListener": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_19__.removePageUnloadEventListener),
/* harmony export */   "safeGetCookieMgr": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_24__.safeGetCookieMgr),
/* harmony export */   "safeGetLogger": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_11__.safeGetLogger),
/* harmony export */   "sanitizeProperty": () => (/* reexport safe */ _Utils__WEBPACK_IMPORTED_MODULE_28__.sanitizeProperty),
/* harmony export */   "setCookie": () => (/* reexport safe */ _Utils__WEBPACK_IMPORTED_MODULE_28__.setCookie),
/* harmony export */   "setEnableEnvMocks": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_22__.setEnableEnvMocks),
/* harmony export */   "setProcessTelemetryTimings": () => (/* reexport safe */ _Utils__WEBPACK_IMPORTED_MODULE_28__.setProcessTelemetryTimings),
/* harmony export */   "setValue": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.setValue),
/* harmony export */   "strContains": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.strContains),
/* harmony export */   "strEndsWith": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.strEndsWith),
/* harmony export */   "strFunction": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_23__.strShimFunction),
/* harmony export */   "strObject": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_23__.strShimObject),
/* harmony export */   "strPrototype": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_23__.strShimPrototype),
/* harmony export */   "strStartsWith": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.strStartsWith),
/* harmony export */   "strTrim": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.strTrim),
/* harmony export */   "strUndefined": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_23__.strShimUndefined),
/* harmony export */   "throwError": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.throwError),
/* harmony export */   "toISOString": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__.toISOString),
/* harmony export */   "useXDomainRequest": () => (/* reexport safe */ _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_22__.useXDomainRequest)
/* harmony export */ });
/* harmony import */ var _Enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(526);
/* harmony import */ var _AppInsightsCore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(535);
/* harmony import */ var _BaseCore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(558);
/* harmony import */ var _ESPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(559);
/* harmony import */ var _ESPromiseScheduler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(560);
/* harmony import */ var _ValueSanitizer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(561);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(549);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(555);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(551);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(562);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(563);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(537);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(534);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(540);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(544);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(548);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(550);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(527);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(528);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(546);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(532);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(545);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(538);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(529);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(543);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(547);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(556);
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(553);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(542);
/*
 * 1DS JS SDK Core, 3.2.15
 * Copyright (c) Microsoft and contributors. All rights reserved.
 * (Microsoft Internal Only)
 */
/**
 * Index.ts
 * @author Abhilash Panwar (abpanwar)
 * @copyright Microsoft 2018
 * File to export public classes, interfaces and enums.
 */









//# sourceMappingURL=Index.js.map

/***/ }),

/***/ 561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValueSanitizer": () => (/* binding */ ValueSanitizer)
/* harmony export */ });
/* harmony import */ var _microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(528);
/* harmony import */ var _InternalConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(541);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(542);
/*
 * 1DS JS SDK Core, 3.2.15
 * Copyright (c) Microsoft and contributors. All rights reserved.
 * (Microsoft Internal Only)
 */



var ValueSanitizer = /** @class */ (function () {
    function ValueSanitizer(fieldSanitizerProvider) {
        var _self = this;
        // To aid with performance this is a lookup map to check if the field value sanitizer supports this field
        var _sanitizerMap = {};
        var _sanitizers = [];
        var _fieldSanitizers = [];
        if (fieldSanitizerProvider) {
            _fieldSanitizers.push(fieldSanitizerProvider);
        }
        function _getFieldSanitizer(path, name) {
            var result;
            var fieldLookup = _sanitizerMap[path];
            if (fieldLookup) {
                result = fieldLookup[name];
            }
            if (!result && result !== null) {
                // Null is a valid result indicating that the value sanitizer does not support this field
                if ((0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_0__.isString)(path) && (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_0__.isString)(name)) {
                    if (_fieldSanitizers.length > 0) {
                        for (var lp = 0; lp < _fieldSanitizers.length; lp++) {
                            if (_fieldSanitizers[lp].handleField(path, name)) {
                                result = {
                                    canHandle: true,
                                    fieldHandler: _fieldSanitizers[lp]
                                };
                                break;
                            }
                        }
                    }
                    else if (_sanitizers.length === 0) {
                        // Special use-case where there is no sanitizer to pass on to, so just resolving the field
                        // and returning the resulting value (same as sanitizeProperty())
                        result = {
                            canHandle: true
                        };
                    }
                }
                // We still don't have a handler so lets lookup the providers
                if (!result && result !== null) {
                    // Setting the result to null -- which means we and any contained sanitizers can't handle this field
                    result = null;
                    for (var lp = 0; lp < _sanitizers.length; lp++) {
                        if (_sanitizers[lp].handleField(path, name)) {
                            result = {
                                canHandle: true,
                                handler: _sanitizers[lp],
                                fieldHandler: null
                            };
                            break;
                        }
                    }
                }
                if (!fieldLookup) {
                    fieldLookup = _sanitizerMap[path] = {};
                }
                fieldLookup[name] = result;
            }
            return result;
        }
        _self.addSanitizer = function (newSanitizer) {
            if (newSanitizer) {
                _sanitizers.push(newSanitizer);
                // Invalidate any previously mapped fields
                _sanitizerMap = {};
            }
        };
        _self.addFieldSanitizer = function (fieldSanitizer) {
            if (fieldSanitizer) {
                _fieldSanitizers.push(fieldSanitizer);
                // Invalidate any previously mapped fields
                _sanitizerMap = {};
            }
        };
        _self.handleField = function (path, name) {
            var mapValue = _getFieldSanitizer(path, name);
            return mapValue ? mapValue.canHandle : false;
        };
        _self.value = function (path, name, value, stringifyObjects) {
            var mapValue = _getFieldSanitizer(path, name);
            if (mapValue && mapValue.canHandle) {
                if (!mapValue || !mapValue.canHandle) {
                    return null;
                }
                if (mapValue.handler) {
                    // This value sanitizer can't handle this field so pass it only the next one
                    return mapValue.handler.value(path, name, value, stringifyObjects);
                }
                // Check that property is valid
                if (!(0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_0__.isString)(name) || (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(value) || value === _InternalConstants__WEBPACK_IMPORTED_MODULE_1__.STR_EMPTY) {
                    return null;
                }
                var property = null;
                var fieldType = (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.getFieldValueType)(value);
                if ((fieldType & 8192 /* FieldValueSanitizerType.EventProperty */) === 8192 /* FieldValueSanitizerType.EventProperty */) {
                    var subType = fieldType & ~8192 /* FieldValueSanitizerType.EventProperty */;
                    property = value;
                    if (!(0,_Utils__WEBPACK_IMPORTED_MODULE_2__.isValueAssigned)(property.value) ||
                        (subType !== 1 /* FieldValueSanitizerType.String */ &&
                            subType !== 2 /* FieldValueSanitizerType.Number */ &&
                            subType !== 3 /* FieldValueSanitizerType.Boolean */ &&
                            (subType & 4096 /* FieldValueSanitizerType.Array */) !== 4096 /* FieldValueSanitizerType.Array */)) {
                        // Not a supported IEventProperty type to be able to sanitize
                        return null;
                    }
                }
                else if (fieldType === 1 /* FieldValueSanitizerType.String */ ||
                    fieldType === 2 /* FieldValueSanitizerType.Number */ ||
                    fieldType === 3 /* FieldValueSanitizerType.Boolean */ ||
                    (fieldType & 4096 /* FieldValueSanitizerType.Array */) === 4096 /* FieldValueSanitizerType.Array */) {
                    // If the property isn't IEventProperty (and is either string, number, boolean or array), convert it into one.
                    property = _convertToProperty(path, name, value);
                }
                else if (fieldType === 4 /* FieldValueSanitizerType.Object */) {
                    property = _convertToProperty(path, name, !!stringifyObjects ? JSON.stringify(value) : value);
                }
                if (property) {
                    return _handleProperty(mapValue, path, name, fieldType, property, stringifyObjects);
                }
            }
            return null;
        };
        _self.property = function (path, name, property, stringifyObjects) {
            var mapValue = _getFieldSanitizer(path, name);
            if (!mapValue || !mapValue.canHandle) {
                return null;
            }
            // Check that property is valid
            if (!(0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_0__.isString)(name) || (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(property) || !(0,_Utils__WEBPACK_IMPORTED_MODULE_2__.isValueAssigned)(property.value)) {
                return null;
            }
            var fieldType = (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.getFieldValueType)(property.value);
            if (fieldType === 0 /* FieldValueSanitizerType.NotSet */) {
                // Not a supported field that we can sanitize or serialize
                return null;
            }
            return _handleProperty(mapValue, path, name, fieldType, property, stringifyObjects);
        };
        function _handleProperty(mapValue, path, name, fieldType, property, stringifyObjects) {
            if (mapValue.handler) {
                // This value sanitizer can't handle this field so pass it only the next one
                return mapValue.handler.property(path, name, property, stringifyObjects);
            }
            // If either pii or cc is set convert value to string (since only string pii/cc is allowed).
            // If the value is a complex type like an array that can't be converted to string we will drop
            // the property.
            if (!(0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndefined)(property.kind)) {
                if ((fieldType & 4096 /* FieldValueSanitizerType.Array */) === 4096 /* FieldValueSanitizerType.Array */ || !(0,_Utils__WEBPACK_IMPORTED_MODULE_2__.isValueKind)(property.kind)) {
                    return null;
                }
                // Convert the value to a string and assign back to the original value
                property.value = property.value.toString();
            }
            return _callFieldSanitizer(mapValue.fieldHandler, path, name, fieldType, property);
        }
        function _convertToProperty(path, name, value) {
            if ((0,_Utils__WEBPACK_IMPORTED_MODULE_2__.isValueAssigned)(value)) {
                return { value: value };
            }
            return null;
        }
        function _callFieldSanitizer(fieldProvider, path, name, theType, property) {
            if (property && fieldProvider) {
                var sanitizer = fieldProvider.getSanitizer(path, name, theType, property.kind, property.propertyType);
                if (sanitizer) {
                    // This is where we the field will call the handler to "scrub" the value. This the primary hook for the ClientHashing Plugin to
                    // be able to apply the hashFunc() / Sha256 conversion of the properties value
                    if (theType === 4 /* FieldValueSanitizerType.Object */) {
                        // Special case of an embedded object (ext.metadata, data.properties)
                        var newValue_1 = {};
                        var propValue = property.value;
                        (0,_microsoft_applicationinsights_core_js__WEBPACK_IMPORTED_MODULE_0__.objForEachKey)(propValue, function (propKey, theValue) {
                            var newPath = path + "." + name;
                            if ((0,_Utils__WEBPACK_IMPORTED_MODULE_2__.isValueAssigned)(theValue)) {
                                var newProp = _convertToProperty(newPath, propKey, theValue);
                                newProp = _callFieldSanitizer(fieldProvider, newPath, propKey, (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.getFieldValueType)(theValue), newProp);
                                if (newProp) {
                                    newValue_1[propKey] = newProp.value;
                                }
                            }
                        });
                        property.value = newValue_1;
                    }
                    else {
                        var details = {
                            path: path,
                            name: name,
                            type: theType,
                            prop: property,
                            sanitizer: _self
                        };
                        property = sanitizer.call(_self, details);
                    }
                }
            }
            return property;
        }
    }
    ValueSanitizer.getFieldType = _Utils__WEBPACK_IMPORTED_MODULE_2__.getFieldValueType;
    return ValueSanitizer;
}());

//# sourceMappingURL=ValueSanitizer.js.map

/***/ }),

/***/ 534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoggingSeverity": () => (/* binding */ LoggingSeverity),
/* harmony export */   "_InternalMessageId": () => (/* binding */ _InternalMessageId)
/* harmony export */ });
/* harmony import */ var _JavaScriptSDK_Enums_EnumHelperFuncs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(527);
/*
 * Application Insights JavaScript SDK - Core, 2.8.16
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */


//  @skip-file-minify
var _a;

var FAILED = "Failed";
var FAILED_MONITOR_AJAX = FAILED + "MonitorAjax";
var TRACK = "Track";
var START = "Start";
var STOP = "Stop";
var EVENT = "Event";
var AUTH_CONTEXT = "AuthContext";
var EXCEPTION = "Exception";
var LOCAL = "Local";
var SESSION = "Session";
var STORAGE = "Storage";
var BROWSER = "Browser";
var CANNOT = "Cannot";
var BUFFER = "Buffer";
var INSTRUMENTATION_KEY = "InstrumentationKey";
var LoggingSeverity = (0,_JavaScriptSDK_Enums_EnumHelperFuncs__WEBPACK_IMPORTED_MODULE_0__.createEnumStyle)({
    CRITICAL: 1 /* eLoggingSeverity.CRITICAL */,
    WARNING: 2 /* eLoggingSeverity.WARNING */
});
/**
 * Internal message ID. Please create a new one for every conceptually different message. Please keep alphabetically ordered
 */
var _InternalMessageId = (0,_JavaScriptSDK_Enums_EnumHelperFuncs__WEBPACK_IMPORTED_MODULE_0__.createEnumStyle)((_a = {},
    // Non user actionable
    _a[BROWSER + "DoesNotSupport" + LOCAL + STORAGE] = 0 /* _eInternalMessageId.BrowserDoesNotSupportLocalStorage */,
    _a[BROWSER + CANNOT + "Read" + LOCAL + STORAGE] = 1 /* _eInternalMessageId.BrowserCannotReadLocalStorage */,
    _a[BROWSER + CANNOT + "Read" + SESSION + STORAGE] = 2 /* _eInternalMessageId.BrowserCannotReadSessionStorage */,
    _a[BROWSER + CANNOT + "Write" + LOCAL + STORAGE] = 3 /* _eInternalMessageId.BrowserCannotWriteLocalStorage */,
    _a[BROWSER + CANNOT + "Write" + SESSION + STORAGE] = 4 /* _eInternalMessageId.BrowserCannotWriteSessionStorage */,
    _a[BROWSER + FAILED + "RemovalFrom" + LOCAL + STORAGE] = 5 /* _eInternalMessageId.BrowserFailedRemovalFromLocalStorage */,
    _a[BROWSER + FAILED + "RemovalFrom" + SESSION + STORAGE] = 6 /* _eInternalMessageId.BrowserFailedRemovalFromSessionStorage */,
    _a[CANNOT + "SendEmptyTelemetry"] = 7 /* _eInternalMessageId.CannotSendEmptyTelemetry */,
    _a.ClientPerformanceMathError = 8 /* _eInternalMessageId.ClientPerformanceMathError */,
    _a["ErrorParsingAI" + SESSION + "Cookie"] = 9 /* _eInternalMessageId.ErrorParsingAISessionCookie */,
    _a.ErrorPVCalc = 10 /* _eInternalMessageId.ErrorPVCalc */,
    _a[EXCEPTION + "WhileLoggingError"] = 11 /* _eInternalMessageId.ExceptionWhileLoggingError */,
    _a[FAILED + "AddingTelemetryTo" + BUFFER] = 12 /* _eInternalMessageId.FailedAddingTelemetryToBuffer */,
    _a[FAILED_MONITOR_AJAX + "Abort"] = 13 /* _eInternalMessageId.FailedMonitorAjaxAbort */,
    _a[FAILED_MONITOR_AJAX + "Dur"] = 14 /* _eInternalMessageId.FailedMonitorAjaxDur */,
    _a[FAILED_MONITOR_AJAX + "Open"] = 15 /* _eInternalMessageId.FailedMonitorAjaxOpen */,
    _a[FAILED_MONITOR_AJAX + "RSC"] = 16 /* _eInternalMessageId.FailedMonitorAjaxRSC */,
    _a[FAILED_MONITOR_AJAX + "Send"] = 17 /* _eInternalMessageId.FailedMonitorAjaxSend */,
    _a[FAILED_MONITOR_AJAX + "GetCorrelationHeader"] = 18 /* _eInternalMessageId.FailedMonitorAjaxGetCorrelationHeader */,
    _a[FAILED + "ToAddHandlerForOnBeforeUnload"] = 19 /* _eInternalMessageId.FailedToAddHandlerForOnBeforeUnload */,
    _a[FAILED + "ToSendQueuedTelemetry"] = 20 /* _eInternalMessageId.FailedToSendQueuedTelemetry */,
    _a[FAILED + "ToReportDataLoss"] = 21 /* _eInternalMessageId.FailedToReportDataLoss */,
    _a["Flush" + FAILED] = 22 /* _eInternalMessageId.FlushFailed */,
    _a.MessageLimitPerPVExceeded = 23 /* _eInternalMessageId.MessageLimitPerPVExceeded */,
    _a.MissingRequiredFieldSpecification = 24 /* _eInternalMessageId.MissingRequiredFieldSpecification */,
    _a.NavigationTimingNotSupported = 25 /* _eInternalMessageId.NavigationTimingNotSupported */,
    _a.OnError = 26 /* _eInternalMessageId.OnError */,
    _a[SESSION + "RenewalDateIsZero"] = 27 /* _eInternalMessageId.SessionRenewalDateIsZero */,
    _a.SenderNotInitialized = 28 /* _eInternalMessageId.SenderNotInitialized */,
    _a[START + TRACK + EVENT + FAILED] = 29 /* _eInternalMessageId.StartTrackEventFailed */,
    _a[STOP + TRACK + EVENT + FAILED] = 30 /* _eInternalMessageId.StopTrackEventFailed */,
    _a[START + TRACK + FAILED] = 31 /* _eInternalMessageId.StartTrackFailed */,
    _a[STOP + TRACK + FAILED] = 32 /* _eInternalMessageId.StopTrackFailed */,
    _a.TelemetrySampledAndNotSent = 33 /* _eInternalMessageId.TelemetrySampledAndNotSent */,
    _a[TRACK + EVENT + FAILED] = 34 /* _eInternalMessageId.TrackEventFailed */,
    _a[TRACK + EXCEPTION + FAILED] = 35 /* _eInternalMessageId.TrackExceptionFailed */,
    _a[TRACK + "Metric" + FAILED] = 36 /* _eInternalMessageId.TrackMetricFailed */,
    _a[TRACK + "PV" + FAILED] = 37 /* _eInternalMessageId.TrackPVFailed */,
    _a[TRACK + "PV" + FAILED + "Calc"] = 38 /* _eInternalMessageId.TrackPVFailedCalc */,
    _a[TRACK + "Trace" + FAILED] = 39 /* _eInternalMessageId.TrackTraceFailed */,
    _a["Transmission" + FAILED] = 40 /* _eInternalMessageId.TransmissionFailed */,
    _a[FAILED + "ToSet" + STORAGE + BUFFER] = 41 /* _eInternalMessageId.FailedToSetStorageBuffer */,
    _a[FAILED + "ToRestore" + STORAGE + BUFFER] = 42 /* _eInternalMessageId.FailedToRestoreStorageBuffer */,
    _a.InvalidBackendResponse = 43 /* _eInternalMessageId.InvalidBackendResponse */,
    _a[FAILED + "ToFixDepricatedValues"] = 44 /* _eInternalMessageId.FailedToFixDepricatedValues */,
    _a.InvalidDurationValue = 45 /* _eInternalMessageId.InvalidDurationValue */,
    _a.TelemetryEnvelopeInvalid = 46 /* _eInternalMessageId.TelemetryEnvelopeInvalid */,
    _a.CreateEnvelopeError = 47 /* _eInternalMessageId.CreateEnvelopeError */,
    // User actionable
    _a[CANNOT + "SerializeObject"] = 48 /* _eInternalMessageId.CannotSerializeObject */,
    _a[CANNOT + "SerializeObjectNonSerializable"] = 49 /* _eInternalMessageId.CannotSerializeObjectNonSerializable */,
    _a.CircularReferenceDetected = 50 /* _eInternalMessageId.CircularReferenceDetected */,
    _a["Clear" + AUTH_CONTEXT + FAILED] = 51 /* _eInternalMessageId.ClearAuthContextFailed */,
    _a[EXCEPTION + "Truncated"] = 52 /* _eInternalMessageId.ExceptionTruncated */,
    _a.IllegalCharsInName = 53 /* _eInternalMessageId.IllegalCharsInName */,
    _a.ItemNotInArray = 54 /* _eInternalMessageId.ItemNotInArray */,
    _a.MaxAjaxPerPVExceeded = 55 /* _eInternalMessageId.MaxAjaxPerPVExceeded */,
    _a.MessageTruncated = 56 /* _eInternalMessageId.MessageTruncated */,
    _a.NameTooLong = 57 /* _eInternalMessageId.NameTooLong */,
    _a.SampleRateOutOfRange = 58 /* _eInternalMessageId.SampleRateOutOfRange */,
    _a["Set" + AUTH_CONTEXT + FAILED] = 59 /* _eInternalMessageId.SetAuthContextFailed */,
    _a["Set" + AUTH_CONTEXT + FAILED + "AccountName"] = 60 /* _eInternalMessageId.SetAuthContextFailedAccountName */,
    _a.StringValueTooLong = 61 /* _eInternalMessageId.StringValueTooLong */,
    _a.StartCalledMoreThanOnce = 62 /* _eInternalMessageId.StartCalledMoreThanOnce */,
    _a.StopCalledWithoutStart = 63 /* _eInternalMessageId.StopCalledWithoutStart */,
    _a["TelemetryInitializer" + FAILED] = 64 /* _eInternalMessageId.TelemetryInitializerFailed */,
    _a.TrackArgumentsNotSpecified = 65 /* _eInternalMessageId.TrackArgumentsNotSpecified */,
    _a.UrlTooLong = 66 /* _eInternalMessageId.UrlTooLong */,
    _a[SESSION + STORAGE + BUFFER + "Full"] = 67 /* _eInternalMessageId.SessionStorageBufferFull */,
    _a[CANNOT + "AccessCookie"] = 68 /* _eInternalMessageId.CannotAccessCookie */,
    _a.IdTooLong = 69 /* _eInternalMessageId.IdTooLong */,
    _a.InvalidEvent = 70 /* _eInternalMessageId.InvalidEvent */,
    _a[FAILED_MONITOR_AJAX + "SetRequestHeader"] = 71 /* _eInternalMessageId.FailedMonitorAjaxSetRequestHeader */,
    _a["Send" + BROWSER + "InfoOnUserInit"] = 72 /* _eInternalMessageId.SendBrowserInfoOnUserInit */,
    _a["Plugin" + EXCEPTION] = 73 /* _eInternalMessageId.PluginException */,
    _a["Notification" + EXCEPTION] = 74 /* _eInternalMessageId.NotificationException */,
    _a.SnippetScriptLoadFailure = 99 /* _eInternalMessageId.SnippetScriptLoadFailure */,
    _a["Invalid" + INSTRUMENTATION_KEY] = 100 /* _eInternalMessageId.InvalidInstrumentationKey */,
    _a[CANNOT + "ParseAiBlobValue"] = 101 /* _eInternalMessageId.CannotParseAiBlobValue */,
    _a.InvalidContentBlob = 102 /* _eInternalMessageId.InvalidContentBlob */,
    _a[TRACK + "PageAction" + EVENT + FAILED] = 103 /* _eInternalMessageId.TrackPageActionEventFailed */,
    _a[FAILED + "AddingCustomDefinedRequestContext"] = 104 /* _eInternalMessageId.FailedAddingCustomDefinedRequestContext */,
    _a["InMemory" + STORAGE + BUFFER + "Full"] = 105 /* _eInternalMessageId.InMemoryStorageBufferFull */,
    _a[INSTRUMENTATION_KEY + "Deprecation"] = 106 /* _eInternalMessageId.InstrumentationKeyDeprecation */,
    _a));
//# sourceMappingURL=LoggingEnums.js.map

/***/ }),

/***/ 562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MinChannelPriorty": () => (/* binding */ MinChannelPriorty)
/* harmony export */ });
/*
 * Application Insights JavaScript SDK - Core, 2.8.16
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */

var MinChannelPriorty = 100;
//# sourceMappingURL=IChannelControls.js.map

/***/ }),

/***/ 548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppInsightsCore": () => (/* binding */ AppInsightsCore)
/* harmony export */ });
/* harmony import */ var _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(533);
/* harmony import */ var _microsoft_dynamicproto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(536);
/* harmony import */ var _DynamicConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(530);
/* harmony import */ var _BaseCore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(550);
/* harmony import */ var _DiagnosticLogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(537);
/* harmony import */ var _HelperFuncs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(528);
/* harmony import */ var _InternalConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(531);
/* harmony import */ var _NotificationManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(549);
/* harmony import */ var _PerfManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(540);
/*
 * Application Insights JavaScript SDK - Core, 2.8.16
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */











var AppInsightsCore = /** @class */ (function (_super) {
    (0,_microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.__extendsFn)(AppInsightsCore, _super);
    function AppInsightsCore() {
        var _this = _super.call(this) || this;
        (0,_microsoft_dynamicproto_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AppInsightsCore, _this, function (_self, _base) {
            _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_INITIALIZE /* @min:%2einitialize */] = function (config, extensions, logger, notificationManager) {
                _base[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_INITIALIZE /* @min:%2einitialize */](config, extensions, logger || new _DiagnosticLogger__WEBPACK_IMPORTED_MODULE_3__.DiagnosticLogger(config), notificationManager || new _NotificationManager__WEBPACK_IMPORTED_MODULE_4__.NotificationManager(config));
            };
            _self.track = function (telemetryItem) {
                (0,_PerfManager__WEBPACK_IMPORTED_MODULE_5__.doPerf)(_self[_InternalConstants__WEBPACK_IMPORTED_MODULE_6__.STR_GET_PERF_MGR /* @min:%2egetPerfMgr */](), function () { return "AppInsightsCore:track"; }, function () {
                    if (telemetryItem === null) {
                        _notifyInvalidEvent(telemetryItem);
                        // throw error
                        (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_7__.throwError)("Invalid telemetry item");
                    }
                    // do basic validation before sending it through the pipeline
                    _validateTelemetryItem(telemetryItem);
                    _base.track(telemetryItem);
                }, function () { return ({ item: telemetryItem }); }, !(telemetryItem.sync));
            };
            function _validateTelemetryItem(telemetryItem) {
                if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_7__.isNullOrUndefined)(telemetryItem[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_NAME /* @min:%2ename */])) {
                    _notifyInvalidEvent(telemetryItem);
                    (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_7__.throwError)("telemetry name required");
                }
            }
            function _notifyInvalidEvent(telemetryItem) {
                var manager = _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_GET_NOTIFY_MGR /* @min:%2egetNotifyMgr */]();
                if (manager) {
                    manager[_InternalConstants__WEBPACK_IMPORTED_MODULE_6__.STR_EVENTS_DISCARDED /* @min:%2eeventsDiscarded */]([telemetryItem], 2 /* eEventsDiscardedReason.InvalidEvent */);
                }
            }
        });
        return _this;
    }
// Removed Stub for AppInsightsCore.prototype.initialize.
// Removed Stub for AppInsightsCore.prototype.track.
    // This is a workaround for an IE8 bug when using dynamicProto() with classes that don't have any
    // non-dynamic functions or static properties/functions when using uglify-js to minify the resulting code.
    // this will be removed when ES3 support is dropped.
    AppInsightsCore.__ieDyn=1;

    return AppInsightsCore;
}(_BaseCore__WEBPACK_IMPORTED_MODULE_8__.BaseCore));

//# sourceMappingURL=AppInsightsCore.js.map

/***/ }),

/***/ 550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseCore": () => (/* binding */ BaseCore)
/* harmony export */ });
/* harmony import */ var _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(533);
/* harmony import */ var _microsoft_dynamicproto_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(536);
/* harmony import */ var _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(532);
/* harmony import */ var _DynamicConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(530);
/* harmony import */ var _ChannelController__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(557);
/* harmony import */ var _CookieMgr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(543);
/* harmony import */ var _DataCacheHelper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(547);
/* harmony import */ var _DbgExtensionUtils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(539);
/* harmony import */ var _DiagnosticLogger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(537);
/* harmony import */ var _HelperFuncs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(528);
/* harmony import */ var _InternalConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(531);
/* harmony import */ var _PerfManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(540);
/* harmony import */ var _ProcessTelemetryContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(551);
/* harmony import */ var _TelemetryHelpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(552);
/* harmony import */ var _TelemetryInitializerPlugin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(554);
/* harmony import */ var _UnloadHandlerContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(556);
/*
 * Application Insights JavaScript SDK - Core, 2.8.16
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */



















var strValidationError = "Plugins must provide initialize method";
var strNotificationManager = "_notificationManager";
var strSdkUnloadingError = "SDK is still unloading...";
var strSdkNotInitialized = "SDK is not initialized";
// const strPluginUnloadFailed = "Failed to unload plugin";
var defaultInitConfig = {
    // Have the Diagnostic Logger default to log critical errors to the console
    loggingLevelConsole: 1 /* eLoggingSeverity.CRITICAL */
};
/**
 * Helper to create the default performance manager
 * @param core
 * @param notificationMgr
 */
function _createPerfManager(core, notificationMgr) {
    return new _PerfManager__WEBPACK_IMPORTED_MODULE_0__.PerfManager(notificationMgr);
}
function _validateExtensions(logger, channelPriority, allExtensions) {
    var _a;
    // Concat all available extensions
    var coreExtensions = [];
    // Check if any two extensions have the same priority, then warn to console
    // And extract the local extensions from the
    var extPriorities = {};
    // Extension validation
    (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.arrForEach)(allExtensions, function (ext) {
        // Check for ext.initialize
        if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(ext) || (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(ext[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_INITIALIZE /* @min:%2einitialize */])) {
            (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.throwError)(strValidationError);
        }
        var extPriority = ext[_InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_PRIORITY /* @min:%2epriority */];
        var identifier = ext[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_IDENTIFIER /* @min:%2eidentifier */];
        if (ext && extPriority) {
            if (!(0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(extPriorities[extPriority])) {
                (0,_DiagnosticLogger__WEBPACK_IMPORTED_MODULE_4__._warnToConsole)(logger, "Two extensions have same priority #" + extPriority + " - " + extPriorities[extPriority] + ", " + identifier);
            }
            else {
                // set a value
                extPriorities[extPriority] = identifier;
            }
        }
        // Split extensions to core and channelController
        if (!extPriority || extPriority < channelPriority) {
            // Add to core extension that will be managed by BaseCore
            coreExtensions[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_PUSH /* @min:%2epush */](ext);
        }
    });
    return _a = {
            all: allExtensions
        },
        _a[_InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_CORE /* @min:core */] = coreExtensions,
        _a;
}
function _isPluginPresent(thePlugin, plugins) {
    var exists = false;
    (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.arrForEach)(plugins, function (plugin) {
        if (plugin === thePlugin) {
            exists = true;
            return -1;
        }
    });
    return exists;
}
function _createDummyNotificationManager() {
    var _a;
    return (0,_microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_5__.objCreateFn)((_a = {},
        _a[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_ADD_NOTIFICATION_LIS1 /* @min:addNotificationListener */] = function (listener) { },
        _a[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_REMOVE_NOTIFICATION_2 /* @min:removeNotificationListener */] = function (listener) { },
        _a[_InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_EVENTS_SENT /* @min:eventsSent */] = function (events) { },
        _a[_InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_EVENTS_DISCARDED /* @min:eventsDiscarded */] = function (events, reason) { },
        _a[_InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_EVENTS_SEND_REQUEST /* @min:eventsSendRequest */] = function (sendReason, isAsync) { },
        _a));
}
var BaseCore = /** @class */ (function () {
    function BaseCore() {
        // NOTE!: DON'T set default values here, instead set them in the _initDefaults() function as it is also called during teardown()
        var _config;
        var _isInitialized;
        var _eventQueue;
        var _notificationManager;
        var _perfManager;
        var _cfgPerfManager;
        var _cookieManager;
        var _pluginChain;
        var _configExtensions;
        var _coreExtensions;
        var _channelControl;
        var _channelConfig;
        var _channelQueue;
        var _isUnloading;
        var _telemetryInitializerPlugin;
        var _internalLogsEventName;
        var _evtNamespace;
        var _unloadHandlers;
        var _debugListener;
        var _traceCtx;
        /**
         * Internal log poller
         */
        var _internalLogPoller = 0;
        var _forceStopInternalLogPoller = false;
        (0,_microsoft_dynamicproto_js__WEBPACK_IMPORTED_MODULE_6__["default"])(BaseCore, this, function (_self) {
            // Set the default values (also called during teardown)
            _initDefaults();
            _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_IS_INITIALIZED /* @min:%2eisInitialized */] = function () { return _isInitialized; };
            // Creating the self.initialize = ()
            _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_INITIALIZE /* @min:%2einitialize */] = function (config, extensions, logger, notificationManager) {
                if (_isUnloading) {
                    (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.throwError)(strSdkUnloadingError);
                }
                // Make sure core is only initialized once
                if (_self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_IS_INITIALIZED /* @min:%2eisInitialized */]()) {
                    (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.throwError)("Core should not be initialized more than once");
                }
                _config = config || {};
                _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_CONFIG /* @min:%2econfig */] = _config;
                if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(config[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_INSTRUMENTATION_KEY /* @min:%2einstrumentationKey */])) {
                    (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.throwError)("Please provide instrumentation key");
                }
                _notificationManager = notificationManager;
                // For backward compatibility only
                _self[strNotificationManager] = notificationManager;
                _initDebugListener();
                _initPerfManager();
                // add notification to the extensions in the config so other plugins can access it
                _initExtConfig();
                if (logger) {
                    _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_LOGGER /* @min:%2elogger */] = logger;
                }
                var cfgExtensions = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.getSetValue)(_config, _InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_EXTENSIONS, []);
                // Extension validation
                _configExtensions = [];
                _configExtensions[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_PUSH /* @min:%2epush */].apply(_configExtensions, (0,_microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_7__.__spreadArrayFn)((0,_microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_7__.__spreadArrayFn)([], extensions, false), cfgExtensions, false));
                _channelConfig = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.getSetValue)(_config, _InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_CHANNELS, []);
                _initPluginChain(null);
                if (!_channelQueue || _channelQueue[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_LENGTH /* @min:%2elength */] === 0) {
                    (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.throwError)("No " + _InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_CHANNELS + " available");
                }
                _isInitialized = true;
                _self.releaseQueue();
            };
            _self.getTransmissionControls = function () {
                var controls = [];
                if (_channelQueue) {
                    (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.arrForEach)(_channelQueue, function (channels) {
                        controls[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_PUSH /* @min:%2epush */](channels.queue);
                    });
                }
                return (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.objFreeze)(controls);
            };
            _self.track = function (telemetryItem) {
                // setup default iKey if not passed in
                telemetryItem.iKey = telemetryItem.iKey || _config[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_INSTRUMENTATION_KEY /* @min:%2einstrumentationKey */];
                // add default timestamp if not passed in
                telemetryItem[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_TIME /* @min:%2etime */] = telemetryItem[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_TIME /* @min:%2etime */] || (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.toISOString)(new Date());
                // Common Schema 4.0
                telemetryItem.ver = telemetryItem.ver || "4.0";
                if (!_isUnloading && _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_IS_INITIALIZED /* @min:%2eisInitialized */]()) {
                    // Process the telemetry plugin chain
                    _createTelCtx()[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_PROCESS_NEXT /* @min:%2eprocessNext */](telemetryItem);
                }
                else {
                    // Queue events until all extensions are initialized
                    _eventQueue[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_PUSH /* @min:%2epush */](telemetryItem);
                }
            };
            _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_GET_PROCESS_TEL_CONT0 /* @min:%2egetProcessTelContext */] = _createTelCtx;
            _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_GET_NOTIFY_MGR /* @min:%2egetNotifyMgr */] = function () {
                if (!_notificationManager) {
                    // Create Dummy notification manager
                    _notificationManager = _createDummyNotificationManager();
                    // For backward compatibility only
                    _self[strNotificationManager] = _notificationManager;
                }
                return _notificationManager;
            };
            /**
             * Adds a notification listener. The SDK calls methods on the listener when an appropriate notification is raised.
             * The added plugins must raise notifications. If the plugins do not implement the notifications, then no methods will be
             * called.
             * @param {INotificationListener} listener - An INotificationListener object.
             */
            _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_ADD_NOTIFICATION_LIS1 /* @min:%2eaddNotificationListener */] = function (listener) {
                if (_notificationManager) {
                    _notificationManager[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_ADD_NOTIFICATION_LIS1 /* @min:%2eaddNotificationListener */](listener);
                }
            };
            /**
             * Removes all instances of the listener.
             * @param {INotificationListener} listener - INotificationListener to remove.
             */
            _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_REMOVE_NOTIFICATION_2 /* @min:%2eremoveNotificationListener */] = function (listener) {
                if (_notificationManager) {
                    _notificationManager[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_REMOVE_NOTIFICATION_2 /* @min:%2eremoveNotificationListener */](listener);
                }
            };
            _self.getCookieMgr = function () {
                if (!_cookieManager) {
                    _cookieManager = (0,_CookieMgr__WEBPACK_IMPORTED_MODULE_8__.createCookieMgr)(_config, _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_LOGGER /* @min:%2elogger */]);
                }
                return _cookieManager;
            };
            _self.setCookieMgr = function (cookieMgr) {
                _cookieManager = cookieMgr;
            };
            _self[_InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_GET_PERF_MGR /* @min:%2egetPerfMgr */] = function () {
                if (!_perfManager && !_cfgPerfManager) {
                    if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.getCfgValue)(_config.enablePerfMgr)) {
                        var createPerfMgr = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.getCfgValue)(_config[_InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_CREATE_PERF_MGR /* @min:%2ecreatePerfMgr */]);
                        if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.isFunction)(createPerfMgr)) {
                            _cfgPerfManager = createPerfMgr(_self, _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_GET_NOTIFY_MGR /* @min:%2egetNotifyMgr */]());
                        }
                    }
                }
                return _perfManager || _cfgPerfManager || (0,_PerfManager__WEBPACK_IMPORTED_MODULE_0__.getGblPerfMgr)();
            };
            _self.setPerfMgr = function (perfMgr) {
                _perfManager = perfMgr;
            };
            _self.eventCnt = function () {
                return _eventQueue[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_LENGTH /* @min:%2elength */];
            };
            _self.releaseQueue = function () {
                if (_isInitialized && _eventQueue[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_LENGTH /* @min:%2elength */] > 0) {
                    var eventQueue = _eventQueue;
                    _eventQueue = [];
                    (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.arrForEach)(eventQueue, function (event) {
                        _createTelCtx()[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_PROCESS_NEXT /* @min:%2eprocessNext */](event);
                    });
                }
            };
            _self.pollInternalLogs = function (eventName) {
                _internalLogsEventName = eventName || null;
                _forceStopInternalLogPoller = false;
                if (_internalLogPoller) {
                    clearInterval(_internalLogPoller);
                    _internalLogPoller = null;
                }
                return _startInternalLogTimer(true);
            };
            function _startInternalLogTimer(alwaysStart) {
                if (!_internalLogPoller && !_forceStopInternalLogPoller) {
                    var shouldStart = alwaysStart || (_self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_LOGGER /* @min:%2elogger */] && _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_LOGGER /* @min:%2elogger */].queue[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_LENGTH /* @min:%2elength */] > 0);
                    if (shouldStart) {
                        var interval = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.getCfgValue)(_config.diagnosticLogInterval);
                        if (!interval || !(interval > 0)) {
                            interval = 10000;
                        }
                        // Keeping as an interval timer for backward compatibility as it returns the result
                        _internalLogPoller = setInterval(function () {
                            clearInterval(_internalLogPoller);
                            _internalLogPoller = 0;
                            _flushInternalLogs();
                        }, interval);
                    }
                }
                return _internalLogPoller;
            }
            _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_STOP_POLLING_INTERNA3 /* @min:%2estopPollingInternalLogs */] = function () {
                _forceStopInternalLogPoller = true;
                if (_internalLogPoller) {
                    clearInterval(_internalLogPoller);
                    _internalLogPoller = 0;
                    _flushInternalLogs();
                }
            };
            // Add addTelemetryInitializer
            (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.proxyFunctions)(_self, function () { return _telemetryInitializerPlugin; }, ["addTelemetryInitializer"]);
            _self.unload = function (isAsync, unloadComplete, cbTimeout) {
                var _a;
                if (isAsync === void 0) { isAsync = true; }
                if (!_isInitialized) {
                    // The SDK is not initialized
                    (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.throwError)(strSdkNotInitialized);
                }
                // Check if the SDK still unloading so throw
                if (_isUnloading) {
                    // The SDK is already unloading
                    (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.throwError)(strSdkUnloadingError);
                }
                var unloadState = (_a = {
                        reason: 50 /* TelemetryUnloadReason.SdkUnload */
                    },
                    _a[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_IS_ASYNC /* @min:isAsync */] = isAsync,
                    _a.flushComplete = false,
                    _a);
                var processUnloadCtx = (0,_ProcessTelemetryContext__WEBPACK_IMPORTED_MODULE_9__.createProcessTelemetryUnloadContext)(_getPluginChain(), _self);
                processUnloadCtx[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_ON_COMPLETE /* @min:%2eonComplete */](function () {
                    _initDefaults();
                    unloadComplete && unloadComplete(unloadState);
                }, _self);
                function _doUnload(flushComplete) {
                    unloadState.flushComplete = flushComplete;
                    _isUnloading = true;
                    // Run all of the unload handlers first (before unloading the plugins)
                    _unloadHandlers.run(processUnloadCtx, unloadState);
                    // Stop polling the internal logs
                    _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_STOP_POLLING_INTERNA3 /* @min:%2estopPollingInternalLogs */]();
                    // Start unloading the components, from this point onwards the SDK should be considered to be in an unstable state
                    processUnloadCtx[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_PROCESS_NEXT /* @min:%2eprocessNext */](unloadState);
                }
                _flushInternalLogs();
                if (!_flushChannels(isAsync, _doUnload, 6 /* SendRequestReason.SdkUnload */, cbTimeout)) {
                    _doUnload(false);
                }
            };
            _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_GET_PLUGIN /* @min:%2egetPlugin */] = _getPlugin;
            _self.addPlugin = function (plugin, replaceExisting, isAsync, addCb) {
                if (!plugin) {
                    addCb && addCb(false);
                    _logOrThrowError(strValidationError);
                    return;
                }
                var existingPlugin = _getPlugin(plugin[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_IDENTIFIER /* @min:%2eidentifier */]);
                if (existingPlugin && !replaceExisting) {
                    addCb && addCb(false);
                    _logOrThrowError("Plugin [" + plugin[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_IDENTIFIER /* @min:%2eidentifier */] + "] is already loaded!");
                    return;
                }
                var updateState = {
                    reason: 16 /* TelemetryUpdateReason.PluginAdded */
                };
                function _addPlugin(removed) {
                    _configExtensions[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_PUSH /* @min:%2epush */](plugin);
                    updateState.added = [plugin];
                    // Re-Initialize the plugin chain
                    _initPluginChain(updateState);
                    addCb && addCb(true);
                }
                if (existingPlugin) {
                    var removedPlugins_1 = [existingPlugin.plugin];
                    var unloadState = {
                        reason: 2 /* TelemetryUnloadReason.PluginReplace */,
                        isAsync: !!isAsync
                    };
                    _removePlugins(removedPlugins_1, unloadState, function (removed) {
                        if (!removed) {
                            // Previous plugin was successfully removed or was not installed
                            addCb && addCb(false);
                        }
                        else {
                            updateState.removed = removedPlugins_1;
                            updateState.reason |= 32 /* TelemetryUpdateReason.PluginRemoved */;
                            _addPlugin(true);
                        }
                    });
                }
                else {
                    _addPlugin(false);
                }
            };
            _self.evtNamespace = function () {
                return _evtNamespace;
            };
            _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_FLUSH /* @min:%2eflush */] = _flushChannels;
            _self.getTraceCtx = function (createNew) {
                if (!_traceCtx) {
                    _traceCtx = (0,_TelemetryHelpers__WEBPACK_IMPORTED_MODULE_10__.createDistributedTraceContext)();
                }
                return _traceCtx;
            };
            _self.setTraceCtx = function (traceCtx) {
                _traceCtx = traceCtx || null;
            };
            // Create the addUnloadCb
            (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.proxyFunctionAs)(_self, "addUnloadCb", function () { return _unloadHandlers; }, "add");
            function _initDefaults() {
                _isInitialized = false;
                // Use a default logger so initialization errors are not dropped on the floor with full logging
                _config = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.objExtend)(true, {}, defaultInitConfig);
                _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_CONFIG /* @min:%2econfig */] = _config;
                _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_LOGGER /* @min:%2elogger */] = new _DiagnosticLogger__WEBPACK_IMPORTED_MODULE_4__.DiagnosticLogger(_config);
                _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN__EXTENSIONS /* @min:%2e_extensions */] = [];
                _telemetryInitializerPlugin = new _TelemetryInitializerPlugin__WEBPACK_IMPORTED_MODULE_11__.TelemetryInitializerPlugin();
                _eventQueue = [];
                _notificationManager = null;
                _perfManager = null;
                _cfgPerfManager = null;
                _cookieManager = null;
                _pluginChain = null;
                _coreExtensions = null;
                _configExtensions = [];
                _channelControl = null;
                _channelConfig = null;
                _channelQueue = null;
                _isUnloading = false;
                _internalLogsEventName = null;
                _evtNamespace = (0,_DataCacheHelper__WEBPACK_IMPORTED_MODULE_12__.createUniqueNamespace)("AIBaseCore", true);
                _unloadHandlers = (0,_UnloadHandlerContainer__WEBPACK_IMPORTED_MODULE_13__.createUnloadHandlerContainer)();
                _traceCtx = null;
            }
            function _createTelCtx() {
                var theCtx = (0,_ProcessTelemetryContext__WEBPACK_IMPORTED_MODULE_9__.createProcessTelemetryContext)(_getPluginChain(), _config, _self);
                theCtx[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_ON_COMPLETE /* @min:%2eonComplete */](_startInternalLogTimer);
                return theCtx;
            }
            // Initialize or Re-initialize the plugins
            function _initPluginChain(updateState) {
                // Extension validation
                var theExtensions = _validateExtensions(_self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_LOGGER /* @min:%2elogger */], _ChannelController__WEBPACK_IMPORTED_MODULE_14__.ChannelControllerPriority, _configExtensions);
                _coreExtensions = theExtensions[_InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_CORE /* @min:%2ecore */];
                _pluginChain = null;
                // Sort the complete set of extensions by priority
                var allExtensions = theExtensions.all;
                // Initialize the Channel Queues and the channel plugins first
                _channelQueue = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.objFreeze)((0,_ChannelController__WEBPACK_IMPORTED_MODULE_14__.createChannelQueues)(_channelConfig, allExtensions, _self));
                if (_channelControl) {
                    // During add / remove of a plugin this may get called again, so don't re-add if already present
                    // But we also want the controller as the last, so remove if already present
                    // And reusing the existing instance, just in case an installed plugin has a reference and
                    // is using it.
                    var idx = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.arrIndexOf)(allExtensions, _channelControl);
                    if (idx !== -1) {
                        allExtensions[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_SPLICE /* @min:%2esplice */](idx, 1);
                    }
                    idx = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.arrIndexOf)(_coreExtensions, _channelControl);
                    if (idx !== -1) {
                        _coreExtensions[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_SPLICE /* @min:%2esplice */](idx, 1);
                    }
                    _channelControl._setQueue(_channelQueue);
                }
                else {
                    _channelControl = (0,_ChannelController__WEBPACK_IMPORTED_MODULE_14__.createChannelControllerPlugin)(_channelQueue, _self);
                }
                // Add on "channelController" as the last "plugin"
                allExtensions[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_PUSH /* @min:%2epush */](_channelControl);
                _coreExtensions[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_PUSH /* @min:%2epush */](_channelControl);
                // Required to allow plugins to call core.getPlugin() during their own initialization
                _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN__EXTENSIONS /* @min:%2e_extensions */] = (0,_TelemetryHelpers__WEBPACK_IMPORTED_MODULE_10__.sortPlugins)(allExtensions);
                // Initialize the controls
                _channelControl[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_INITIALIZE /* @min:%2einitialize */](_config, _self, allExtensions);
                var initCtx = _createTelCtx();
                (0,_TelemetryHelpers__WEBPACK_IMPORTED_MODULE_10__.initializePlugins)(initCtx, allExtensions);
                // Now reset the extensions to just those being managed by Basecore
                _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN__EXTENSIONS /* @min:%2e_extensions */] = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.objFreeze)((0,_TelemetryHelpers__WEBPACK_IMPORTED_MODULE_10__.sortPlugins)(_coreExtensions || [])).slice();
                if (updateState) {
                    _doUpdate(updateState);
                }
            }
            function _getPlugin(pluginIdentifier) {
                var _a;
                var theExt = null;
                var thePlugin = null;
                (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.arrForEach)(_self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN__EXTENSIONS /* @min:%2e_extensions */], function (ext) {
                    if (ext[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_IDENTIFIER /* @min:%2eidentifier */] === pluginIdentifier && ext !== _channelControl && ext !== _telemetryInitializerPlugin) {
                        thePlugin = ext;
                        return -1;
                    }
                });
                if (!thePlugin && _channelControl) {
                    // Check the channel Controller
                    thePlugin = _channelControl.getChannel(pluginIdentifier);
                }
                if (thePlugin) {
                    theExt = (_a = {
                            plugin: thePlugin
                        },
                        _a[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_SET_ENABLED /* @min:setEnabled */] = function (enabled) {
                            (0,_TelemetryHelpers__WEBPACK_IMPORTED_MODULE_10__._getPluginState)(thePlugin)[_InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_DISABLED] = !enabled;
                        },
                        _a.isEnabled = function () {
                            var pluginState = (0,_TelemetryHelpers__WEBPACK_IMPORTED_MODULE_10__._getPluginState)(thePlugin);
                            return !pluginState[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_TEARDOWN /* @min:%2eteardown */] && !pluginState[_InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_DISABLED];
                        },
                        _a.remove = function (isAsync, removeCb) {
                            var _a;
                            if (isAsync === void 0) { isAsync = true; }
                            var pluginsToRemove = [thePlugin];
                            var unloadState = (_a = {
                                    reason: 1 /* TelemetryUnloadReason.PluginUnload */
                                },
                                _a[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_IS_ASYNC /* @min:isAsync */] = isAsync,
                                _a);
                            _removePlugins(pluginsToRemove, unloadState, function (removed) {
                                if (removed) {
                                    // Re-Initialize the plugin chain
                                    _initPluginChain({
                                        reason: 32 /* TelemetryUpdateReason.PluginRemoved */,
                                        removed: pluginsToRemove
                                    });
                                }
                                removeCb && removeCb(removed);
                            });
                        },
                        _a);
                }
                return theExt;
            }
            function _getPluginChain() {
                if (!_pluginChain) {
                    // copy the collection of extensions
                    var extensions = (_coreExtensions || []).slice();
                    // During add / remove this may get called again, so don't readd if already present
                    if ((0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.arrIndexOf)(extensions, _telemetryInitializerPlugin) === -1) {
                        extensions[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_PUSH /* @min:%2epush */](_telemetryInitializerPlugin);
                    }
                    _pluginChain = (0,_ProcessTelemetryContext__WEBPACK_IMPORTED_MODULE_9__.createTelemetryProxyChain)((0,_TelemetryHelpers__WEBPACK_IMPORTED_MODULE_10__.sortPlugins)(extensions), _config, _self);
                }
                return _pluginChain;
            }
            function _removePlugins(thePlugins, unloadState, removeComplete) {
                if (thePlugins && thePlugins[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_LENGTH /* @min:%2elength */] > 0) {
                    var unloadChain = (0,_ProcessTelemetryContext__WEBPACK_IMPORTED_MODULE_9__.createTelemetryProxyChain)(thePlugins, _config, _self);
                    var unloadCtx = (0,_ProcessTelemetryContext__WEBPACK_IMPORTED_MODULE_9__.createProcessTelemetryUnloadContext)(unloadChain, _self);
                    unloadCtx[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_ON_COMPLETE /* @min:%2eonComplete */](function () {
                        var removed = false;
                        // Remove the listed config extensions
                        var newConfigExtensions = [];
                        (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.arrForEach)(_configExtensions, function (plugin, idx) {
                            if (!_isPluginPresent(plugin, thePlugins)) {
                                newConfigExtensions[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_PUSH /* @min:%2epush */](plugin);
                            }
                            else {
                                removed = true;
                            }
                        });
                        _configExtensions = newConfigExtensions;
                        // Re-Create the channel config
                        var newChannelConfig = [];
                        if (_channelConfig) {
                            (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.arrForEach)(_channelConfig, function (queue, idx) {
                                var newQueue = [];
                                (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.arrForEach)(queue, function (channel) {
                                    if (!_isPluginPresent(channel, thePlugins)) {
                                        newQueue[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_PUSH /* @min:%2epush */](channel);
                                    }
                                    else {
                                        removed = true;
                                    }
                                });
                                newChannelConfig[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_PUSH /* @min:%2epush */](newQueue);
                            });
                            _channelConfig = newChannelConfig;
                        }
                        removeComplete && removeComplete(removed);
                        _startInternalLogTimer();
                    });
                    unloadCtx[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_PROCESS_NEXT /* @min:%2eprocessNext */](unloadState);
                }
                else {
                    removeComplete(false);
                }
            }
            function _flushInternalLogs() {
                if (_self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_LOGGER /* @min:%2elogger */] && _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_LOGGER /* @min:%2elogger */].queue) {
                    var queue = _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_LOGGER /* @min:%2elogger */].queue.slice(0);
                    _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_LOGGER /* @min:%2elogger */].queue[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_LENGTH /* @min:%2elength */] = 0;
                    (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.arrForEach)(queue, function (logMessage) {
                        var _a;
                        var item = (_a = {},
                            _a[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_NAME /* @min:name */] = _internalLogsEventName ? _internalLogsEventName : "InternalMessageId: " + logMessage[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_MESSAGE_ID /* @min:%2emessageId */],
                            _a.iKey = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.getCfgValue)(_config[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_INSTRUMENTATION_KEY /* @min:%2einstrumentationKey */]),
                            _a.time = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.toISOString)(new Date()),
                            _a.baseType = _DiagnosticLogger__WEBPACK_IMPORTED_MODULE_4__._InternalLogMessage.dataType,
                            _a.baseData = { message: logMessage[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_MESSAGE /* @min:%2emessage */] },
                            _a);
                        _self.track(item);
                    });
                }
            }
            function _flushChannels(isAsync, callBack, sendReason, cbTimeout) {
                if (_channelControl) {
                    return _channelControl[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_FLUSH /* @min:%2eflush */](isAsync, callBack, sendReason || 6 /* SendRequestReason.SdkUnload */, cbTimeout);
                }
                callBack && callBack(false);
                return true;
            }
            function _initDebugListener() {
                var disableDbgExt = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.getCfgValue)(_config.disableDbgExt);
                if (disableDbgExt === true && _debugListener) {
                    // Remove any previously loaded debug listener
                    _notificationManager[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_REMOVE_NOTIFICATION_2 /* @min:%2eremoveNotificationListener */](_debugListener);
                    _debugListener = null;
                }
                if (_notificationManager && !_debugListener && disableDbgExt !== true) {
                    _debugListener = (0,_DbgExtensionUtils__WEBPACK_IMPORTED_MODULE_15__.getDebugListener)(_config);
                    _notificationManager[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_ADD_NOTIFICATION_LIS1 /* @min:%2eaddNotificationListener */](_debugListener);
                }
            }
            function _initPerfManager() {
                var enablePerfMgr = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.getCfgValue)(_config.enablePerfMgr);
                if (!enablePerfMgr && _cfgPerfManager) {
                    // Remove any existing config based performance manager
                    _cfgPerfManager = null;
                }
                if (enablePerfMgr) {
                    // Set the performance manager creation function if not defined
                    (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.getSetValue)(_config, _InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_CREATE_PERF_MGR, _createPerfManager);
                }
            }
            function _initExtConfig() {
                var extConfig = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.getSetValue)(_config, _InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_EXTENSION_CONFIG, {});
                extConfig.NotificationManager = _notificationManager;
            }
            function _doUpdate(updateState) {
                var updateCtx = (0,_ProcessTelemetryContext__WEBPACK_IMPORTED_MODULE_9__.createProcessTelemetryUpdateContext)(_getPluginChain(), _self);
                updateCtx[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_ON_COMPLETE /* @min:%2eonComplete */](_startInternalLogTimer);
                if (!_self._updateHook || _self._updateHook(updateCtx, updateState) !== true) {
                    updateCtx[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_PROCESS_NEXT /* @min:%2eprocessNext */](updateState);
                }
            }
            function _logOrThrowError(message) {
                var logger = _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_LOGGER /* @min:%2elogger */];
                if (logger) {
                    // there should always be a logger
                    (0,_DiagnosticLogger__WEBPACK_IMPORTED_MODULE_4__._throwInternal)(logger, 2 /* eLoggingSeverity.WARNING */, 73 /* _eInternalMessageId.PluginException */, message);
                    _startInternalLogTimer();
                }
                else {
                    (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_1__.throwError)(message);
                }
            }
        });
    }
// Removed Stub for BaseCore.prototype.initialize.
// Removed Stub for BaseCore.prototype.getTransmissionControls.
// Removed Stub for BaseCore.prototype.track.
// Removed Stub for BaseCore.prototype.getProcessTelContext.
// Removed Stub for BaseCore.prototype.getNotifyMgr.
// Removed Stub for BaseCore.prototype.addNotificationListener.
// Removed Stub for BaseCore.prototype.removeNotificationListener.
// Removed Stub for BaseCore.prototype.getCookieMgr.
// Removed Stub for BaseCore.prototype.setCookieMgr.
// Removed Stub for BaseCore.prototype.getPerfMgr.
// Removed Stub for BaseCore.prototype.setPerfMgr.
// Removed Stub for BaseCore.prototype.eventCnt.
// Removed Stub for BaseCore.prototype.pollInternalLogs.
// Removed Stub for BaseCore.prototype.stopPollingInternalLogs.
// Removed Stub for BaseCore.prototype.addTelemetryInitializer.
// Removed Stub for BaseCore.prototype.unload.
// Removed Stub for BaseCore.prototype.getPlugin.
// Removed Stub for BaseCore.prototype.addPlugin.
// Removed Stub for BaseCore.prototype.evtNamespace.
// Removed Stub for BaseCore.prototype.addUnloadCb.
// Removed Stub for BaseCore.prototype.flush.
// Removed Stub for BaseCore.prototype.getTraceCtx.
// Removed Stub for BaseCore.prototype.setTraceCtx.
// Removed Stub for BaseCore.prototype.releaseQueue.
// Removed Stub for BaseCore.prototype._updateHook.
    // This is a workaround for an IE8 bug when using dynamicProto() with classes that don't have any
    // non-dynamic functions or static properties/functions when using uglify-js to minify the resulting code.
    // this will be removed when ES3 support is dropped.
    BaseCore.__ieDyn=1;

    return BaseCore;
}());

//# sourceMappingURL=BaseCore.js.map

/***/ }),

/***/ 557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChannelControllerPriority": () => (/* binding */ ChannelControllerPriority),
/* harmony export */   "createChannelControllerPlugin": () => (/* binding */ createChannelControllerPlugin),
/* harmony export */   "createChannelQueues": () => (/* binding */ createChannelQueues)
/* harmony export */ });
/* harmony import */ var _DynamicConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(530);
/* harmony import */ var _HelperFuncs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(528);
/* harmony import */ var _InternalConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(531);
/* harmony import */ var _ProcessTelemetryContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(551);
/* harmony import */ var _TelemetryHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(552);
/*
 * Application Insights JavaScript SDK - Core, 2.8.16
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */

// 





var ChannelControllerPriority = 500;
var ChannelValidationMessage = "Channel has invalid priority - ";
function _addChannelQueue(channelQueue, queue, core) {
    if (queue && (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_0__.isArray)(queue) && queue[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_LENGTH /* @min:%2elength */] > 0) {
        queue = queue.sort(function (a, b) {
            return a[_InternalConstants__WEBPACK_IMPORTED_MODULE_2__.STR_PRIORITY /* @min:%2epriority */] - b[_InternalConstants__WEBPACK_IMPORTED_MODULE_2__.STR_PRIORITY /* @min:%2epriority */];
        });
        (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_0__.arrForEach)(queue, function (queueItem) {
            if (queueItem[_InternalConstants__WEBPACK_IMPORTED_MODULE_2__.STR_PRIORITY /* @min:%2epriority */] < ChannelControllerPriority) {
                (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_0__.throwError)(ChannelValidationMessage + queueItem[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_IDENTIFIER /* @min:%2eidentifier */]);
            }
        });
        channelQueue[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_PUSH /* @min:%2epush */]({
            queue: (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_0__.objFreeze)(queue),
            chain: (0,_ProcessTelemetryContext__WEBPACK_IMPORTED_MODULE_3__.createTelemetryProxyChain)(queue, core[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_CONFIG /* @min:%2econfig */], core)
        });
    }
}
function createChannelControllerPlugin(channelQueue, core) {
    function _getTelCtx() {
        return (0,_ProcessTelemetryContext__WEBPACK_IMPORTED_MODULE_3__.createProcessTelemetryContext)(null, core[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_CONFIG /* @min:%2econfig */], core, null);
    }
    function _processChannelQueue(theChannels, itemCtx, processFn, onComplete) {
        var waiting = theChannels ? (theChannels[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_LENGTH /* @min:%2elength */] + 1) : 1;
        function _runChainOnComplete() {
            waiting--;
            if (waiting === 0) {
                onComplete && onComplete();
                onComplete = null;
            }
        }
        if (waiting > 0) {
            (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_0__.arrForEach)(theChannels, function (channels) {
                // pass on to first item in queue
                if (channels && channels.queue[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_LENGTH /* @min:%2elength */] > 0) {
                    var channelChain = channels.chain;
                    var chainCtx = itemCtx[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_CREATE_NEW /* @min:%2ecreateNew */](channelChain);
                    chainCtx[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_ON_COMPLETE /* @min:%2eonComplete */](_runChainOnComplete);
                    // Cause this chain to start processing
                    processFn(chainCtx);
                }
                else {
                    waiting--;
                }
            });
        }
        _runChainOnComplete();
    }
    function _doUpdate(updateCtx, updateState) {
        var theUpdateState = updateState || {
            reason: 0 /* TelemetryUpdateReason.Unknown */
        };
        _processChannelQueue(channelQueue, updateCtx, function (chainCtx) {
            chainCtx[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_PROCESS_NEXT /* @min:%2eprocessNext */](theUpdateState);
        }, function () {
            updateCtx[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_PROCESS_NEXT /* @min:%2eprocessNext */](theUpdateState);
        });
        return true;
    }
    function _doTeardown(unloadCtx, unloadState) {
        var theUnloadState = unloadState || {
            reason: 0 /* TelemetryUnloadReason.ManualTeardown */,
            isAsync: false
        };
        _processChannelQueue(channelQueue, unloadCtx, function (chainCtx) {
            chainCtx[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_PROCESS_NEXT /* @min:%2eprocessNext */](theUnloadState);
        }, function () {
            unloadCtx[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_PROCESS_NEXT /* @min:%2eprocessNext */](theUnloadState);
            isInitialized = false;
        });
        return true;
    }
    function _getChannel(pluginIdentifier) {
        var thePlugin = null;
        if (channelQueue && channelQueue[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_LENGTH /* @min:%2elength */] > 0) {
            (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_0__.arrForEach)(channelQueue, function (channels) {
                // pass on to first item in queue
                if (channels && channels.queue[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_LENGTH /* @min:%2elength */] > 0) {
                    (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_0__.arrForEach)(channels.queue, function (ext) {
                        if (ext[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_IDENTIFIER /* @min:%2eidentifier */] === pluginIdentifier) {
                            thePlugin = ext;
                            // Cause arrForEach to stop iterating
                            return -1;
                        }
                    });
                    if (thePlugin) {
                        // Cause arrForEach to stop iterating
                        return -1;
                    }
                }
            });
        }
        return thePlugin;
    }
    var isInitialized = false;
    var channelController = {
        identifier: "ChannelControllerPlugin",
        priority: ChannelControllerPriority,
        initialize: function (config, core, extensions, pluginChain) {
            isInitialized = true;
            (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_0__.arrForEach)(channelQueue, function (channels) {
                if (channels && channels.queue[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_LENGTH /* @min:%2elength */] > 0) {
                    (0,_TelemetryHelpers__WEBPACK_IMPORTED_MODULE_4__.initializePlugins)((0,_ProcessTelemetryContext__WEBPACK_IMPORTED_MODULE_3__.createProcessTelemetryContext)(channels.chain, config, core), extensions);
                }
            });
        },
        isInitialized: function () {
            return isInitialized;
        },
        processTelemetry: function (item, itemCtx) {
            _processChannelQueue(channelQueue, itemCtx || _getTelCtx(), function (chainCtx) {
                chainCtx[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_PROCESS_NEXT /* @min:%2eprocessNext */](item);
            }, function () {
                itemCtx[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_PROCESS_NEXT /* @min:%2eprocessNext */](item);
            });
        },
        update: _doUpdate,
        pause: function () {
            _processChannelQueue(channelQueue, _getTelCtx(), function (chainCtx) {
                chainCtx.iterate(function (plugin) {
                    plugin.pause && plugin.pause();
                });
            }, null);
        },
        resume: function () {
            _processChannelQueue(channelQueue, _getTelCtx(), function (chainCtx) {
                chainCtx.iterate(function (plugin) {
                    plugin.resume && plugin.resume();
                });
            }, null);
        },
        teardown: _doTeardown,
        getChannel: _getChannel,
        flush: function (isAsync, callBack, sendReason, cbTimeout) {
            // Setting waiting to one so that we don't call the callBack until we finish iterating
            var waiting = 1;
            var doneIterating = false;
            var cbTimer = null;
            cbTimeout = cbTimeout || 5000;
            function doCallback() {
                waiting--;
                if (doneIterating && waiting === 0) {
                    if (cbTimer) {
                        clearTimeout(cbTimer);
                        cbTimer = null;
                    }
                    callBack && callBack(doneIterating);
                    callBack = null;
                }
            }
            _processChannelQueue(channelQueue, _getTelCtx(), function (chainCtx) {
                chainCtx.iterate(function (plugin) {
                    if (plugin[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_FLUSH /* @min:%2eflush */]) {
                        waiting++;
                        var handled_1 = false;
                        // Not all channels will call this callback for every scenario
                        if (!plugin[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_FLUSH /* @min:%2eflush */](isAsync, function () {
                            handled_1 = true;
                            doCallback();
                        }, sendReason)) {
                            if (!handled_1) {
                                // If any channel doesn't return true and it didn't call the callback, then we should assume that the callback
                                // will never be called, so use a timeout to allow the channel(s) some time to "finish" before triggering any
                                // followup function (such as unloading)
                                if (isAsync && cbTimer == null) {
                                    cbTimer = setTimeout(function () {
                                        cbTimer = null;
                                        doCallback();
                                    }, cbTimeout);
                                }
                                else {
                                    doCallback();
                                }
                            }
                        }
                    }
                });
            }, function () {
                doneIterating = true;
                doCallback();
            });
            return true;
        },
        _setQueue: function (queue) {
            channelQueue = queue;
        }
    };
    return channelController;
}
function createChannelQueues(channels, extensions, core) {
    var channelQueue = [];
    if (channels) {
        // Add and sort the configuration channel queues
        (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_0__.arrForEach)(channels, function (queue) { return _addChannelQueue(channelQueue, queue, core); });
    }
    if (extensions) {
        // Create a new channel queue for any extensions with a priority > the ChannelControllerPriority
        var extensionQueue_1 = [];
        (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_0__.arrForEach)(extensions, function (plugin) {
            if (plugin[_InternalConstants__WEBPACK_IMPORTED_MODULE_2__.STR_PRIORITY /* @min:%2epriority */] > ChannelControllerPriority) {
                extensionQueue_1[_DynamicConstants__WEBPACK_IMPORTED_MODULE_1__._DYN_PUSH /* @min:%2epush */](plugin);
            }
        });
        _addChannelQueue(channelQueue, extensionQueue_1, core);
    }
    return channelQueue;
}
//# sourceMappingURL=ChannelController.js.map

/***/ }),

/***/ 549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationManager": () => (/* binding */ NotificationManager)
/* harmony export */ });
/* harmony import */ var _microsoft_dynamicproto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(536);
/* harmony import */ var _DynamicConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(530);
/* harmony import */ var _HelperFuncs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(528);
/* harmony import */ var _InternalConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(531);
/*
 * Application Insights JavaScript SDK - Core, 2.8.16
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */






function _runListeners(listeners, name, isAsync, callback) {
    (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_0__.arrForEach)(listeners, function (listener) {
        if (listener && listener[name]) {
            if (isAsync) {
                setTimeout(function () { return callback(listener); }, 0);
            }
            else {
                try {
                    callback(listener);
                }
                catch (e) {
                    // Catch errors to ensure we don't block sending the requests
                }
            }
        }
    });
}
/**
 * Class to manage sending notifications to all the listeners.
 */
var NotificationManager = /** @class */ (function () {
    function NotificationManager(config) {
        this.listeners = [];
        var perfEvtsSendAll = !!(config || {}).perfEvtsSendAll;
        (0,_microsoft_dynamicproto_js__WEBPACK_IMPORTED_MODULE_1__["default"])(NotificationManager, this, function (_self) {
            _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_ADD_NOTIFICATION_LIS1 /* @min:%2eaddNotificationListener */] = function (listener) {
                _self.listeners[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_PUSH /* @min:%2epush */](listener);
            };
            /**
             * Removes all instances of the listener.
             * @param {INotificationListener} listener - AWTNotificationListener to remove.
             */
            _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_REMOVE_NOTIFICATION_2 /* @min:%2eremoveNotificationListener */] = function (listener) {
                var index = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_0__.arrIndexOf)(_self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_LISTENERS /* @min:%2elisteners */], listener);
                while (index > -1) {
                    _self.listeners[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_SPLICE /* @min:%2esplice */](index, 1);
                    index = (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_0__.arrIndexOf)(_self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_LISTENERS /* @min:%2elisteners */], listener);
                }
            };
            /**
             * Notification for events sent.
             * @param {ITelemetryItem[]} events - The array of events that have been sent.
             */
            _self[_InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_EVENTS_SENT /* @min:%2eeventsSent */] = function (events) {
                _runListeners(_self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_LISTENERS /* @min:%2elisteners */], _InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_EVENTS_SENT, true, function (listener) {
                    listener[_InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_EVENTS_SENT /* @min:%2eeventsSent */](events);
                });
            };
            /**
             * Notification for events being discarded.
             * @param {ITelemetryItem[]} events - The array of events that have been discarded by the SDK.
             * @param {number} reason           - The reason for which the SDK discarded the events. The EventsDiscardedReason
             * constant should be used to check the different values.
             */
            _self[_InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_EVENTS_DISCARDED /* @min:%2eeventsDiscarded */] = function (events, reason) {
                _runListeners(_self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_LISTENERS /* @min:%2elisteners */], _InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_EVENTS_DISCARDED, true, function (listener) {
                    listener[_InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_EVENTS_DISCARDED /* @min:%2eeventsDiscarded */](events, reason);
                });
            };
            /**
             * [Optional] A function called when the events have been requested to be sent to the sever.
             * @param {number} sendReason - The reason why the event batch is being sent.
             * @param {boolean} isAsync   - A flag which identifies whether the requests are being sent in an async or sync manner.
             */
            _self[_InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_EVENTS_SEND_REQUEST /* @min:%2eeventsSendRequest */] = function (sendReason, isAsync) {
                _runListeners(_self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_LISTENERS /* @min:%2elisteners */], _InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_EVENTS_SEND_REQUEST, isAsync, function (listener) {
                    listener[_InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_EVENTS_SEND_REQUEST /* @min:%2eeventsSendRequest */](sendReason, isAsync);
                });
            };
            _self[_InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_PERF_EVENT /* @min:%2eperfEvent */] = function (perfEvent) {
                if (perfEvent) {
                    // Send all events or only parent events
                    if (perfEvtsSendAll || !perfEvent[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_IS_CHILD_EVT /* @min:%2eisChildEvt */]()) {
                        _runListeners(_self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_LISTENERS /* @min:%2elisteners */], _InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_PERF_EVENT, false, function (listener) {
                            if (perfEvent[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_IS_ASYNC /* @min:%2eisAsync */]) {
                                setTimeout(function () { return listener[_InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_PERF_EVENT /* @min:%2eperfEvent */](perfEvent); }, 0);
                            }
                            else {
                                listener[_InternalConstants__WEBPACK_IMPORTED_MODULE_3__.STR_PERF_EVENT /* @min:%2eperfEvent */](perfEvent);
                            }
                        });
                    }
                }
            };
        });
    }
// Removed Stub for NotificationManager.prototype.addNotificationListener.
// Removed Stub for NotificationManager.prototype.removeNotificationListener.
// Removed Stub for NotificationManager.prototype.eventsSent.
// Removed Stub for NotificationManager.prototype.eventsDiscarded.
// Removed Stub for NotificationManager.prototype.eventsSendRequest.
    // This is a workaround for an IE8 bug when using dynamicProto() with classes that don't have any
    // non-dynamic functions or static properties/functions when using uglify-js to minify the resulting code.
    // this will be removed when ES3 support is dropped.
    NotificationManager.__ieDyn=1;

    return NotificationManager;
}());

//# sourceMappingURL=NotificationManager.js.map

/***/ }),

/***/ 554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TelemetryInitializerPlugin": () => (/* binding */ TelemetryInitializerPlugin)
/* harmony export */ });
/* harmony import */ var _microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(533);
/* harmony import */ var _microsoft_dynamicproto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(536);
/* harmony import */ var _DynamicConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(530);
/* harmony import */ var _BaseTelemetryPlugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(555);
/* harmony import */ var _DiagnosticLogger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(537);
/* harmony import */ var _EnvUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(538);
/* harmony import */ var _HelperFuncs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(528);
/* harmony import */ var _InternalConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(531);
/*
 * Application Insights JavaScript SDK - Core, 2.8.16
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */
// 
// 








var TelemetryInitializerPlugin = /** @class */ (function (_super) {
    (0,_microsoft_applicationinsights_shims__WEBPACK_IMPORTED_MODULE_0__.__extendsFn)(TelemetryInitializerPlugin, _super);
    function TelemetryInitializerPlugin() {
        var _this = _super.call(this) || this;
        _this.identifier = "TelemetryInitializerPlugin";
        _this.priority = 199;
        // NOTE!: DON'T set default values here, instead set them in the _initDefaults() function as it is also called during teardown()
        var _id;
        var _initializers;
        _initDefaults();
        (0,_microsoft_dynamicproto_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TelemetryInitializerPlugin, _this, function (_self, _base) {
            _self.addTelemetryInitializer = function (telemetryInitializer) {
                var theInitializer = {
                    id: _id++,
                    fn: telemetryInitializer
                };
                _initializers[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_PUSH /* @min:%2epush */](theInitializer);
                var handler = {
                    remove: function () {
                        (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.arrForEach)(_initializers, function (initializer, idx) {
                            if (initializer.id === theInitializer.id) {
                                _initializers[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_SPLICE /* @min:%2esplice */](idx, 1);
                                return -1;
                            }
                        });
                    }
                };
                return handler;
            };
            _self[_InternalConstants__WEBPACK_IMPORTED_MODULE_4__.STR_PROCESS_TELEMETRY /* @min:%2eprocessTelemetry */] = function (item, itemCtx) {
                var doNotSendItem = false;
                var telemetryInitializersCount = _initializers[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_LENGTH /* @min:%2elength */];
                for (var i = 0; i < telemetryInitializersCount; ++i) {
                    var telemetryInitializer = _initializers[i];
                    if (telemetryInitializer) {
                        try {
                            if (telemetryInitializer.fn[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_APPLY /* @min:%2eapply */](null, [item]) === false) {
                                doNotSendItem = true;
                                break;
                            }
                        }
                        catch (e) {
                            // log error but dont stop executing rest of the telemetry initializers
                            // doNotSendItem = true;
                            (0,_DiagnosticLogger__WEBPACK_IMPORTED_MODULE_5__._throwInternal)(itemCtx[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_DIAG_LOG /* @min:%2ediagLog */](), 1 /* eLoggingSeverity.CRITICAL */, 64 /* _eInternalMessageId.TelemetryInitializerFailed */, "One of telemetry initializers failed, telemetry item will not be sent: " + (0,_HelperFuncs__WEBPACK_IMPORTED_MODULE_3__.getExceptionName)(e), { exception: (0,_EnvUtils__WEBPACK_IMPORTED_MODULE_6__.dumpObj)(e) }, true);
                        }
                    }
                }
                if (!doNotSendItem) {
                    _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN_PROCESS_NEXT /* @min:%2eprocessNext */](item, itemCtx);
                }
            };
            _self[_DynamicConstants__WEBPACK_IMPORTED_MODULE_2__._DYN__DO_TEARDOWN /* @min:%2e_doTeardown */] = function () {
                _initDefaults();
            };
        });
        function _initDefaults() {
            _id = 0;
            _initializers = [];
        }
        return _this;
    }
// Removed Stub for TelemetryInitializerPlugin.prototype.addTelemetryInitializer.
// Removed Stub for TelemetryInitializerPlugin.prototype.processTelemetry.
    // This is a workaround for an IE8 bug when using dynamicProto() with classes that don't have any
    // non-dynamic functions or static properties/functions when using uglify-js to minify the resulting code.
    // this will be removed when ES3 support is dropped.
    TelemetryInitializerPlugin.__ieDyn=1;

    return TelemetryInitializerPlugin;
}(_BaseTelemetryPlugin__WEBPACK_IMPORTED_MODULE_7__.BaseTelemetryPlugin));

//# sourceMappingURL=TelemetryInitializerPlugin.js.map

/***/ })

}]);
//# sourceMappingURL=4.js.map