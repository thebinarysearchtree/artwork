class BaseElement extends HTMLElement {
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
      if (typeof this.styles === 'string') {
        const style = document.createElement('style');
        style.innerText = this.styles;
        this.shadowRoot.append(style, element);
      }
      else {
        this.shadowRoot.adoptedStyleSheets = [this.styles];
        this.shadowRoot.append(element);
      }
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
