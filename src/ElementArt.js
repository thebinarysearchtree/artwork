import BaseElement from './BaseElement.js';

class ElementArt extends BaseElement {
  renderShadow(state) {
    const element = this.render(state);
    this.appendToShadow(element);
  }

  render() {
    return null;
  }
}

export default ElementArt;
