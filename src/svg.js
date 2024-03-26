import isEvent from './camel.js';
import dashed from './dashed.js';

const create = (tag) => {
  if (typeof tag === 'string') {
    return document.createElementNS('http://www.w3.org/2000/svg', tag);
  }
  if (!tag) {
    const handler = {
      get: (target, prop, receiver) => {
        return document.createElementNS('http://www.w3.org/2000/svg', prop);
      }
    }
    return new Proxy({}, handler);
  }
  const properties = tag;
  const element = document.createElementNS('http://www.w3.org/2000/svg', properties.tag);
  for (const [key, value] of Object.entries(properties)) {
    if (key === 'tag') {
      continue;
    }
    if (key === 'children') {
      element.append(...value);
    }
    else if (key.startsWith('on') && key.length > 2 && isEvent(key) && value) {
      const event = key.substring(2).toLowerCase();
      element.addEventListener(event, value);
    }
    else {
      const adjusted = dashed.get(key);
      element.setAttribute(adjusted || key, value);
    }
  }
  return element;
}

const styled = (tag) => {
  const handler = {
    get: (target, prop, receiver) => {
      const element = document.createElementNS('http://www.w3.org/2000/svg', tag);
      element.className = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
      return element;
    }
  }
  return new Proxy({}, handler);
}

const predefined = new Map([
  ['create', create],
  ['styled', styled]
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
