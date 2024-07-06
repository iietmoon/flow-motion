type CSSProperty =
  | "opacity"
  | "visibility"
  | "display"
  | "transform"
  | "filter"
  | "background-color"
  | "color"
  | "width"
  | "height"
  | "margin"
  | "padding"
  | "border-width"
  | "border-color"
  | "border-radius"
  | "outline-width"
  | "outline-color"
  | "outline-offset"
  | "letter-spacing";

type TriggerOption =
  | "scroll"
  | "entrance"
  | "hover"
  | "click"
  | "focus"
  | "visible";

interface PropertyOptions {
  property: CSSProperty;
  from: number | string;
  to: number | string;
  delay?: number;
}

interface AnimationOptions {
  element: string;
  properties: PropertyOptions[];
  duration: number;
  easing: string;
  trigger: TriggerOption;
}

interface ErrorResponse {
  message: string;
  error?: any;
}

type EasingFunction = (
  t: number,
  p0?: number | any,
  p1?: number | any,
  p2?: number | any,
  p3?: number | any
) => number;

const easingFunctions: { [key: string]: EasingFunction } = {
  easeInOut: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  linear: (t) => t,
  easeInQuad: (t) => t * t,
  easeOutQuad: (t) => t * (2 - t),
  easeInOutQuad: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  easeInCubic: (t) => t * t * t,
  easeOutCubic: (t) => --t * t * t + 1,
  easeInOutCubic: (t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),
  easeInQuart: (t) => t * t * t * t,
  easeOutQuart: (t) => 1 - --t * t * t * t,
  easeInOutQuart: (t) => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t),
  easeInQuint: (t) => t * t * t * t * t,
  easeOutQuint: (t) => 1 + --t * t * t * t * t,
  easeInOutQuint: (t) => (t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t),
  easeInExpo: (t) => (t === 0 ? 0 : Math.pow(2, 10 * (t - 1))),
  easeOutExpo: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  easeInOutExpo: (t) => {
    if (t === 0) return 0;
    if (t === 1) return 1;
    if (t < 0.5) return 0.5 * Math.pow(2, 20 * t - 10);
    return 1 - 0.5 * Math.pow(2, 10 - t * 20);
  },
  easeInCirc: (t) => 1 - Math.sqrt(1 - t * t),
  easeOutCirc: (t) => Math.sqrt(1 - --t * t),
  easeInOutCirc: (t) => (t < 0.5 ? (1 - Math.sqrt(1 - 2 * t * t)) * 0.5 : (Math.sqrt(1 - 2 * --t * t) + 1) * 0.5),
  easeInElastic: (t) => (t === 0 ? 0 : t === 1 ? 1 : -Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1.1) * 5 * Math.PI)),
  easeOutElastic: (t) => (t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t - 0.1) * 5 * Math.PI) + 1),
  easeInOutElastic: (t) => {
    if (t === 0) return 0;
    if (t === 1) return 1;
    t = t * 2 - 1;
    if (t < 0) return -0.5 * Math.pow(2, 10 * t) * Math.sin((t - 0.1) * 5 * Math.PI);
    return 0.5 * Math.pow(2, -10 * t) * Math.sin((t - 0.1) * 5 * Math.PI) + 1;
  },
  easeInBack: (t, s = 1.70158) => t * t * ((s + 1) * t - s),
  easeOutBack: (t, s = 1.70158) => --t * t * ((s + 1) * t + s) + 1,
  easeInOutBack: (t, s = 1.70158 * 1.525) => {
    t *= 2;
    if (t < 1) return 0.5 * (t * t * ((s + 1) * t - s));
    return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2);
  },
  easeInBounce: (t) => 1 - easingFunctions.easeOutBounce(1 - t),
  easeOutBounce: (t) => {
    const n1 = 7.5625;
    const d1 = 2.75;
    if (t < 1 / d1) {
      return n1 * t * t;
    } else if (t < 2 / d1) {
      return n1 * (t -= 1.5 / d1) * t + 0.75;
    } else if (t < 2.5 / d1) {
      return n1 * (t -= 2.25 / d1) * t + 0.9375;
    } else {
      return n1 * (t -= 2.625 / d1) * t + 0.984375;
    }
  },
  easeInOutBounce: (t) => (t < 0.5 ? (1 - easingFunctions.easeOutBounce(1 - 2 * t)) * 0.5 : (1 + easingFunctions.easeOutBounce(2 * t - 1)) * 0.5),
  quadraticBezier: (t, p0, p1, p2) => (1 - t) * (1 - t) * p0 + 2 * (1 - t) * t * p1 + t * t * p2,
  cubicBezier: (t, p0, p1, p2, p3) => (1 - t) * (1 - t) * (1 - t) * p0 + 3 * (1 - t) * (1 - t) * t * p1 + 3 * (1 - t) * t * t * p2 + t * t * t * p3,
};

function logError(message: string, error?: any): void {
  console.error("An error occurred:", error);
}

function createErrorResponse(message: string, error?: any): ErrorResponse {
  return {
    message,
    error,
  };
}

function applyCSSAnimation(
  elm: any,
  property: CSSProperty,
  from: number | string,
  to: number | string,
  duration: number,
  easing: EasingFunction
): void {
  const startTime = performance.now();
  const startValue = parseFloat(from as string);
  const endValue = parseFloat(to as string);

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const interpolatedValue = startValue + (endValue - startValue) * easing(progress);
    elm.style[property] = interpolatedValue.toString();

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
}

function revertCSSAnimation(
  elm: any,
  property: CSSProperty,
  from: number | string,
  to: number | string,
  duration: number,
  easing: EasingFunction
): void {
  const startTime = performance.now();
  const startValue = parseFloat(to as string);
  const endValue = parseFloat(from as string);

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const interpolatedValue = startValue + (endValue - startValue) * easing(progress);
    elm.style[property] = interpolatedValue.toString();

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
}

function cssAnimate(config: AnimationOptions): ErrorResponse | void {
  const { element, properties, duration, easing, trigger } = config;
  const elm = document.querySelector(element);
  if (!elm) {
    return createErrorResponse("Element not found");
  }

  const easingFunction = easingFunctions[easing];
  if (!easingFunction) {
    return createErrorResponse("Easing function not found");
  }

  function runAnimations() {
    properties.forEach(({ property, from, to, delay = 0 }) => {
      setTimeout(() => {
        applyCSSAnimation(elm, property, from, to, duration, easingFunction);
      }, delay);
    });
  }

  function revertAnimations() {
    properties.forEach(({ property, from, to, delay = 0 }) => {
      setTimeout(() => {
        revertCSSAnimation(elm, property, from, to, duration, easingFunction);
      }, delay);
    });
  }

  if (trigger === "hover") {
    elm.addEventListener("mouseenter", runAnimations);
    elm.addEventListener("mouseleave", revertAnimations);
  } else if (trigger === "click") {
    elm.addEventListener("click", runAnimations);
  } else if (trigger === "focus") {
    elm.addEventListener("focus", runAnimations);
    elm.addEventListener("blur", revertAnimations);
  } else if (trigger === "scroll") {
    window.addEventListener("scroll", () => {
      const rect = elm.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        runAnimations();
      }
    });
  } else if (trigger === "entrance") {
    runAnimations();
  } else if (trigger === "visible") {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runAnimations();
        }
      });
    });
    observer.observe(elm);
  } else {
    return createErrorResponse("Invalid trigger option");
  }
}
