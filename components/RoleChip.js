import { div, makeArt } from '../artwork.js';
import ElementArt from '../ElementArt.js';
import styles from './RoleChip.css' assert { type: 'css' };

const className = 'root';

class RoleChip extends ElementArt {
  constructor() {
    super();
    this.adoptedStyles = styles;
  }

  render() {
    const { name: innerText, colour } = this.state;
    const roleChip = div({
      className,
      innerText
    });
    roleChip.style.backgroundColor = `#${colour}`;

    return roleChip;
  }
}

const roleChip = makeArt(RoleChip);

export default roleChip;
