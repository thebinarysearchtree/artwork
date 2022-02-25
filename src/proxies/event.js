const events = {};

const handler = {
  get: function(target, property, receiver) {
    if (!events[property]) {
      const type = property.substring(2).toLowerCase();
      if (type === 'submit') {
        events[property] = (element, listener, options) => {
          element.addEventListener(type, (e) => {
            e.preventDefault();
            listener(e);
          }, options);
        }
      }
      else {
        events[property] = (element, listener, options) => {
          element.addEventListener(type, listener, options);
        }
      }
    }
    return events[property];
  }
}

const proxy = new Proxy(events, handler);

export default proxy;
