const elementCreators = {};

const createElement = (tag, properties) => {
  const element = document.createElement(tag);
  if (typeof properties === 'string') {
    element.innerText = properties;
    return element;
  }
  if (!properties) {
    return element;
  }
  return Object.assign(element, properties);
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
