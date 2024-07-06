"use strict";
function logError(message, error) {
    console.error("An error occurred:", error);
}
function createErrorResponse(message, error) {
    return {
        message: message,
        error: error,
    };
}
function applyAnimation(elm, property, from, to, duration, easing) {
    elm.style[property] = from;
    elm.style.transition = "".concat(duration, "ms ").concat(easing, " ").concat(property);
    setTimeout(function () {
        elm.style[property] = to;
    }, duration);
}
function revertAnimation(elm, property, from, to, duration, easing) {
    elm.style[property] = to;
    elm.style.transition = "".concat(duration, "ms ").concat(easing, " ").concat(property);
    setTimeout(function () {
        elm.style[property] = from;
    }, duration);
}
function animateElements(_a) {
    var element = _a.element, properties = _a.properties, duration = _a.duration, easing = _a.easing, trigger = _a.trigger;
    var elements = document.querySelectorAll(element);
    if (elements.length === 0) {
        var errorMessage = "No elements found for the provided selector.";
        logError(errorMessage);
        return createErrorResponse(errorMessage);
    }
    if (trigger === 'hover') {
        elements.forEach(function (element) {
            properties.forEach(function (_a) {
                var property = _a.property, from = _a.from, to = _a.to, _b = _a.delay, delay = _b === void 0 ? 0 : _b;
                setTimeout(function () {
                    element.addEventListener("mouseover", function (event) {
                        applyAnimation(element, property, from, to, duration, easing);
                    });
                    element.addEventListener("mouseleave", function (event) {
                        revertAnimation(element, property, from, to, duration, easing);
                    });
                }, delay);
            });
        });
    }
    /*
    elements.forEach((elm) => {
      properties.forEach(({ property, from, to, delay = 0 }) => {
        setTimeout(function () {
          applyAnimation(elm, property, from, to, duration, easing);
        }, delay);
      });
    });
    */
}
var FlowMotion = {
    animate: animateElements,
};
(function () {
    window.FlowMotion = FlowMotion;
})();
