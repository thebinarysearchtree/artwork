const elementCreators = {};

const createElement = (tag, properties) => {
  const element = document.createElementNS(tag, 'http://www.w3.org/2000/svg');
  if (!properties) {
    return element;
  }
  for (const [key, value] of Object.entries(properties)) {
    element.setAttribute(key, value);
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
