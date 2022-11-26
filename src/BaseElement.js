class BaseElement extends HTMLElement {
  connected;
  disconnected;
  root;
  props;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  load(root, connected, props) {
    if (this.root) {
      this.root.remove();
    }
    this.root = root;
    this.connected = connected;
    this.props = props;
    this.shadowRoot.append(root);
    if (props) {
      for (const [key, value] of Object.entries(props)) {
        if (typeof value === 'function') {
          this[key] = value;
        }
        else if (!(key in this)) {
          Object.defineProperty(this, key, {
            get() {
              return this.props[key];
            },
            set(v) {
              this.props[key] = v;
            }
          });
        }
      }
    }
    if (this.afterLoad) {
      this.afterLoad();
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
