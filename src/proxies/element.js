const elements = {};

const handler = {
  get: function(target, property, receiver) {
    if (!elements[property]) {
      const tagName = property.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
      const element = document.createElement(tagName);
      elements[property] = element;
    }
    return elements[property].cloneNode();
  }
}

const proxy = new Proxy(elements, handler);

export default proxy;
