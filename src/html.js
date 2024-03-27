import isEvent from './camel.js';
import BaseElement from './BaseElement.js';

const components = {};

const create = (tag, innerText) => {
  if (typeof innerText === 'string') {
    const element = document.createElement(tag);
    if (innerText) {
      element.innerText = innerText;
    }
    return element;
  }
  if (!tag) {
    const handler = {
      get: (target, prop, receiver) => {
        return document.createElement(prop);
      }
    }
    return new Proxy({}, handler);
  }
  if (!innerText) {
    return document.createElement(tag);
  }
  const properties = innerText;
  const element = document.createElement(tag);
  for (const [key, value] of Object.entries(properties)) {
    if (key === 'children') {
      element.append(...value);
    }
    else if (key.startsWith('on') && key.length > 2 && isEvent(key) && value) {
      const event = key.substring(2).toLowerCase();
      element.addEventListener(event, (e) => value(element, e));
    }
    else {
      element[key] = value;
    }
  }
  return element;
}

const styled = (tag = 'div') => {
  const handler = {
    get: (target, prop, receiver) => {
      const element = document.createElement(tag);
      element.className = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
      return element;
    }
  }
  return new Proxy({}, handler);
}

const createStyles = (styles) => {
  let stringStyles = [];
  let adoptedStyles = [];
  if (typeof styles === 'string') {
    if ('adoptedStyleSheets' in document) {
      const sheet = new CSSStyleSheet();
      sheet.replaceSync(styles);
      adoptedStyles.push(sheet);
    }
    else {
      stringStyles.push(styles);
    }
  }
  else if (styles instanceof CSSStyleSheet) {
    adoptedStyles.push(styles);
  }
  else {
    if (styles.length > 0) {
      if (typeof styles[0] === 'string') {
        if ('adoptedStyleSheets' in document) {
          const sheets = styles.map(style => {
            const sheet = new CSSStyleSheet();
            sheet.replaceSync(style);
            return sheet;
          });
          adoptedStyles = adoptedStyles.concat(sheets);
        }
        else {
          stringStyles = stringStyles.concat(styles);
        }
      }
      else {
        adoptedStyles = adoptedStyles.concat(styles);
      }
    }
  }
  return {
    stringStyles,
    adoptedStyles
  }
}

const register = (options) => {
  const { name, root, connected, styles, props } = options;
  const registered = components[name];
  if (registered) {
    const clone = registered.cloneNode();
    clone.load(root, connected, props);
    return clone;
  }
  const base = options.extends || BaseElement;
  const processedStyles = styles ? createStyles(styles) : null;
  const type = class extends base {
    constructor() {
      super();
      if (processedStyles) {
        const { stringStyles, adoptedStyles } = processedStyles;
        for (const css of stringStyles) {
          const style = document.createElement('style');
          style.innerText = css;
          this.shadowRoot.append(style);
        }
        if (adoptedStyles.length > 0) {
          this.shadowRoot.adoptedStyleSheets = adoptedStyles;
        }
      }
    }
  }
  customElements.define(name, type);
  const element = document.createElement(name);
  components[name] = element.cloneNode();
  element.load(root, connected, props);
  return element;
}

const predefined = new Map([
  ['create', create],
  ['styled', styled],
  ['register', register]
]);

const elementCreators = {};

const handler = {
  get: function(target, tag, receiver) {
    const existing = predefined.get(tag);
    if (existing) {
      return existing;
    }
    if (elementCreators[tag]) {
      return elementCreators[tag];
    }
    elementCreators[tag] = (properties) => create(tag, properties);
    return elementCreators[tag];
  }
}

const proxy = new Proxy(elementCreators, handler);

export default proxy;
