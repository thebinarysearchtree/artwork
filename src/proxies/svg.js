import isEvent from './camel.js';

const elementCreators = {};

const createElement = (tag, properties) => {
  const element = document.createElementNS('http://www.w3.org/2000/svg', tag);
  if (!properties) {
    return element;
  }
  if (Array.isArray(properties)) {
    element.append(...properties);
    return element;
  }
  for (const [key, value] of Object.entries(properties)) {
    if (key === 'class') {
      element.setAttribute('className', value);
    }
    else if (key === 'children') {
      element.append(...value);
    }
    else if (key.startsWith('on') && key.length > 2 && isEvent(key)) {
      const event = key.substring(2).toLowerCase();
      element.addEventListener(event, value);
    }
    else {
      element.setAttribute(key, value);
    }
  }
  return element;
}

const handler = {
  get: function(target, tag, receiver) {
    if (!elementCreators[tag]) {
      elementCreators[tag] = (properties) => createElement(tag, properties);
    }
    return elementCreators[tag];
  }
}

const proxy = new Proxy(elementCreators, handler);

export default proxy;
