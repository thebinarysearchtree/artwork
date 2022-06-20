class BaseElement extends HTMLElement {
  connected;
  disconnected;
  stringStyles = [];
  adoptedStyles = [];

  set styles(styles) {
    if (typeof styles === 'string') {
      if ('adoptedStyleSheets' in document) {
        const sheet = new CSSStyleSheet();
        sheet.replaceSync(styles);
        this.adoptedStyles.push(sheet);
      }
      else {
        this.stringStyles.push(styles);
      }
    }
    else if (styles instanceof CSSStyleSheet) {
      this.adoptedStyles.push(styles);
    }
    else {
      if (styles.length > 0) {
        if (typeof styles[0] === 'string') {
          if ('adoptedStyleSheets' in document) {
            const adoptedStyles = styles.map(style => {
              const sheet = new CSSStyleSheet();
              sheet.replaceSync(style);
              return sheet;
            });
            this.adoptedStyles = this.adoptedStyles.concat(adoptedStyles);
          }
          else {
            this.stringStyles = this.stringStyles.concat(styles);
          }
        }
        else {
          this.adoptedStyles = this.adoptedStyles.concat(styles);
        }
      }
    }
  }

  get styles() {
    if (this.stringStyles.length > 0) {
      return this.stringStyles;
    }
    return this.adoptedStyles;
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  afterRender() {
    return null;
  }

  appendToShadow(element) {
    this.afterRender();
    for (const css of this.stringStyles) {
      const style = document.createElement('style');
      style.innerText = css;
      this.shadowRoot.append(style);
    }
    if (this.adoptedStyles.length > 0) {
      this.shadowRoot.adoptedStyleSheets = this.adoptedStyles;
    }
    this.shadowRoot.append(element);
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
