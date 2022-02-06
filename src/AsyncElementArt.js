class AsyncElementArt extends HTMLElement {
  adoptedStyles;
  styles;
  state;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  afterRender() {
    return null;
  }

  async renderShadow() {
    const element = await this.render();
    this.afterRender();
    if (this.styles) {
      const style = document.createElement('style');
      style.innerText = this.styles;
      this.shadowRoot.append(style, element);
    }
    else if (this.adoptedStyles) {
      this.shadowRoot.adoptedStyleSheets = [this.adoptedStyles];
      this.shadowRoot.append(element);
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
