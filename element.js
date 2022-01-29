const makeElement = (elementClass, name) => {
  name = name ? name : elementClass.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  customElements.define(name, elementClass);
  return (state) => {
    const element = document.createElement(name);
    element.state = state;
    element.renderShadow();
    return element;
  }
}

const makeAsyncElement = (elementClass, name) => {
  name = name ? name : elementClass.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  customElements.define(name, elementClass);
  return async (state) => {
    const element = document.createElement(name);
    element.state = state;
    await element.renderShadow();
    return element;
  }
}

const createElement = (tag, textOrProperties) => {
  if (tag === 'variable') {
    tag = 'var';
  }
  const element = document.createElement(tag);
  if (typeof textOrProperties === 'string') {
    element.innerText = textOrProperties;
  }
  if (!textOrProperties) {
    return element;
  }
  for (const [key, value] of Object.entries(textOrProperties)) {
    element[key] = value;
  }
  return element;
}

export {
  createElement,
  makeAsyncElement,
  makeElement
};
