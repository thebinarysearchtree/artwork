const divs = {};

const handler = {
  get: function(target, property, receiver) {
    if (!divs[property]) {
      const element = document.createElement('div');
      element.className = property.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
      divs[property] = element;
    }
    return divs[property].cloneNode();
  }
}

const proxy = new Proxy(divs, handler);

export default proxy;
