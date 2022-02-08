const makeArt = (elementClass, name) => {
  name = name ?? elementClass.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  customElements.define(name, elementClass);
  return (state) => {
    const element = document.createElement(name);
    element.state = state;
    element.renderShadow();
    return element;
  }
}

const makeAsyncArt = (elementClass, name) => {
  name = name ?? elementClass.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  customElements.define(name, elementClass);
  return async (state) => {
    const element = document.createElement(name);
    element.state = state;
    await element.renderShadow();
    return element;
  }
}

const makeState = (o) => {
  const state = {};
  for (const [key, value] of Object.entries(o)) {
    if (typeof value === 'function') {
      Object.defineProperty(state, key, { get: value });
    }
    else {
      let get;
      const element = value;
      switch (element.type) {
        case 'number':
        case 'range':
          get = () => Number(element.value);
          break;
        case 'checkbox':
          get = () => element.checked;
          break;
        case 'date':
        case 'datetime-local':
          get = () => new Date(element.value);
          break;
        default:
          get = () => element.value;
      }
      Object.defineProperty(state, key, { get });
    }
  }
  return state;
}

export {
  makeAsyncArt,
  makeArt,
  makeState
};
