const setters = {};

const handler = {
  get: function(target, name, receiver) {
    if (!setters[name]) {
      let property = name.substring(3);
      property = property[0].toLowerCase() + property.substring(1);
      if (property === 'class') {
        property = 'className';
      }
      if (property === 'text') {
        property = 'innerText';
      }
      setters[name] = (...args) => {
        for (let i = 0; i < args.length; i += 2) {
          const element = args[i];
          const value = args[i + 1];
          element[property] = value;
        }
      }
    }
    return setters[name];
  }
}

const proxy = new Proxy(setters, handler);

export default proxy;
