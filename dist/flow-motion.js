"use strict";
function interpolate() {
    return null;
}
function logError(message, error) {
    console.error('An error occurred:', error);
}
function createErrorResponse(message, error) {
    return {
        message: message,
        error: error,
    };
}
function applyAnimationStyles(elm, property, from, to, duration, easing) {
    elm.style[property] = from;
    elm.style.transition = "".concat(duration, "ms");
    setTimeout(function () {
        elm.style[property] = to;
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
    elements.forEach(function (elm) {
        properties.forEach(function (_a) {
            var property = _a.property, from = _a.from, to = _a.to;
            applyAnimationStyles(elm, property, from, to, duration, easing);
        });
    });
}
var FlowMotion = {
    animate: animateElements,
};
