import BaseElement from './BaseElement.js';

class AsyncElementArt extends BaseElement {
  async renderShadow() {
    const element = await this.render();
    this.appendToShadow(element);
  }

  async render() {
    return null;
  }
}

export default AsyncElementArt;
