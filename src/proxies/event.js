const events = {};

const handler = {
  get: function(target, property, receiver) {
    if (!events[property]) {
      const eventName = property.substring(2).toLowerCase();
      if (eventName === 'submit') {
        events[property] = (element, handler) => {
          element.addEventListener(eventName, (e) => {
            e.preventDefault();
            handler(e);
          });
        }
      }
      else {
        events[property] = (element, handler) => {
          element.addEventListener(eventName, handler);
        }
      }
    }
    return events[property];
  }
}

const proxy = new Proxy(events, handler);

export default proxy;
