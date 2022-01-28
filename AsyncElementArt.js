import { Styled } from './artwork.js';

class AsyncElementArt extends HTMLElement {
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

  async renderShadow() {
    const element = await this.render();
    this.afterRender();
    const style = this.styled.element;
    if (style.innerText) {
      this.shadowRoot.append(style, element);
    }
    else {
      this.shadowRoot.append(element);
    }
  }

  async render() {
    return null;
  }
}

export default AsyncElementArt;
