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

const createMany = (tag) => {
  const handler = {
    get: () => document.createElementNS('http://www.w3.org/2000/svg', tag)
  }
  return new Proxy({}, handler);
}

const createStyled = (tag) => {
  const handler = {
    get: (target, prop, receiver) => {
      const element = document.createElementNS('http://www.w3.org/2000/svg', tag);
      element.className = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
      return element;
    }
  }
  return new Proxy({}, handler);
}

const svg = {
  create,
  createMany,
  createStyled
};

export default svg;
