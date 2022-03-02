const defineElement = (elementClass, name) => {
  name = name ? name : elementClass.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  customElements.define(name, elementClass);
  return name;
}

const makeArt = (elementClass, name) => {
  const customName = defineElement(elementClass, name);
  return (state) => {
    const element = document.createElement(customName);
    element.state = state;
    element.renderShadow(state);
    return element;
  }
}

const makeAsyncArt = (elementClass, name) => {
  const customName = defineElement(elementClass, name);
  return async (state) => {
    const element = document.createElement(customName);
    element.state = state;
    await element.renderShadow(state);
    return element;
  }
}

export {
  makeAsyncArt,
  makeArt
};
