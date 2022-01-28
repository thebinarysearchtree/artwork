import tagNames from './tagNames.js';

const tags = {};
for (const tag of tagNames) {
  tags[tag] = (textOrAttributes) => createWithoutStyle(tag, textOrAttributes);
}

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

const toRule = (className, properties) => {
  let rule = `.${className} {`;
  for (const [key, value] of Object.entries(properties)) {
    const name = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    rule += `${name}: ${value};`;
  }
  rule += '}';
  return rule;
}

class Styled {
  constructor() {
    this.index = 1;
    this.element = document.createElement('style');
    for (const tag of tagNames) {
      this[tag] = (properties) => {
        const className = this.makeStyle(properties);
        return (textOrAttributes) => create(tag, className, textOrAttributes);
      }
    }
  }

  makeStyle(properties) {
    const className = `style${this.index}`;
    this.index++;
    this.element.textContent += toRule(className, properties);
    return className;
  }
}

const createWithoutStyle = (tag, textOrAttributes) => {
  return create(tag, null, textOrAttributes);
}

const create = (tag, className, textOrAttributes) => {
  if (typeof textOrAttributes === 'string') {
    return createElement(tag, className, textOrAttributes, []);
  }
  return createElement(tag, className, null, textOrAttributes);
}

const createElement = (tag, className, text, properties) => {
  if (tag === 'variable') {
    tag = 'var';
  }
  const element = document.createElement(tag);
  if (text) {
    element.innerText = text;
  }
  if (className) {
    element.className = className;
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
  createWithoutStyle,
  makeAsyncElement,
  makeElement,
  Styled
};
