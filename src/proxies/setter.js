const setters = {};

const handler = {
  get: function(target, property, receiver) {
    if (!setters[property]) {
      let name = property.substring(3);
      name = name[0].toLowerCase() + name.substring(1);
      if (name === 'class') {
        name = 'className';
      }
      if (name === 'text') {
        name = 'innerText';
      }
      setters[property] = (...arguments) => {
        for (let i = 0; i < arguments.length; i += 2) {
          const element = arguments[i];
          const text = arguments[i + 1];
          element[name] = text;
        }
      }
    }
    return setters[property];
  }
}

const proxy = new Proxy(setters, handler);

export default proxy;
