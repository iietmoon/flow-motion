"use strict";
var easeInOut = function (t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};
var linear = function (t) { return t; };
var easeInQuad = function (t) { return t * t; };
var easeOutQuad = function (t) { return t * (2 - t); };
var easeInOutQuad = function (t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};
var easeInCubic = function (t) { return t * t * t; };
var easeOutCubic = function (t) { return --t * t * t + 1; };
var easeInOutCubic = function (t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};
var easeInQuart = function (t) { return t * t * t * t; };
var easeOutQuart = function (t) { return 1 - --t * t * t * t; };
var easeInOutQuart = function (t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
};
var easeInQuint = function (t) { return t * t * t * t * t; };
var easeOutQuint = function (t) { return 1 + --t * t * t * t * t; };
var easeInOutQuint = function (t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
};
var easeInExpo = function (t) {
    return t === 0 ? 0 : Math.pow(2, 10 * (t - 1));
};
var easeOutExpo = function (t) {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};
var easeInOutExpo = function (t) {
    if (t === 0)
        return 0;
    if (t === 1)
        return 1;
    if (t < 0.5)
        return 0.5 * Math.pow(2, 20 * t - 10);
    return 1 - 0.5 * Math.pow(2, 10 - t * 20);
};
var easeInCirc = function (t) { return 1 - Math.sqrt(1 - t * t); };
var easeOutCirc = function (t) { return Math.sqrt(1 - --t * t); };
var easeInOutCirc = function (t) {
    return t < 0.5
        ? (1 - Math.sqrt(1 - 2 * t * t)) * 0.5
        : (Math.sqrt(1 - 2 * --t * t) + 1) * 0.5;
};
var easeInElastic = function (t) {
    if (t === 0)
        return 0;
    if (t === 1)
        return 1;
    return -Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1.1) * 5 * Math.PI);
};
var easeOutElastic = function (t) {
    if (t === 0)
        return 0;
    if (t === 1)
        return 1;
    return Math.pow(2, -10 * t) * Math.sin((t - 0.1) * 5 * Math.PI) + 1;
};
var easeInOutElastic = function (t) {
    if (t === 0)
        return 0;
    if (t === 1)
        return 1;
    t = t * 2 - 1;
    if (t < 0)
        return -0.5 * Math.pow(2, 10 * t) * Math.sin((t - 0.1) * 5 * Math.PI);
    return 0.5 * Math.pow(2, -10 * t) * Math.sin((t - 0.1) * 5 * Math.PI) + 1;
};
var easeInBack = function (t, s) {
    if (s === void 0) { s = 1.70158; }
    return t * t * ((s + 1) * t - s);
};
var easeOutBack = function (t, s) {
    if (s === void 0) { s = 1.70158; }
    return --t * t * ((s + 1) * t + s) + 1;
};
var easeInOutBack = function (t, s) {
    if (s === void 0) { s = 1.70158 * 1.525; }
    t *= 2;
    if (t < 1)
        return 0.5 * (t * t * ((s + 1) * t - s));
    return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2);
};
var easeInBounce = function (t) { return 1 - easeOutBounce(1 - t); };
var easeOutBounce = function (t) {
    var n1 = 7.5625;
    var d1 = 2.75;
    if (t < 1 / d1) {
        return n1 * t * t;
    }
    else if (t < 2 / d1) {
        return n1 * (t -= 1.5 / d1) * t + 0.75;
    }
    else if (t < 2.5 / d1) {
        return n1 * (t -= 2.25 / d1) * t + 0.9375;
    }
    else {
        return n1 * (t -= 2.625 / d1) * t + 0.984375;
    }
};
var easeInOutBounce = function (t) {
    return t < 0.5
        ? (1 - easeOutBounce(1 - 2 * t)) * 0.5
        : (1 + easeOutBounce(2 * t - 1)) * 0.5;
};
var quadraticBezier = function (t, p0, p1, p2) {
    return (1 - t) * (1 - t) * p0 + 2 * (1 - t) * t * p1 + t * t * p2;
};
var cubicBezier = function (t, p0, p1, p2, p3) {
    return (1 - t) * (1 - t) * (1 - t) * p0 +
        3 * (1 - t) * (1 - t) * t * p1 +
        3 * (1 - t) * t * t * p2 +
        t * t * t * p3;
};
var easingFunctions = {
    easeInOut: easeInOut,
    linear: linear,
    easeInQuad: easeInQuad,
    easeOutQuad: easeOutQuad,
    easeInOutQuad: easeInOutQuad,
    easeInCubic: easeInCubic,
    easeOutCubic: easeOutCubic,
    easeInOutCubic: easeInOutCubic,
    easeInQuart: easeInQuart,
    easeOutQuart: easeOutQuart,
    easeInOutQuart: easeInOutQuart,
    easeInQuint: easeInQuint,
    easeOutQuint: easeOutQuint,
    easeInOutQuint: easeInOutQuint,
    easeInExpo: easeInExpo,
    easeOutExpo: easeOutExpo,
    easeInOutExpo: easeInOutExpo,
    easeInCirc: easeInCirc,
    easeOutCirc: easeOutCirc,
    easeInOutCirc: easeInOutCirc,
    easeInElastic: easeInElastic,
    easeOutElastic: easeOutElastic,
    easeInOutElastic: easeInOutElastic,
    easeInBack: easeInBack,
    easeOutBack: easeOutBack,
    easeInOutBack: easeInOutBack,
    easeInBounce: easeInBounce,
    easeOutBounce: easeOutBounce,
    easeInOutBounce: easeInOutBounce,
    quadraticBezier: quadraticBezier,
    cubicBezier: cubicBezier,
};
var interpolate = function (property, from, to, progress) {
    switch (property) {
        case 'opacity':
        case 'visibility':
        case 'background-color':
        case 'color':
        case 'border-color':
        case 'outline-color':
            return interpolateColor(from, to, progress);
        case 'display':
            return to;
        case 'transform':
            return interpolateTransform(from, to, progress);
        case 'filter':
            return interpolateFilter(from, to, progress);
        case 'width':
        case 'height':
        case 'margin':
        case 'padding':
        case 'border-width':
        case 'border-radius':
        case 'outline-width':
        case 'outline-offset':
            return interpolateNumeric(from, to, progress);
        default:
            return to;
    }
};
var interpolateNumeric = function (from, to, progress) {
    return from + (to - from) * progress;
};
var interpolateColor = function (from, to, progress) {
    return to; // Implement color interpolation logic as needed
};
var interpolateTransform = function (from, to, progress) {
    return to; // Implement transform interpolation logic as needed
};
var interpolateFilter = function (from, to, progress) {
    return to; // Implement filter interpolation logic as needed
};
var getElements = function (selector) {
    if (selector.startsWith('#')) {
        var element = document.getElementById(selector.substring(1));
        return element ? [element] : [];
    }
    else if (selector.startsWith('.')) {
        return Array.from(document.querySelectorAll(selector));
    }
    else {
        return Array.from(document.getElementsByTagName(selector));
    }
};
var animate = function (_a) {
    var element = _a.element, properties = _a.properties, duration = _a.duration, easing = _a.easing;
    var elements = getElements(element);
    var startTime = performance.now();
    var startValues = {};
    elements.forEach(function (elem) {
        properties.forEach(function (_a) {
            var property = _a.property;
            var prop = property;
            // @ts-ignore
            startValues[prop] = window.getComputedStyle(elem)[prop];
        });
    });
    var animateFrame = function (currentTime) {
        var elapsed = currentTime - startTime;
        var progress = Math.min(elapsed / duration, 1);
        elements.forEach(function (elem) {
            properties.forEach(function (_a) {
                var property = _a.property, from = _a.from, to = _a.to;
                var prop = property;
                var interpolatedValue = interpolate(prop, from, to, easingFunctions[easing](progress));
                elem.style[prop] = interpolatedValue;
            });
        });
        if (progress < 1) {
            requestAnimationFrame(animateFrame);
        }
    };
    requestAnimationFrame(animateFrame);
};
var FlowMotion = {
    animate: animate,
};
