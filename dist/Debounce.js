"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

/* Debouncing in JavaScript is a practice used to improve browser performance
* There might be some functionality in a web page which requires time-consuming computations.
* If such a method is invoked frequently, it might greatly affect the performance of the browser, as JavaScript is a single threaded language.
* Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often,
* that it stalls the performance of the web page. In other words, it limits the rate at which a function gets invoked
*/

var Debounce = exports.Debounce = function Debounce(fn, delay) {
    var timeOutId = void 0;

    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        if (timeOutId) {
            clearTimeout(timeOutId);
        }
        timeOutId = setTimeout(function () {
            return fn.apply(undefined, args);
        }, delay);
    };
};