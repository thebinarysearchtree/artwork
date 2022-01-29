import { button, div, makeElement } from '../artwork.js';
import ElementArt from '../ElementArt.js';
import styles from './PageButtons.css' assert { type: 'css' };

const className = 'root';

class PageButtons extends ElementArt {
  back;
  forward;

  constructor() {
    super();
    this.adoptedStyles = styles;
  }

  onBack(onBack) {
    this.back.addEventListener('click', onBack);
  }

  onForward(onForward) {
    this.forward.addEventListener('click', onForward);
  }

  render() {
    const container = div({ className });
    this.back = button('<');
    this.forward = button('>');

    this.back.disabled = true;

    container.append(this.back, this.forward);

    return container;
  }
}

const pageButtons = makeElement(PageButtons);

export default pageButtons;
