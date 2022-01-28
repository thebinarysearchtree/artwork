import { makeElement } from '../artwork.js';
import ElementArt from '../ElementArt.js';
import { routerLink } from '../router.js';

class UserAvatar extends ElementArt {
  constructor() {
    super();
  }

  render() {
    const img = this.styled.img({
      width: '30px',
      height: '30px',
      borderRadius: '15px',
      marginRight: '10px'
    });
    const { id } = this.state;
    const src = '/avatar.jpg';
    const href = `/users/${id}`;

    const avatar = img({
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
