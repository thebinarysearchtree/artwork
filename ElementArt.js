class ElementArt extends HTMLElement {
  styles;
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
    else {
      this.shadowRoot.append(element);
    }
  }

  render() {
    return null;
  }
}

export default ElementArt;
