import isEvent from './camel.js';

const elementCreators = {};

const createElement = (tag, properties) => {
  const element = document.createElement(tag);
  if (typeof properties === 'string' || typeof properties === 'number') {
    element.innerText = properties;
    return element;
  }
  if (!properties) {
    return element;
  }
  for (const [key, value] of Object.entries(properties)) {
    if (key === 'class') {
      element.className = value;
    }
    else if (key === 'text') {
      element.innerText = value;
    }
    else if (key.startsWith('on') && key.length > 2 && isEvent(key)) {
      const event = key.substring(2).toLowerCase();
      element.addEventListener(event, value);
    }
    else {
      element[key] = value;
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
