const makeArt = (name, elementClass) => {
  customElements.define(name, elementClass);
  return (...state) => {
    const element = document.createElement(name);
    element.renderShadow(...state);
    return element;
  }
}

const makeAsyncArt = (name, elementClass) => {
  customElements.define(name, elementClass);
  return async (...state) => {
    const element = document.createElement(name);
    await element.renderShadow(...state);
    return element;
  }
}

export {
  makeAsyncArt,
  makeArt
};
