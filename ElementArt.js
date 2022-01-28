import { Styled } from './artwork.js';

class ElementArt extends HTMLElement {
  styled = new Styled();
  state;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  makeProperties(properties) {
    for (const [name, get] of Object.entries(properties)) {
      Object.defineProperty(this, name, { get });
    }
  }

  makeStyle(attributes) {
    return this.styled.makeStyle(attributes);
  }

  afterRender() {
    return null;
  }

  renderShadow() {
    const element = this.render();
    this.afterRender();
    const style = this.styled.element;
    if (style.innerText) {
      this.shadowRoot.append(style, element);
    }
    else {
      this.shadowRoot.append(element);
    }
  }

  render() {
    return null;
  }
}

export default ElementArt;
