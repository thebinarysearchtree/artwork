const makeElement = (elementClass, name) => {
  name = name ? name : elementClass.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  customElements.define(name, elementClass);
  return (state) => {
    const element = document.createElement(name);
    element.state = state;
    element.renderShadow();
    return element;
  }
}

const makeAsyncElement = (elementClass, name) => {
  name = name ? name : elementClass.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  customElements.define(name, elementClass);
  return async (state) => {
    const element = document.createElement(name);
    element.state = state;
    await element.renderShadow();
    return element;
  }
}

const makeState = (o) => {
  const state = {};
  for (const [key, value] of Object.entries(o)) {
    if (typeof value === 'function') {
      Object.defineProperty(state, key, { get: value });
    }
    else {
      let get;
      const element = value;
      switch (element.type) {
        case 'number':
        case 'range':
          get = () => Number(element.value);
          break;
        case 'checkbox':
          get = () => element.checked;
          break;
        case 'date':
        case 'datetime-local':
          get = () => new Date(element.value);
          break;
        default:
          get = () => element.value;
      }
      Object.defineProperty(state, key, { get });
    }
  }
  return state;
}

const addProperty = (divs, className) => {
  const propertyName = className.replace(/([a-z])-([a-z])/, (s1, s2, s3) => `${s2}${s3.toUpperCase()}`);
  const get = () => {
    const div = document.createElement('div');
    div.className = className;
    return div;
  }
  Object.defineProperty(divs, propertyName, { get });
}

const makeDivs = (styles) => {
  const divs = {};
  if (typeof styles === 'string') {
    const classNames = [...styles.matchAll(/$\s*\.([a-zA-Z\-]+)\s*{/gm)].map(a => a[1]);
    for (const className of classNames) {
      addProperty(divs, className);
    }
    return divs;
  }
  for (const rule of styles.cssRules) {
    const selector = rule.selectorText;
    if (selector && selector.startsWith('.') && /\.[a-zA-Z0-9\-]/.test(selector)) {
      const className = selector.substring(1);
      addProperty(divs, className);
    }
  }
  return divs;
}

const createElement = (tag, textOrProperties) => {
  if (tag === 'variable') {
    tag = 'var';
  }
  const element = document.createElement(tag);
  if (typeof textOrProperties === 'string') {
    element.innerText = textOrProperties;
  }
  if (!textOrProperties) {
    return element;
  }
  for (const [key, value] of Object.entries(textOrProperties)) {
    element[key] = value;
  }
  return element;
}

export {
  createElement,
  makeAsyncElement,
  makeElement,
  makeDivs,
  makeState
};
