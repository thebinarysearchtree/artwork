const makeArt = (elementClass, name) => {
  name = name ? name : elementClass.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  customElements.define(name, elementClass);
  return (state) => {
    const element = document.createElement(name);
    element.state = state;
    element.renderShadow();
    return element;
  }
}

const makeAsyncArt = (elementClass, name) => {
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
  const propertyName = className.replace(/([a-z])-([a-z])/, (m, g1, g2) => `${g1}${g2.toUpperCase()}`);
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

const make = (tags) => {
  const elements = {};
  for (const [key, value] of Object.entries(tags)) {
    Object.defineProperty(elements, key, { get: () => value() });
  }
  return elements;
}

const style = (elements) => {
  for (const [key, value] of Object.entries(elements)) {
    const className = key.replace(/([a-z])([A-Z])/, '$1-$2').toLowerCase();
    value.className = className;
  }
}

const createElement = (tag, properties) => {
  const element = document.createElement(tag);
  if (typeof properties === 'string') {
    element.innerText = properties;
  }
  if (!properties) {
    return element;
  }
  for (const [key, value] of Object.entries(properties)) {
    element[key] = value;
  }
  return element;
}

export {
  createElement,
  makeAsyncArt,
  makeArt,
  makeDivs,
  makeState,
  make,
  style
};
