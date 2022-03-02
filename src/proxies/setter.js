const setters = {};

const handler = {
  get: function(target, key, receiver) {
    if (!setters[key]) {
      let property = key.substring(3);
      property = property[0].toLowerCase() + property.substring(1);
      if (property === 'class') {
        property = 'className';
      }
      if (property === 'text') {
        property = 'innerText';
      }
      setters[key] = (values, elements) => {
        for (const [key, value] of Object.entries(values)) {
          elements[key][property] = value;
        }
      }
    }
    return setters[key];
  }
}

const proxy = new Proxy(setters, handler);

export default proxy;
