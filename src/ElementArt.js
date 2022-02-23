import BaseElement from './BaseElement.js';

class ElementArt extends BaseElement {
  renderShadow() {
    const element = this.render();
    this.appendToShadow(element);
  }

  render() {
    return null;
  }
}

export default ElementArt;
