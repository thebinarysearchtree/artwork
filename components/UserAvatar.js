import { img, makeElement } from '../artwork.js';
import ElementArt from '../ElementArt.js';
import { routerLink } from '../router.js';
import styles from './UserAvatar.css' assert { type: 'css' };

const className = 'root';

class UserAvatar extends ElementArt {
  constructor() {
    super();
    this.adoptedStyles = styles;
  }

  render() {
    const { id } = this.state;
    const src = '/avatar.jpg';
    const href = `/users/${id}`;

    const avatar = img({
      className,
      src
    });
    const link = routerLink({ 
      href 
    });
    link.append(avatar);

    return link;
  }
}

const userAvatar = makeElement(UserAvatar);

export default userAvatar;
