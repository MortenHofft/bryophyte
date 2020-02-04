'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var core = require('@emotion/core');
var React = require('react');
var React__default = _interopDefault(React);

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var reactIs_production_min = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118,x=b?Symbol.for("react.scope"):60119;function y(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function z(a){return y(a)===m}
exports.typeOf=y;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w||a.$$typeof===x)};exports.isAsyncMode=function(a){return z(a)||y(a)===l};exports.isConcurrentMode=z;exports.isContextConsumer=function(a){return y(a)===k};exports.isContextProvider=function(a){return y(a)===h};
exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return y(a)===n};exports.isFragment=function(a){return y(a)===e};exports.isLazy=function(a){return y(a)===t};exports.isMemo=function(a){return y(a)===r};exports.isPortal=function(a){return y(a)===d};exports.isProfiler=function(a){return y(a)===g};exports.isStrictMode=function(a){return y(a)===f};exports.isSuspense=function(a){return y(a)===p};
});

unwrapExports(reactIs_production_min);
var reactIs_production_min_1 = reactIs_production_min.typeOf;
var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
var reactIs_production_min_6 = reactIs_production_min.Element;
var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
var reactIs_production_min_8 = reactIs_production_min.Fragment;
var reactIs_production_min_9 = reactIs_production_min.Lazy;
var reactIs_production_min_10 = reactIs_production_min.Memo;
var reactIs_production_min_11 = reactIs_production_min.Portal;
var reactIs_production_min_12 = reactIs_production_min.Profiler;
var reactIs_production_min_13 = reactIs_production_min.StrictMode;
var reactIs_production_min_14 = reactIs_production_min.Suspense;
var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
var reactIs_production_min_20 = reactIs_production_min.isElement;
var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
var reactIs_production_min_22 = reactIs_production_min.isFragment;
var reactIs_production_min_23 = reactIs_production_min.isLazy;
var reactIs_production_min_24 = reactIs_production_min.isMemo;
var reactIs_production_min_25 = reactIs_production_min.isPortal;
var reactIs_production_min_26 = reactIs_production_min.isProfiler;
var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
var reactIs_production_min_28 = reactIs_production_min.isSuspense;

var reactIs_development = createCommonjsModule(function (module, exports) {



{
  (function() {

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}
});

unwrapExports(reactIs_development);
var reactIs_development_1 = reactIs_development.typeOf;
var reactIs_development_2 = reactIs_development.AsyncMode;
var reactIs_development_3 = reactIs_development.ConcurrentMode;
var reactIs_development_4 = reactIs_development.ContextConsumer;
var reactIs_development_5 = reactIs_development.ContextProvider;
var reactIs_development_6 = reactIs_development.Element;
var reactIs_development_7 = reactIs_development.ForwardRef;
var reactIs_development_8 = reactIs_development.Fragment;
var reactIs_development_9 = reactIs_development.Lazy;
var reactIs_development_10 = reactIs_development.Memo;
var reactIs_development_11 = reactIs_development.Portal;
var reactIs_development_12 = reactIs_development.Profiler;
var reactIs_development_13 = reactIs_development.StrictMode;
var reactIs_development_14 = reactIs_development.Suspense;
var reactIs_development_15 = reactIs_development.isValidElementType;
var reactIs_development_16 = reactIs_development.isAsyncMode;
var reactIs_development_17 = reactIs_development.isConcurrentMode;
var reactIs_development_18 = reactIs_development.isContextConsumer;
var reactIs_development_19 = reactIs_development.isContextProvider;
var reactIs_development_20 = reactIs_development.isElement;
var reactIs_development_21 = reactIs_development.isForwardRef;
var reactIs_development_22 = reactIs_development.isFragment;
var reactIs_development_23 = reactIs_development.isLazy;
var reactIs_development_24 = reactIs_development.isMemo;
var reactIs_development_25 = reactIs_development.isPortal;
var reactIs_development_26 = reactIs_development.isProfiler;
var reactIs_development_27 = reactIs_development.isStrictMode;
var reactIs_development_28 = reactIs_development.isSuspense;

var reactIs = createCommonjsModule(function (module) {

{
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

{
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

{
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') ;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
}
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty$1;

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;
});

var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;

function useTheme() {
  return React__default.useContext(core.ThemeContext);
}

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React.createContext && React.createContext(DefaultContext);

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  return t;
};

function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return React.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}

function GenIcon(data) {
  return function (props) {
    return React.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var computedSize = props.size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + ' ' : '') + props.className;

    var attr = props.attr,
        title = props.title,
        svgProps = __rest(props, ["attr", "title"]);

    return React.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign({
        color: props.color || conf.color
      }, conf.style, props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && React.createElement("title", null, title), props.children);
  };

  return IconContext !== undefined ? React.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
var MdClose = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}}]})(props);
};
MdClose.displayName = "MdClose";

var AppContext = React__default.createContext({});

/**
 * Will add data from the ComponentContext to the wrapped component's props
 * To use you should provide a map of params that you need injected (similar to Redux connect map)
 *
 * Usage exanmple: 
 * const mapContextToProps = ({ locale }) => ({ locale });
 * export default withContext(mapContextToProps)(MyComponent);
 * By default wrapper would provide nothing
 * @param injectedProps
 * @returns {function(*): function(*): *}
 */

var withContext = function withContext() {
  var injectedProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (context) {};
  return function (WrappedComponent) {
    var Wrapper = function Wrapper(props) {
      return React__default.createElement(AppContext.Consumer, null, function (context) {
        return React__default.createElement(WrappedComponent, _extends({}, injectedProps(context), props));
      });
    };

    return Wrapper;
  };
};

var dist = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
function _(msg) {
    return msg;
}
exports._ = _;
function defineMessages(msgs) {
    return msgs;
}
exports.defineMessages = defineMessages;

});

unwrapExports(dist);
var dist_1 = dist._;
var dist_2 = dist.defineMessages;

var TYPE;
(function (TYPE) {
    /**
     * Raw text
     */
    TYPE[TYPE["literal"] = 0] = "literal";
    /**
     * Variable w/o any format, e.g `var` in `this is a {var}`
     */
    TYPE[TYPE["argument"] = 1] = "argument";
    /**
     * Variable w/ number format
     */
    TYPE[TYPE["number"] = 2] = "number";
    /**
     * Variable w/ date format
     */
    TYPE[TYPE["date"] = 3] = "date";
    /**
     * Variable w/ time format
     */
    TYPE[TYPE["time"] = 4] = "time";
    /**
     * Variable w/ select format
     */
    TYPE[TYPE["select"] = 5] = "select";
    /**
     * Variable w/ plural format
     */
    TYPE[TYPE["plural"] = 6] = "plural";
    /**
     * Only possible within plural argument.
     * This is the `#` symbol that will be substituted with the count.
     */
    TYPE[TYPE["pound"] = 7] = "pound";
})(TYPE || (TYPE = {}));
/**
 * Type Guards
 */
function isLiteralElement(el) {
    return el.type === TYPE.literal;
}
function isArgumentElement(el) {
    return el.type === TYPE.argument;
}
function isNumberElement(el) {
    return el.type === TYPE.number;
}
function isDateElement(el) {
    return el.type === TYPE.date;
}
function isTimeElement(el) {
    return el.type === TYPE.time;
}
function isSelectElement(el) {
    return el.type === TYPE.select;
}
function isPluralElement(el) {
    return el.type === TYPE.plural;
}
function isPoundElement(el) {
    return el.type === TYPE.pound;
}
function isNumberSkeleton(el) {
    return !!(el && typeof el === 'object' && el.type === 0 /* number */);
}
function isDateTimeSkeleton(el) {
    return !!(el && typeof el === 'object' && el.type === 1 /* dateTime */);
}

// tslint:disable:only-arrow-functions
// tslint:disable:object-literal-shorthand
// tslint:disable:trailing-comma
// tslint:disable:object-literal-sort-keys
// tslint:disable:one-variable-per-declaration
// tslint:disable:max-line-length
// tslint:disable:no-consecutive-blank-lines
// tslint:disable:align
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign$1 = (undefined && undefined.__assign) || function () {
    __assign$1 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};
var SyntaxError = /** @class */ (function (_super) {
    __extends(SyntaxError, _super);
    function SyntaxError(message, expected, found, location) {
        var _this = _super.call(this) || this;
        _this.message = message;
        _this.expected = expected;
        _this.found = found;
        _this.location = location;
        _this.name = "SyntaxError";
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(_this, SyntaxError);
        }
        return _this;
    }
    SyntaxError.buildMessage = function (expected, found) {
        function hex(ch) {
            return ch.charCodeAt(0).toString(16).toUpperCase();
        }
        function literalEscape(s) {
            return s
                .replace(/\\/g, "\\\\")
                .replace(/"/g, "\\\"")
                .replace(/\0/g, "\\0")
                .replace(/\t/g, "\\t")
                .replace(/\n/g, "\\n")
                .replace(/\r/g, "\\r")
                .replace(/[\x00-\x0F]/g, function (ch) { return "\\x0" + hex(ch); })
                .replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) { return "\\x" + hex(ch); });
        }
        function classEscape(s) {
            return s
                .replace(/\\/g, "\\\\")
                .replace(/\]/g, "\\]")
                .replace(/\^/g, "\\^")
                .replace(/-/g, "\\-")
                .replace(/\0/g, "\\0")
                .replace(/\t/g, "\\t")
                .replace(/\n/g, "\\n")
                .replace(/\r/g, "\\r")
                .replace(/[\x00-\x0F]/g, function (ch) { return "\\x0" + hex(ch); })
                .replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) { return "\\x" + hex(ch); });
        }
        function describeExpectation(expectation) {
            switch (expectation.type) {
                case "literal":
                    return "\"" + literalEscape(expectation.text) + "\"";
                case "class":
                    var escapedParts = expectation.parts.map(function (part) {
                        return Array.isArray(part)
                            ? classEscape(part[0]) + "-" + classEscape(part[1])
                            : classEscape(part);
                    });
                    return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
                case "any":
                    return "any character";
                case "end":
                    return "end of input";
                case "other":
                    return expectation.description;
            }
        }
        function describeExpected(expected1) {
            var descriptions = expected1.map(describeExpectation);
            var i;
            var j;
            descriptions.sort();
            if (descriptions.length > 0) {
                for (i = 1, j = 1; i < descriptions.length; i++) {
                    if (descriptions[i - 1] !== descriptions[i]) {
                        descriptions[j] = descriptions[i];
                        j++;
                    }
                }
                descriptions.length = j;
            }
            switch (descriptions.length) {
                case 1:
                    return descriptions[0];
                case 2:
                    return descriptions[0] + " or " + descriptions[1];
                default:
                    return descriptions.slice(0, -1).join(", ")
                        + ", or "
                        + descriptions[descriptions.length - 1];
            }
        }
        function describeFound(found1) {
            return found1 ? "\"" + literalEscape(found1) + "\"" : "end of input";
        }
        return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
    };
    return SyntaxError;
}(Error));
function peg$parse(input, options) {
    options = options !== undefined ? options : {};
    var peg$FAILED = {};
    var peg$startRuleFunctions = { start: peg$parsestart };
    var peg$startRuleFunction = peg$parsestart;
    var peg$c0 = function (parts) {
        return parts.join('');
    };
    var peg$c1 = function (messageText) {
        return __assign$1({ type: TYPE.literal, value: messageText }, insertLocation());
    };
    var peg$c2 = "#";
    var peg$c3 = peg$literalExpectation("#", false);
    var peg$c4 = function () {
        return __assign$1({ type: TYPE.pound }, insertLocation());
    };
    var peg$c5 = peg$otherExpectation("argumentElement");
    var peg$c6 = "{";
    var peg$c7 = peg$literalExpectation("{", false);
    var peg$c8 = "}";
    var peg$c9 = peg$literalExpectation("}", false);
    var peg$c10 = function (value) {
        return __assign$1({ type: TYPE.argument, value: value }, insertLocation());
    };
    var peg$c11 = peg$otherExpectation("numberSkeletonId");
    var peg$c12 = /^['\/{}]/;
    var peg$c13 = peg$classExpectation(["'", "/", "{", "}"], false, false);
    var peg$c14 = peg$anyExpectation();
    var peg$c15 = peg$otherExpectation("numberSkeletonTokenOption");
    var peg$c16 = "/";
    var peg$c17 = peg$literalExpectation("/", false);
    var peg$c18 = function (option) { return option; };
    var peg$c19 = peg$otherExpectation("numberSkeletonToken");
    var peg$c20 = function (stem, options) {
        return { stem: stem, options: options };
    };
    var peg$c21 = function (tokens) {
        return __assign$1({ type: 0 /* number */, tokens: tokens }, insertLocation());
    };
    var peg$c22 = "::";
    var peg$c23 = peg$literalExpectation("::", false);
    var peg$c24 = function (skeleton) { return skeleton; };
    var peg$c25 = function () { messageCtx.push('numberArgStyle'); return true; };
    var peg$c26 = function (style) {
        messageCtx.pop();
        return style.replace(/\s*$/, '');
    };
    var peg$c27 = ",";
    var peg$c28 = peg$literalExpectation(",", false);
    var peg$c29 = "number";
    var peg$c30 = peg$literalExpectation("number", false);
    var peg$c31 = function (value, type, style) {
        return __assign$1({ type: type === 'number' ? TYPE.number : type === 'date' ? TYPE.date : TYPE.time, style: style && style[2], value: value }, insertLocation());
    };
    var peg$c32 = "'";
    var peg$c33 = peg$literalExpectation("'", false);
    var peg$c34 = /^[^']/;
    var peg$c35 = peg$classExpectation(["'"], true, false);
    var peg$c36 = /^[^a-zA-Z'{}]/;
    var peg$c37 = peg$classExpectation([["a", "z"], ["A", "Z"], "'", "{", "}"], true, false);
    var peg$c38 = /^[a-zA-Z]/;
    var peg$c39 = peg$classExpectation([["a", "z"], ["A", "Z"]], false, false);
    var peg$c40 = function (pattern) {
        return __assign$1({ type: 1 /* dateTime */, pattern: pattern }, insertLocation());
    };
    var peg$c41 = function () { messageCtx.push('dateOrTimeArgStyle'); return true; };
    var peg$c42 = "date";
    var peg$c43 = peg$literalExpectation("date", false);
    var peg$c44 = "time";
    var peg$c45 = peg$literalExpectation("time", false);
    var peg$c46 = "plural";
    var peg$c47 = peg$literalExpectation("plural", false);
    var peg$c48 = "selectordinal";
    var peg$c49 = peg$literalExpectation("selectordinal", false);
    var peg$c50 = "offset:";
    var peg$c51 = peg$literalExpectation("offset:", false);
    var peg$c52 = function (value, pluralType, offset, options) {
        return __assign$1({ type: TYPE.plural, pluralType: pluralType === 'plural' ? 'cardinal' : 'ordinal', value: value, offset: offset ? offset[2] : 0, options: options.reduce(function (all, _a) {
                var id = _a.id, value = _a.value, optionLocation = _a.location;
                if (id in all) {
                    error("Duplicate option \"" + id + "\" in plural element: \"" + text() + "\"", location());
                }
                all[id] = {
                    value: value,
                    location: optionLocation
                };
                return all;
            }, {}) }, insertLocation());
    };
    var peg$c53 = "select";
    var peg$c54 = peg$literalExpectation("select", false);
    var peg$c55 = function (value, options) {
        return __assign$1({ type: TYPE.select, value: value, options: options.reduce(function (all, _a) {
                var id = _a.id, value = _a.value, optionLocation = _a.location;
                if (id in all) {
                    error("Duplicate option \"" + id + "\" in select element: \"" + text() + "\"", location());
                }
                all[id] = {
                    value: value,
                    location: optionLocation
                };
                return all;
            }, {}) }, insertLocation());
    };
    var peg$c56 = "=";
    var peg$c57 = peg$literalExpectation("=", false);
    var peg$c58 = function (id) { messageCtx.push('select'); return true; };
    var peg$c59 = function (id, value) {
        messageCtx.pop();
        return __assign$1({ id: id,
            value: value }, insertLocation());
    };
    var peg$c60 = function (id) { messageCtx.push('plural'); return true; };
    var peg$c61 = function (id, value) {
        messageCtx.pop();
        return __assign$1({ id: id,
            value: value }, insertLocation());
    };
    var peg$c62 = peg$otherExpectation("whitespace");
    var peg$c63 = /^[\t-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
    var peg$c64 = peg$classExpectation([["\t", "\r"], " ", "\x85", "\xA0", "\u1680", ["\u2000", "\u200A"], "\u2028", "\u2029", "\u202F", "\u205F", "\u3000"], false, false);
    var peg$c65 = peg$otherExpectation("syntax pattern");
    var peg$c66 = /^[!-\/:-@[-\^`{-~\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46]/;
    var peg$c67 = peg$classExpectation([["!", "/"], [":", "@"], ["[", "^"], "`", ["{", "~"], ["\xA1", "\xA7"], "\xA9", "\xAB", "\xAC", "\xAE", "\xB0", "\xB1", "\xB6", "\xBB", "\xBF", "\xD7", "\xF7", ["\u2010", "\u2027"], ["\u2030", "\u203E"], ["\u2041", "\u2053"], ["\u2055", "\u205E"], ["\u2190", "\u245F"], ["\u2500", "\u2775"], ["\u2794", "\u2BFF"], ["\u2E00", "\u2E7F"], ["\u3001", "\u3003"], ["\u3008", "\u3020"], "\u3030", "\uFD3E", "\uFD3F", "\uFE45", "\uFE46"], false, false);
    var peg$c68 = peg$otherExpectation("optional whitespace");
    var peg$c69 = peg$otherExpectation("number");
    var peg$c70 = "-";
    var peg$c71 = peg$literalExpectation("-", false);
    var peg$c72 = function (negative, num) {
        return num
            ? negative
                ? -num
                : num
            : 0;
    };
    var peg$c74 = peg$otherExpectation("double apostrophes");
    var peg$c75 = "''";
    var peg$c76 = peg$literalExpectation("''", false);
    var peg$c77 = function () { return "'"; };
    var peg$c78 = function (escapedChar, quotedChars) {
        return escapedChar + quotedChars.replace("''", "'");
    };
    var peg$c79 = function (x) {
        return (x !== '{' &&
            !(isInPluralOption() && x === '#') &&
            !(isNestedMessageText() && x === '}'));
    };
    var peg$c80 = "\n";
    var peg$c81 = peg$literalExpectation("\n", false);
    var peg$c82 = function (x) {
        return x === '{' || x === '}' || (isInPluralOption() && x === '#');
    };
    var peg$c83 = peg$otherExpectation("argNameOrNumber");
    var peg$c84 = peg$otherExpectation("argNumber");
    var peg$c85 = "0";
    var peg$c86 = peg$literalExpectation("0", false);
    var peg$c87 = function () { return 0; };
    var peg$c88 = /^[1-9]/;
    var peg$c89 = peg$classExpectation([["1", "9"]], false, false);
    var peg$c90 = /^[0-9]/;
    var peg$c91 = peg$classExpectation([["0", "9"]], false, false);
    var peg$c92 = function (digits) {
        return parseInt(digits.join(''), 10);
    };
    var peg$c93 = peg$otherExpectation("argName");
    var peg$currPos = 0;
    var peg$savedPos = 0;
    var peg$posDetailsCache = [{ line: 1, column: 1 }];
    var peg$maxFailPos = 0;
    var peg$maxFailExpected = [];
    var peg$silentFails = 0;
    var peg$result;
    if (options.startRule !== undefined) {
        if (!(options.startRule in peg$startRuleFunctions)) {
            throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
        }
        peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }
    function text() {
        return input.substring(peg$savedPos, peg$currPos);
    }
    function location() {
        return peg$computeLocation(peg$savedPos, peg$currPos);
    }
    function error(message, location1) {
        location1 = location1 !== undefined
            ? location1
            : peg$computeLocation(peg$savedPos, peg$currPos);
        throw peg$buildSimpleError(message, location1);
    }
    function peg$literalExpectation(text1, ignoreCase) {
        return { type: "literal", text: text1, ignoreCase: ignoreCase };
    }
    function peg$classExpectation(parts, inverted, ignoreCase) {
        return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
    }
    function peg$anyExpectation() {
        return { type: "any" };
    }
    function peg$endExpectation() {
        return { type: "end" };
    }
    function peg$otherExpectation(description) {
        return { type: "other", description: description };
    }
    function peg$computePosDetails(pos) {
        var details = peg$posDetailsCache[pos];
        var p;
        if (details) {
            return details;
        }
        else {
            p = pos - 1;
            while (!peg$posDetailsCache[p]) {
                p--;
            }
            details = peg$posDetailsCache[p];
            details = {
                line: details.line,
                column: details.column
            };
            while (p < pos) {
                if (input.charCodeAt(p) === 10) {
                    details.line++;
                    details.column = 1;
                }
                else {
                    details.column++;
                }
                p++;
            }
            peg$posDetailsCache[pos] = details;
            return details;
        }
    }
    function peg$computeLocation(startPos, endPos) {
        var startPosDetails = peg$computePosDetails(startPos);
        var endPosDetails = peg$computePosDetails(endPos);
        return {
            start: {
                offset: startPos,
                line: startPosDetails.line,
                column: startPosDetails.column
            },
            end: {
                offset: endPos,
                line: endPosDetails.line,
                column: endPosDetails.column
            }
        };
    }
    function peg$fail(expected1) {
        if (peg$currPos < peg$maxFailPos) {
            return;
        }
        if (peg$currPos > peg$maxFailPos) {
            peg$maxFailPos = peg$currPos;
            peg$maxFailExpected = [];
        }
        peg$maxFailExpected.push(expected1);
    }
    function peg$buildSimpleError(message, location1) {
        return new SyntaxError(message, [], "", location1);
    }
    function peg$buildStructuredError(expected1, found, location1) {
        return new SyntaxError(SyntaxError.buildMessage(expected1, found), expected1, found, location1);
    }
    function peg$parsestart() {
        var s0;
        s0 = peg$parsemessage();
        return s0;
    }
    function peg$parsemessage() {
        var s0, s1;
        s0 = [];
        s1 = peg$parsemessageElement();
        while (s1 !== peg$FAILED) {
            s0.push(s1);
            s1 = peg$parsemessageElement();
        }
        return s0;
    }
    function peg$parsemessageElement() {
        var s0;
        s0 = peg$parseliteralElement();
        if (s0 === peg$FAILED) {
            s0 = peg$parseargumentElement();
            if (s0 === peg$FAILED) {
                s0 = peg$parsesimpleFormatElement();
                if (s0 === peg$FAILED) {
                    s0 = peg$parsepluralElement();
                    if (s0 === peg$FAILED) {
                        s0 = peg$parseselectElement();
                        if (s0 === peg$FAILED) {
                            s0 = peg$parsepoundElement();
                        }
                    }
                }
            }
        }
        return s0;
    }
    function peg$parsemessageText() {
        var s0, s1, s2;
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parsedoubleApostrophes();
        if (s2 === peg$FAILED) {
            s2 = peg$parsequotedString();
            if (s2 === peg$FAILED) {
                s2 = peg$parseunquotedString();
            }
        }
        if (s2 !== peg$FAILED) {
            while (s2 !== peg$FAILED) {
                s1.push(s2);
                s2 = peg$parsedoubleApostrophes();
                if (s2 === peg$FAILED) {
                    s2 = peg$parsequotedString();
                    if (s2 === peg$FAILED) {
                        s2 = peg$parseunquotedString();
                    }
                }
            }
        }
        else {
            s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c0(s1);
        }
        s0 = s1;
        return s0;
    }
    function peg$parseliteralElement() {
        var s0, s1;
        s0 = peg$currPos;
        s1 = peg$parsemessageText();
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c1(s1);
        }
        s0 = s1;
        return s0;
    }
    function peg$parsepoundElement() {
        var s0, s1;
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 35) {
            s1 = peg$c2;
            peg$currPos++;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c3);
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c4();
        }
        s0 = s1;
        return s0;
    }
    function peg$parseargumentElement() {
        var s0, s1, s2, s3, s4, s5;
        peg$silentFails++;
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 123) {
            s1 = peg$c6;
            peg$currPos++;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c7);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parse_();
            if (s2 !== peg$FAILED) {
                s3 = peg$parseargNameOrNumber();
                if (s3 !== peg$FAILED) {
                    s4 = peg$parse_();
                    if (s4 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 125) {
                            s5 = peg$c8;
                            peg$currPos++;
                        }
                        else {
                            s5 = peg$FAILED;
                            if (peg$silentFails === 0) {
                                peg$fail(peg$c9);
                            }
                        }
                        if (s5 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c10(s3);
                            s0 = s1;
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c5);
            }
        }
        return s0;
    }
    function peg$parsenumberSkeletonId() {
        var s0, s1, s2, s3, s4;
        peg$silentFails++;
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$currPos;
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parsewhiteSpace();
        if (s4 === peg$FAILED) {
            if (peg$c12.test(input.charAt(peg$currPos))) {
                s4 = input.charAt(peg$currPos);
                peg$currPos++;
            }
            else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c13);
                }
            }
        }
        peg$silentFails--;
        if (s4 === peg$FAILED) {
            s3 = undefined;
        }
        else {
            peg$currPos = s3;
            s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
            if (input.length > peg$currPos) {
                s4 = input.charAt(peg$currPos);
                peg$currPos++;
            }
            else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c14);
                }
            }
            if (s4 !== peg$FAILED) {
                s3 = [s3, s4];
                s2 = s3;
            }
            else {
                peg$currPos = s2;
                s2 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s2;
            s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
            while (s2 !== peg$FAILED) {
                s1.push(s2);
                s2 = peg$currPos;
                s3 = peg$currPos;
                peg$silentFails++;
                s4 = peg$parsewhiteSpace();
                if (s4 === peg$FAILED) {
                    if (peg$c12.test(input.charAt(peg$currPos))) {
                        s4 = input.charAt(peg$currPos);
                        peg$currPos++;
                    }
                    else {
                        s4 = peg$FAILED;
                        if (peg$silentFails === 0) {
                            peg$fail(peg$c13);
                        }
                    }
                }
                peg$silentFails--;
                if (s4 === peg$FAILED) {
                    s3 = undefined;
                }
                else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                }
                if (s3 !== peg$FAILED) {
                    if (input.length > peg$currPos) {
                        s4 = input.charAt(peg$currPos);
                        peg$currPos++;
                    }
                    else {
                        s4 = peg$FAILED;
                        if (peg$silentFails === 0) {
                            peg$fail(peg$c14);
                        }
                    }
                    if (s4 !== peg$FAILED) {
                        s3 = [s3, s4];
                        s2 = s3;
                    }
                    else {
                        peg$currPos = s2;
                        s2 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s2;
                    s2 = peg$FAILED;
                }
            }
        }
        else {
            s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
            s0 = input.substring(s0, peg$currPos);
        }
        else {
            s0 = s1;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c11);
            }
        }
        return s0;
    }
    function peg$parsenumberSkeletonTokenOption() {
        var s0, s1, s2;
        peg$silentFails++;
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 47) {
            s1 = peg$c16;
            peg$currPos++;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c17);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parsenumberSkeletonId();
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c18(s2);
                s0 = s1;
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c15);
            }
        }
        return s0;
    }
    function peg$parsenumberSkeletonToken() {
        var s0, s1, s2, s3, s4;
        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$parse_();
        if (s1 !== peg$FAILED) {
            s2 = peg$parsenumberSkeletonId();
            if (s2 !== peg$FAILED) {
                s3 = [];
                s4 = peg$parsenumberSkeletonTokenOption();
                while (s4 !== peg$FAILED) {
                    s3.push(s4);
                    s4 = peg$parsenumberSkeletonTokenOption();
                }
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c20(s2, s3);
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c19);
            }
        }
        return s0;
    }
    function peg$parsenumberSkeleton() {
        var s0, s1, s2;
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parsenumberSkeletonToken();
        if (s2 !== peg$FAILED) {
            while (s2 !== peg$FAILED) {
                s1.push(s2);
                s2 = peg$parsenumberSkeletonToken();
            }
        }
        else {
            s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c21(s1);
        }
        s0 = s1;
        return s0;
    }
    function peg$parsenumberArgStyle() {
        var s0, s1, s2;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 2) === peg$c22) {
            s1 = peg$c22;
            peg$currPos += 2;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c23);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parsenumberSkeleton();
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c24(s2);
                s0 = s1;
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            peg$savedPos = peg$currPos;
            s1 = peg$c25();
            if (s1) {
                s1 = undefined;
            }
            else {
                s1 = peg$FAILED;
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parsemessageText();
                if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c26(s2);
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        return s0;
    }
    function peg$parsenumberFormatElement() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 123) {
            s1 = peg$c6;
            peg$currPos++;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c7);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parse_();
            if (s2 !== peg$FAILED) {
                s3 = peg$parseargNameOrNumber();
                if (s3 !== peg$FAILED) {
                    s4 = peg$parse_();
                    if (s4 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 44) {
                            s5 = peg$c27;
                            peg$currPos++;
                        }
                        else {
                            s5 = peg$FAILED;
                            if (peg$silentFails === 0) {
                                peg$fail(peg$c28);
                            }
                        }
                        if (s5 !== peg$FAILED) {
                            s6 = peg$parse_();
                            if (s6 !== peg$FAILED) {
                                if (input.substr(peg$currPos, 6) === peg$c29) {
                                    s7 = peg$c29;
                                    peg$currPos += 6;
                                }
                                else {
                                    s7 = peg$FAILED;
                                    if (peg$silentFails === 0) {
                                        peg$fail(peg$c30);
                                    }
                                }
                                if (s7 !== peg$FAILED) {
                                    s8 = peg$parse_();
                                    if (s8 !== peg$FAILED) {
                                        s9 = peg$currPos;
                                        if (input.charCodeAt(peg$currPos) === 44) {
                                            s10 = peg$c27;
                                            peg$currPos++;
                                        }
                                        else {
                                            s10 = peg$FAILED;
                                            if (peg$silentFails === 0) {
                                                peg$fail(peg$c28);
                                            }
                                        }
                                        if (s10 !== peg$FAILED) {
                                            s11 = peg$parse_();
                                            if (s11 !== peg$FAILED) {
                                                s12 = peg$parsenumberArgStyle();
                                                if (s12 !== peg$FAILED) {
                                                    s10 = [s10, s11, s12];
                                                    s9 = s10;
                                                }
                                                else {
                                                    peg$currPos = s9;
                                                    s9 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s9;
                                                s9 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s9;
                                            s9 = peg$FAILED;
                                        }
                                        if (s9 === peg$FAILED) {
                                            s9 = null;
                                        }
                                        if (s9 !== peg$FAILED) {
                                            s10 = peg$parse_();
                                            if (s10 !== peg$FAILED) {
                                                if (input.charCodeAt(peg$currPos) === 125) {
                                                    s11 = peg$c8;
                                                    peg$currPos++;
                                                }
                                                else {
                                                    s11 = peg$FAILED;
                                                    if (peg$silentFails === 0) {
                                                        peg$fail(peg$c9);
                                                    }
                                                }
                                                if (s11 !== peg$FAILED) {
                                                    peg$savedPos = s0;
                                                    s1 = peg$c31(s3, s7, s9);
                                                    s0 = s1;
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parsedateTimeSkeletonLiteral() {
        var s0, s1, s2, s3;
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 39) {
            s1 = peg$c32;
            peg$currPos++;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c33);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = [];
            s3 = peg$parsedoubleApostrophes();
            if (s3 === peg$FAILED) {
                if (peg$c34.test(input.charAt(peg$currPos))) {
                    s3 = input.charAt(peg$currPos);
                    peg$currPos++;
                }
                else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c35);
                    }
                }
            }
            if (s3 !== peg$FAILED) {
                while (s3 !== peg$FAILED) {
                    s2.push(s3);
                    s3 = peg$parsedoubleApostrophes();
                    if (s3 === peg$FAILED) {
                        if (peg$c34.test(input.charAt(peg$currPos))) {
                            s3 = input.charAt(peg$currPos);
                            peg$currPos++;
                        }
                        else {
                            s3 = peg$FAILED;
                            if (peg$silentFails === 0) {
                                peg$fail(peg$c35);
                            }
                        }
                    }
                }
            }
            else {
                s2 = peg$FAILED;
            }
            if (s2 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 39) {
                    s3 = peg$c32;
                    peg$currPos++;
                }
                else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c33);
                    }
                }
                if (s3 !== peg$FAILED) {
                    s1 = [s1, s2, s3];
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
            s0 = [];
            s1 = peg$parsedoubleApostrophes();
            if (s1 === peg$FAILED) {
                if (peg$c36.test(input.charAt(peg$currPos))) {
                    s1 = input.charAt(peg$currPos);
                    peg$currPos++;
                }
                else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c37);
                    }
                }
            }
            if (s1 !== peg$FAILED) {
                while (s1 !== peg$FAILED) {
                    s0.push(s1);
                    s1 = peg$parsedoubleApostrophes();
                    if (s1 === peg$FAILED) {
                        if (peg$c36.test(input.charAt(peg$currPos))) {
                            s1 = input.charAt(peg$currPos);
                            peg$currPos++;
                        }
                        else {
                            s1 = peg$FAILED;
                            if (peg$silentFails === 0) {
                                peg$fail(peg$c37);
                            }
                        }
                    }
                }
            }
            else {
                s0 = peg$FAILED;
            }
        }
        return s0;
    }
    function peg$parsedateTimeSkeletonPattern() {
        var s0, s1;
        s0 = [];
        if (peg$c38.test(input.charAt(peg$currPos))) {
            s1 = input.charAt(peg$currPos);
            peg$currPos++;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c39);
            }
        }
        if (s1 !== peg$FAILED) {
            while (s1 !== peg$FAILED) {
                s0.push(s1);
                if (peg$c38.test(input.charAt(peg$currPos))) {
                    s1 = input.charAt(peg$currPos);
                    peg$currPos++;
                }
                else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c39);
                    }
                }
            }
        }
        else {
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parsedateTimeSkeleton() {
        var s0, s1, s2, s3;
        s0 = peg$currPos;
        s1 = peg$currPos;
        s2 = [];
        s3 = peg$parsedateTimeSkeletonLiteral();
        if (s3 === peg$FAILED) {
            s3 = peg$parsedateTimeSkeletonPattern();
        }
        if (s3 !== peg$FAILED) {
            while (s3 !== peg$FAILED) {
                s2.push(s3);
                s3 = peg$parsedateTimeSkeletonLiteral();
                if (s3 === peg$FAILED) {
                    s3 = peg$parsedateTimeSkeletonPattern();
                }
            }
        }
        else {
            s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
            s1 = input.substring(s1, peg$currPos);
        }
        else {
            s1 = s2;
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c40(s1);
        }
        s0 = s1;
        return s0;
    }
    function peg$parsedateOrTimeArgStyle() {
        var s0, s1, s2;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 2) === peg$c22) {
            s1 = peg$c22;
            peg$currPos += 2;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c23);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parsedateTimeSkeleton();
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c24(s2);
                s0 = s1;
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            peg$savedPos = peg$currPos;
            s1 = peg$c41();
            if (s1) {
                s1 = undefined;
            }
            else {
                s1 = peg$FAILED;
            }
            if (s1 !== peg$FAILED) {
                s2 = peg$parsemessageText();
                if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c26(s2);
                    s0 = s1;
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        return s0;
    }
    function peg$parsedateOrTimeFormatElement() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 123) {
            s1 = peg$c6;
            peg$currPos++;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c7);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parse_();
            if (s2 !== peg$FAILED) {
                s3 = peg$parseargNameOrNumber();
                if (s3 !== peg$FAILED) {
                    s4 = peg$parse_();
                    if (s4 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 44) {
                            s5 = peg$c27;
                            peg$currPos++;
                        }
                        else {
                            s5 = peg$FAILED;
                            if (peg$silentFails === 0) {
                                peg$fail(peg$c28);
                            }
                        }
                        if (s5 !== peg$FAILED) {
                            s6 = peg$parse_();
                            if (s6 !== peg$FAILED) {
                                if (input.substr(peg$currPos, 4) === peg$c42) {
                                    s7 = peg$c42;
                                    peg$currPos += 4;
                                }
                                else {
                                    s7 = peg$FAILED;
                                    if (peg$silentFails === 0) {
                                        peg$fail(peg$c43);
                                    }
                                }
                                if (s7 === peg$FAILED) {
                                    if (input.substr(peg$currPos, 4) === peg$c44) {
                                        s7 = peg$c44;
                                        peg$currPos += 4;
                                    }
                                    else {
                                        s7 = peg$FAILED;
                                        if (peg$silentFails === 0) {
                                            peg$fail(peg$c45);
                                        }
                                    }
                                }
                                if (s7 !== peg$FAILED) {
                                    s8 = peg$parse_();
                                    if (s8 !== peg$FAILED) {
                                        s9 = peg$currPos;
                                        if (input.charCodeAt(peg$currPos) === 44) {
                                            s10 = peg$c27;
                                            peg$currPos++;
                                        }
                                        else {
                                            s10 = peg$FAILED;
                                            if (peg$silentFails === 0) {
                                                peg$fail(peg$c28);
                                            }
                                        }
                                        if (s10 !== peg$FAILED) {
                                            s11 = peg$parse_();
                                            if (s11 !== peg$FAILED) {
                                                s12 = peg$parsedateOrTimeArgStyle();
                                                if (s12 !== peg$FAILED) {
                                                    s10 = [s10, s11, s12];
                                                    s9 = s10;
                                                }
                                                else {
                                                    peg$currPos = s9;
                                                    s9 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s9;
                                                s9 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s9;
                                            s9 = peg$FAILED;
                                        }
                                        if (s9 === peg$FAILED) {
                                            s9 = null;
                                        }
                                        if (s9 !== peg$FAILED) {
                                            s10 = peg$parse_();
                                            if (s10 !== peg$FAILED) {
                                                if (input.charCodeAt(peg$currPos) === 125) {
                                                    s11 = peg$c8;
                                                    peg$currPos++;
                                                }
                                                else {
                                                    s11 = peg$FAILED;
                                                    if (peg$silentFails === 0) {
                                                        peg$fail(peg$c9);
                                                    }
                                                }
                                                if (s11 !== peg$FAILED) {
                                                    peg$savedPos = s0;
                                                    s1 = peg$c31(s3, s7, s9);
                                                    s0 = s1;
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parsesimpleFormatElement() {
        var s0;
        s0 = peg$parsenumberFormatElement();
        if (s0 === peg$FAILED) {
            s0 = peg$parsedateOrTimeFormatElement();
        }
        return s0;
    }
    function peg$parsepluralElement() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15;
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 123) {
            s1 = peg$c6;
            peg$currPos++;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c7);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parse_();
            if (s2 !== peg$FAILED) {
                s3 = peg$parseargNameOrNumber();
                if (s3 !== peg$FAILED) {
                    s4 = peg$parse_();
                    if (s4 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 44) {
                            s5 = peg$c27;
                            peg$currPos++;
                        }
                        else {
                            s5 = peg$FAILED;
                            if (peg$silentFails === 0) {
                                peg$fail(peg$c28);
                            }
                        }
                        if (s5 !== peg$FAILED) {
                            s6 = peg$parse_();
                            if (s6 !== peg$FAILED) {
                                if (input.substr(peg$currPos, 6) === peg$c46) {
                                    s7 = peg$c46;
                                    peg$currPos += 6;
                                }
                                else {
                                    s7 = peg$FAILED;
                                    if (peg$silentFails === 0) {
                                        peg$fail(peg$c47);
                                    }
                                }
                                if (s7 === peg$FAILED) {
                                    if (input.substr(peg$currPos, 13) === peg$c48) {
                                        s7 = peg$c48;
                                        peg$currPos += 13;
                                    }
                                    else {
                                        s7 = peg$FAILED;
                                        if (peg$silentFails === 0) {
                                            peg$fail(peg$c49);
                                        }
                                    }
                                }
                                if (s7 !== peg$FAILED) {
                                    s8 = peg$parse_();
                                    if (s8 !== peg$FAILED) {
                                        if (input.charCodeAt(peg$currPos) === 44) {
                                            s9 = peg$c27;
                                            peg$currPos++;
                                        }
                                        else {
                                            s9 = peg$FAILED;
                                            if (peg$silentFails === 0) {
                                                peg$fail(peg$c28);
                                            }
                                        }
                                        if (s9 !== peg$FAILED) {
                                            s10 = peg$parse_();
                                            if (s10 !== peg$FAILED) {
                                                s11 = peg$currPos;
                                                if (input.substr(peg$currPos, 7) === peg$c50) {
                                                    s12 = peg$c50;
                                                    peg$currPos += 7;
                                                }
                                                else {
                                                    s12 = peg$FAILED;
                                                    if (peg$silentFails === 0) {
                                                        peg$fail(peg$c51);
                                                    }
                                                }
                                                if (s12 !== peg$FAILED) {
                                                    s13 = peg$parse_();
                                                    if (s13 !== peg$FAILED) {
                                                        s14 = peg$parsenumber();
                                                        if (s14 !== peg$FAILED) {
                                                            s12 = [s12, s13, s14];
                                                            s11 = s12;
                                                        }
                                                        else {
                                                            peg$currPos = s11;
                                                            s11 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s11;
                                                        s11 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s11;
                                                    s11 = peg$FAILED;
                                                }
                                                if (s11 === peg$FAILED) {
                                                    s11 = null;
                                                }
                                                if (s11 !== peg$FAILED) {
                                                    s12 = peg$parse_();
                                                    if (s12 !== peg$FAILED) {
                                                        s13 = [];
                                                        s14 = peg$parsepluralOption();
                                                        if (s14 !== peg$FAILED) {
                                                            while (s14 !== peg$FAILED) {
                                                                s13.push(s14);
                                                                s14 = peg$parsepluralOption();
                                                            }
                                                        }
                                                        else {
                                                            s13 = peg$FAILED;
                                                        }
                                                        if (s13 !== peg$FAILED) {
                                                            s14 = peg$parse_();
                                                            if (s14 !== peg$FAILED) {
                                                                if (input.charCodeAt(peg$currPos) === 125) {
                                                                    s15 = peg$c8;
                                                                    peg$currPos++;
                                                                }
                                                                else {
                                                                    s15 = peg$FAILED;
                                                                    if (peg$silentFails === 0) {
                                                                        peg$fail(peg$c9);
                                                                    }
                                                                }
                                                                if (s15 !== peg$FAILED) {
                                                                    peg$savedPos = s0;
                                                                    s1 = peg$c52(s3, s7, s11, s13);
                                                                    s0 = s1;
                                                                }
                                                                else {
                                                                    peg$currPos = s0;
                                                                    s0 = peg$FAILED;
                                                                }
                                                            }
                                                            else {
                                                                peg$currPos = s0;
                                                                s0 = peg$FAILED;
                                                            }
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parseselectElement() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13;
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 123) {
            s1 = peg$c6;
            peg$currPos++;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c7);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parse_();
            if (s2 !== peg$FAILED) {
                s3 = peg$parseargNameOrNumber();
                if (s3 !== peg$FAILED) {
                    s4 = peg$parse_();
                    if (s4 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 44) {
                            s5 = peg$c27;
                            peg$currPos++;
                        }
                        else {
                            s5 = peg$FAILED;
                            if (peg$silentFails === 0) {
                                peg$fail(peg$c28);
                            }
                        }
                        if (s5 !== peg$FAILED) {
                            s6 = peg$parse_();
                            if (s6 !== peg$FAILED) {
                                if (input.substr(peg$currPos, 6) === peg$c53) {
                                    s7 = peg$c53;
                                    peg$currPos += 6;
                                }
                                else {
                                    s7 = peg$FAILED;
                                    if (peg$silentFails === 0) {
                                        peg$fail(peg$c54);
                                    }
                                }
                                if (s7 !== peg$FAILED) {
                                    s8 = peg$parse_();
                                    if (s8 !== peg$FAILED) {
                                        if (input.charCodeAt(peg$currPos) === 44) {
                                            s9 = peg$c27;
                                            peg$currPos++;
                                        }
                                        else {
                                            s9 = peg$FAILED;
                                            if (peg$silentFails === 0) {
                                                peg$fail(peg$c28);
                                            }
                                        }
                                        if (s9 !== peg$FAILED) {
                                            s10 = peg$parse_();
                                            if (s10 !== peg$FAILED) {
                                                s11 = [];
                                                s12 = peg$parseselectOption();
                                                if (s12 !== peg$FAILED) {
                                                    while (s12 !== peg$FAILED) {
                                                        s11.push(s12);
                                                        s12 = peg$parseselectOption();
                                                    }
                                                }
                                                else {
                                                    s11 = peg$FAILED;
                                                }
                                                if (s11 !== peg$FAILED) {
                                                    s12 = peg$parse_();
                                                    if (s12 !== peg$FAILED) {
                                                        if (input.charCodeAt(peg$currPos) === 125) {
                                                            s13 = peg$c8;
                                                            peg$currPos++;
                                                        }
                                                        else {
                                                            s13 = peg$FAILED;
                                                            if (peg$silentFails === 0) {
                                                                peg$fail(peg$c9);
                                                            }
                                                        }
                                                        if (s13 !== peg$FAILED) {
                                                            peg$savedPos = s0;
                                                            s1 = peg$c55(s3, s11);
                                                            s0 = s1;
                                                        }
                                                        else {
                                                            peg$currPos = s0;
                                                            s0 = peg$FAILED;
                                                        }
                                                    }
                                                    else {
                                                        peg$currPos = s0;
                                                        s0 = peg$FAILED;
                                                    }
                                                }
                                                else {
                                                    peg$currPos = s0;
                                                    s0 = peg$FAILED;
                                                }
                                            }
                                            else {
                                                peg$currPos = s0;
                                                s0 = peg$FAILED;
                                            }
                                        }
                                        else {
                                            peg$currPos = s0;
                                            s0 = peg$FAILED;
                                        }
                                    }
                                    else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parsepluralRuleSelectValue() {
        var s0, s1, s2, s3;
        s0 = peg$currPos;
        s1 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 61) {
            s2 = peg$c56;
            peg$currPos++;
        }
        else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c57);
            }
        }
        if (s2 !== peg$FAILED) {
            s3 = peg$parsenumber();
            if (s3 !== peg$FAILED) {
                s2 = [s2, s3];
                s1 = s2;
            }
            else {
                peg$currPos = s1;
                s1 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s1;
            s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
            s0 = input.substring(s0, peg$currPos);
        }
        else {
            s0 = s1;
        }
        if (s0 === peg$FAILED) {
            s0 = peg$parseargName();
        }
        return s0;
    }
    function peg$parseselectOption() {
        var s0, s1, s2, s3, s4, s5, s6, s7;
        s0 = peg$currPos;
        s1 = peg$parse_();
        if (s1 !== peg$FAILED) {
            s2 = peg$parseargName();
            if (s2 !== peg$FAILED) {
                s3 = peg$parse_();
                if (s3 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 123) {
                        s4 = peg$c6;
                        peg$currPos++;
                    }
                    else {
                        s4 = peg$FAILED;
                        if (peg$silentFails === 0) {
                            peg$fail(peg$c7);
                        }
                    }
                    if (s4 !== peg$FAILED) {
                        peg$savedPos = peg$currPos;
                        s5 = peg$c58();
                        if (s5) {
                            s5 = undefined;
                        }
                        else {
                            s5 = peg$FAILED;
                        }
                        if (s5 !== peg$FAILED) {
                            s6 = peg$parsemessage();
                            if (s6 !== peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 125) {
                                    s7 = peg$c8;
                                    peg$currPos++;
                                }
                                else {
                                    s7 = peg$FAILED;
                                    if (peg$silentFails === 0) {
                                        peg$fail(peg$c9);
                                    }
                                }
                                if (s7 !== peg$FAILED) {
                                    peg$savedPos = s0;
                                    s1 = peg$c59(s2, s6);
                                    s0 = s1;
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parsepluralOption() {
        var s0, s1, s2, s3, s4, s5, s6, s7;
        s0 = peg$currPos;
        s1 = peg$parse_();
        if (s1 !== peg$FAILED) {
            s2 = peg$parsepluralRuleSelectValue();
            if (s2 !== peg$FAILED) {
                s3 = peg$parse_();
                if (s3 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 123) {
                        s4 = peg$c6;
                        peg$currPos++;
                    }
                    else {
                        s4 = peg$FAILED;
                        if (peg$silentFails === 0) {
                            peg$fail(peg$c7);
                        }
                    }
                    if (s4 !== peg$FAILED) {
                        peg$savedPos = peg$currPos;
                        s5 = peg$c60();
                        if (s5) {
                            s5 = undefined;
                        }
                        else {
                            s5 = peg$FAILED;
                        }
                        if (s5 !== peg$FAILED) {
                            s6 = peg$parsemessage();
                            if (s6 !== peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 125) {
                                    s7 = peg$c8;
                                    peg$currPos++;
                                }
                                else {
                                    s7 = peg$FAILED;
                                    if (peg$silentFails === 0) {
                                        peg$fail(peg$c9);
                                    }
                                }
                                if (s7 !== peg$FAILED) {
                                    peg$savedPos = s0;
                                    s1 = peg$c61(s2, s6);
                                    s0 = s1;
                                }
                                else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            }
                            else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        }
                        else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parsewhiteSpace() {
        var s0;
        peg$silentFails++;
        if (peg$c63.test(input.charAt(peg$currPos))) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c64);
            }
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            if (peg$silentFails === 0) {
                peg$fail(peg$c62);
            }
        }
        return s0;
    }
    function peg$parsepatternSyntax() {
        var s0;
        peg$silentFails++;
        if (peg$c66.test(input.charAt(peg$currPos))) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
        }
        else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c67);
            }
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            if (peg$silentFails === 0) {
                peg$fail(peg$c65);
            }
        }
        return s0;
    }
    function peg$parse_() {
        var s0, s1, s2;
        peg$silentFails++;
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parsewhiteSpace();
        while (s2 !== peg$FAILED) {
            s1.push(s2);
            s2 = peg$parsewhiteSpace();
        }
        if (s1 !== peg$FAILED) {
            s0 = input.substring(s0, peg$currPos);
        }
        else {
            s0 = s1;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c68);
            }
        }
        return s0;
    }
    function peg$parsenumber() {
        var s0, s1, s2;
        peg$silentFails++;
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 45) {
            s1 = peg$c70;
            peg$currPos++;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c71);
            }
        }
        if (s1 === peg$FAILED) {
            s1 = null;
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseargNumber();
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c72(s1, s2);
                s0 = s1;
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c69);
            }
        }
        return s0;
    }
    function peg$parsedoubleApostrophes() {
        var s0, s1;
        peg$silentFails++;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 2) === peg$c75) {
            s1 = peg$c75;
            peg$currPos += 2;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c76);
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c77();
        }
        s0 = s1;
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c74);
            }
        }
        return s0;
    }
    function peg$parsequotedString() {
        var s0, s1, s2, s3, s4, s5;
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 39) {
            s1 = peg$c32;
            peg$currPos++;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c33);
            }
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseescapedChar();
            if (s2 !== peg$FAILED) {
                s3 = peg$currPos;
                s4 = [];
                if (input.substr(peg$currPos, 2) === peg$c75) {
                    s5 = peg$c75;
                    peg$currPos += 2;
                }
                else {
                    s5 = peg$FAILED;
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c76);
                    }
                }
                if (s5 === peg$FAILED) {
                    if (peg$c34.test(input.charAt(peg$currPos))) {
                        s5 = input.charAt(peg$currPos);
                        peg$currPos++;
                    }
                    else {
                        s5 = peg$FAILED;
                        if (peg$silentFails === 0) {
                            peg$fail(peg$c35);
                        }
                    }
                }
                while (s5 !== peg$FAILED) {
                    s4.push(s5);
                    if (input.substr(peg$currPos, 2) === peg$c75) {
                        s5 = peg$c75;
                        peg$currPos += 2;
                    }
                    else {
                        s5 = peg$FAILED;
                        if (peg$silentFails === 0) {
                            peg$fail(peg$c76);
                        }
                    }
                    if (s5 === peg$FAILED) {
                        if (peg$c34.test(input.charAt(peg$currPos))) {
                            s5 = input.charAt(peg$currPos);
                            peg$currPos++;
                        }
                        else {
                            s5 = peg$FAILED;
                            if (peg$silentFails === 0) {
                                peg$fail(peg$c35);
                            }
                        }
                    }
                }
                if (s4 !== peg$FAILED) {
                    s3 = input.substring(s3, peg$currPos);
                }
                else {
                    s3 = s4;
                }
                if (s3 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 39) {
                        s4 = peg$c32;
                        peg$currPos++;
                    }
                    else {
                        s4 = peg$FAILED;
                        if (peg$silentFails === 0) {
                            peg$fail(peg$c33);
                        }
                    }
                    if (s4 === peg$FAILED) {
                        s4 = null;
                    }
                    if (s4 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c78(s2, s3);
                        s0 = s1;
                    }
                    else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parseunquotedString() {
        var s0, s1, s2, s3;
        s0 = peg$currPos;
        s1 = peg$currPos;
        if (input.length > peg$currPos) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
        }
        else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c14);
            }
        }
        if (s2 !== peg$FAILED) {
            peg$savedPos = peg$currPos;
            s3 = peg$c79(s2);
            if (s3) {
                s3 = undefined;
            }
            else {
                s3 = peg$FAILED;
            }
            if (s3 !== peg$FAILED) {
                s2 = [s2, s3];
                s1 = s2;
            }
            else {
                peg$currPos = s1;
                s1 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s1;
            s1 = peg$FAILED;
        }
        if (s1 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 10) {
                s1 = peg$c80;
                peg$currPos++;
            }
            else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c81);
                }
            }
        }
        if (s1 !== peg$FAILED) {
            s0 = input.substring(s0, peg$currPos);
        }
        else {
            s0 = s1;
        }
        return s0;
    }
    function peg$parseescapedChar() {
        var s0, s1, s2, s3;
        s0 = peg$currPos;
        s1 = peg$currPos;
        if (input.length > peg$currPos) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
        }
        else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c14);
            }
        }
        if (s2 !== peg$FAILED) {
            peg$savedPos = peg$currPos;
            s3 = peg$c82(s2);
            if (s3) {
                s3 = undefined;
            }
            else {
                s3 = peg$FAILED;
            }
            if (s3 !== peg$FAILED) {
                s2 = [s2, s3];
                s1 = s2;
            }
            else {
                peg$currPos = s1;
                s1 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s1;
            s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
            s0 = input.substring(s0, peg$currPos);
        }
        else {
            s0 = s1;
        }
        return s0;
    }
    function peg$parseargNameOrNumber() {
        var s0, s1;
        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$parseargNumber();
        if (s1 === peg$FAILED) {
            s1 = peg$parseargName();
        }
        if (s1 !== peg$FAILED) {
            s0 = input.substring(s0, peg$currPos);
        }
        else {
            s0 = s1;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c83);
            }
        }
        return s0;
    }
    function peg$parseargNumber() {
        var s0, s1, s2, s3, s4;
        peg$silentFails++;
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 48) {
            s1 = peg$c85;
            peg$currPos++;
        }
        else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c86);
            }
        }
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c87();
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$currPos;
            if (peg$c88.test(input.charAt(peg$currPos))) {
                s2 = input.charAt(peg$currPos);
                peg$currPos++;
            }
            else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c89);
                }
            }
            if (s2 !== peg$FAILED) {
                s3 = [];
                if (peg$c90.test(input.charAt(peg$currPos))) {
                    s4 = input.charAt(peg$currPos);
                    peg$currPos++;
                }
                else {
                    s4 = peg$FAILED;
                    if (peg$silentFails === 0) {
                        peg$fail(peg$c91);
                    }
                }
                while (s4 !== peg$FAILED) {
                    s3.push(s4);
                    if (peg$c90.test(input.charAt(peg$currPos))) {
                        s4 = input.charAt(peg$currPos);
                        peg$currPos++;
                    }
                    else {
                        s4 = peg$FAILED;
                        if (peg$silentFails === 0) {
                            peg$fail(peg$c91);
                        }
                    }
                }
                if (s3 !== peg$FAILED) {
                    s2 = [s2, s3];
                    s1 = s2;
                }
                else {
                    peg$currPos = s1;
                    s1 = peg$FAILED;
                }
            }
            else {
                peg$currPos = s1;
                s1 = peg$FAILED;
            }
            if (s1 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c92(s1);
            }
            s0 = s1;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c84);
            }
        }
        return s0;
    }
    function peg$parseargName() {
        var s0, s1, s2, s3, s4;
        peg$silentFails++;
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$currPos;
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parsewhiteSpace();
        if (s4 === peg$FAILED) {
            s4 = peg$parsepatternSyntax();
        }
        peg$silentFails--;
        if (s4 === peg$FAILED) {
            s3 = undefined;
        }
        else {
            peg$currPos = s3;
            s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
            if (input.length > peg$currPos) {
                s4 = input.charAt(peg$currPos);
                peg$currPos++;
            }
            else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) {
                    peg$fail(peg$c14);
                }
            }
            if (s4 !== peg$FAILED) {
                s3 = [s3, s4];
                s2 = s3;
            }
            else {
                peg$currPos = s2;
                s2 = peg$FAILED;
            }
        }
        else {
            peg$currPos = s2;
            s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
            while (s2 !== peg$FAILED) {
                s1.push(s2);
                s2 = peg$currPos;
                s3 = peg$currPos;
                peg$silentFails++;
                s4 = peg$parsewhiteSpace();
                if (s4 === peg$FAILED) {
                    s4 = peg$parsepatternSyntax();
                }
                peg$silentFails--;
                if (s4 === peg$FAILED) {
                    s3 = undefined;
                }
                else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                }
                if (s3 !== peg$FAILED) {
                    if (input.length > peg$currPos) {
                        s4 = input.charAt(peg$currPos);
                        peg$currPos++;
                    }
                    else {
                        s4 = peg$FAILED;
                        if (peg$silentFails === 0) {
                            peg$fail(peg$c14);
                        }
                    }
                    if (s4 !== peg$FAILED) {
                        s3 = [s3, s4];
                        s2 = s3;
                    }
                    else {
                        peg$currPos = s2;
                        s2 = peg$FAILED;
                    }
                }
                else {
                    peg$currPos = s2;
                    s2 = peg$FAILED;
                }
            }
        }
        else {
            s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
            s0 = input.substring(s0, peg$currPos);
        }
        else {
            s0 = s1;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
                peg$fail(peg$c93);
            }
        }
        return s0;
    }
    var messageCtx = ['root'];
    function isNestedMessageText() {
        return messageCtx.length > 1;
    }
    function isInPluralOption() {
        return messageCtx[messageCtx.length - 1] === 'plural';
    }
    function insertLocation() {
        return options && options.captureLocation ? {
            location: location()
        } : {};
    }
    peg$result = peg$startRuleFunction();
    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
        return peg$result;
    }
    else {
        if (peg$result !== peg$FAILED && peg$currPos < input.length) {
            peg$fail(peg$endExpectation());
        }
        throw peg$buildStructuredError(peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length
            ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
            : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
    }
}
var pegParse = peg$parse;

var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var PLURAL_HASHTAG_REGEX = /(^|[^\\])#/g;
/**
 * Whether to convert `#` in plural rule options
 * to `{var, number}`
 * @param el AST Element
 * @param pluralStack current plural stack
 */
function normalizeHashtagInPlural(els) {
    els.forEach(function (el) {
        // If we're encountering a plural el
        if (!isPluralElement(el) && !isSelectElement(el)) {
            return;
        }
        // Go down the options and search for # in any literal element
        Object.keys(el.options).forEach(function (id) {
            var _a;
            var opt = el.options[id];
            // If we got a match, we have to split this
            // and inject a NumberElement in the middle
            var matchingLiteralElIndex = -1;
            var literalEl = undefined;
            for (var i = 0; i < opt.value.length; i++) {
                var el_1 = opt.value[i];
                if (isLiteralElement(el_1) && PLURAL_HASHTAG_REGEX.test(el_1.value)) {
                    matchingLiteralElIndex = i;
                    literalEl = el_1;
                    break;
                }
            }
            if (literalEl) {
                var newValue = literalEl.value.replace(PLURAL_HASHTAG_REGEX, "$1{" + el.value + ", number}");
                var newEls = pegParse(newValue);
                (_a = opt.value).splice.apply(_a, __spreadArrays([matchingLiteralElIndex, 1], newEls));
            }
            normalizeHashtagInPlural(opt.value);
        });
    });
}

var __assign$2 = (undefined && undefined.__assign) || function () {
    __assign$2 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$2.apply(this, arguments);
};
/**
 * https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * Credit: https://github.com/caridy/intl-datetimeformat-pattern/blob/master/index.js
 * with some tweaks
 */
var DATE_TIME_REGEX = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
/**
 * Parse Date time skeleton into Intl.DateTimeFormatOptions
 * Ref: https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * @public
 * @param skeleton skeleton string
 */
function parseDateTimeSkeleton(skeleton) {
    var result = {};
    skeleton.replace(DATE_TIME_REGEX, function (match) {
        var len = match.length;
        switch (match[0]) {
            // Era
            case 'G':
                result.era = len === 4 ? 'long' : len === 5 ? 'narrow' : 'short';
                break;
            // Year
            case 'y':
                result.year = len === 2 ? '2-digit' : 'numeric';
                break;
            case 'Y':
            case 'u':
            case 'U':
            case 'r':
                throw new RangeError('`Y/u/U/r` (year) patterns are not supported, use `y` instead');
            // Quarter
            case 'q':
            case 'Q':
                throw new RangeError('`q/Q` (quarter) patterns are not supported');
            // Month
            case 'M':
            case 'L':
                result.month = ['numeric', '2-digit', 'short', 'long', 'narrow'][len - 1];
                break;
            // Week
            case 'w':
            case 'W':
                throw new RangeError('`w/W` (week) patterns are not supported');
            case 'd':
                result.day = ['numeric', '2-digit'][len - 1];
                break;
            case 'D':
            case 'F':
            case 'g':
                throw new RangeError('`D/F/g` (day) patterns are not supported, use `d` instead');
            // Weekday
            case 'E':
                result.weekday = len === 4 ? 'short' : len === 5 ? 'narrow' : 'short';
                break;
            case 'e':
                if (len < 4) {
                    throw new RangeError('`e..eee` (weekday) patterns are not supported');
                }
                result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
                break;
            case 'c':
                if (len < 4) {
                    throw new RangeError('`c..ccc` (weekday) patterns are not supported');
                }
                result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
                break;
            // Period
            case 'a': // AM, PM
                result.hour12 = true;
                break;
            case 'b': // am, pm, noon, midnight
            case 'B': // flexible day periods
                throw new RangeError('`b/B` (period) patterns are not supported, use `a` instead');
            // Hour
            case 'h':
                result.hourCycle = 'h12';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'H':
                result.hourCycle = 'h23';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'K':
                result.hourCycle = 'h11';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'k':
                result.hourCycle = 'h24';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'j':
            case 'J':
            case 'C':
                throw new RangeError('`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead');
            // Minute
            case 'm':
                result.minute = ['numeric', '2-digit'][len - 1];
                break;
            // Second
            case 's':
                result.second = ['numeric', '2-digit'][len - 1];
                break;
            case 'S':
            case 'A':
                throw new RangeError('`S/A` (second) pattenrs are not supported, use `s` instead');
            // Zone
            case 'z': // 1..3, 4: specific non-location format
                result.timeZoneName = len < 4 ? 'short' : 'long';
                break;
            case 'Z': // 1..3, 4, 5: The ISO8601 varios formats
            case 'O': // 1, 4: miliseconds in day short, long
            case 'v': // 1, 4: generic non-location format
            case 'V': // 1, 2, 3, 4: time zone ID or city
            case 'X': // 1, 2, 3, 4: The ISO8601 varios formats
            case 'x': // 1, 2, 3, 4: The ISO8601 varios formats
                throw new RangeError('`Z/O/v/V/X/x` (timeZone) pattenrs are not supported, use `z` instead');
        }
        return '';
    });
    return result;
}
function icuUnitToEcma(unit) {
    return unit.replace(/^(.*?)-/, '');
}
var FRACTION_PRECISION_REGEX = /^\.(?:(0+)(\+|#+)?)?$/g;
var SIGNIFICANT_PRECISION_REGEX = /^(@+)?(\+|#+)?$/g;
function parseSignificantPrecision(str) {
    var result = {};
    str.replace(SIGNIFICANT_PRECISION_REGEX, function (_, g1, g2) {
        // @@@ case
        if (typeof g2 !== 'string') {
            result.minimumSignificantDigits = g1.length;
            result.maximumSignificantDigits = g1.length;
        }
        // @@@+ case
        else if (g2 === '+') {
            result.minimumSignificantDigits = g1.length;
        }
        // .### case
        else if (g1[0] === '#') {
            result.maximumSignificantDigits = g1.length;
        }
        // .@@## or .@@@ case
        else {
            result.minimumSignificantDigits = g1.length;
            result.maximumSignificantDigits =
                g1.length + (typeof g2 === 'string' ? g2.length : 0);
        }
        return '';
    });
    return result;
}
function parseSign(str) {
    switch (str) {
        case 'sign-auto':
            return {
                signDisplay: 'auto',
            };
        case 'sign-accounting':
            return {
                currencySign: 'accounting',
            };
        case 'sign-always':
            return {
                signDisplay: 'always',
            };
        case 'sign-accounting-always':
            return {
                signDisplay: 'always',
                currencySign: 'accounting',
            };
        case 'sign-except-zero':
            return {
                signDisplay: 'exceptZero',
            };
        case 'sign-accounting-except-zero':
            return {
                signDisplay: 'exceptZero',
                currencySign: 'accounting',
            };
        case 'sign-never':
            return {
                signDisplay: 'never',
            };
    }
}
function parseNotationOptions(opt) {
    var result = {};
    var signOpts = parseSign(opt);
    if (signOpts) {
        return signOpts;
    }
    return result;
}
/**
 * https://github.com/unicode-org/icu/blob/master/docs/userguide/format_parse/numbers/skeletons.md#skeleton-stems-and-options
 */
function convertNumberSkeletonToNumberFormatOptions(tokens) {
    var result = {};
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        switch (token.stem) {
            case 'percent':
                result.style = 'percent';
                continue;
            case 'currency':
                result.style = 'currency';
                result.currency = token.options[0];
                continue;
            case 'group-off':
                result.useGrouping = false;
                continue;
            case 'precision-integer':
                result.maximumFractionDigits = 0;
                continue;
            case 'measure-unit':
                result.style = 'unit';
                result.unit = icuUnitToEcma(token.options[0]);
                continue;
            case 'compact-short':
                result.notation = 'compact';
                result.compactDisplay = 'short';
                continue;
            case 'compact-long':
                result.notation = 'compact';
                result.compactDisplay = 'long';
                continue;
            case 'scientific':
                result = __assign$2(__assign$2(__assign$2({}, result), { notation: 'scientific' }), token.options.reduce(function (all, opt) { return (__assign$2(__assign$2({}, all), parseNotationOptions(opt))); }, {}));
                continue;
            case 'engineering':
                result = __assign$2(__assign$2(__assign$2({}, result), { notation: 'engineering' }), token.options.reduce(function (all, opt) { return (__assign$2(__assign$2({}, all), parseNotationOptions(opt))); }, {}));
                continue;
            case 'notation-simple':
                result.notation = 'standard';
                continue;
            // https://github.com/unicode-org/icu/blob/master/icu4c/source/i18n/unicode/unumberformatter.h
            case 'unit-width-narrow':
                result.currencyDisplay = 'narrowSymbol';
                result.unitDisplay = 'narrow';
                continue;
            case 'unit-width-short':
                result.currencyDisplay = 'code';
                result.unitDisplay = 'short';
                continue;
            case 'unit-width-full-name':
                result.currencyDisplay = 'name';
                result.unitDisplay = 'long';
                continue;
            case 'unit-width-iso-code':
                result.currencyDisplay = 'symbol';
                continue;
        }
        // Precision
        // https://github.com/unicode-org/icu/blob/master/docs/userguide/format_parse/numbers/skeletons.md#fraction-precision
        if (FRACTION_PRECISION_REGEX.test(token.stem)) {
            if (token.options.length > 1) {
                throw new RangeError('Fraction-precision stems only accept a single optional option');
            }
            token.stem.replace(FRACTION_PRECISION_REGEX, function (match, g1, g2) {
                // precision-integer case
                if (match === '.') {
                    result.maximumFractionDigits = 0;
                }
                // .000+ case
                else if (g2 === '+') {
                    result.minimumFractionDigits = g2.length;
                }
                // .### case
                else if (g1[0] === '#') {
                    result.maximumFractionDigits = g1.length;
                }
                // .00## or .000 case
                else {
                    result.minimumFractionDigits = g1.length;
                    result.maximumFractionDigits =
                        g1.length + (typeof g2 === 'string' ? g2.length : 0);
                }
                return '';
            });
            if (token.options.length) {
                result = __assign$2(__assign$2({}, result), parseSignificantPrecision(token.options[0]));
            }
            continue;
        }
        if (SIGNIFICANT_PRECISION_REGEX.test(token.stem)) {
            result = __assign$2(__assign$2({}, result), parseSignificantPrecision(token.stem));
            continue;
        }
        var signOpts = parseSign(token.stem);
        if (signOpts) {
            result = __assign$2(__assign$2({}, result), signOpts);
        }
    }
    return result;
}

function parse(input, opts) {
    var els = pegParse(input, opts);
    if (!opts || opts.normalizeHashtagInPlural !== false) {
        normalizeHashtagInPlural(els);
    }
    return els;
}

/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/
var __spreadArrays$1 = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// -- Utilities ----------------------------------------------------------------
function getCacheId(inputs) {
    return JSON.stringify(inputs.map(function (input) {
        return input && typeof input === 'object' ? orderedProps(input) : input;
    }));
}
function orderedProps(obj) {
    return Object.keys(obj)
        .sort()
        .map(function (k) {
        var _a;
        return (_a = {}, _a[k] = obj[k], _a);
    });
}
var memoizeFormatConstructor = function (FormatConstructor, cache) {
    if (cache === void 0) { cache = {}; }
    return function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var cacheId = getCacheId(args);
        var format = cacheId && cache[cacheId];
        if (!format) {
            format = new ((_a = FormatConstructor).bind.apply(_a, __spreadArrays$1([void 0], args)))();
            if (cacheId) {
                cache[cacheId] = format;
            }
        }
        return format;
    };
};

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays$2 = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var FormatError = /** @class */ (function (_super) {
    __extends$1(FormatError, _super);
    function FormatError(msg, variableId) {
        var _this = _super.call(this, msg) || this;
        _this.variableId = variableId;
        return _this;
    }
    return FormatError;
}(Error));
function mergeLiteral(parts) {
    if (parts.length < 2) {
        return parts;
    }
    return parts.reduce(function (all, part) {
        var lastPart = all[all.length - 1];
        if (!lastPart ||
            lastPart.type !== 0 /* literal */ ||
            part.type !== 0 /* literal */) {
            all.push(part);
        }
        else {
            lastPart.value += part.value;
        }
        return all;
    }, []);
}
// TODO(skeleton): add skeleton support
function formatToParts(els, locales, formatters, formats, values, currentPluralValue, 
// For debugging
originalMessage) {
    // Hot path for straight simple msg translations
    if (els.length === 1 && isLiteralElement(els[0])) {
        return [
            {
                type: 0 /* literal */,
                value: els[0].value,
            },
        ];
    }
    var result = [];
    for (var _i = 0, els_1 = els; _i < els_1.length; _i++) {
        var el = els_1[_i];
        // Exit early for string parts.
        if (isLiteralElement(el)) {
            result.push({
                type: 0 /* literal */,
                value: el.value,
            });
            continue;
        }
        // TODO: should this part be literal type?
        // Replace `#` in plural rules with the actual numeric value.
        if (isPoundElement(el)) {
            if (typeof currentPluralValue === 'number') {
                result.push({
                    type: 0 /* literal */,
                    value: formatters.getNumberFormat(locales).format(currentPluralValue),
                });
            }
            continue;
        }
        var varName = el.value;
        // Enforce that all required values are provided by the caller.
        if (!(values && varName in values)) {
            throw new FormatError("The intl string context variable \"" + varName + "\" was not provided to the string \"" + originalMessage + "\"");
        }
        var value = values[varName];
        if (isArgumentElement(el)) {
            if (!value || typeof value === 'string' || typeof value === 'number') {
                value =
                    typeof value === 'string' || typeof value === 'number'
                        ? String(value)
                        : '';
            }
            result.push({
                type: 1 /* argument */,
                value: value,
            });
            continue;
        }
        // Recursively format plural and select parts' option — which can be a
        // nested pattern structure. The choosing of the option to use is
        // abstracted-by and delegated-to the part helper object.
        if (isDateElement(el)) {
            var style = typeof el.style === 'string' ? formats.date[el.style] : undefined;
            result.push({
                type: 0 /* literal */,
                value: formatters
                    .getDateTimeFormat(locales, style)
                    .format(value),
            });
            continue;
        }
        if (isTimeElement(el)) {
            var style = typeof el.style === 'string'
                ? formats.time[el.style]
                : isDateTimeSkeleton(el.style)
                    ? parseDateTimeSkeleton(el.style.pattern)
                    : undefined;
            result.push({
                type: 0 /* literal */,
                value: formatters
                    .getDateTimeFormat(locales, style)
                    .format(value),
            });
            continue;
        }
        if (isNumberElement(el)) {
            var style = typeof el.style === 'string'
                ? formats.number[el.style]
                : isNumberSkeleton(el.style)
                    ? convertNumberSkeletonToNumberFormatOptions(el.style.tokens)
                    : undefined;
            result.push({
                type: 0 /* literal */,
                value: formatters
                    .getNumberFormat(locales, style)
                    .format(value),
            });
            continue;
        }
        if (isSelectElement(el)) {
            var opt = el.options[value] || el.options.other;
            if (!opt) {
                throw new RangeError("Invalid values for \"" + el.value + "\": \"" + value + "\". Options are \"" + Object.keys(el.options).join('", "') + "\"");
            }
            result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values));
            continue;
        }
        if (isPluralElement(el)) {
            var opt = el.options["=" + value];
            if (!opt) {
                if (!Intl.PluralRules) {
                    throw new FormatError("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n");
                }
                var rule = formatters
                    .getPluralRules(locales, { type: el.pluralType })
                    .select(value - (el.offset || 0));
                opt = el.options[rule] || el.options.other;
            }
            if (!opt) {
                throw new RangeError("Invalid values for \"" + el.value + "\": \"" + value + "\". Options are \"" + Object.keys(el.options).join('", "') + "\"");
            }
            result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values, value - (el.offset || 0)));
            continue;
        }
    }
    return mergeLiteral(result);
}
function formatToString(els, locales, formatters, formats, values, 
// For debugging
originalMessage) {
    var parts = formatToParts(els, locales, formatters, formats, values, undefined, originalMessage);
    // Hot path for straight simple msg translations
    if (parts.length === 1) {
        return parts[0].value;
    }
    return parts.reduce(function (all, part) { return (all += part.value); }, '');
}
// Singleton
var domParser;
var TOKEN_DELIMITER = '@@';
var TOKEN_REGEX = /@@(\d+_\d+)@@/g;
var counter = 0;
function generateId() {
    return Date.now() + "_" + ++counter;
}
function restoreRichPlaceholderMessage(text, objectParts) {
    return text
        .split(TOKEN_REGEX)
        .filter(Boolean)
        .map(function (c) { return (objectParts[c] != null ? objectParts[c] : c); })
        .reduce(function (all, c) {
        if (!all.length) {
            all.push(c);
        }
        else if (typeof c === 'string' &&
            typeof all[all.length - 1] === 'string') {
            all[all.length - 1] += c;
        }
        else {
            all.push(c);
        }
        return all;
    }, []);
}
/**
 * Not exhaustive, just for sanity check
 */
var SIMPLE_XML_REGEX = /(<([0-9a-zA-Z-_]*?)>(.*?)<\/([0-9a-zA-Z-_]*?)>)|(<[0-9a-zA-Z-_]*?\/>)/;
var TEMPLATE_ID = Date.now() + '@@';
var VOID_ELEMENTS = [
    'area',
    'base',
    'br',
    'col',
    'embed',
    'hr',
    'img',
    'input',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr',
];
function formatHTMLElement(el, objectParts, values) {
    var tagName = el.tagName;
    var outerHTML = el.outerHTML, textContent = el.textContent, childNodes = el.childNodes;
    // Regular text
    if (!tagName) {
        return restoreRichPlaceholderMessage(textContent || '', objectParts);
    }
    tagName = tagName.toLowerCase();
    var isVoidElement = ~VOID_ELEMENTS.indexOf(tagName);
    var formatFnOrValue = values[tagName];
    if (formatFnOrValue && isVoidElement) {
        throw new FormatError(tagName + " is a self-closing tag and can not be used, please use another tag name.");
    }
    if (!childNodes.length) {
        return [outerHTML];
    }
    var chunks = Array.prototype.slice.call(childNodes).reduce(function (all, child) {
        return all.concat(formatHTMLElement(child, objectParts, values));
    }, []);
    // Legacy HTML
    if (!formatFnOrValue) {
        return __spreadArrays$2(["<" + tagName + ">"], chunks, ["</" + tagName + ">"]);
    }
    // HTML Tag replacement
    if (typeof formatFnOrValue === 'function') {
        return [formatFnOrValue.apply(void 0, chunks)];
    }
    return [formatFnOrValue];
}
function formatHTMLMessage(els, locales, formatters, formats, values, 
// For debugging
originalMessage) {
    var parts = formatToParts(els, locales, formatters, formats, values, undefined, originalMessage);
    var objectParts = {};
    var formattedMessage = parts.reduce(function (all, part) {
        if (part.type === 0 /* literal */) {
            return (all += part.value);
        }
        var id = generateId();
        objectParts[id] = part.value;
        return (all += "" + TOKEN_DELIMITER + id + TOKEN_DELIMITER);
    }, '');
    // Not designed to filter out aggressively
    if (!SIMPLE_XML_REGEX.test(formattedMessage)) {
        return restoreRichPlaceholderMessage(formattedMessage, objectParts);
    }
    if (!values) {
        throw new FormatError('Message has placeholders but no values was given');
    }
    if (typeof DOMParser === 'undefined') {
        throw new FormatError('Cannot format XML message without DOMParser');
    }
    if (!domParser) {
        domParser = new DOMParser();
    }
    var content = domParser
        .parseFromString("<formatted-message id=\"" + TEMPLATE_ID + "\">" + formattedMessage + "</formatted-message>", 'text/html')
        .getElementById(TEMPLATE_ID);
    if (!content) {
        throw new FormatError("Malformed HTML message " + formattedMessage);
    }
    var tagsToFormat = Object.keys(values).filter(function (varName) { return !!content.getElementsByTagName(varName).length; });
    // No tags to format
    if (!tagsToFormat.length) {
        return restoreRichPlaceholderMessage(formattedMessage, objectParts);
    }
    var caseSensitiveTags = tagsToFormat.filter(function (tagName) { return tagName !== tagName.toLowerCase(); });
    if (caseSensitiveTags.length) {
        throw new FormatError("HTML tag must be lowercased but the following tags are not: " + caseSensitiveTags.join(', '));
    }
    // We're doing this since top node is `<formatted-message/>` which does not have a formatter
    return Array.prototype.slice
        .call(content.childNodes)
        .reduce(function (all, child) { return all.concat(formatHTMLElement(child, objectParts, values)); }, []);
}

/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/
var __assign$3 = (undefined && undefined.__assign) || function () {
    __assign$3 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$3.apply(this, arguments);
};
// -- MessageFormat --------------------------------------------------------
function mergeConfig(c1, c2) {
    if (!c2) {
        return c1;
    }
    return __assign$3(__assign$3(__assign$3({}, (c1 || {})), (c2 || {})), Object.keys(c1).reduce(function (all, k) {
        all[k] = __assign$3(__assign$3({}, c1[k]), (c2[k] || {}));
        return all;
    }, {}));
}
function mergeConfigs(defaultConfig, configs) {
    if (!configs) {
        return defaultConfig;
    }
    return Object.keys(defaultConfig).reduce(function (all, k) {
        all[k] = mergeConfig(defaultConfig[k], configs[k]);
        return all;
    }, __assign$3({}, defaultConfig));
}
function createDefaultFormatters(cache) {
    if (cache === void 0) { cache = {
        number: {},
        dateTime: {},
        pluralRules: {},
    }; }
    return {
        getNumberFormat: memoizeFormatConstructor(Intl.NumberFormat, cache.number),
        getDateTimeFormat: memoizeFormatConstructor(Intl.DateTimeFormat, cache.dateTime),
        getPluralRules: memoizeFormatConstructor(Intl.PluralRules, cache.pluralRules),
    };
}
var IntlMessageFormat = /** @class */ (function () {
    function IntlMessageFormat(message, locales, overrideFormats, opts) {
        var _this = this;
        if (locales === void 0) { locales = IntlMessageFormat.defaultLocale; }
        this.formatterCache = {
            number: {},
            dateTime: {},
            pluralRules: {},
        };
        this.format = function (values) {
            return formatToString(_this.ast, _this.locales, _this.formatters, _this.formats, values, _this.message);
        };
        this.formatToParts = function (values) {
            return formatToParts(_this.ast, _this.locales, _this.formatters, _this.formats, values, undefined, _this.message);
        };
        this.formatHTMLMessage = function (values) {
            return formatHTMLMessage(_this.ast, _this.locales, _this.formatters, _this.formats, values, _this.message);
        };
        this.resolvedOptions = function () { return ({
            locale: Intl.NumberFormat.supportedLocalesOf(_this.locales)[0],
        }); };
        this.getAst = function () { return _this.ast; };
        if (typeof message === 'string') {
            this.message = message;
            if (!IntlMessageFormat.__parse) {
                throw new TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
            }
            // Parse string messages into an AST.
            this.ast = IntlMessageFormat.__parse(message, {
                normalizeHashtagInPlural: false,
            });
        }
        else {
            this.ast = message;
        }
        if (!Array.isArray(this.ast)) {
            throw new TypeError('A message must be provided as a String or AST.');
        }
        // Creates a new object with the specified `formats` merged with the default
        // formats.
        this.formats = mergeConfigs(IntlMessageFormat.formats, overrideFormats);
        // Defined first because it's used to build the format pattern.
        this.locales = locales;
        this.formatters =
            (opts && opts.formatters) || createDefaultFormatters(this.formatterCache);
    }
    IntlMessageFormat.defaultLocale = new Intl.NumberFormat().resolvedOptions().locale;
    IntlMessageFormat.__parse = parse;
    // Default format options used as the prototype of the `formats` provided to the
    // constructor. These are used when constructing the internal Intl.NumberFormat
    // and Intl.DateTimeFormat instances.
    IntlMessageFormat.formats = {
        number: {
            currency: {
                style: 'currency',
            },
            percent: {
                style: 'percent',
            },
        },
        date: {
            short: {
                month: 'numeric',
                day: 'numeric',
                year: '2-digit',
            },
            medium: {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
            },
            long: {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            },
            full: {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            },
        },
        time: {
            short: {
                hour: 'numeric',
                minute: 'numeric',
            },
            medium: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
            },
            long: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short',
            },
            full: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short',
            },
        },
    };
    return IntlMessageFormat;
}());

/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

function invariant(condition, message, Err) {
    if (Err === void 0) { Err = Error; }
    if (!condition) {
        throw new Err(message);
    }
}

/*
HTML escaping is the same as React's
(on purpose.) Therefore, it has the following Copyright and Licensing:

Copyright 2013-2014, Facebook, Inc.
All rights reserved.

This source code is licensed under the BSD-style license found in the LICENSE
file in the root directory of React's source tree.
*/
function invariantIntlContext(intl) {
    invariant(intl, '[React Intl] Could not find required `intl` object. ' +
        '<IntlProvider> needs to exist in the component ancestry.');
}
function createError(message, exception) {
    const eMsg = exception ? `\n${exception.stack}` : '';
    return `[React Intl] ${message}${eMsg}`;
}
function defaultErrorHandler(error) {
    {
        console.error(error);
    }
}
const DEFAULT_INTL_CONFIG = {
    formats: {},
    messages: {},
    timeZone: undefined,
    textComponent: React.Fragment,
    defaultLocale: 'en',
    defaultFormats: {},
    onError: defaultErrorHandler,
};
function createIntlCache() {
    return {
        dateTime: {},
        number: {},
        message: {},
        relativeTime: {},
        pluralRules: {},
        list: {},
    };
}
/**
 * Create intl formatters and populate cache
 * @param cache explicit cache to prevent leaking memory
 */
function createFormatters(cache = createIntlCache()) {
    const RelativeTimeFormat = Intl.RelativeTimeFormat;
    const ListFormat = Intl.ListFormat;
    return {
        getDateTimeFormat: memoizeFormatConstructor(Intl.DateTimeFormat, cache.dateTime),
        getNumberFormat: memoizeFormatConstructor(Intl.NumberFormat, cache.number),
        getMessageFormat: memoizeFormatConstructor(IntlMessageFormat, cache.message),
        getRelativeTimeFormat: memoizeFormatConstructor(RelativeTimeFormat, cache.relativeTime),
        getPluralRules: memoizeFormatConstructor(Intl.PluralRules, cache.pluralRules),
        getListFormat: memoizeFormatConstructor(ListFormat, cache.list),
    };
}

// TODO: We should provide initial value here
const IntlContext = React.createContext(null);
const Context = IntlContext;

var __rest$1 = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var DisplayName;
(function (DisplayName) {
    DisplayName["formatDate"] = "FormattedDate";
    DisplayName["formatTime"] = "FormattedTime";
    DisplayName["formatNumber"] = "FormattedNumber";
    DisplayName["formatList"] = "FormattedList";
})(DisplayName || (DisplayName = {}));
var DisplayNameParts;
(function (DisplayNameParts) {
    DisplayNameParts["formatDate"] = "FormattedDateParts";
    DisplayNameParts["formatTime"] = "FormattedTimeParts";
    DisplayNameParts["formatNumber"] = "FormattedNumberParts";
    DisplayNameParts["formatList"] = "FormattedListParts";
})(DisplayNameParts || (DisplayNameParts = {}));
function createFormattedDateTimePartsComponent(name) {
    const ComponentParts = props => (React.createElement(Context.Consumer, null, (intl) => {
        invariantIntlContext(intl);
        const { value, children } = props, formatProps = __rest$1(props, ["value", "children"]);
        const date = typeof value === 'string' ? new Date(value || 0) : value;
        const formattedParts = name === 'formatDate'
            ? intl.formatDateToParts(date, formatProps)
            : intl.formatTimeToParts(date, formatProps);
        return children(formattedParts);
    }));
    ComponentParts.displayName = DisplayNameParts[name];
    return ComponentParts;
}
function createFormattedComponent(name) {
    const Component = props => (React.createElement(Context.Consumer, null, (intl) => {
        invariantIntlContext(intl);
        const { value, children } = props, formatProps = __rest$1(props, ["value", "children"]);
        // TODO: fix TS type definition for localeMatcher upstream
        const formattedValue = intl[name](value, formatProps);
        if (typeof children === 'function') {
            return children(formattedValue);
        }
        const Text = intl.textComponent || React.Fragment;
        return React.createElement(Text, null, formattedValue);
    }));
    Component.displayName = DisplayName[name];
    return Component;
}

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
function setTimeZoneInOptions(opts, timeZone) {
    return Object.keys(opts).reduce((all, k) => {
        all[k] = Object.assign({ timeZone }, opts[k]);
        return all;
    }, {});
}
function deepMergeOptions(opts1, opts2) {
    const keys = Object.keys(Object.assign(Object.assign({}, opts1), opts2));
    return keys.reduce((all, k) => {
        all[k] = Object.assign(Object.assign({}, (opts1[k] || {})), (opts2[k] || {}));
        return all;
    }, {});
}
function deepMergeFormatsAndSetTimeZone(f1, timeZone) {
    if (!timeZone) {
        return f1;
    }
    const mfFormats = IntlMessageFormat.formats;
    return Object.assign(Object.assign(Object.assign({}, mfFormats), f1), { date: deepMergeOptions(setTimeZoneInOptions(mfFormats.date, timeZone), setTimeZoneInOptions(f1.date || {}, timeZone)), time: deepMergeOptions(setTimeZoneInOptions(mfFormats.time, timeZone), setTimeZoneInOptions(f1.time || {}, timeZone)) });
}
const prepareIntlMessageFormatHtmlOutput = (chunks) => React.createElement(React.Fragment, null, ...chunks);
function formatMessage({ locale, formats, messages, defaultLocale, defaultFormats, onError, timeZone, }, state, messageDescriptor = { id: '' }, values = {}) {
    const { id, defaultMessage } = messageDescriptor;
    // `id` is a required field of a Message Descriptor.
    invariant(!!id, '[React Intl] An `id` must be provided to format a message.');
    const message = messages && messages[String(id)];
    formats = deepMergeFormatsAndSetTimeZone(formats, timeZone);
    defaultFormats = deepMergeFormatsAndSetTimeZone(defaultFormats, timeZone);
    let formattedMessageParts = [];
    if (message) {
        try {
            const formatter = state.getMessageFormat(message, locale, formats, {
                formatters: state,
            });
            formattedMessageParts = formatter.formatHTMLMessage(values);
        }
        catch (e) {
            onError(createError(`Error formatting message: "${id}" for locale: "${locale}"` +
                (defaultMessage ? ', using default message as fallback.' : ''), e));
        }
    }
    else {
        // This prevents warnings from littering the console in development
        // when no `messages` are passed into the <IntlProvider> for the
        // default locale, and a default message is in the source.
        if (!defaultMessage ||
            (locale && locale.toLowerCase() !== defaultLocale.toLowerCase())) {
            onError(createError(`Missing message: "${id}" for locale: "${locale}"` +
                (defaultMessage ? ', using default message as fallback.' : '')));
        }
    }
    if (!formattedMessageParts.length && defaultMessage) {
        try {
            const formatter = state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats);
            formattedMessageParts = formatter.formatHTMLMessage(values);
        }
        catch (e) {
            onError(createError(`Error formatting the default message for: "${id}"`, e));
        }
    }
    if (!formattedMessageParts.length) {
        onError(createError(`Cannot format message: "${id}", ` +
            `using message ${message || defaultMessage ? 'source' : 'id'} as fallback.`));
        if (typeof message === 'string') {
            return message || defaultMessage || String(id);
        }
        return defaultMessage || String(id);
    }
    if (formattedMessageParts.length === 1 &&
        typeof formattedMessageParts[0] === 'string') {
        return formattedMessageParts[0] || defaultMessage || String(id);
    }
    return prepareIntlMessageFormatHtmlOutput(formattedMessageParts);
}

function shallowEqualObjects(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if (!objA || !objB) {
    return false;
  }

  var aKeys = Object.keys(objA);
  var bKeys = Object.keys(objB);
  var len = aKeys.length;

  if (bKeys.length !== len) {
    return false;
  }

  for (var i = 0; i < len; i++) {
    var key = aKeys[i];

    if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) {
      return false;
    }
  }

  return true;
}

var objects = shallowEqualObjects;

var shallowEquals_ = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': objects,
	__moduleExports: objects
});

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
var __rest$2 = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const shallowEquals = objects || shallowEquals_;
const defaultFormatMessage = (descriptor, values) => {
    {
        console.error('[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry. Using default message as fallback.');
    }
    return formatMessage(Object.assign(Object.assign({}, DEFAULT_INTL_CONFIG), { locale: 'en' }), createFormatters(), descriptor, values);
};
class FormattedMessage extends React.Component {
    shouldComponentUpdate(nextProps) {
        const _a = this.props, { values } = _a, otherProps = __rest$2(_a, ["values"]);
        const { values: nextValues } = nextProps, nextOtherProps = __rest$2(nextProps, ["values"]);
        return (!shallowEquals(nextValues, values) ||
            !shallowEquals(otherProps, nextOtherProps));
    }
    render() {
        return (React.createElement(Context.Consumer, null, (intl) => {
            if (!this.props.defaultMessage) {
                invariantIntlContext(intl);
            }
            const { formatMessage = defaultFormatMessage, textComponent: Text = React.Fragment, } = intl || {};
            const { id, description, defaultMessage, values, children, tagName: Component = Text, } = this.props;
            const descriptor = { id, description, defaultMessage };
            let nodes = formatMessage(descriptor, values);
            if (!Array.isArray(nodes)) {
                nodes = [nodes];
            }
            if (typeof children === 'function') {
                return children(...nodes);
            }
            if (Component) {
                // Needs to use `createElement()` instead of JSX, otherwise React will
                // warn about a missing `key` prop with rich-text message formatting.
                return React.createElement(Component, null, ...nodes);
            }
            return nodes;
        }));
    }
}
FormattedMessage.displayName = 'FormattedMessage';
FormattedMessage.defaultProps = {
    values: {},
};

// IMPORTANT: Explicit here to prevent api-extractor from outputing `import('./types').CustomFormatConfig`
const FormattedDate = createFormattedComponent('formatDate');
const FormattedTime = createFormattedComponent('formatTime');
const FormattedNumber = createFormattedComponent('formatNumber');
const FormattedList = createFormattedComponent('formatList');
const FormattedDateParts = createFormattedDateTimePartsComponent('formatDate');
const FormattedTimeParts = createFormattedDateTimePartsComponent('formatTime');

function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

var isBrowser = typeof document !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      if (!isBrowser && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }

      current = current.next;
    } while (current !== undefined);

    if (!isBrowser && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};

/* eslint-disable */
// murmurhash2 via https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash2_32_gc(str) {
  var l = str.length,
      h = l ^ l,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;
  return (h >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = memoize(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

{
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if ( interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if ( interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if ( couldBeSelectorInterpolation && shouldWarnAboutInterpolatingClassNameFromCss && cached !== undefined) {
    console.error('Interpolating a className from css`` is not recommended and will cause problems with composition.\n' + 'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion');
    shouldWarnAboutInterpolatingClassNameFromCss = false;
  }

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && undefined !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if ( _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

{
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if ( strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if ( strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = murmurhash2_32_gc(styles) + identifierName;

  {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }
};

var testOmitPropsOnStringTag = index;

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme' && key !== 'innerRef';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var ILLEGAL_ESCAPE_SEQUENCE_ERROR$1 = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var isBrowser$1 = typeof document !== 'undefined';

var createStyled = function createStyled(tag, options) {
  {
    if (tag === undefined) {
      throw new Error('You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.');
    }
  }

  var identifierName;
  var shouldForwardProp;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
    shouldForwardProp = tag.__emotion_forwardProp && options.shouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && // $FlowFixMe
      options.shouldForwardProp(propName);
    } : options.shouldForwardProp;
  }

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {
      if ( args[0][0] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR$1);
      }

      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {
        if ( args[0][i] === undefined) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR$1);
        }

        styles.push(args[i], args[0][i]);
      }
    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


    var Styled = core.withEmotionCache(function (props, context, ref) {
      return React.createElement(core.ThemeContext.Consumer, null, function (theme) {
        var finalTag = shouldUseAs && props.as || baseTag;
        var className = '';
        var classInterpolations = [];
        var mergedProps = props;

        if (props.theme == null) {
          mergedProps = {};

          for (var key in props) {
            mergedProps[key] = props[key];
          }

          mergedProps.theme = theme;
        }

        if (typeof props.className === 'string') {
          className = getRegisteredStyles(context.registered, classInterpolations, props.className);
        } else if (props.className != null) {
          className = props.className + " ";
        }

        var serialized = serializeStyles(styles.concat(classInterpolations), context.registered, mergedProps);
        var rules = insertStyles(context, serialized, typeof finalTag === 'string');
        className += context.key + "-" + serialized.name;

        if (targetClassName !== undefined) {
          className += " " + targetClassName;
        }

        var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
        var newProps = {};

        for (var _key in props) {
          if (shouldUseAs && _key === 'as') continue;

          if ( // $FlowFixMe
          finalShouldForwardProp(_key)) {
            newProps[_key] = props[_key];
          }
        }

        newProps.className = className;
        newProps.ref = ref || props.innerRef;

        if ( props.innerRef) {
          console.error('`innerRef` is deprecated and will be removed in a future major version of Emotion, please use the `ref` prop instead' + (identifierName === undefined ? '' : " in the usage of `" + identifierName + "`"));
        }

        var ele = React.createElement(finalTag, newProps);

        if (!isBrowser$1 && rules !== undefined) {
          var _ref;

          var serializedNames = serialized.name;
          var next = serialized.next;

          while (next !== undefined) {
            serializedNames += ' ' + next.name;
            next = next.next;
          }

          return React.createElement(React.Fragment, null, React.createElement("style", (_ref = {}, _ref["data-emotion-" + context.key] = serializedNames, _ref.dangerouslySetInnerHTML = {
            __html: rules
          }, _ref.nonce = context.sheet.nonce, _ref)), ele);
        }

        return ele;
      });
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && undefined !== 'production') {
          return 'NO_COMPONENT_SELECTOR';
        } // $FlowFixMe: coerce undefined to string


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, nextOptions !== undefined ? _objectSpread({}, options || {}, {}, nextOptions) : options).apply(void 0, styles);
    };

    return Styled;
  };
};

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$1.apply(this, arguments);
}

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function defaultKey(key) {
  return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
}

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function useUncontrolledProp(propValue, defaultValue, handler) {
  var wasPropRef = React.useRef(propValue !== undefined);

  var _useState = React.useState(defaultValue),
      stateValue = _useState[0],
      setState = _useState[1];

  var isProp = propValue !== undefined;
  var wasProp = wasPropRef.current;
  wasPropRef.current = isProp;
  /**
   * If a prop switches from controlled to Uncontrolled
   * reset its value to the defaultValue
   */

  if (!isProp && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }

  return [isProp ? propValue : stateValue, React.useCallback(function (value) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (handler) handler.apply(void 0, [value].concat(args));
    setState(value);
  }, [handler])];
}
function useUncontrolled(props, config) {
  return Object.keys(config).reduce(function (result, fieldName) {
    var _extends2;

    var _ref = result,
        defaultValue = _ref[defaultKey(fieldName)],
        propsValue = _ref[fieldName],
        rest = _objectWithoutPropertiesLoose$1(_ref, [defaultKey(fieldName), fieldName].map(_toPropertyKey));

    var handlerName = config[fieldName];

    var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]),
        value = _useUncontrolledProp[0],
        handler = _useUncontrolledProp[1];

    return _extends$1({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
  }, props);
}

var helper = {
  noUserSelect: "\n    -webkit-touch-callout: none;\n    user-select: none;\n  "
};

/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid elements".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 */

function map(children, func) {
  var index = 0;
  return React__default.Children.map(children, function (child) {
    return React__default.isValidElement(child) ? func(child, index++) : child;
  });
}
/**
 * Iterates through children that are "valid elements".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 */


function forEach(children, func) {
  var index = 0;
  React__default.Children.forEach(children, function (child) {
    if (React__default.isValidElement(child)) func(child, index++);
  });
}

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var Tab = createStyled("li", {
  target: "eoor5ab0",
  label: "Tab"
})( {
  name: "13o7eu2",
  styles: "display:block;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRhYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV3FCIiwiZmlsZSI6IlRhYnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnZW1vdGlvbi10aGVtaW5nJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB1c2VVbmNvbnRyb2xsZWQgfSBmcm9tICd1bmNvbnRyb2xsYWJsZSc7XG5cbmltcG9ydCB7IGhlbHBlciB9IGZyb20gJy4uLy4uLy4uL3N0eWxlcy9oZWxwZXInO1xuaW1wb3J0IHsgZm9yRWFjaCwgbWFwIH0gZnJvbSAnLi4vLi4vZWxlbWVudENoaWxkcmVuJztcblxuY29uc3QgVGFiID0gc3R5bGVkLmxpYFxuICBkaXNwbGF5OiBibG9jaztcbmA7XG5cbmNvbnN0IFRhYkJ1dHRvbiA9ICh7IGFjdGl2ZSwgY2hpbGRyZW4sIGV2ZW50S2V5LCBvbkNsaWNrLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgcmV0dXJuIChcbiAgICA8YSByb2xlPVwidGFiXCJcbiAgICAgIGNzcz17Y3NzYFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNkYmRiZGI7XG4gICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgICAgIGNvbG9yOiAjNGE0YTRhO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogLTJweDtcbiAgICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyLXdpZHRoOiAwIDAgMnB4IDA7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMzYzNjM2O1xuICAgICAgICBjb2xvcjogIzM2MzYzNjtcbiAgICAgIH1cbiAgICAgICR7YWN0aXZlID8gYFxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5wcmltYXJ5NTAwfTtcbiAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnByaW1hcnk1MDB9O1xuICAgICAgYCA6ICcnfVxuICAgIGB9XG4gICAgICBvbkNsaWNrPXtlID0+IG9uQ2xpY2socHJvcHMudGFiS2V5KX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9hPlxuICApXG59O1xuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWN0aXZlS2V5KGNoaWxkcmVuKSB7XG4gIGxldCBkZWZhdWx0QWN0aXZlS2V5O1xuICBmb3JFYWNoKGNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgaWYgKGRlZmF1bHRBY3RpdmVLZXkgPT0gbnVsbCkge1xuICAgICAgZGVmYXVsdEFjdGl2ZUtleSA9IGNoaWxkLnByb3BzLmV2ZW50S2V5O1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlZmF1bHRBY3RpdmVLZXk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhYihjaGlsZCkge1xuICBjb25zdCB7IGV2ZW50S2V5LCBkaXNhYmxlZCwgdGFiQ2xhc3NOYW1lIH0gPSBjaGlsZC5wcm9wcztcbiAgcmV0dXJuIChcbiAgICA8bGlcbiAgICAgIC8vIGV2ZW50S2V5PXtldmVudEtleX1cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIGNsYXNzTmFtZT17dGFiQ2xhc3NOYW1lfVxuICAgICAgcm9sZT1cInRhYlwiXG4gICAgICBvbkNsaWNrPXtlID0+IGNvbnNvbGUubG9nKGV2ZW50S2V5KX1cbiAgICA+XG4gICAgICB7IGNoaWxkIH1cbiAgICA8L2xpPlxuICApO1xufVxuXG5jb25zdCBUYWJzID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjaGlsZHJlbixcbiAgICBvblNlbGVjdCxcbiAgICBhY3RpdmVLZXkgPSBnZXREZWZhdWx0QWN0aXZlS2V5KGNoaWxkcmVuKSxcbiAgICAuLi5jb250cm9sbGVkUHJvcHNcbiAgfSA9IHVzZVVuY29udHJvbGxlZChwcm9wcywge1xuICAgIGFjdGl2ZUtleTogJ29uU2VsZWN0JyxcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coYWN0aXZlS2V5KTtcbiAgY29uc3QgW2tleSwgc2V0S2V5XSA9IHVzZVN0YXRlKGFjdGl2ZUtleSk7XG4gIC8vIGNvbnNvbGUubG9nKGNoaWxkcmVuKTtcbiAgLy8gY2hpbGRyZW4uZm9yRWFjaCh4ID0+IGNvbnNvbGUubG9nKHgucHJvcHMuZXZlbnRLZXkpKTtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICByZXR1cm4gPG5hdiBjc3M9e2Nzc2BcbiAgICAgICAgJHtoZWxwZXIubm9Vc2VyU2VsZWN0fVxuICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgYH0gey4uLmNvbnRyb2xsZWRQcm9wc30+XG4gICAgPHVsIHJvbGU9XCJ0YWJsaXN0XCIgY3NzPXtjc3NgXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZGJkYmRiO1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGB9PlxuICAgICAge21hcChjaGlsZHJlbiwgYyA9PiByZW5kZXJUYWIoYywgb25TZWxlY3QpKX1cbiAgICA8L3VsPlxuICA8L25hdj5cbn1cblxuVGFicy5kaXNwbGF5TmFtZSA9ICdUYWJzJztcblxuVGFicy5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5UYWJzLlRhYiA9IFRhYkJ1dHRvbjtcblxuZXhwb3J0IGRlZmF1bHQgVGFicyJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

var TabButton = function TabButton(_ref2) {
  var active = _ref2.active,
      children = _ref2.children,
      eventKey = _ref2.eventKey,
      _onClick = _ref2.onClick,
      props = _objectWithoutProperties(_ref2, ["active", "children", "eventKey", "onClick"]);

  var theme = useTheme();
  return core.jsx("a", _extends({
    role: "tab",
    css:
    /*#__PURE__*/
    core.css("align-items:center;border-bottom-color:#dbdbdb;border-bottom-style:solid;color:#4a4a4a;display:flex;justify-content:center;margin-bottom:-2px;padding:0.5em 1em;vertical-align:top;background:none;border-width:0 0 2px 0;font-size:1em;&:hover{border-bottom-color:#363636;color:#363636;}", active ? "\n        border-bottom-color: ".concat(theme.colors.primary500, ";\n        color: ").concat(theme.colors.primary500, ";\n      ") : '', ";label:TabButton;" + ( "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRhYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJjIiwiZmlsZSI6IlRhYnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnZW1vdGlvbi10aGVtaW5nJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB1c2VVbmNvbnRyb2xsZWQgfSBmcm9tICd1bmNvbnRyb2xsYWJsZSc7XG5cbmltcG9ydCB7IGhlbHBlciB9IGZyb20gJy4uLy4uLy4uL3N0eWxlcy9oZWxwZXInO1xuaW1wb3J0IHsgZm9yRWFjaCwgbWFwIH0gZnJvbSAnLi4vLi4vZWxlbWVudENoaWxkcmVuJztcblxuY29uc3QgVGFiID0gc3R5bGVkLmxpYFxuICBkaXNwbGF5OiBibG9jaztcbmA7XG5cbmNvbnN0IFRhYkJ1dHRvbiA9ICh7IGFjdGl2ZSwgY2hpbGRyZW4sIGV2ZW50S2V5LCBvbkNsaWNrLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgcmV0dXJuIChcbiAgICA8YSByb2xlPVwidGFiXCJcbiAgICAgIGNzcz17Y3NzYFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNkYmRiZGI7XG4gICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgICAgIGNvbG9yOiAjNGE0YTRhO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogLTJweDtcbiAgICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyLXdpZHRoOiAwIDAgMnB4IDA7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMzYzNjM2O1xuICAgICAgICBjb2xvcjogIzM2MzYzNjtcbiAgICAgIH1cbiAgICAgICR7YWN0aXZlID8gYFxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5wcmltYXJ5NTAwfTtcbiAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnByaW1hcnk1MDB9O1xuICAgICAgYCA6ICcnfVxuICAgIGB9XG4gICAgICBvbkNsaWNrPXtlID0+IG9uQ2xpY2socHJvcHMudGFiS2V5KX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9hPlxuICApXG59O1xuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWN0aXZlS2V5KGNoaWxkcmVuKSB7XG4gIGxldCBkZWZhdWx0QWN0aXZlS2V5O1xuICBmb3JFYWNoKGNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgaWYgKGRlZmF1bHRBY3RpdmVLZXkgPT0gbnVsbCkge1xuICAgICAgZGVmYXVsdEFjdGl2ZUtleSA9IGNoaWxkLnByb3BzLmV2ZW50S2V5O1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlZmF1bHRBY3RpdmVLZXk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhYihjaGlsZCkge1xuICBjb25zdCB7IGV2ZW50S2V5LCBkaXNhYmxlZCwgdGFiQ2xhc3NOYW1lIH0gPSBjaGlsZC5wcm9wcztcbiAgcmV0dXJuIChcbiAgICA8bGlcbiAgICAgIC8vIGV2ZW50S2V5PXtldmVudEtleX1cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIGNsYXNzTmFtZT17dGFiQ2xhc3NOYW1lfVxuICAgICAgcm9sZT1cInRhYlwiXG4gICAgICBvbkNsaWNrPXtlID0+IGNvbnNvbGUubG9nKGV2ZW50S2V5KX1cbiAgICA+XG4gICAgICB7IGNoaWxkIH1cbiAgICA8L2xpPlxuICApO1xufVxuXG5jb25zdCBUYWJzID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjaGlsZHJlbixcbiAgICBvblNlbGVjdCxcbiAgICBhY3RpdmVLZXkgPSBnZXREZWZhdWx0QWN0aXZlS2V5KGNoaWxkcmVuKSxcbiAgICAuLi5jb250cm9sbGVkUHJvcHNcbiAgfSA9IHVzZVVuY29udHJvbGxlZChwcm9wcywge1xuICAgIGFjdGl2ZUtleTogJ29uU2VsZWN0JyxcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coYWN0aXZlS2V5KTtcbiAgY29uc3QgW2tleSwgc2V0S2V5XSA9IHVzZVN0YXRlKGFjdGl2ZUtleSk7XG4gIC8vIGNvbnNvbGUubG9nKGNoaWxkcmVuKTtcbiAgLy8gY2hpbGRyZW4uZm9yRWFjaCh4ID0+IGNvbnNvbGUubG9nKHgucHJvcHMuZXZlbnRLZXkpKTtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICByZXR1cm4gPG5hdiBjc3M9e2Nzc2BcbiAgICAgICAgJHtoZWxwZXIubm9Vc2VyU2VsZWN0fVxuICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgYH0gey4uLmNvbnRyb2xsZWRQcm9wc30+XG4gICAgPHVsIHJvbGU9XCJ0YWJsaXN0XCIgY3NzPXtjc3NgXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZGJkYmRiO1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGB9PlxuICAgICAge21hcChjaGlsZHJlbiwgYyA9PiByZW5kZXJUYWIoYywgb25TZWxlY3QpKX1cbiAgICA8L3VsPlxuICA8L25hdj5cbn1cblxuVGFicy5kaXNwbGF5TmFtZSA9ICdUYWJzJztcblxuVGFicy5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5UYWJzLlRhYiA9IFRhYkJ1dHRvbjtcblxuZXhwb3J0IGRlZmF1bHQgVGFicyJdfQ== */")),
    onClick: function onClick(e) {
      return _onClick(props.tabKey);
    }
  }, props), children);
};

function getDefaultActiveKey(children) {
  var defaultActiveKey;
  forEach(children, function (child) {
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey;
    }
  });
  return defaultActiveKey;
}

function renderTab(child) {
  var _child$props = child.props,
      eventKey = _child$props.eventKey,
      disabled = _child$props.disabled,
      tabClassName = _child$props.tabClassName;
  return core.jsx("li", {
    // eventKey={eventKey}
    disabled: disabled,
    className: tabClassName,
    role: "tab",
    onClick: function onClick(e) {
      return console.log(eventKey);
    }
  }, child);
}

var _ref =  {
  name: "171jk7f-Tabs",
  styles: "align-items:center;margin:0;padding:0;border-bottom-color:#dbdbdb;border-bottom-style:solid;border-bottom-width:2px;display:flex;flex-grow:1;flex-shrink:0;justify-content:flex-start;;label:Tabs;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRhYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUcrQiIsImZpbGUiOiJUYWJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ2Vtb3Rpb24tdGhlbWluZyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdXNlVW5jb250cm9sbGVkIH0gZnJvbSAndW5jb250cm9sbGFibGUnO1xuXG5pbXBvcnQgeyBoZWxwZXIgfSBmcm9tICcuLi8uLi8uLi9zdHlsZXMvaGVscGVyJztcbmltcG9ydCB7IGZvckVhY2gsIG1hcCB9IGZyb20gJy4uLy4uL2VsZW1lbnRDaGlsZHJlbic7XG5cbmNvbnN0IFRhYiA9IHN0eWxlZC5saWBcbiAgZGlzcGxheTogYmxvY2s7XG5gO1xuXG5jb25zdCBUYWJCdXR0b24gPSAoeyBhY3RpdmUsIGNoaWxkcmVuLCBldmVudEtleSwgb25DbGljaywgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIHJldHVybiAoXG4gICAgPGEgcm9sZT1cInRhYlwiXG4gICAgICBjc3M9e2Nzc2BcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZGJkYmRiO1xuICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gICAgICBjb2xvcjogIzRhNGE0YTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IC0ycHg7XG4gICAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlci13aWR0aDogMCAwIDJweCAwO1xuICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzM2MzYzNjtcbiAgICAgICAgY29sb3I6ICMzNjM2MzY7XG4gICAgICB9XG4gICAgICAke2FjdGl2ZSA/IGBcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeTUwMH07XG4gICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5wcmltYXJ5NTAwfTtcbiAgICAgIGAgOiAnJ31cbiAgICBgfVxuICAgICAgb25DbGljaz17ZSA9PiBvbkNsaWNrKHByb3BzLnRhYktleSl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYT5cbiAgKVxufTtcblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFjdGl2ZUtleShjaGlsZHJlbikge1xuICBsZXQgZGVmYXVsdEFjdGl2ZUtleTtcbiAgZm9yRWFjaChjaGlsZHJlbiwgY2hpbGQgPT4ge1xuICAgIGlmIChkZWZhdWx0QWN0aXZlS2V5ID09IG51bGwpIHtcbiAgICAgIGRlZmF1bHRBY3RpdmVLZXkgPSBjaGlsZC5wcm9wcy5ldmVudEtleTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZWZhdWx0QWN0aXZlS2V5O1xufVxuXG5mdW5jdGlvbiByZW5kZXJUYWIoY2hpbGQpIHtcbiAgY29uc3QgeyBldmVudEtleSwgZGlzYWJsZWQsIHRhYkNsYXNzTmFtZSB9ID0gY2hpbGQucHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGxpXG4gICAgICAvLyBldmVudEtleT17ZXZlbnRLZXl9XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICBjbGFzc05hbWU9e3RhYkNsYXNzTmFtZX1cbiAgICAgIHJvbGU9XCJ0YWJcIlxuICAgICAgb25DbGljaz17ZSA9PiBjb25zb2xlLmxvZyhldmVudEtleSl9XG4gICAgPlxuICAgICAgeyBjaGlsZCB9XG4gICAgPC9saT5cbiAgKTtcbn1cblxuY29uc3QgVGFicyA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY2hpbGRyZW4sXG4gICAgb25TZWxlY3QsXG4gICAgYWN0aXZlS2V5ID0gZ2V0RGVmYXVsdEFjdGl2ZUtleShjaGlsZHJlbiksXG4gICAgLi4uY29udHJvbGxlZFByb3BzXG4gIH0gPSB1c2VVbmNvbnRyb2xsZWQocHJvcHMsIHtcbiAgICBhY3RpdmVLZXk6ICdvblNlbGVjdCcsXG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKGFjdGl2ZUtleSk7XG4gIGNvbnN0IFtrZXksIHNldEtleV0gPSB1c2VTdGF0ZShhY3RpdmVLZXkpO1xuICAvLyBjb25zb2xlLmxvZyhjaGlsZHJlbik7XG4gIC8vIGNoaWxkcmVuLmZvckVhY2goeCA9PiBjb25zb2xlLmxvZyh4LnByb3BzLmV2ZW50S2V5KSk7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgcmV0dXJuIDxuYXYgY3NzPXtjc3NgXG4gICAgICAgICR7aGVscGVyLm5vVXNlclNlbGVjdH1cbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIGB9IHsuLi5jb250cm9sbGVkUHJvcHN9PlxuICAgIDx1bCByb2xlPVwidGFibGlzdFwiIGNzcz17Y3NzYFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2RiZGJkYjtcbiAgICAgICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBgfT5cbiAgICAgIHttYXAoY2hpbGRyZW4sIGMgPT4gcmVuZGVyVGFiKGMsIG9uU2VsZWN0KSl9XG4gICAgPC91bD5cbiAgPC9uYXY+XG59XG5cblRhYnMuZGlzcGxheU5hbWUgPSAnVGFicyc7XG5cblRhYnMucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuVGFicy5UYWIgPSBUYWJCdXR0b247XG5cbmV4cG9ydCBkZWZhdWx0IFRhYnMiXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var Tabs = function Tabs(props) {
  var _useUncontrolled = useUncontrolled(props, {
    activeKey: 'onSelect'
  }),
      children = _useUncontrolled.children,
      onSelect = _useUncontrolled.onSelect,
      _useUncontrolled$acti = _useUncontrolled.activeKey,
      activeKey = _useUncontrolled$acti === void 0 ? getDefaultActiveKey(children) : _useUncontrolled$acti,
      controlledProps = _objectWithoutProperties(_useUncontrolled, ["children", "onSelect", "activeKey"]);

  console.log(activeKey);

  var _useState = React.useState(activeKey),
      _useState2 = _slicedToArray(_useState, 2),
      key = _useState2[0],
      setKey = _useState2[1]; // console.log(children);
  // children.forEach(x => console.log(x.props.eventKey));


  var theme = useTheme();
  return core.jsx("nav", _extends({
    css:
    /*#__PURE__*/
    core.css(helper.noUserSelect, " -webkit-overflow-scrolling:touch;align-items:stretch;display:flex;font-size:1em;justify-content:space-between;overflow:hidden;overflow-x:auto;white-space:nowrap;;label:Tabs;" + ( "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRhYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEZzQiIsImZpbGUiOiJUYWJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ2Vtb3Rpb24tdGhlbWluZyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdXNlVW5jb250cm9sbGVkIH0gZnJvbSAndW5jb250cm9sbGFibGUnO1xuXG5pbXBvcnQgeyBoZWxwZXIgfSBmcm9tICcuLi8uLi8uLi9zdHlsZXMvaGVscGVyJztcbmltcG9ydCB7IGZvckVhY2gsIG1hcCB9IGZyb20gJy4uLy4uL2VsZW1lbnRDaGlsZHJlbic7XG5cbmNvbnN0IFRhYiA9IHN0eWxlZC5saWBcbiAgZGlzcGxheTogYmxvY2s7XG5gO1xuXG5jb25zdCBUYWJCdXR0b24gPSAoeyBhY3RpdmUsIGNoaWxkcmVuLCBldmVudEtleSwgb25DbGljaywgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIHJldHVybiAoXG4gICAgPGEgcm9sZT1cInRhYlwiXG4gICAgICBjc3M9e2Nzc2BcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZGJkYmRiO1xuICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gICAgICBjb2xvcjogIzRhNGE0YTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IC0ycHg7XG4gICAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlci13aWR0aDogMCAwIDJweCAwO1xuICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzM2MzYzNjtcbiAgICAgICAgY29sb3I6ICMzNjM2MzY7XG4gICAgICB9XG4gICAgICAke2FjdGl2ZSA/IGBcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeTUwMH07XG4gICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5wcmltYXJ5NTAwfTtcbiAgICAgIGAgOiAnJ31cbiAgICBgfVxuICAgICAgb25DbGljaz17ZSA9PiBvbkNsaWNrKHByb3BzLnRhYktleSl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYT5cbiAgKVxufTtcblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFjdGl2ZUtleShjaGlsZHJlbikge1xuICBsZXQgZGVmYXVsdEFjdGl2ZUtleTtcbiAgZm9yRWFjaChjaGlsZHJlbiwgY2hpbGQgPT4ge1xuICAgIGlmIChkZWZhdWx0QWN0aXZlS2V5ID09IG51bGwpIHtcbiAgICAgIGRlZmF1bHRBY3RpdmVLZXkgPSBjaGlsZC5wcm9wcy5ldmVudEtleTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZWZhdWx0QWN0aXZlS2V5O1xufVxuXG5mdW5jdGlvbiByZW5kZXJUYWIoY2hpbGQpIHtcbiAgY29uc3QgeyBldmVudEtleSwgZGlzYWJsZWQsIHRhYkNsYXNzTmFtZSB9ID0gY2hpbGQucHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGxpXG4gICAgICAvLyBldmVudEtleT17ZXZlbnRLZXl9XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICBjbGFzc05hbWU9e3RhYkNsYXNzTmFtZX1cbiAgICAgIHJvbGU9XCJ0YWJcIlxuICAgICAgb25DbGljaz17ZSA9PiBjb25zb2xlLmxvZyhldmVudEtleSl9XG4gICAgPlxuICAgICAgeyBjaGlsZCB9XG4gICAgPC9saT5cbiAgKTtcbn1cblxuY29uc3QgVGFicyA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY2hpbGRyZW4sXG4gICAgb25TZWxlY3QsXG4gICAgYWN0aXZlS2V5ID0gZ2V0RGVmYXVsdEFjdGl2ZUtleShjaGlsZHJlbiksXG4gICAgLi4uY29udHJvbGxlZFByb3BzXG4gIH0gPSB1c2VVbmNvbnRyb2xsZWQocHJvcHMsIHtcbiAgICBhY3RpdmVLZXk6ICdvblNlbGVjdCcsXG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKGFjdGl2ZUtleSk7XG4gIGNvbnN0IFtrZXksIHNldEtleV0gPSB1c2VTdGF0ZShhY3RpdmVLZXkpO1xuICAvLyBjb25zb2xlLmxvZyhjaGlsZHJlbik7XG4gIC8vIGNoaWxkcmVuLmZvckVhY2goeCA9PiBjb25zb2xlLmxvZyh4LnByb3BzLmV2ZW50S2V5KSk7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgcmV0dXJuIDxuYXYgY3NzPXtjc3NgXG4gICAgICAgICR7aGVscGVyLm5vVXNlclNlbGVjdH1cbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIGB9IHsuLi5jb250cm9sbGVkUHJvcHN9PlxuICAgIDx1bCByb2xlPVwidGFibGlzdFwiIGNzcz17Y3NzYFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2RiZGJkYjtcbiAgICAgICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBgfT5cbiAgICAgIHttYXAoY2hpbGRyZW4sIGMgPT4gcmVuZGVyVGFiKGMsIG9uU2VsZWN0KSl9XG4gICAgPC91bD5cbiAgPC9uYXY+XG59XG5cblRhYnMuZGlzcGxheU5hbWUgPSAnVGFicyc7XG5cblRhYnMucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuVGFicy5UYWIgPSBUYWJCdXR0b247XG5cbmV4cG9ydCBkZWZhdWx0IFRhYnMiXX0= */"))
  }, controlledProps), core.jsx("ul", {
    role: "tablist",
    css: _ref
  }, map(children, function (c) {
    return renderTab(c);
  })));
};

Tabs.displayName = 'Tabs';
Tabs.Tab = TabButton;

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _EMOTION_STRINGIFIED_CSS_ERROR__$1() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
var button = function button(theme) {
  return (
    /*#__PURE__*/
    core.css(helper.noUserSelect, " appearance:none;display:inline-flex;align-items:center;justify-content:flex-start;text-align:center;white-space:nowrap;border:1px solid transparent;border-radius:4px;box-shadow:none;font-size:1em;height:", theme.dense ? 1.5 : 2.5, "em;line-height:calc(1.5em - 6px);position:relative;margin:0;background-color:white;color:", theme.color, ";cursor:pointer;justify-content:center;padding-left:", theme.dense ? 0.5 : 1, "em;padding-right:", theme.dense ? 0.5 : 1, "em;&:focus{outline:none;box-shadow:0 0 0 0.125em rgba(50,115,220,0.25);}" + ( "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5zdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR2tDIiwiZmlsZSI6IkJ1dHRvbi5zdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgaGVscGVyIH0gZnJvbSAnLi4vLi4vLi4vc3R5bGVzL2hlbHBlcic7XG5cbmV4cG9ydCBjb25zdCBidXR0b24gPSB0aGVtZSA9PiBjc3NgXG4gICR7aGVscGVyLm5vVXNlclNlbGVjdH1cbiAgYXBwZWFyYW5jZTogbm9uZTtcblxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgZm9udC1zaXplOiAxZW07XG4gIGhlaWdodDogJHt0aGVtZS5kZW5zZSA/IDEuNSA6IDIuNX1lbTtcbiAgbGluZS1oZWlnaHQ6IGNhbGMoMS41ZW0gLSA2cHgpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAke3RoZW1lLmNvbG9yfTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAke3RoZW1lLmRlbnNlID8gMC41IDogMX1lbTtcbiAgcGFkZGluZy1yaWdodDogJHt0aGVtZS5kZW5zZSA/IDAuNSA6IDF9ZW07XG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xMjVlbSByZ2JhKDUwLCAxMTUsIDIyMCwgMC4yNSk7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBwcmltYXJ5ID0gdGhlbWUgPT4gY3NzYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5wcmltYXJ5NTAwfTtcbiAgY29sb3I6IHdoaXRlO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5wcmltYXJ5NjAwfTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IHByaW1hcnlPdXRsaW5lID0gKHRoZW1lKSA9PiBjc3NgXG4gIGJvcmRlci1jb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeTUwMH07XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5wcmltYXJ5NzAwfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBvdXRsaW5lID0gKHRoZW1lKSA9PiBjc3NgXG4gIGJvcmRlci1jb2xvcjogJHt0aGVtZS50cmFuc3BhcmVudEluazQwfTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBnaG9zdCA9ICh0aGVtZSkgPT4gY3NzYFxuICBib3JkZXItY29sb3I6ICM4MDgwODA7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuYDtcblxuZXhwb3J0IGNvbnN0IGRhbmdlciA9ICh0aGVtZSkgPT4gY3NzYFxuICBiYWNrZ3JvdW5kOiB0b21hdG87XG4gIGNvbG9yOiB3aGl0ZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBsaW5rID0gKHRoZW1lKSA9PiBjc3NgXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG5gO1xuXG5leHBvcnQgY29uc3QgYmxvY2sgPSAodGhlbWUpID0+IGNzc2BcbiAgZGlzcGxheTogZmxleDsgXG4gIHdpZHRoOiAxMDAlO1xuYDtcblxuZXhwb3J0IGNvbnN0IHNwaW5Bcm91bmQgPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgbG9hZGluZyA9ICh0aGVtZSkgPT4gY3NzYFxuICAmOmFmdGVyIHtcbiAgICBhbmltYXRpb246ICR7c3BpbkFyb3VuZH0gNTAwbXMgaW5maW5pdGUgbGluZWFyO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkYmRiZGI7XG4gICAgYm9yZGVyLXJhZGl1czogMjkwNDg2cHg7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMWVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMWVtO1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IGNhbGMoNTAlIC0gKDFlbSAvIDIpKTtcbiAgICB0b3A6IGNhbGMoNTAlIC0gKDFlbSAvIDIpKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgfVxuICBjb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGJ1dHRvbixcbiAgcHJpbWFyeSxcbiAgcHJpbWFyeU91dGxpbmUsXG4gIG91dGxpbmUsXG4gIGdob3N0LFxuICBkYW5nZXIsXG4gIGxpbmssXG4gIGxvYWRpbmcsXG4gIGJsb2NrXG59OyJdfQ== */"))
  );
};
var primary = function primary(theme) {
  return (
    /*#__PURE__*/
    core.css("background-color:", theme.colors.primary500, ";color:white;&:hover{background-color:", theme.colors.primary600, ";}" + ( "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5zdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNtQyIsImZpbGUiOiJCdXR0b24uc3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzLCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IGhlbHBlciB9IGZyb20gJy4uLy4uLy4uL3N0eWxlcy9oZWxwZXInO1xuXG5leHBvcnQgY29uc3QgYnV0dG9uID0gdGhlbWUgPT4gY3NzYFxuICAke2hlbHBlci5ub1VzZXJTZWxlY3R9XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG5cbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuXG4gIGZvbnQtc2l6ZTogMWVtO1xuICBoZWlnaHQ6ICR7dGhlbWUuZGVuc2UgPyAxLjUgOiAyLjV9ZW07XG4gIGxpbmUtaGVpZ2h0OiBjYWxjKDEuNWVtIC0gNnB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcn07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogJHt0aGVtZS5kZW5zZSA/IDAuNSA6IDF9ZW07XG4gIHBhZGRpbmctcmlnaHQ6ICR7dGhlbWUuZGVuc2UgPyAwLjUgOiAxfWVtO1xuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMTI1ZW0gcmdiYSg1MCwgMTE1LCAyMjAsIDAuMjUpO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgcHJpbWFyeSA9IHRoZW1lID0+IGNzc2BcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeTUwMH07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeTYwMH07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBwcmltYXJ5T3V0bGluZSA9ICh0aGVtZSkgPT4gY3NzYFxuICBib3JkZXItY29sb3I6ICR7dGhlbWUuY29sb3JzLnByaW1hcnk1MDB9O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeTcwMH07XG5gO1xuXG5leHBvcnQgY29uc3Qgb3V0bGluZSA9ICh0aGVtZSkgPT4gY3NzYFxuICBib3JkZXItY29sb3I6ICR7dGhlbWUudHJhbnNwYXJlbnRJbms0MH07XG4gIGJhY2tncm91bmQ6IG5vbmU7XG5gO1xuXG5leHBvcnQgY29uc3QgZ2hvc3QgPSAodGhlbWUpID0+IGNzc2BcbiAgYm9yZGVyLWNvbG9yOiAjODA4MDgwO1xuICBjb2xvcjogIzgwODA4MDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBkYW5nZXIgPSAodGhlbWUpID0+IGNzc2BcbiAgYmFja2dyb3VuZDogdG9tYXRvO1xuICBjb2xvcjogd2hpdGU7XG5gO1xuXG5leHBvcnQgY29uc3QgbGluayA9ICh0aGVtZSkgPT4gY3NzYFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuYDtcblxuZXhwb3J0IGNvbnN0IGJsb2NrID0gKHRoZW1lKSA9PiBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7IFxuICB3aWR0aDogMTAwJTtcbmA7XG5cbmV4cG9ydCBjb25zdCBzcGluQXJvdW5kID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmcgPSAodGhlbWUpID0+IGNzc2BcbiAgJjphZnRlciB7XG4gICAgYW5pbWF0aW9uOiAke3NwaW5Bcm91bmR9IDUwMG1zIGluZmluaXRlIGxpbmVhcjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZGJkYmRiO1xuICAgIGJvcmRlci1yYWRpdXM6IDI5MDQ4NnB4O1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDFlbTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtICgxZW0gLyAyKSk7XG4gICAgdG9wOiBjYWxjKDUwJSAtICgxZW0gLyAyKSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIH1cbiAgY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBidXR0b24sXG4gIHByaW1hcnksXG4gIHByaW1hcnlPdXRsaW5lLFxuICBvdXRsaW5lLFxuICBnaG9zdCxcbiAgZGFuZ2VyLFxuICBsaW5rLFxuICBsb2FkaW5nLFxuICBibG9ja1xufTsiXX0= */"))
  );
};
var primaryOutline = function primaryOutline(theme) {
  return (
    /*#__PURE__*/
    core.css("border-color:", theme.colors.primary500, ";background:none;color:", theme.colors.primary700, ";" + ( "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5zdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkM0QyIsImZpbGUiOiJCdXR0b24uc3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzLCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IGhlbHBlciB9IGZyb20gJy4uLy4uLy4uL3N0eWxlcy9oZWxwZXInO1xuXG5leHBvcnQgY29uc3QgYnV0dG9uID0gdGhlbWUgPT4gY3NzYFxuICAke2hlbHBlci5ub1VzZXJTZWxlY3R9XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG5cbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuXG4gIGZvbnQtc2l6ZTogMWVtO1xuICBoZWlnaHQ6ICR7dGhlbWUuZGVuc2UgPyAxLjUgOiAyLjV9ZW07XG4gIGxpbmUtaGVpZ2h0OiBjYWxjKDEuNWVtIC0gNnB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcn07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogJHt0aGVtZS5kZW5zZSA/IDAuNSA6IDF9ZW07XG4gIHBhZGRpbmctcmlnaHQ6ICR7dGhlbWUuZGVuc2UgPyAwLjUgOiAxfWVtO1xuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMTI1ZW0gcmdiYSg1MCwgMTE1LCAyMjAsIDAuMjUpO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgcHJpbWFyeSA9IHRoZW1lID0+IGNzc2BcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeTUwMH07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeTYwMH07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBwcmltYXJ5T3V0bGluZSA9ICh0aGVtZSkgPT4gY3NzYFxuICBib3JkZXItY29sb3I6ICR7dGhlbWUuY29sb3JzLnByaW1hcnk1MDB9O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeTcwMH07XG5gO1xuXG5leHBvcnQgY29uc3Qgb3V0bGluZSA9ICh0aGVtZSkgPT4gY3NzYFxuICBib3JkZXItY29sb3I6ICR7dGhlbWUudHJhbnNwYXJlbnRJbms0MH07XG4gIGJhY2tncm91bmQ6IG5vbmU7XG5gO1xuXG5leHBvcnQgY29uc3QgZ2hvc3QgPSAodGhlbWUpID0+IGNzc2BcbiAgYm9yZGVyLWNvbG9yOiAjODA4MDgwO1xuICBjb2xvcjogIzgwODA4MDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBkYW5nZXIgPSAodGhlbWUpID0+IGNzc2BcbiAgYmFja2dyb3VuZDogdG9tYXRvO1xuICBjb2xvcjogd2hpdGU7XG5gO1xuXG5leHBvcnQgY29uc3QgbGluayA9ICh0aGVtZSkgPT4gY3NzYFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuYDtcblxuZXhwb3J0IGNvbnN0IGJsb2NrID0gKHRoZW1lKSA9PiBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7IFxuICB3aWR0aDogMTAwJTtcbmA7XG5cbmV4cG9ydCBjb25zdCBzcGluQXJvdW5kID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmcgPSAodGhlbWUpID0+IGNzc2BcbiAgJjphZnRlciB7XG4gICAgYW5pbWF0aW9uOiAke3NwaW5Bcm91bmR9IDUwMG1zIGluZmluaXRlIGxpbmVhcjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZGJkYmRiO1xuICAgIGJvcmRlci1yYWRpdXM6IDI5MDQ4NnB4O1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDFlbTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtICgxZW0gLyAyKSk7XG4gICAgdG9wOiBjYWxjKDUwJSAtICgxZW0gLyAyKSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIH1cbiAgY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBidXR0b24sXG4gIHByaW1hcnksXG4gIHByaW1hcnlPdXRsaW5lLFxuICBvdXRsaW5lLFxuICBnaG9zdCxcbiAgZGFuZ2VyLFxuICBsaW5rLFxuICBsb2FkaW5nLFxuICBibG9ja1xufTsiXX0= */"))
  );
};
var outline = function outline(theme) {
  return (
    /*#__PURE__*/
    core.css("border-color:", theme.transparentInk40, ";background:none;" + ( "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5zdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaURxQyIsImZpbGUiOiJCdXR0b24uc3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzLCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IGhlbHBlciB9IGZyb20gJy4uLy4uLy4uL3N0eWxlcy9oZWxwZXInO1xuXG5leHBvcnQgY29uc3QgYnV0dG9uID0gdGhlbWUgPT4gY3NzYFxuICAke2hlbHBlci5ub1VzZXJTZWxlY3R9XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG5cbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuXG4gIGZvbnQtc2l6ZTogMWVtO1xuICBoZWlnaHQ6ICR7dGhlbWUuZGVuc2UgPyAxLjUgOiAyLjV9ZW07XG4gIGxpbmUtaGVpZ2h0OiBjYWxjKDEuNWVtIC0gNnB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcn07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogJHt0aGVtZS5kZW5zZSA/IDAuNSA6IDF9ZW07XG4gIHBhZGRpbmctcmlnaHQ6ICR7dGhlbWUuZGVuc2UgPyAwLjUgOiAxfWVtO1xuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMTI1ZW0gcmdiYSg1MCwgMTE1LCAyMjAsIDAuMjUpO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgcHJpbWFyeSA9IHRoZW1lID0+IGNzc2BcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeTUwMH07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeTYwMH07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBwcmltYXJ5T3V0bGluZSA9ICh0aGVtZSkgPT4gY3NzYFxuICBib3JkZXItY29sb3I6ICR7dGhlbWUuY29sb3JzLnByaW1hcnk1MDB9O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeTcwMH07XG5gO1xuXG5leHBvcnQgY29uc3Qgb3V0bGluZSA9ICh0aGVtZSkgPT4gY3NzYFxuICBib3JkZXItY29sb3I6ICR7dGhlbWUudHJhbnNwYXJlbnRJbms0MH07XG4gIGJhY2tncm91bmQ6IG5vbmU7XG5gO1xuXG5leHBvcnQgY29uc3QgZ2hvc3QgPSAodGhlbWUpID0+IGNzc2BcbiAgYm9yZGVyLWNvbG9yOiAjODA4MDgwO1xuICBjb2xvcjogIzgwODA4MDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBkYW5nZXIgPSAodGhlbWUpID0+IGNzc2BcbiAgYmFja2dyb3VuZDogdG9tYXRvO1xuICBjb2xvcjogd2hpdGU7XG5gO1xuXG5leHBvcnQgY29uc3QgbGluayA9ICh0aGVtZSkgPT4gY3NzYFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuYDtcblxuZXhwb3J0IGNvbnN0IGJsb2NrID0gKHRoZW1lKSA9PiBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7IFxuICB3aWR0aDogMTAwJTtcbmA7XG5cbmV4cG9ydCBjb25zdCBzcGluQXJvdW5kID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmcgPSAodGhlbWUpID0+IGNzc2BcbiAgJjphZnRlciB7XG4gICAgYW5pbWF0aW9uOiAke3NwaW5Bcm91bmR9IDUwMG1zIGluZmluaXRlIGxpbmVhcjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZGJkYmRiO1xuICAgIGJvcmRlci1yYWRpdXM6IDI5MDQ4NnB4O1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDFlbTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtICgxZW0gLyAyKSk7XG4gICAgdG9wOiBjYWxjKDUwJSAtICgxZW0gLyAyKSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIH1cbiAgY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBidXR0b24sXG4gIHByaW1hcnksXG4gIHByaW1hcnlPdXRsaW5lLFxuICBvdXRsaW5lLFxuICBnaG9zdCxcbiAgZGFuZ2VyLFxuICBsaW5rLFxuICBsb2FkaW5nLFxuICBibG9ja1xufTsiXX0= */"))
  );
};

var _ref$1 =  {
  name: "p8cinn",
  styles: "border-color:#808080;color:#808080;background:none;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5zdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0RtQyIsImZpbGUiOiJCdXR0b24uc3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzLCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IGhlbHBlciB9IGZyb20gJy4uLy4uLy4uL3N0eWxlcy9oZWxwZXInO1xuXG5leHBvcnQgY29uc3QgYnV0dG9uID0gdGhlbWUgPT4gY3NzYFxuICAke2hlbHBlci5ub1VzZXJTZWxlY3R9XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG5cbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuXG4gIGZvbnQtc2l6ZTogMWVtO1xuICBoZWlnaHQ6ICR7dGhlbWUuZGVuc2UgPyAxLjUgOiAyLjV9ZW07XG4gIGxpbmUtaGVpZ2h0OiBjYWxjKDEuNWVtIC0gNnB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcn07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogJHt0aGVtZS5kZW5zZSA/IDAuNSA6IDF9ZW07XG4gIHBhZGRpbmctcmlnaHQ6ICR7dGhlbWUuZGVuc2UgPyAwLjUgOiAxfWVtO1xuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMTI1ZW0gcmdiYSg1MCwgMTE1LCAyMjAsIDAuMjUpO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgcHJpbWFyeSA9IHRoZW1lID0+IGNzc2BcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeTUwMH07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeTYwMH07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBwcmltYXJ5T3V0bGluZSA9ICh0aGVtZSkgPT4gY3NzYFxuICBib3JkZXItY29sb3I6ICR7dGhlbWUuY29sb3JzLnByaW1hcnk1MDB9O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeTcwMH07XG5gO1xuXG5leHBvcnQgY29uc3Qgb3V0bGluZSA9ICh0aGVtZSkgPT4gY3NzYFxuICBib3JkZXItY29sb3I6ICR7dGhlbWUudHJhbnNwYXJlbnRJbms0MH07XG4gIGJhY2tncm91bmQ6IG5vbmU7XG5gO1xuXG5leHBvcnQgY29uc3QgZ2hvc3QgPSAodGhlbWUpID0+IGNzc2BcbiAgYm9yZGVyLWNvbG9yOiAjODA4MDgwO1xuICBjb2xvcjogIzgwODA4MDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBkYW5nZXIgPSAodGhlbWUpID0+IGNzc2BcbiAgYmFja2dyb3VuZDogdG9tYXRvO1xuICBjb2xvcjogd2hpdGU7XG5gO1xuXG5leHBvcnQgY29uc3QgbGluayA9ICh0aGVtZSkgPT4gY3NzYFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuYDtcblxuZXhwb3J0IGNvbnN0IGJsb2NrID0gKHRoZW1lKSA9PiBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7IFxuICB3aWR0aDogMTAwJTtcbmA7XG5cbmV4cG9ydCBjb25zdCBzcGluQXJvdW5kID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmcgPSAodGhlbWUpID0+IGNzc2BcbiAgJjphZnRlciB7XG4gICAgYW5pbWF0aW9uOiAke3NwaW5Bcm91bmR9IDUwMG1zIGluZmluaXRlIGxpbmVhcjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZGJkYmRiO1xuICAgIGJvcmRlci1yYWRpdXM6IDI5MDQ4NnB4O1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDFlbTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtICgxZW0gLyAyKSk7XG4gICAgdG9wOiBjYWxjKDUwJSAtICgxZW0gLyAyKSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIH1cbiAgY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBidXR0b24sXG4gIHByaW1hcnksXG4gIHByaW1hcnlPdXRsaW5lLFxuICBvdXRsaW5lLFxuICBnaG9zdCxcbiAgZGFuZ2VyLFxuICBsaW5rLFxuICBsb2FkaW5nLFxuICBibG9ja1xufTsiXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
};

var ghost = function ghost(theme) {
  return _ref$1;
};

var _ref2 =  {
  name: "c15mrh",
  styles: "background:tomato;color:white;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5zdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNERvQyIsImZpbGUiOiJCdXR0b24uc3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzLCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IGhlbHBlciB9IGZyb20gJy4uLy4uLy4uL3N0eWxlcy9oZWxwZXInO1xuXG5leHBvcnQgY29uc3QgYnV0dG9uID0gdGhlbWUgPT4gY3NzYFxuICAke2hlbHBlci5ub1VzZXJTZWxlY3R9XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG5cbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuXG4gIGZvbnQtc2l6ZTogMWVtO1xuICBoZWlnaHQ6ICR7dGhlbWUuZGVuc2UgPyAxLjUgOiAyLjV9ZW07XG4gIGxpbmUtaGVpZ2h0OiBjYWxjKDEuNWVtIC0gNnB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcn07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogJHt0aGVtZS5kZW5zZSA/IDAuNSA6IDF9ZW07XG4gIHBhZGRpbmctcmlnaHQ6ICR7dGhlbWUuZGVuc2UgPyAwLjUgOiAxfWVtO1xuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMTI1ZW0gcmdiYSg1MCwgMTE1LCAyMjAsIDAuMjUpO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgcHJpbWFyeSA9IHRoZW1lID0+IGNzc2BcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeTUwMH07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeTYwMH07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBwcmltYXJ5T3V0bGluZSA9ICh0aGVtZSkgPT4gY3NzYFxuICBib3JkZXItY29sb3I6ICR7dGhlbWUuY29sb3JzLnByaW1hcnk1MDB9O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeTcwMH07XG5gO1xuXG5leHBvcnQgY29uc3Qgb3V0bGluZSA9ICh0aGVtZSkgPT4gY3NzYFxuICBib3JkZXItY29sb3I6ICR7dGhlbWUudHJhbnNwYXJlbnRJbms0MH07XG4gIGJhY2tncm91bmQ6IG5vbmU7XG5gO1xuXG5leHBvcnQgY29uc3QgZ2hvc3QgPSAodGhlbWUpID0+IGNzc2BcbiAgYm9yZGVyLWNvbG9yOiAjODA4MDgwO1xuICBjb2xvcjogIzgwODA4MDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBkYW5nZXIgPSAodGhlbWUpID0+IGNzc2BcbiAgYmFja2dyb3VuZDogdG9tYXRvO1xuICBjb2xvcjogd2hpdGU7XG5gO1xuXG5leHBvcnQgY29uc3QgbGluayA9ICh0aGVtZSkgPT4gY3NzYFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuYDtcblxuZXhwb3J0IGNvbnN0IGJsb2NrID0gKHRoZW1lKSA9PiBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7IFxuICB3aWR0aDogMTAwJTtcbmA7XG5cbmV4cG9ydCBjb25zdCBzcGluQXJvdW5kID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmcgPSAodGhlbWUpID0+IGNzc2BcbiAgJjphZnRlciB7XG4gICAgYW5pbWF0aW9uOiAke3NwaW5Bcm91bmR9IDUwMG1zIGluZmluaXRlIGxpbmVhcjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZGJkYmRiO1xuICAgIGJvcmRlci1yYWRpdXM6IDI5MDQ4NnB4O1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDFlbTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtICgxZW0gLyAyKSk7XG4gICAgdG9wOiBjYWxjKDUwJSAtICgxZW0gLyAyKSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIH1cbiAgY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBidXR0b24sXG4gIHByaW1hcnksXG4gIHByaW1hcnlPdXRsaW5lLFxuICBvdXRsaW5lLFxuICBnaG9zdCxcbiAgZGFuZ2VyLFxuICBsaW5rLFxuICBsb2FkaW5nLFxuICBibG9ja1xufTsiXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
};

var danger = function danger(theme) {
  return _ref2;
};

var _ref3 =  {
  name: "ug4k3t",
  styles: "border-color:transparent;background:none;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5zdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUVrQyIsImZpbGUiOiJCdXR0b24uc3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzLCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IGhlbHBlciB9IGZyb20gJy4uLy4uLy4uL3N0eWxlcy9oZWxwZXInO1xuXG5leHBvcnQgY29uc3QgYnV0dG9uID0gdGhlbWUgPT4gY3NzYFxuICAke2hlbHBlci5ub1VzZXJTZWxlY3R9XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG5cbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuXG4gIGZvbnQtc2l6ZTogMWVtO1xuICBoZWlnaHQ6ICR7dGhlbWUuZGVuc2UgPyAxLjUgOiAyLjV9ZW07XG4gIGxpbmUtaGVpZ2h0OiBjYWxjKDEuNWVtIC0gNnB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcn07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogJHt0aGVtZS5kZW5zZSA/IDAuNSA6IDF9ZW07XG4gIHBhZGRpbmctcmlnaHQ6ICR7dGhlbWUuZGVuc2UgPyAwLjUgOiAxfWVtO1xuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMTI1ZW0gcmdiYSg1MCwgMTE1LCAyMjAsIDAuMjUpO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgcHJpbWFyeSA9IHRoZW1lID0+IGNzc2BcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeTUwMH07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeTYwMH07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBwcmltYXJ5T3V0bGluZSA9ICh0aGVtZSkgPT4gY3NzYFxuICBib3JkZXItY29sb3I6ICR7dGhlbWUuY29sb3JzLnByaW1hcnk1MDB9O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeTcwMH07XG5gO1xuXG5leHBvcnQgY29uc3Qgb3V0bGluZSA9ICh0aGVtZSkgPT4gY3NzYFxuICBib3JkZXItY29sb3I6ICR7dGhlbWUudHJhbnNwYXJlbnRJbms0MH07XG4gIGJhY2tncm91bmQ6IG5vbmU7XG5gO1xuXG5leHBvcnQgY29uc3QgZ2hvc3QgPSAodGhlbWUpID0+IGNzc2BcbiAgYm9yZGVyLWNvbG9yOiAjODA4MDgwO1xuICBjb2xvcjogIzgwODA4MDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBkYW5nZXIgPSAodGhlbWUpID0+IGNzc2BcbiAgYmFja2dyb3VuZDogdG9tYXRvO1xuICBjb2xvcjogd2hpdGU7XG5gO1xuXG5leHBvcnQgY29uc3QgbGluayA9ICh0aGVtZSkgPT4gY3NzYFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuYDtcblxuZXhwb3J0IGNvbnN0IGJsb2NrID0gKHRoZW1lKSA9PiBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7IFxuICB3aWR0aDogMTAwJTtcbmA7XG5cbmV4cG9ydCBjb25zdCBzcGluQXJvdW5kID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmcgPSAodGhlbWUpID0+IGNzc2BcbiAgJjphZnRlciB7XG4gICAgYW5pbWF0aW9uOiAke3NwaW5Bcm91bmR9IDUwMG1zIGluZmluaXRlIGxpbmVhcjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZGJkYmRiO1xuICAgIGJvcmRlci1yYWRpdXM6IDI5MDQ4NnB4O1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDFlbTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtICgxZW0gLyAyKSk7XG4gICAgdG9wOiBjYWxjKDUwJSAtICgxZW0gLyAyKSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIH1cbiAgY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBidXR0b24sXG4gIHByaW1hcnksXG4gIHByaW1hcnlPdXRsaW5lLFxuICBvdXRsaW5lLFxuICBnaG9zdCxcbiAgZGFuZ2VyLFxuICBsaW5rLFxuICBsb2FkaW5nLFxuICBibG9ja1xufTsiXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
};

var link = function link(theme) {
  return _ref3;
};

var _ref4 =  {
  name: "hboir5",
  styles: "display:flex;width:100%;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5zdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0VtQyIsImZpbGUiOiJCdXR0b24uc3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzLCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IGhlbHBlciB9IGZyb20gJy4uLy4uLy4uL3N0eWxlcy9oZWxwZXInO1xuXG5leHBvcnQgY29uc3QgYnV0dG9uID0gdGhlbWUgPT4gY3NzYFxuICAke2hlbHBlci5ub1VzZXJTZWxlY3R9XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG5cbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuXG4gIGZvbnQtc2l6ZTogMWVtO1xuICBoZWlnaHQ6ICR7dGhlbWUuZGVuc2UgPyAxLjUgOiAyLjV9ZW07XG4gIGxpbmUtaGVpZ2h0OiBjYWxjKDEuNWVtIC0gNnB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcn07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogJHt0aGVtZS5kZW5zZSA/IDAuNSA6IDF9ZW07XG4gIHBhZGRpbmctcmlnaHQ6ICR7dGhlbWUuZGVuc2UgPyAwLjUgOiAxfWVtO1xuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMTI1ZW0gcmdiYSg1MCwgMTE1LCAyMjAsIDAuMjUpO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgcHJpbWFyeSA9IHRoZW1lID0+IGNzc2BcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeTUwMH07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeTYwMH07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBwcmltYXJ5T3V0bGluZSA9ICh0aGVtZSkgPT4gY3NzYFxuICBib3JkZXItY29sb3I6ICR7dGhlbWUuY29sb3JzLnByaW1hcnk1MDB9O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeTcwMH07XG5gO1xuXG5leHBvcnQgY29uc3Qgb3V0bGluZSA9ICh0aGVtZSkgPT4gY3NzYFxuICBib3JkZXItY29sb3I6ICR7dGhlbWUudHJhbnNwYXJlbnRJbms0MH07XG4gIGJhY2tncm91bmQ6IG5vbmU7XG5gO1xuXG5leHBvcnQgY29uc3QgZ2hvc3QgPSAodGhlbWUpID0+IGNzc2BcbiAgYm9yZGVyLWNvbG9yOiAjODA4MDgwO1xuICBjb2xvcjogIzgwODA4MDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBkYW5nZXIgPSAodGhlbWUpID0+IGNzc2BcbiAgYmFja2dyb3VuZDogdG9tYXRvO1xuICBjb2xvcjogd2hpdGU7XG5gO1xuXG5leHBvcnQgY29uc3QgbGluayA9ICh0aGVtZSkgPT4gY3NzYFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuYDtcblxuZXhwb3J0IGNvbnN0IGJsb2NrID0gKHRoZW1lKSA9PiBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7IFxuICB3aWR0aDogMTAwJTtcbmA7XG5cbmV4cG9ydCBjb25zdCBzcGluQXJvdW5kID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmcgPSAodGhlbWUpID0+IGNzc2BcbiAgJjphZnRlciB7XG4gICAgYW5pbWF0aW9uOiAke3NwaW5Bcm91bmR9IDUwMG1zIGluZmluaXRlIGxpbmVhcjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZGJkYmRiO1xuICAgIGJvcmRlci1yYWRpdXM6IDI5MDQ4NnB4O1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDFlbTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtICgxZW0gLyAyKSk7XG4gICAgdG9wOiBjYWxjKDUwJSAtICgxZW0gLyAyKSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIH1cbiAgY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBidXR0b24sXG4gIHByaW1hcnksXG4gIHByaW1hcnlPdXRsaW5lLFxuICBvdXRsaW5lLFxuICBnaG9zdCxcbiAgZGFuZ2VyLFxuICBsaW5rLFxuICBsb2FkaW5nLFxuICBibG9ja1xufTsiXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
};

var block = function block(theme) {
  return _ref4;
};
var spinAround = core.keyframes(_templateObject());
var loading = function loading(theme) {
  return (
    /*#__PURE__*/
    core.css("&:after{animation:", spinAround, " 500ms infinite linear;border:2px solid #dbdbdb;border-radius:290486px;border-right-color:transparent;border-top-color:transparent;content:\"\";display:block;height:1em;position:relative;width:1em;position:absolute;left:calc(50% - (1em / 2));top:calc(50% - (1em / 2));position:absolute !important;}color:transparent !important;pointer-events:none;" + ( "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5zdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0ZxQyIsImZpbGUiOiJCdXR0b24uc3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzLCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IGhlbHBlciB9IGZyb20gJy4uLy4uLy4uL3N0eWxlcy9oZWxwZXInO1xuXG5leHBvcnQgY29uc3QgYnV0dG9uID0gdGhlbWUgPT4gY3NzYFxuICAke2hlbHBlci5ub1VzZXJTZWxlY3R9XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG5cbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuXG4gIGZvbnQtc2l6ZTogMWVtO1xuICBoZWlnaHQ6ICR7dGhlbWUuZGVuc2UgPyAxLjUgOiAyLjV9ZW07XG4gIGxpbmUtaGVpZ2h0OiBjYWxjKDEuNWVtIC0gNnB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcn07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogJHt0aGVtZS5kZW5zZSA/IDAuNSA6IDF9ZW07XG4gIHBhZGRpbmctcmlnaHQ6ICR7dGhlbWUuZGVuc2UgPyAwLjUgOiAxfWVtO1xuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMTI1ZW0gcmdiYSg1MCwgMTE1LCAyMjAsIDAuMjUpO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgcHJpbWFyeSA9IHRoZW1lID0+IGNzc2BcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeTUwMH07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeTYwMH07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBwcmltYXJ5T3V0bGluZSA9ICh0aGVtZSkgPT4gY3NzYFxuICBib3JkZXItY29sb3I6ICR7dGhlbWUuY29sb3JzLnByaW1hcnk1MDB9O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeTcwMH07XG5gO1xuXG5leHBvcnQgY29uc3Qgb3V0bGluZSA9ICh0aGVtZSkgPT4gY3NzYFxuICBib3JkZXItY29sb3I6ICR7dGhlbWUudHJhbnNwYXJlbnRJbms0MH07XG4gIGJhY2tncm91bmQ6IG5vbmU7XG5gO1xuXG5leHBvcnQgY29uc3QgZ2hvc3QgPSAodGhlbWUpID0+IGNzc2BcbiAgYm9yZGVyLWNvbG9yOiAjODA4MDgwO1xuICBjb2xvcjogIzgwODA4MDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBkYW5nZXIgPSAodGhlbWUpID0+IGNzc2BcbiAgYmFja2dyb3VuZDogdG9tYXRvO1xuICBjb2xvcjogd2hpdGU7XG5gO1xuXG5leHBvcnQgY29uc3QgbGluayA9ICh0aGVtZSkgPT4gY3NzYFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuYDtcblxuZXhwb3J0IGNvbnN0IGJsb2NrID0gKHRoZW1lKSA9PiBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7IFxuICB3aWR0aDogMTAwJTtcbmA7XG5cbmV4cG9ydCBjb25zdCBzcGluQXJvdW5kID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmcgPSAodGhlbWUpID0+IGNzc2BcbiAgJjphZnRlciB7XG4gICAgYW5pbWF0aW9uOiAke3NwaW5Bcm91bmR9IDUwMG1zIGluZmluaXRlIGxpbmVhcjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZGJkYmRiO1xuICAgIGJvcmRlci1yYWRpdXM6IDI5MDQ4NnB4O1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDFlbTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtICgxZW0gLyAyKSk7XG4gICAgdG9wOiBjYWxjKDUwJSAtICgxZW0gLyAyKSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIH1cbiAgY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBidXR0b24sXG4gIHByaW1hcnksXG4gIHByaW1hcnlPdXRsaW5lLFxuICBvdXRsaW5lLFxuICBnaG9zdCxcbiAgZGFuZ2VyLFxuICBsaW5rLFxuICBsb2FkaW5nLFxuICBibG9ja1xufTsiXX0= */"))
  );
};
var styles = {
  button: button,
  primary: primary,
  primaryOutline: primaryOutline,
  outline: outline,
  ghost: ghost,
  danger: danger,
  link: link,
  loading: loading,
  block: block
};

var getClasses = function getClasses(theme, elementName, classes) {
  var classesToApply = [];
  var prefix = theme.prefix || 'gbif';
  Object.keys(classes).forEach(function (key) {
    var val = classes[key];

    if (val === true) {
      classesToApply.push(key);
    } else if (typeof val === 'string') {
      classesToApply.push(val);
    }
  });
  var humanClasses = getClassNames(prefix, elementName, classesToApply);
  return {
    humanClasses: humanClasses,
    classesToApply: classesToApply
  };
};

var getClassNames = function getClassNames(prefix, elementName, classes) {
  var root = "".concat(prefix, "-").concat(elementName);
  return classes.reduce(function (a, c) {
    return "".concat(a, " ").concat(root, "-").concat(c);
  }, "".concat(root));
};

var Button = function Button(_ref) {
  var Btn = _ref.as,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      _ref$block = _ref.block,
      block = _ref$block === void 0 ? false : _ref$block,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'primary' : _ref$type,
      props = _objectWithoutProperties(_ref, ["as", "className", "loading", "block", "type"]);

  var classes = {
    type: type,
    loading: loading,
    block: block
  };
  var theme = useTheme();

  var _getClasses = getClasses(theme, 'button', classes),
      classesToApply = _getClasses.classesToApply,
      humanClasses = _getClasses.humanClasses;

  return core.jsx(Btn, _extends({
    className: "".concat(humanClasses, " ").concat(className),
    css:
    /*#__PURE__*/
    core.css(styles.button(theme), " ", classesToApply.map(function (x) {
      return styles[x](theme);
    }), ";;label:Button;" + ( "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQmlFIiwiZmlsZSI6IkJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnZW1vdGlvbi10aGVtaW5nJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0J1dHRvbi5zdHlsZXMnO1xuaW1wb3J0IHsgZ2V0Q2xhc3NlcyB9IGZyb20gJy4uLy4uLy4uL3N0eWxlcy91dGlsJztcblxuY29uc3QgQnV0dG9uID0gKHtcbiAgYXM6IEJ0bixcbiAgY2xhc3NOYW1lID0gJycsXG4gIGxvYWRpbmcgPSBmYWxzZSxcbiAgYmxvY2sgPSBmYWxzZSxcbiAgdHlwZSA9ICdwcmltYXJ5JyxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHt0eXBlLCBsb2FkaW5nLCBibG9ja307XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgeyBjbGFzc2VzVG9BcHBseSwgaHVtYW5DbGFzc2VzIH0gPSBnZXRDbGFzc2VzKHRoZW1lLCAnYnV0dG9uJywgY2xhc3Nlcyk7XG4gIHJldHVybiA8QnRuIGNsYXNzTmFtZT17YCR7aHVtYW5DbGFzc2VzfSAke2NsYXNzTmFtZX1gfSBjc3M9e2Nzc2BcbiAgICAgICAgJHtzdHlsZXMuYnV0dG9uKHRoZW1lKX1cbiAgICAgICAgJHtjbGFzc2VzVG9BcHBseS5tYXAoeCA9PiBzdHlsZXNbeF0odGhlbWUpKX07XG4gICAgICBgfSB7Li4ucHJvcHN9IC8+XG59XG5cbkJ1dHRvbi5kaXNwbGF5TmFtZSA9ICdCdXR0b24nXG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGFzOiAnYnV0dG9uJ1xufVxuXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICBhczogUHJvcFR5cGVzLm9uZU9mKFsnYnV0dG9uJywgJ2EnLCAnaW5wdXQnXSksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFsncHJpbWFyeScsICdwcmltYXJ5T3V0bGluZScsICdvdXRsaW5lJywgJ2dob3N0JywgJ2RhbmdlcicsICdsaW5rJ10pLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgYmxvY2s6IFByb3BUeXBlcy5ib29sLFxufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247Il19 */"))
  }, props));
};

Button.displayName = 'Button';
Button.defaultProps = {
  as: 'button'
};

function _EMOTION_STRINGIFIED_CSS_ERROR__$2() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref$2 =  {
  name: "1be2qhl-FilterBar",
  styles: "margin-right:4px;;label:FilterBar;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZpbHRlckJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQm9CIiwiZmlsZSI6IkZpbHRlckJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnZW1vdGlvbi10aGVtaW5nJztcbmltcG9ydCB3aXRoQ29udGV4dCBmcm9tICcuLi9zdGF0ZS93aXRoQ29udGV4dCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvQnV0dG9uJztcbmNvbnN0IEZpbHRlckJhciA9ICh7XG4gIGNsYXNzTmFtZSA9ICcnLFxuICBzdGF0ZUFwaSxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBwcmVmaXggPSB0aGVtZS5wcmVmaXggfHwgJ2diaWYnO1xuICBjb25zdCBlbGVtZW50TmFtZSA9ICdmaWx0ZXJCYXInO1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gJHtwcmVmaXh9LSR7ZWxlbWVudE5hbWV9YH1cbiAgY3NzPXtjc3NgJHtzdHlsZSh0aGVtZSl9YH0gey4uLnByb3BzfT5cbiAgICA8QnV0dG9uIGNzcz17Y3NzYG1hcmdpbi1yaWdodDogNHB4O2B9PlNwZWNpZXMgb3IgZ3JvdXA8L0J1dHRvbj5cbiAgICA8QnV0dG9uIHR5cGU9XCJvdXRsaW5lXCIgY3NzPXtjc3NgbWFyZ2luLXJpZ2h0OiA0cHg7YH0gb25DbGljaz17ZSA9PiBzdGF0ZUFwaS51cGRhdGVGaWx0ZXIoe3VwZGF0ZTogJ2Zyb21GaWx0ZXInfSl9PkJ1dHRvbjwvQnV0dG9uPlxuICAgIHtKU09OLnN0cmluZ2lmeShwcm9wcy5maWx0ZXIsIG51bGwsIDIpfVxuICA8L2Rpdj5cbn1cblxuRmlsdGVyQmFyLnByb3BUeXBlcyA9IHtcbn1cblxuZXhwb3J0IGNvbnN0IHN0eWxlID0gKHRoZW1lKSA9PiBjc3NgXG4gIFxuYDtcblxuY29uc3QgbWFwQ29udGV4dFRvUHJvcHMgPSAoeyBmaWx0ZXIsIHN0YXRlQXBpIH0pID0+ICh7IGZpbHRlciwgc3RhdGVBcGkgfSk7XG5leHBvcnQgZGVmYXVsdCB3aXRoQ29udGV4dChtYXBDb250ZXh0VG9Qcm9wcykoRmlsdGVyQmFyKTsiXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$2
};

var _ref2$1 =  {
  name: "1be2qhl-FilterBar",
  styles: "margin-right:4px;;label:FilterBar;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZpbHRlckJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQm1DIiwiZmlsZSI6IkZpbHRlckJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnZW1vdGlvbi10aGVtaW5nJztcbmltcG9ydCB3aXRoQ29udGV4dCBmcm9tICcuLi9zdGF0ZS93aXRoQ29udGV4dCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvQnV0dG9uJztcbmNvbnN0IEZpbHRlckJhciA9ICh7XG4gIGNsYXNzTmFtZSA9ICcnLFxuICBzdGF0ZUFwaSxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBwcmVmaXggPSB0aGVtZS5wcmVmaXggfHwgJ2diaWYnO1xuICBjb25zdCBlbGVtZW50TmFtZSA9ICdmaWx0ZXJCYXInO1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gJHtwcmVmaXh9LSR7ZWxlbWVudE5hbWV9YH1cbiAgY3NzPXtjc3NgJHtzdHlsZSh0aGVtZSl9YH0gey4uLnByb3BzfT5cbiAgICA8QnV0dG9uIGNzcz17Y3NzYG1hcmdpbi1yaWdodDogNHB4O2B9PlNwZWNpZXMgb3IgZ3JvdXA8L0J1dHRvbj5cbiAgICA8QnV0dG9uIHR5cGU9XCJvdXRsaW5lXCIgY3NzPXtjc3NgbWFyZ2luLXJpZ2h0OiA0cHg7YH0gb25DbGljaz17ZSA9PiBzdGF0ZUFwaS51cGRhdGVGaWx0ZXIoe3VwZGF0ZTogJ2Zyb21GaWx0ZXInfSl9PkJ1dHRvbjwvQnV0dG9uPlxuICAgIHtKU09OLnN0cmluZ2lmeShwcm9wcy5maWx0ZXIsIG51bGwsIDIpfVxuICA8L2Rpdj5cbn1cblxuRmlsdGVyQmFyLnByb3BUeXBlcyA9IHtcbn1cblxuZXhwb3J0IGNvbnN0IHN0eWxlID0gKHRoZW1lKSA9PiBjc3NgXG4gIFxuYDtcblxuY29uc3QgbWFwQ29udGV4dFRvUHJvcHMgPSAoeyBmaWx0ZXIsIHN0YXRlQXBpIH0pID0+ICh7IGZpbHRlciwgc3RhdGVBcGkgfSk7XG5leHBvcnQgZGVmYXVsdCB3aXRoQ29udGV4dChtYXBDb250ZXh0VG9Qcm9wcykoRmlsdGVyQmFyKTsiXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$2
};

var FilterBar = function FilterBar(_ref3) {
  var _ref3$className = _ref3.className,
      className = _ref3$className === void 0 ? '' : _ref3$className,
      stateApi = _ref3.stateApi,
      props = _objectWithoutProperties(_ref3, ["className", "stateApi"]);

  var theme = useTheme();
  var prefix = theme.prefix || 'gbif';
  var elementName = 'filterBar';
  return core.jsx("div", _extends({
    className: "".concat(className, " ").concat(prefix, "-").concat(elementName),
    css:
    /*#__PURE__*/
    core.css(style(), ";label:FilterBar;" + ( "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZpbHRlckJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQlUiLCJmaWxlIjoiRmlsdGVyQmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdlbW90aW9uLXRoZW1pbmcnO1xuaW1wb3J0IHdpdGhDb250ZXh0IGZyb20gJy4uL3N0YXRlL3dpdGhDb250ZXh0JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9CdXR0b24nO1xuY29uc3QgRmlsdGVyQmFyID0gKHtcbiAgY2xhc3NOYW1lID0gJycsXG4gIHN0YXRlQXBpLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IHByZWZpeCA9IHRoZW1lLnByZWZpeCB8fCAnZ2JpZic7XG4gIGNvbnN0IGVsZW1lbnROYW1lID0gJ2ZpbHRlckJhcic7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSAke3ByZWZpeH0tJHtlbGVtZW50TmFtZX1gfVxuICBjc3M9e2Nzc2Ake3N0eWxlKHRoZW1lKX1gfSB7Li4ucHJvcHN9PlxuICAgIDxCdXR0b24gY3NzPXtjc3NgbWFyZ2luLXJpZ2h0OiA0cHg7YH0+U3BlY2llcyBvciBncm91cDwvQnV0dG9uPlxuICAgIDxCdXR0b24gdHlwZT1cIm91dGxpbmVcIiBjc3M9e2Nzc2BtYXJnaW4tcmlnaHQ6IDRweDtgfSBvbkNsaWNrPXtlID0+IHN0YXRlQXBpLnVwZGF0ZUZpbHRlcih7dXBkYXRlOiAnZnJvbUZpbHRlcid9KX0+QnV0dG9uPC9CdXR0b24+XG4gICAge0pTT04uc3RyaW5naWZ5KHByb3BzLmZpbHRlciwgbnVsbCwgMil9XG4gIDwvZGl2PlxufVxuXG5GaWx0ZXJCYXIucHJvcFR5cGVzID0ge1xufVxuXG5leHBvcnQgY29uc3Qgc3R5bGUgPSAodGhlbWUpID0+IGNzc2BcbiAgXG5gO1xuXG5jb25zdCBtYXBDb250ZXh0VG9Qcm9wcyA9ICh7IGZpbHRlciwgc3RhdGVBcGkgfSkgPT4gKHsgZmlsdGVyLCBzdGF0ZUFwaSB9KTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhDb250ZXh0KG1hcENvbnRleHRUb1Byb3BzKShGaWx0ZXJCYXIpOyJdfQ== */"))
  }, props), core.jsx(Button, {
    css: _ref$2
  }, "Species or group"), core.jsx(Button, {
    type: "outline",
    css: _ref2$1,
    onClick: function onClick(e) {
      return stateApi.updateFilter({
        update: 'fromFilter'
      });
    }
  }, "Button"), JSON.stringify(props.filter, null, 2));
};

var style = function style(theme) {
  return (
    /*#__PURE__*/
    core.css( "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZpbHRlckJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQm1DIiwiZmlsZSI6IkZpbHRlckJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnZW1vdGlvbi10aGVtaW5nJztcbmltcG9ydCB3aXRoQ29udGV4dCBmcm9tICcuLi9zdGF0ZS93aXRoQ29udGV4dCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvQnV0dG9uJztcbmNvbnN0IEZpbHRlckJhciA9ICh7XG4gIGNsYXNzTmFtZSA9ICcnLFxuICBzdGF0ZUFwaSxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBwcmVmaXggPSB0aGVtZS5wcmVmaXggfHwgJ2diaWYnO1xuICBjb25zdCBlbGVtZW50TmFtZSA9ICdmaWx0ZXJCYXInO1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gJHtwcmVmaXh9LSR7ZWxlbWVudE5hbWV9YH1cbiAgY3NzPXtjc3NgJHtzdHlsZSh0aGVtZSl9YH0gey4uLnByb3BzfT5cbiAgICA8QnV0dG9uIGNzcz17Y3NzYG1hcmdpbi1yaWdodDogNHB4O2B9PlNwZWNpZXMgb3IgZ3JvdXA8L0J1dHRvbj5cbiAgICA8QnV0dG9uIHR5cGU9XCJvdXRsaW5lXCIgY3NzPXtjc3NgbWFyZ2luLXJpZ2h0OiA0cHg7YH0gb25DbGljaz17ZSA9PiBzdGF0ZUFwaS51cGRhdGVGaWx0ZXIoe3VwZGF0ZTogJ2Zyb21GaWx0ZXInfSl9PkJ1dHRvbjwvQnV0dG9uPlxuICAgIHtKU09OLnN0cmluZ2lmeShwcm9wcy5maWx0ZXIsIG51bGwsIDIpfVxuICA8L2Rpdj5cbn1cblxuRmlsdGVyQmFyLnByb3BUeXBlcyA9IHtcbn1cblxuZXhwb3J0IGNvbnN0IHN0eWxlID0gKHRoZW1lKSA9PiBjc3NgXG4gIFxuYDtcblxuY29uc3QgbWFwQ29udGV4dFRvUHJvcHMgPSAoeyBmaWx0ZXIsIHN0YXRlQXBpIH0pID0+ICh7IGZpbHRlciwgc3RhdGVBcGkgfSk7XG5leHBvcnQgZGVmYXVsdCB3aXRoQ29udGV4dChtYXBDb250ZXh0VG9Qcm9wcykoRmlsdGVyQmFyKTsiXX0= */")
  );
};

var mapContextToProps = function mapContextToProps(_ref4) {
  var filter = _ref4.filter,
      stateApi = _ref4.stateApi;
  return {
    filter: filter,
    stateApi: stateApi
  };
};

var FilterBar$1 = withContext(mapContextToProps)(FilterBar);

var Tab$1 = Tabs.Tab;

var Layout = function Layout(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      props = _objectWithoutProperties(_ref, ["className"]);

  var _useState = React.useState('home'),
      _useState2 = _slicedToArray(_useState, 2),
      key = _useState2[0],
      setKey = _useState2[1];

  var theme = useTheme();
  var prefix = theme.prefix || 'gbif';
  var elementName = 'occurrenceSearchLayout';
  return core.jsx("div", _extends({
    className: "".concat(className, " ").concat(prefix, "-").concat(elementName),
    css:
    /*#__PURE__*/
    core.css(layout(theme, prefix, elementName), ";label:Layout;" + ( "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QlkiLCJmaWxlIjoiTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdlbW90aW9uLXRoZW1pbmcnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IE1kQ2xvc2UgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmltcG9ydCB3aXRoQ29udGV4dCBmcm9tICcuL3N0YXRlL3dpdGhDb250ZXh0JztcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UsIEZvcm1hdHRlZE51bWJlciB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG5pbXBvcnQgeyBUYWJzIH0gZnJvbSBcIi4uLy4uL2xheW91dC9UYWJzXCI7XG5cbmltcG9ydCB7IEZpbHRlckJhciB9IGZyb20gJy4vRmlsdGVyQmFyJztcbmNvbnN0IFRhYiA9IFRhYnMuVGFiO1xuXG5jb25zdCBMYXlvdXQgPSAoe1xuICBjbGFzc05hbWUgPSAnJyxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3QgW2tleSwgc2V0S2V5XSA9IHVzZVN0YXRlKCdob21lJyk7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgcHJlZml4ID0gdGhlbWUucHJlZml4IHx8ICdnYmlmJztcbiAgY29uc3QgZWxlbWVudE5hbWUgPSAnb2NjdXJyZW5jZVNlYXJjaExheW91dCc7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSAke3ByZWZpeH0tJHtlbGVtZW50TmFtZX1gfVxuICAgIGNzcz17Y3NzYCR7bGF5b3V0KHRoZW1lLCBwcmVmaXgsIGVsZW1lbnROYW1lKX1gfSB7Li4ucHJvcHN9PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LSR7ZWxlbWVudE5hbWV9LW5hdkJhcmB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tJHtlbGVtZW50TmFtZX0tZmlsdGVyc2B9PlxuICAgICAgICA8RmlsdGVyQmFyPjwvRmlsdGVyQmFyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS0ke2VsZW1lbnROYW1lfS12aWV3c2B9PlxuICAgICAgPFRhYnMgYWN0aXZlS2V5PXtrZXl9IG9uU2VsZWN0PXtrID0+IHNldEtleShrKX0+XG4gICAgICAgIDxUYWIgZXZlbnRLZXk9XCJob21lXCI+XG4gICAgICAgICAgU3BlY2llcyBvciBHcm91cFxuICAgICAgICA8L1RhYj5cbiAgICAgICAgPFRhYiBldmVudEtleT1cInByb2ZpbGVcIj5cbiAgICAgICAgICBTZWNvbmQgT3B0aW9uPE1kQ2xvc2Ugc3R5bGU9e3ttYXJnaW5MZWZ0OiA4fX0vPlxuICAgICAgICA8L1RhYj5cbiAgICAgICAgPFRhYiBldmVudEtleT1cImNvbnRhY3RcIiBkaXNhYmxlZD5cbiAgICAgICAgICB0aGlyZFxuICAgICAgICA8L1RhYj5cbiAgICAgIDwvVGFicz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LSR7ZWxlbWVudE5hbWV9LWJvZHlgfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LSR7ZWxlbWVudE5hbWV9LW1haW5gfT5jb250ZW50IHtwcm9wcy50ZXN0fTxiciAvPlxuICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcbiAgICAgICAgICAgICAgICBpZD0ncGFnaW5hdGlvbi5wYWdlWG9mWSdcbiAgICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZT17J0xvYWRpbmcnfVxuICAgICAgICAgICAgICAgIHZhbHVlcz17eyBjdXJyZW50OiA8Rm9ybWF0dGVkTnVtYmVyIHZhbHVlPXsxMH0vPiwgdG90YWw6IDxGb3JtYXR0ZWROdW1iZXIgdmFsdWU9ezIwMDAwfS8+IH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8YXNpZGUgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LSR7ZWxlbWVudE5hbWV9LWRyYXdlcmB9PnJpZ2h0IGRyYXdlcjwvYXNpZGU+ICovfVxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LSR7ZWxlbWVudE5hbWV9LWZvb3RlcmB9PlxuICAgICAgPGRpdj5Gb290ZXIgY29udGVudDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbn1cblxuTGF5b3V0LnByb3BUeXBlcyA9IHtcbn1cblxuZXhwb3J0IGNvbnN0IGxheW91dCA9ICh0aGVtZSwgcHJlZml4LCBlbGVtZW50TmFtZSkgPT4gY3NzYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICAuJHtwcmVmaXh9LSR7ZWxlbWVudE5hbWV9LW5hdkJhciB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC4ke3ByZWZpeH0tJHtlbGVtZW50TmFtZX0tZmlsdGVycyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyYTJhMzg7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG4gIC4ke3ByZWZpeH0tJHtlbGVtZW50TmFtZX0tdmlld3Mge1xuICAgIFxuICB9XG4gIC4ke3ByZWZpeH0tJHtlbGVtZW50TmFtZX0tYm9keSB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLiR7cHJlZml4fS0ke2VsZW1lbnROYW1lfS1tYWluIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IDEwO1xuICB9XG4gIC4ke3ByZWZpeH0tJHtlbGVtZW50TmFtZX0tZHJhd2VyIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMyYTJhMzg7XG4gIH1cbiAgLiR7cHJlZml4fS0ke2VsZW1lbnROYW1lfS1mb290ZXIge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICY+ZGl2IHtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMmEyYTM4O1xuICAgICAgcGFkZGluZzogNXB4IDEycHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDAuODVlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBtYXBDb250ZXh0VG9Qcm9wcyA9ICh7IHRlc3QgfSkgPT4gKHsgdGVzdCB9KTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhDb250ZXh0KG1hcENvbnRleHRUb1Byb3BzKShMYXlvdXQpOyJdfQ== */"))
  }, props), core.jsx("div", {
    className: "".concat(prefix, "-").concat(elementName, "-navBar")
  }, core.jsx("div", {
    className: "".concat(prefix, "-").concat(elementName, "-filters")
  }, core.jsx(FilterBar$1, null)), core.jsx("div", {
    className: "".concat(prefix, "-").concat(elementName, "-views")
  }, core.jsx(Tabs, {
    activeKey: key,
    onSelect: function onSelect(k) {
      return setKey(k);
    }
  }, core.jsx(Tab$1, {
    eventKey: "home"
  }, "Species or Group"), core.jsx(Tab$1, {
    eventKey: "profile"
  }, "Second Option", core.jsx(MdClose, {
    style: {
      marginLeft: 8
    }
  })), core.jsx(Tab$1, {
    eventKey: "contact",
    disabled: true
  }, "third")))), core.jsx("div", {
    className: "".concat(prefix, "-").concat(elementName, "-body")
  }, core.jsx("div", {
    className: "".concat(prefix, "-").concat(elementName, "-main")
  }, "content ", props.test, core.jsx("br", null), core.jsx(FormattedMessage, {
    id: "pagination.pageXofY",
    defaultMessage: 'Loading',
    values: {
      current: core.jsx(FormattedNumber, {
        value: 10
      }),
      total: core.jsx(FormattedNumber, {
        value: 20000
      })
    }
  }))), core.jsx("div", {
    className: "".concat(prefix, "-").concat(elementName, "-footer")
  }, core.jsx("div", null, "Footer content")));
};

var layout = function layout(theme, prefix, elementName) {
  return (
    /*#__PURE__*/
    core.css("display:flex;flex-direction:column;height:100%;overflow:auto;.", prefix, "-", elementName, "-navBar{flex:0 0 auto;flex-direction:column;display:flex;}.", prefix, "-", elementName, "-filters{border-bottom:1px solid #2a2a38;padding:8px;}.", prefix, "-", elementName, "-views{}.", prefix, "-", elementName, "-body{flex:1 1 auto;display:flex;flex-direction:row;overflow:hidden;}.", prefix, "-", elementName, "-main{flex:1 1 auto;display:flex;flex-direction:column;overflow:hidden;margin:10;}.", prefix, "-", elementName, "-drawer{border-left:1px solid #2a2a38;}.", prefix, "-", elementName, "-footer{flex:0 0 auto;&>div{border-top:1px solid #2a2a38;padding:5px 12px;color:white;font-size:0.85em;font-weight:700;}}" + ( "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RHlEIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnZW1vdGlvbi10aGVtaW5nJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBNZENsb3NlIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5pbXBvcnQgd2l0aENvbnRleHQgZnJvbSAnLi9zdGF0ZS93aXRoQ29udGV4dCc7XG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlLCBGb3JtYXR0ZWROdW1iZXIgfSBmcm9tICdyZWFjdC1pbnRsJztcblxuaW1wb3J0IHsgVGFicyB9IGZyb20gXCIuLi8uLi9sYXlvdXQvVGFic1wiO1xuXG5pbXBvcnQgeyBGaWx0ZXJCYXIgfSBmcm9tICcuL0ZpbHRlckJhcic7XG5jb25zdCBUYWIgPSBUYWJzLlRhYjtcblxuY29uc3QgTGF5b3V0ID0gKHtcbiAgY2xhc3NOYW1lID0gJycsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IFtrZXksIHNldEtleV0gPSB1c2VTdGF0ZSgnaG9tZScpO1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IHByZWZpeCA9IHRoZW1lLnByZWZpeCB8fCAnZ2JpZic7XG4gIGNvbnN0IGVsZW1lbnROYW1lID0gJ29jY3VycmVuY2VTZWFyY2hMYXlvdXQnO1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gJHtwcmVmaXh9LSR7ZWxlbWVudE5hbWV9YH1cbiAgICBjc3M9e2Nzc2Ake2xheW91dCh0aGVtZSwgcHJlZml4LCBlbGVtZW50TmFtZSl9YH0gey4uLnByb3BzfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS0ke2VsZW1lbnROYW1lfS1uYXZCYXJgfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LSR7ZWxlbWVudE5hbWV9LWZpbHRlcnNgfT5cbiAgICAgICAgPEZpbHRlckJhcj48L0ZpbHRlckJhcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tJHtlbGVtZW50TmFtZX0tdmlld3NgfT5cbiAgICAgIDxUYWJzIGFjdGl2ZUtleT17a2V5fSBvblNlbGVjdD17ayA9PiBzZXRLZXkoayl9PlxuICAgICAgICA8VGFiIGV2ZW50S2V5PVwiaG9tZVwiPlxuICAgICAgICAgIFNwZWNpZXMgb3IgR3JvdXBcbiAgICAgICAgPC9UYWI+XG4gICAgICAgIDxUYWIgZXZlbnRLZXk9XCJwcm9maWxlXCI+XG4gICAgICAgICAgU2Vjb25kIE9wdGlvbjxNZENsb3NlIHN0eWxlPXt7bWFyZ2luTGVmdDogOH19Lz5cbiAgICAgICAgPC9UYWI+XG4gICAgICAgIDxUYWIgZXZlbnRLZXk9XCJjb250YWN0XCIgZGlzYWJsZWQ+XG4gICAgICAgICAgdGhpcmRcbiAgICAgICAgPC9UYWI+XG4gICAgICA8L1RhYnM+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS0ke2VsZW1lbnROYW1lfS1ib2R5YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS0ke2VsZW1lbnROYW1lfS1tYWluYH0+Y29udGVudCB7cHJvcHMudGVzdH08YnIgLz5cbiAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlXG4gICAgICAgICAgICAgICAgaWQ9J3BhZ2luYXRpb24ucGFnZVhvZlknXG4gICAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U9eydMb2FkaW5nJ31cbiAgICAgICAgICAgICAgICB2YWx1ZXM9e3sgY3VycmVudDogPEZvcm1hdHRlZE51bWJlciB2YWx1ZT17MTB9Lz4sIHRvdGFsOiA8Rm9ybWF0dGVkTnVtYmVyIHZhbHVlPXsyMDAwMH0vPiB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogPGFzaWRlIGNsYXNzTmFtZT17YCR7cHJlZml4fS0ke2VsZW1lbnROYW1lfS1kcmF3ZXJgfT5yaWdodCBkcmF3ZXI8L2FzaWRlPiAqL31cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS0ke2VsZW1lbnROYW1lfS1mb290ZXJgfT5cbiAgICAgIDxkaXY+Rm9vdGVyIGNvbnRlbnQ8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG59XG5cbkxheW91dC5wcm9wVHlwZXMgPSB7XG59XG5cbmV4cG9ydCBjb25zdCBsYXlvdXQgPSAodGhlbWUsIHByZWZpeCwgZWxlbWVudE5hbWUpID0+IGNzc2BcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgLiR7cHJlZml4fS0ke2VsZW1lbnROYW1lfS1uYXZCYXIge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuJHtwcmVmaXh9LSR7ZWxlbWVudE5hbWV9LWZpbHRlcnMge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmEyYTM4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgfVxuICAuJHtwcmVmaXh9LSR7ZWxlbWVudE5hbWV9LXZpZXdzIHtcbiAgICBcbiAgfVxuICAuJHtwcmVmaXh9LSR7ZWxlbWVudE5hbWV9LWJvZHkge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC4ke3ByZWZpeH0tJHtlbGVtZW50TmFtZX0tbWFpbiB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAxMDtcbiAgfVxuICAuJHtwcmVmaXh9LSR7ZWxlbWVudE5hbWV9LWRyYXdlciB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMmEyYTM4O1xuICB9XG4gIC4ke3ByZWZpeH0tJHtlbGVtZW50TmFtZX0tZm9vdGVyIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAmPmRpdiB7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzJhMmEzODtcbiAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1zaXplOiAwLjg1ZW07XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgbWFwQ29udGV4dFRvUHJvcHMgPSAoeyB0ZXN0IH0pID0+ICh7IHRlc3QgfSk7XG5leHBvcnQgZGVmYXVsdCB3aXRoQ29udGV4dChtYXBDb250ZXh0VG9Qcm9wcykoTGF5b3V0KTsiXX0= */"))
  );
};

var mapContextToProps$1 = function mapContextToProps(_ref2) {
  var test = _ref2.test;
  return {
    test: test
  };
};

var Layout$1 = withContext(mapContextToProps$1)(Layout);

// import TablePresentation from '../components/views/Table/TablePresentation';
// import MapPresentation from '../components/views/Map/MapPresentation';
// import QuickSearchPresentation from '../components/QuickSearch/QuickSearchPresentation';
// import { get } from 'lodash';
// import { getFilterFromUrl, getUpdatedFilter, pushStateToUrl } from './stateHelper';
// import { strToHash } from '../util/helpers';
// import history from './history';
// export const views = {
//   TABLE: 'TABLE',
//   GALLERY: 'GALLERY',
//   MAP: 'MAP',
// }

/**
 * Holds all cross cutting state for the occurrence search (most prominently the current filter) and is responsible for managing URL params as well
 */

var StateProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StateProvider, _React$Component);

  function StateProvider(props) {
    var _this;

    _classCallCheck(this, StateProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StateProvider).call(this, props)); // const components = {
    //   TableView: get(props, 'settings.components.TableView', TablePresentation),
    //   MapView: get(props, 'settings.components.MapView', MapPresentation),
    //   QuickSearch: get(props, 'settings.components.QuickSearch', QuickSearchPresentation),
    // }
    // let filter = getFilterFromUrl(window.location.search);
    // this.unlisten = history.listen((location, action) => {
    //   this.updateStateFilter(getFilterFromUrl(location.search));
    // });

    _defineProperty(_assertThisInitialized(_this), "updateFilter", function (options) {
      _this.setState({
        filter: options
      }); // const filter = getUpdatedFilter(this.state.filter, options);
      // pushStateToUrl(filter);

    });

    _this.state = {
      // appRef: React.createRef(),
      // activeView: views.TABLE,
      // filter,//{year: [2018, {gte: 1928, lt:1929}]}, // current filter
      stateApi: {
        // updateView: this.updateView, // update the active view
        updateFilter: _this.updateFilter // updates a single field
        // updateQuery, // sets the full query

      },
      // components,
      // api
      test: 10,
      filter: {
        must: {
          datasetKey: ['1234-1234-1234-1234']
        }
      } // current filter

    };
    return _this;
  } // updateView = selected => {
  //   if (!views[selected]) return;
  //   this.setState({ activeView: selected });
  // }


  _createClass(StateProvider, [{
    key: "render",
    // updateStateFilter = filter => {
    //   const filterHash = strToHash(JSON.stringify(filter));
    //   this.setState({
    //     filter,
    //     filterHash
    //   });
    // }
    value: function render() {
      return React__default.createElement(AppContext.Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  return StateProvider;
}(React__default.Component);

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
// import qs from 'querystringify';

function OccurrenceSearch(props) {
  return core.jsx(StateProvider, null, core.jsx(Layout$1, props));
} // OccurrenceSearch.propTypes = {

function _EMOTION_STRINGIFIED_CSS_ERROR__$3() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
var shared =  {
  name: "ga3sg-shared",
  styles: "flex-basis:auto;flex-grow:0;flex-shrink:0;align-items:center;@media screen and (min-width:769px),print{display:flex;margin:0 -0.35em;};label:shared;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxldmVsQ2hpbGRyZW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT2tCIiwiZmlsZSI6IkxldmVsQ2hpbGRyZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ2Vtb3Rpb24tdGhlbWluZyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuXG5jb25zdCBzaGFyZWQgPSBjc3NgXG4gIGZsZXgtYmFzaXM6IGF1dG87XG4gIGZsZXgtZ3JvdzogMDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSwgcHJpbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAwIC0wLjM1ZW07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBMZXZlbExlZnQgPSBzdHlsZWQuZGl2YFxuICAke3NoYXJlZH1cbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuYDtcblxuZXhwb3J0IGNvbnN0IExldmVsUmlnaHQgPSBzdHlsZWQuZGl2YFxuICAke3NoYXJlZH1cbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbmA7XG5cbmV4cG9ydCBjb25zdCBMZXZlbEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWJhc2lzOiBhdXRvO1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1ncm93OiAxO1xuICBtYXJnaW46IDAgMC4zNWVtO1xuYDtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$3
};
var LevelLeft = createStyled("div", {
  target: "e11sigvc0",
  label: "LevelLeft"
})(shared, " justify-content:flex-start;" + ( "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxldmVsQ2hpbGRyZW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JtQyIsImZpbGUiOiJMZXZlbENoaWxkcmVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdlbW90aW9uLXRoZW1pbmcnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcblxuY29uc3Qgc2hhcmVkID0gY3NzYFxuICBmbGV4LWJhc2lzOiBhdXRvO1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCksIHByaW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMCAtMC4zNWVtO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTGV2ZWxMZWZ0ID0gc3R5bGVkLmRpdmBcbiAgJHtzaGFyZWR9XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbmA7XG5cbmV4cG9ydCBjb25zdCBMZXZlbFJpZ2h0ID0gc3R5bGVkLmRpdmBcbiAgJHtzaGFyZWR9XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5gO1xuXG5leHBvcnQgY29uc3QgTGV2ZWxJdGVtID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1iYXNpczogYXV0bztcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWFyZ2luOiAwIDAuMzVlbTtcbmA7XG4iXX0= */"));
var LevelRight = createStyled("div", {
  target: "e11sigvc1",
  label: "LevelRight"
})(shared, " justify-content:flex-end;" + ( "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxldmVsQ2hpbGRyZW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJvQyIsImZpbGUiOiJMZXZlbENoaWxkcmVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdlbW90aW9uLXRoZW1pbmcnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcblxuY29uc3Qgc2hhcmVkID0gY3NzYFxuICBmbGV4LWJhc2lzOiBhdXRvO1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCksIHByaW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMCAtMC4zNWVtO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTGV2ZWxMZWZ0ID0gc3R5bGVkLmRpdmBcbiAgJHtzaGFyZWR9XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbmA7XG5cbmV4cG9ydCBjb25zdCBMZXZlbFJpZ2h0ID0gc3R5bGVkLmRpdmBcbiAgJHtzaGFyZWR9XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5gO1xuXG5leHBvcnQgY29uc3QgTGV2ZWxJdGVtID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1iYXNpczogYXV0bztcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWFyZ2luOiAwIDAuMzVlbTtcbmA7XG4iXX0= */"));
var LevelItem = createStyled("div", {
  target: "e11sigvc2",
  label: "LevelItem"
})( {
  name: "jkbedv",
  styles: "align-items:center;display:flex;flex-basis:auto;flex-grow:0;flex-shrink:0;justify-content:center;flex-grow:1;margin:0 0.35em;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxldmVsQ2hpbGRyZW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJtQyIsImZpbGUiOiJMZXZlbENoaWxkcmVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdlbW90aW9uLXRoZW1pbmcnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcblxuY29uc3Qgc2hhcmVkID0gY3NzYFxuICBmbGV4LWJhc2lzOiBhdXRvO1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCksIHByaW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMCAtMC4zNWVtO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTGV2ZWxMZWZ0ID0gc3R5bGVkLmRpdmBcbiAgJHtzaGFyZWR9XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbmA7XG5cbmV4cG9ydCBjb25zdCBMZXZlbFJpZ2h0ID0gc3R5bGVkLmRpdmBcbiAgJHtzaGFyZWR9XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5gO1xuXG5leHBvcnQgY29uc3QgTGV2ZWxJdGVtID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1iYXNpczogYXV0bztcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWFyZ2luOiAwIDAuMzVlbTtcbmA7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$3
});

var Level = function Level(_ref) {
  var Lvl = _ref.as,
      props = _objectWithoutProperties(_ref, ["as"]);

  var theme = useTheme();
  return core.jsx(Lvl, _extends({
    css:
    /*#__PURE__*/
    core.css("align-items:center;justify-content:space-between;background:", theme.paperBackground, ";img{display:inline-block;vertical-align:top;}@media screen and (min-width:769px),print{display:flex;};label:Level;" + ( "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxldmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlzQiIsImZpbGUiOiJMZXZlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnZW1vdGlvbi10aGVtaW5nJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGV2ZWxJdGVtLCBMZXZlbExlZnQsIExldmVsUmlnaHQgfSBmcm9tICcuL0xldmVsQ2hpbGRyZW4nO1xuXG5jb25zdCBMZXZlbCA9ICh7XG4gIGFzOiBMdmwsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgcmV0dXJuIDxMdmwgY3NzPXtjc3NgXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5wYXBlckJhY2tncm91bmR9O1xuICAgICAgICBpbWcge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSwgcHJpbnQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgIGB9IHsuLi5wcm9wc30+XG4gICAgICA8L0x2bD5cbn1cblxuTGV2ZWwuZGlzcGxheU5hbWUgPSAnTGV2ZWwnXG5cbkxldmVsLmRlZmF1bHRQcm9wcyA9IHtcbiAgYXM6ICduYXYnXG59XG5cbkxldmVsLnByb3BUeXBlcyA9IHtcbiAgYXM6IFByb3BUeXBlcy5ub2RlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8vIGRhbmdlcjogUHJvcFR5cGVzLmJvb2wsXG4gIC8vIG91dGxpbmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLy8gcHJpbWFyeTogUHJvcFR5cGVzLmJvb2wsXG4gIC8vIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxufVxuXG5MZXZlbC5JdGVtID0gTGV2ZWxJdGVtO1xuTGV2ZWwuTGVmdCA9IExldmVsTGVmdDtcbkxldmVsLlJpZ2h0ID0gTGV2ZWxSaWdodDtcblxuZXhwb3J0IGRlZmF1bHQgTGV2ZWwiXX0= */"))
  }, props));
};

Level.displayName = 'Level';
Level.defaultProps = {
  as: 'nav'
};
Level.Item = LevelItem;
Level.Left = LevelLeft;
Level.Right = LevelRight;

var Root = function Root(_ref) {
  var Rt = _ref.as,
      props = _objectWithoutProperties(_ref, ["as"]);

  var theme = useTheme();
  return core.jsx(Rt, _extends({
    css:
    /*#__PURE__*/
    core.css("font-family:BlinkMacSystemFont,-apple-system,\"Segoe UI\",\"Roboto\",\"Oxygen\",\"Ubuntu\",\"Cantarell\",\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",\"Helvetica\",\"Arial\",sans-serif;color:", theme.color || '#4a4a4a', ";font-size:", theme.fontSize || '1em', ";font-weight:400;line-height:1.5;box-sizing:border-box;background:", theme.background || 'white', ";*,*::before,*::after,strong{box-sizing:inherit;};label:Root;" + ( "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJvb3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV3FCIiwiZmlsZSI6IlJvb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ2Vtb3Rpb24tdGhlbWluZyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgUm9vdCA9ICh7XG4gIGFzOiBSdCxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICByZXR1cm4gPFJ0IGNzcz17Y3NzYFxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBCbGlua01hY1N5c3RlbUZvbnQsIC1hcHBsZS1zeXN0ZW0sIFwiU2Vnb2UgVUlcIiwgXCJSb2JvdG9cIiwgXCJPeHlnZW5cIiwgXCJVYnVudHVcIiwgXCJDYW50YXJlbGxcIiwgXCJGaXJhIFNhbnNcIiwgXCJEcm9pZCBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9yIHx8ICcjNGE0YTRhJ307XG4gICAgICAgICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnRTaXplIHx8ICcxZW0nfTtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmJhY2tncm91bmQgfHwgJ3doaXRlJ307XG4gICAgICAgICAgKiwgKjo6YmVmb3JlLCAqOjphZnRlciwgc3Ryb25nIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gICAgICAgICAgfVxuICAgICAgYH0gey4uLnByb3BzfT5cbiAgPC9SdD5cbn1cblxuUm9vdC5kaXNwbGF5TmFtZSA9ICdSb290J1xuXG5Sb290LmRlZmF1bHRQcm9wcyA9IHtcbiAgYXM6ICdkaXYnXG59XG5cblJvb3QucHJvcFR5cGVzID0ge1xuICBhczogUHJvcFR5cGVzLm5vZGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgUm9vdDsiXX0= */"))
  }, props));
};

Root.displayName = 'Root';
Root.defaultProps = {
  as: 'div'
};

exports.Button = Button;
exports.Level = Level;
exports.OccurrenceSearch = OccurrenceSearch;
exports.Root = Root;
