import BaseElement from './BaseElement.js';

class AsyncElementArt extends BaseElement {
  async renderShadow(state) {
    const element = await this.render(state);
    this.appendToShadow(element);
  }

  async render() {
    return null;
  }
}

export default AsyncElementArt;
