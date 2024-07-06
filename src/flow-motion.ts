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
  elm: HTMLElement,
  property: CSSProperty,
  from: number | string,
  to: number | string,
  duration: number,
  easing: string
): void {
  elm.style[property as any] = from as string;
  elm.style.transition = `${duration}ms ${easing} ${property}`;
  setTimeout(() => {
    elm.style[property as any] = to as string;
  }, duration);
}

function revertCSSAnimation(
  elm: HTMLElement,
  property: CSSProperty,
  from: number | string,
  to: number | string,
  duration: number,
  easing: string
): void {
  elm.style[property as any] = to as string;
  elm.style.transition = `${duration}ms ${easing} ${property}`;
  setTimeout(() => {
    elm.style[property as any] = from as string;
  }, duration);
}

function attachHoverListeners(
  elements: NodeListOf<HTMLElement>,
  properties: PropertyOptions[],
  duration: number,
  easing: string
): void {
  elements.forEach((element) => {
    properties.forEach(({ property, from, to, delay = 0 }) => {
      setTimeout(() => {
        element.addEventListener("mouseover", () => {
          applyCSSAnimation(element, property, from, to, duration, easing);
        });
        element.addEventListener("mouseleave", () => {
          revertCSSAnimation(element, property, from, to, duration, easing);
        });
      }, delay);
    });
  });
}

function attachScrollListeners(
  elements: NodeListOf<HTMLElement>,
  properties: PropertyOptions[],
  duration: number,
  easing: string
): void {
  elements.forEach((element) => {
    window.addEventListener("scroll", () => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        properties.forEach(({ property, from, to, delay = 0 }) => {
          setTimeout(() => {
            applyCSSAnimation(element, property, from, to, duration, easing);
          }, delay);
        });
      }
    });
  });
}

function attachClickListeners(
  elements: NodeListOf<HTMLElement>,
  properties: PropertyOptions[],
  duration: number,
  easing: string
): void {
  elements.forEach((element) => {
    element.addEventListener("click", () => {
      properties.forEach(({ property, from, to, delay = 0 }) => {
        setTimeout(() => {
          applyCSSAnimation(element, property, from, to, duration, easing);
        }, delay);
      });
    });
  });
}

function attachFocusListeners(
  elements: NodeListOf<HTMLElement>,
  properties: PropertyOptions[],
  duration: number,
  easing: string
): void {
  elements.forEach((element) => {
    element.addEventListener("focus", () => {
      properties.forEach(({ property, from, to, delay = 0 }) => {
        setTimeout(() => {
          applyCSSAnimation(element, property, from, to, duration, easing);
        }, delay);
      });
    });
    element.addEventListener("blur", () => {
      properties.forEach(({ property, from, to, delay = 0 }) => {
        setTimeout(() => {
          revertCSSAnimation(element, property, from, to, duration, easing);
        }, delay);
      });
    });
  });
}

function attachVisibleListeners(
  elements: NodeListOf<HTMLElement>,
  properties: PropertyOptions[],
  duration: number,
  easing: string
): void {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        properties.forEach(({ property, from, to, delay = 0 }) => {
          setTimeout(() => {
            applyCSSAnimation(entry.target as HTMLElement, property, from, to, duration, easing);
          }, delay);
        });
      }
    });
  });

  elements.forEach((element) => {
    observer.observe(element);
  });
}

function animateElements({
  element,
  properties,
  duration,
  easing,
  trigger,
}: AnimationOptions): ErrorResponse | void {
  const elements = document.querySelectorAll<HTMLElement>(element);
  if (elements.length === 0) {
    const errorMessage = "No elements found for the provided selector.";
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
      const errorMessage = `Trigger "${trigger}" not implemented.`;
      logError(errorMessage);
      return createErrorResponse(errorMessage);
  }
}

const FlowMotion = {
  animate: animateElements,
};

(() => {
  (window as any).FlowMotion = FlowMotion;
})();
