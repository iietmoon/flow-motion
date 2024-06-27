type PropertyAnimation = {
  property: string;
  from: any;
  to: any;
};

type AnimationOptions = {
  element: string;
  properties: PropertyAnimation[];
  duration: number;
  easing: string;
};

type EasingFunction = (
  t: number,
  p0?: number | any,
  p1?: number | any,
  p2?: number | any,
  p3?: number | any
) => number;

type CSSProperty =
  | 'opacity'
  | 'visibility'
  | 'display'
  | 'transform'
  | 'filter'
  | 'background-color'
  | 'color'
  | 'width'
  | 'height'
  | 'margin'
  | 'padding'
  | 'border-width'
  | 'border-color'
  | 'border-radius'
  | 'outline-width'
  | 'outline-color'
  | 'outline-offset';

const easeInOut: EasingFunction = (t) =>
  t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
const linear: EasingFunction = (t) => t;
const easeInQuad: EasingFunction = (t) => t * t;
const easeOutQuad: EasingFunction = (t) => t * (2 - t);
const easeInOutQuad: EasingFunction = (t) =>
  t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
const easeInCubic: EasingFunction = (t) => t * t * t;
const easeOutCubic: EasingFunction = (t) => --t * t * t + 1;
const easeInOutCubic: EasingFunction = (t) =>
  t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
const easeInQuart: EasingFunction = (t) => t * t * t * t;
const easeOutQuart: EasingFunction = (t) => 1 - --t * t * t * t;
const easeInOutQuart: EasingFunction = (t) =>
  t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
const easeInQuint: EasingFunction = (t) => t * t * t * t * t;
const easeOutQuint: EasingFunction = (t) => 1 + --t * t * t * t * t;
const easeInOutQuint: EasingFunction = (t) =>
  t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
const easeInExpo: EasingFunction = (t) =>
  t === 0 ? 0 : Math.pow(2, 10 * (t - 1));
const easeOutExpo: EasingFunction = (t) =>
  t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
const easeInOutExpo: EasingFunction = (t) => {
  if (t === 0) return 0;
  if (t === 1) return 1;
  if (t < 0.5) return 0.5 * Math.pow(2, 20 * t - 10);
  return 1 - 0.5 * Math.pow(2, 10 - t * 20);
};
const easeInCirc: EasingFunction = (t) => 1 - Math.sqrt(1 - t * t);
const easeOutCirc: EasingFunction = (t) => Math.sqrt(1 - --t * t);
const easeInOutCirc: EasingFunction = (t) =>
  t < 0.5
    ? (1 - Math.sqrt(1 - 2 * t * t)) * 0.5
    : (Math.sqrt(1 - 2 * --t * t) + 1) * 0.5;
const easeInElastic: EasingFunction = (t) => {
  if (t === 0) return 0;
  if (t === 1) return 1;
  return -Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1.1) * 5 * Math.PI);
};
const easeOutElastic: EasingFunction = (t) => {
  if (t === 0) return 0;
  if (t === 1) return 1;
  return Math.pow(2, -10 * t) * Math.sin((t - 0.1) * 5 * Math.PI) + 1;
};
const easeInOutElastic: EasingFunction = (t) => {
  if (t === 0) return 0;
  if (t === 1) return 1;
  t = t * 2 - 1;
  if (t < 0)
    return -0.5 * Math.pow(2, 10 * t) * Math.sin((t - 0.1) * 5 * Math.PI);
  return 0.5 * Math.pow(2, -10 * t) * Math.sin((t - 0.1) * 5 * Math.PI) + 1;
};
const easeInBack: EasingFunction = (t, s = 1.70158) =>
  t * t * ((s + 1) * t - s);
const easeOutBack: EasingFunction = (t, s = 1.70158) =>
  --t * t * ((s + 1) * t + s) + 1;
const easeInOutBack: EasingFunction = (t, s = 1.70158 * 1.525) => {
  t *= 2;
  if (t < 1) return 0.5 * (t * t * ((s + 1) * t - s));
  return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2);
};
const easeInBounce: EasingFunction = (t) => 1 - easeOutBounce(1 - t);
const easeOutBounce: EasingFunction = (t) => {
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
};
const easeInOutBounce: EasingFunction = (t) =>
  t < 0.5
    ? (1 - easeOutBounce(1 - 2 * t)) * 0.5
    : (1 + easeOutBounce(2 * t - 1)) * 0.5;
const quadraticBezier: EasingFunction = (t, p0, p1, p2) =>
  (1 - t) * (1 - t) * p0 + 2 * (1 - t) * t * p1 + t * t * p2;
const cubicBezier: EasingFunction = (t, p0, p1, p2, p3) =>
  (1 - t) * (1 - t) * (1 - t) * p0 +
  3 * (1 - t) * (1 - t) * t * p1 +
  3 * (1 - t) * t * t * p2 +
  t * t * t * p3;

const easingFunctions: { [key: string]: EasingFunction } = {
  easeInOut,
  linear,
  easeInQuad,
  easeOutQuad,
  easeInOutQuad,
  easeInCubic,
  easeOutCubic,
  easeInOutCubic,
  easeInQuart,
  easeOutQuart,
  easeInOutQuart,
  easeInQuint,
  easeOutQuint,
  easeInOutQuint,
  easeInExpo,
  easeOutExpo,
  easeInOutExpo,
  easeInCirc,
  easeOutCirc,
  easeInOutCirc,
  easeInElastic,
  easeOutElastic,
  easeInOutElastic,
  easeInBack,
  easeOutBack,
  easeInOutBack,
  easeInBounce,
  easeOutBounce,
  easeInOutBounce,
  quadraticBezier,
  cubicBezier,
};

const interpolate = (
  property: CSSProperty,
  from: any,
  to: any,
  progress: any
) => {
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

const interpolateNumeric = (from: number, to: number, progress: number) => {
  return from + (to - from) * progress;
};

const interpolateColor = (from: string, to: string, progress: number) => {
  return to; // Implement color interpolation logic as needed
};

const interpolateTransform = (from: string, to: string, progress: number) => {
  return to; // Implement transform interpolation logic as needed
};

const interpolateFilter = (from: string, to: string, progress: number) => {
  return to; // Implement filter interpolation logic as needed
};

const getElements = (selector: string): any[] => {
  if (selector.startsWith('#')) {
    const element = document.getElementById(selector.substring(1));
    return element ? [element] : [];
  } else if (selector.startsWith('.')) {
    return Array.from(document.querySelectorAll(selector));
  } else {
    return Array.from(document.getElementsByTagName(selector));
  }
};

const animate = ({
  element,
  properties,
  duration,
  easing,
}: AnimationOptions) => {
  const elements = getElements(element);
  const startTime = performance.now();
  const startValues: { [key in CSSProperty]?: any } = {};

  elements.forEach((elem) => {
    properties.forEach(({ property }) => {
      const prop = property as CSSProperty;
      // @ts-ignore
      startValues[prop] = window.getComputedStyle(elem)[prop];
    });
  });

  const animateFrame = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    elements.forEach((elem) => {
      properties.forEach(({ property, from, to }) => {
        const prop = property as CSSProperty;
        const interpolatedValue = interpolate(
          prop,
          from,
          to,
          easingFunctions[easing](progress)
        );
        elem.style[prop as any] = interpolatedValue;
      });
    });

    if (progress < 1) {
      requestAnimationFrame(animateFrame);
    }
  };

  requestAnimationFrame(animateFrame);
};

const FlowMotion = {
  animate,
};
