import isEvent from './camel.js';

const uri = 'http://www.w3.org/2000/svg';

const create = (tag) => {
  if (typeof tag === 'string') {
    return document.createElementNS(uri, tag);
  }
  if (!tag) {
    const handler = {
      get: (target, prop, receiver) => {
        return document.createElementNS(uri, prop);
      }
    }
    return new Proxy({}, handler);
  }
}

const createProps = (properties) => {
  const element = document.createElementNS(uri, properties.tag);
  for (const [key, value] of Object.entries(properties)) {
    if (key === 'children') {
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

const createMany = (tag) => {
  const handler = {
    get: () => document.createElementNS(uri, tag)
  }
  return new Proxy({}, handler);
}

const createStyled = (tag) => {
  const handler = {
    get: (target, prop, receiver) => {
      const element = document.createElementNS(uri, tag);
      element.className = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
      return element;
    }
  }
  return new Proxy({}, handler);
}

const svg = {
  create,
  createProps,
  createMany,
  createStyled
};

export default svg;
