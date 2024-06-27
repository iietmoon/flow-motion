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

type TriggerOption = 'scroll' | 'entrance' | 'hover' | 'click' | 'focus' | 'visible';

interface PropertyOptions {
  property: CSSProperty;
  from: number | string;
  to: number | string;
}

interface AnimationOptions {
  element: string;
  properties: PropertyOptions[];
  duration: number;
  easing: string;
  trigger: TriggerOption;
}

function interpolate() {
  return null;
}

interface ErrorResponse {
  message: string;
  error?: any;
}

function logError(message: string, error?: any): void {
  console.error('An error occurred:', error);
}

function createErrorResponse(message: string, error?: any): ErrorResponse {
  return {
    message,
    error,
  };
}

function applyAnimationStyles(elm: HTMLElement | any, property: CSSProperty, from: number | string, to: number | string, duration: number, easing: string): void {
  elm.style[property] = from as string;
  elm.style.transition = `${duration}ms`;
  setTimeout(() => {
    elm.style[property] = to as string;
  }, duration);
}

function animateElements({ element, properties, duration, easing, trigger }: AnimationOptions): ErrorResponse | void {
  const elements = document.querySelectorAll<HTMLElement>(element);
  if (elements.length === 0) {
    const errorMessage = "No elements found for the provided selector.";
    logError(errorMessage);
    return createErrorResponse(errorMessage);
  }

  elements.forEach((elm) => {
    properties.forEach(({ property, from, to }) => {
      applyAnimationStyles(elm, property, from, to, duration, easing);
    });
  });
}

const FlowMotion = {
  animate: animateElements,
};