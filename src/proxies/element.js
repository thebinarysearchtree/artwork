const elements = {};

const handler = {
  get: function(target, property, receiver) {
    if (elements[property]) {
      return elements[property].cloneNode();
    }
    const element = document.createElement(property);
    elements[property] = element;

    return element;
  }
}

const proxy = new Proxy(elements, handler);

export default proxy;
