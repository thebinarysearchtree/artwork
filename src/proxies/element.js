const elements = {};

const handler = {
  get: function(target, property, receiver) {
    if (!elements[property]) {
      const element = document.createElement(property);
      elements[property] = element;
    }
    return elements[property].cloneNode();
  }
}

const proxy = new Proxy(elements, handler);

export default proxy;
