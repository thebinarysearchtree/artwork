class AsyncElementArt extends HTMLElement {
  adoptedStyles;
  styles;
  state;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  makeDivs() {
    if (this.adoptedStyles) {
      const divs = {};
      for (const rule of this.adoptedStyles.cssRules) {
        const selector = rule.selectorText;
        if (selector && selector.startsWith('.') && /\.[a-zA-Z0-9\-]/.test(selector)) {
          const name = selector.substring(1).replace(/([a-z])-([a-z])/, (s1, s2) => `${s1}${s2.toUpperCase()}`);
          const div = document.createElement('div');
          div.className = selector.substring(1);
          divs[name] = div;
        }
      }
      return divs;
    }
  }

  makeProperties(properties) {
    for (const [name, get] of Object.entries(properties)) {
      Object.defineProperty(this, name, { get });
    }
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
