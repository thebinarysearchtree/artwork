class BaseElement extends HTMLElement {
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

  appendToShadow(element) {
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

  connectedCallback() {
    if (this.connected) {
      const disconnected = this.connected();
      if (disconnected) {
        this.disconnected = disconnected;
      }
    }
  }

  disconnectedCallback() {
    if (this.disconnected) {
      this.disconnected();
    }
  }
}

export default BaseElement;
