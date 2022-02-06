class ElementArt extends HTMLElement {
  adoptedStyles;
  styles;
  state;
  connected;
  disconnected;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  afterRender() {
    return null;
  }

  renderShadow() {
    const element = this.render();
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

  render() {
    return null;
  }

  connectedCallback() {
    if (this.connected) {
      this.connected();
    }
  }

  disconnectedCallback() {
    if (this.disconnected) {
      this.disconnected();
    }
  }
}

export default ElementArt;
