const divs = {};

const handler = {
  get: function(target, property, receiver) {
    if (divs[property]) {
      return divs[property].cloneNode();
    }
    const element = document.createElement('div');
    element.className = property.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    divs[property] = element;

    return element;
  }
}

const proxy = new Proxy(divs, handler);

export default proxy;
