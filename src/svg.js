import isEvent from './camel.js';

const create = (tag) => {
  if (typeof tag === 'string') {
    return document.createElementNS('http://www.w3.org/2000/svg', tag);
  }
  const properties = tag;
  const element = document.createElementNS('http://www.w3.org/2000/svg', properties.tag);
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

const svg = {
  create
};

export default svg;
