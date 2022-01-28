import { makeElement } from '../artwork.js';
import ElementArt from '../ElementArt.js';

class RoleChip extends ElementArt {
  constructor() {
    super();
  }

  render() {
    const div = this.styled.div({
      padding: '5px 10px',
      borderRadius: '15px',
      color: 'white',
      display: 'inherit'
    });

    const { name, colour } = this.state;
    const roleChip = div(name);
    roleChip.style.backgroundColor = `#${colour}`;

    return roleChip;
  }
}

const roleChip = makeElement(RoleChip);

export default roleChip;
