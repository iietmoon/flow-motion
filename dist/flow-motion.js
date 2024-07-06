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
function applyCSSAnimation(elm, property, from, to, duration, easing) {
    elm.style[property] = from;
    elm.style.transition = "".concat(duration, "ms ").concat(easing, " ").concat(property);
    setTimeout(function () {
        elm.style[property] = to;
    }, duration);
}
function revertCSSAnimation(elm, property, from, to, duration, easing) {
    elm.style[property] = to;
    elm.style.transition = "".concat(duration, "ms ").concat(easing, " ").concat(property);
    setTimeout(function () {
        elm.style[property] = from;
    }, duration);
}
function attachHoverListeners(elements, properties, duration, easing) {
    elements.forEach(function (element) {
        properties.forEach(function (_a) {
            var property = _a.property, from = _a.from, to = _a.to, _b = _a.delay, delay = _b === void 0 ? 0 : _b;
            setTimeout(function () {
                element.addEventListener("mouseover", function () {
                    applyCSSAnimation(element, property, from, to, duration, easing);
                });
                element.addEventListener("mouseleave", function () {
                    revertCSSAnimation(element, property, from, to, duration, easing);
                });
            }, delay);
        });
    });
}
function attachScrollListeners(elements, properties, duration, easing) {
    elements.forEach(function (element) {
        window.addEventListener("scroll", function () {
            var rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                properties.forEach(function (_a) {
                    var property = _a.property, from = _a.from, to = _a.to, _b = _a.delay, delay = _b === void 0 ? 0 : _b;
                    setTimeout(function () {
                        applyCSSAnimation(element, property, from, to, duration, easing);
                    }, delay);
                });
            }
        });
    });
}
function attachClickListeners(elements, properties, duration, easing) {
    elements.forEach(function (element) {
        element.addEventListener("click", function () {
            properties.forEach(function (_a) {
                var property = _a.property, from = _a.from, to = _a.to, _b = _a.delay, delay = _b === void 0 ? 0 : _b;
                setTimeout(function () {
                    applyCSSAnimation(element, property, from, to, duration, easing);
                }, delay);
            });
        });
    });
}
function attachFocusListeners(elements, properties, duration, easing) {
    elements.forEach(function (element) {
        element.addEventListener("focus", function () {
            properties.forEach(function (_a) {
                var property = _a.property, from = _a.from, to = _a.to, _b = _a.delay, delay = _b === void 0 ? 0 : _b;
                setTimeout(function () {
                    applyCSSAnimation(element, property, from, to, duration, easing);
                }, delay);
            });
        });
        element.addEventListener("blur", function () {
            properties.forEach(function (_a) {
                var property = _a.property, from = _a.from, to = _a.to, _b = _a.delay, delay = _b === void 0 ? 0 : _b;
                setTimeout(function () {
                    revertCSSAnimation(element, property, from, to, duration, easing);
                }, delay);
            });
        });
    });
}
function attachVisibleListeners(elements, properties, duration, easing) {
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                properties.forEach(function (_a) {
                    var property = _a.property, from = _a.from, to = _a.to, _b = _a.delay, delay = _b === void 0 ? 0 : _b;
                    setTimeout(function () {
                        applyCSSAnimation(entry.target, property, from, to, duration, easing);
                    }, delay);
                });
            }
        });
    });
    elements.forEach(function (element) {
        observer.observe(element);
    });
}
function animateElements(_a) {
    var element = _a.element, properties = _a.properties, duration = _a.duration, easing = _a.easing, trigger = _a.trigger;
    var elements = document.querySelectorAll(element);
    if (elements.length === 0) {
        var errorMessage = "No elements found for the provided selector.";
        logError(errorMessage);
        return createErrorResponse(errorMessage);
    }
    switch (trigger) {
        case "hover":
            attachHoverListeners(elements, properties, duration, easing);
            break;
        case "scroll":
            attachScrollListeners(elements, properties, duration, easing);
            break;
        case "click":
            attachClickListeners(elements, properties, duration, easing);
            break;
        case "focus":
            attachFocusListeners(elements, properties, duration, easing);
            break;
        case "visible":
            attachVisibleListeners(elements, properties, duration, easing);
            break;
        default:
            var errorMessage = "Trigger \"".concat(trigger, "\" not implemented.");
            logError(errorMessage);
            return createErrorResponse(errorMessage);
    }
}
var FlowMotion = {
    animate: animateElements,
};
(function () {
    window.FlowMotion = FlowMotion;
})();
