const htmlFor = (label, input, inputId) => {
  label.htmlFor = inputId;
  input.id = inputId;
}

const makeElements = (tag, options) => {
  const { property, camelToDash } = options;
  const elements = {};

  const handler = {
    get: function(target, key, receiver) {
      if (!elements[key]) {
        const element = document.createElement(tag);
        if (property) {
          element[property] = camelToDash ? key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase() : key;
        }
        elements[key] = element;
      }
      return elements[key].cloneNode();
    }
  }

  return new Proxy(elements, handler);
}

const append = (parent, children) => {
  if (parent instanceof HTMLElement) {
    parent.append(...children);
    return parent;
  }
  else {
    const element = parent();
    element.append(...children);
    return element;
  }
}

export {
  htmlFor,
  makeElements,
  append
};
