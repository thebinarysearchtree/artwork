const elementCreators = {};

const createElement = (tag, properties) => {
  const element = document.createElement(tag);
  if (typeof properties === 'string') {
    element.innerText = properties;
  }
  if (!properties) {
    return element;
  }
  for (const [key, value] of Object.entries(properties)) {
    element[key] = value;
  }
  return element;
}

const handler = {
  get: function(target, tag, receiver) {
    if (elementCreators[tag]) {
      return elementCreators[tag];
    }
    elementCreators[tag] = (properties) => createElement(tag, properties);
    return elementCreators[tag];
  }
}

const proxy = new Proxy(elementCreators, handler);

export default proxy;
