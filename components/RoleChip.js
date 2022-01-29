import { div, makeElement } from '../artwork.js';
import ElementArt from '../ElementArt.js';

const styles = `
  .root {
    padding: 5px 10px;
    border-radius: 15px;
    color: white;
    display: inherit
  }`;

const className = 'root';

class RoleChip extends ElementArt {
  constructor() {
    super();
    this.styles = styles;
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

const roleChip = makeElement(RoleChip);

export default roleChip;
