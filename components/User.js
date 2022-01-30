import { div, span, h3, form, makeAsyncElement, makeDivs } from '../artwork.js';
import textField from './TextField.js';
import AsyncElementArt from '../AsyncElementArt.js';
import client from '../client.js';
import fetchMany from '../fetchMany.js';
import roleChip from './RoleChip.js';
import userAvatar from './UserAvatar.js';
import { routerLink } from '../router.js';
import pageButtons from './PageButtons.js';
import styles from './User.css' assert { type: 'css' };

const divs = makeDivs(styles);

class UserPage extends AsyncElementArt {
  constructor() {
    super();
    this.adoptedStyles = styles;
  }

  async render() {
    let roles = [];
    let areas = [];
    let searchTerm = '';
    let roleId = -1;
    let areaId = -1;
    let page = 0;
    let count = null;
    let users = [];

    const usersHandler = (returnedUsers) => {
      users = returnedUsers;
      if (users.length === 0) {
        count = 0;
      }
      else if (users[0].totalCount) {
        count = users[0].totalCount;
      }
    }
    const rolesHandler = (returnedRoles) => roles = returnedRoles;
    const areasHandler = (returnedAreas) => areas = returnedAreas;

    const makeData = () => ({
      searchTerm,
      roleId,
      areaId,
      page,
      count
    });

    await fetchMany([
      { url: '/users/find', handler: usersHandler, data: makeData() },
      { url: '/roles/getSelectListItems', handler: rolesHandler },
      { url: '/areas/getSelectListItems', handler: areasHandler }
    ]);

    const makeElements = async (users) => {
      const elements = [];
      for (const user of users) {
        const {
          id,
          name,
          areaNames,
          roles,
          booked,
          attended,
          attendedTime
        } = user;
        const href = `/users/${id}`;
        const roleChips = roles.map(role => {
          const { name, colour } = role;
          return roleChip({ name, colour });
        });
        let bookedText;
        if (booked === 0) {
          bookedText = 'No shifts booked';
        }
        else if (booked === attended) {
          if (booked === 1) {
            bookedText = '1 shift booked and attended';
          }
          else {
            bookedText = `${booked} shifts booked and attended`;
          }
        }
        else {
          const shiftName = booked === 1 ? 'shift' : 'shifts';
          bookedText = `${booked} ${shiftName} booked and ${attended} attended`;
        }
        const {
          user: container,
          details,
          roles: rolesContainer,
          booked: bookedContainer
        } = divs;
        bookedContainer.innerText = bookedText;
        const avatar = userAvatar(user);
        const userLink = routerLink({ href, innerText: name });
        const area = span({
          className: 'area',
          innerText: areaNames[0]
        });

        details.append(userLink, area);
        rolesContainer.append(...roleChips);
        container.append(avatar, details, rolesContainer, bookedContainer);

        elements.push(container);
      }
      return elements;
    }
    const userElements = await makeElements(users);
    const usersContainer = div({ className: 'root' });
    const findUsers = async () => {
      await fetchMany([{ url: '/users/find', handler: usersHandler, data: makeData() }]);
      const userElements = await makeElements(users);
      usersContainer.replaceChildren(...userElements);
    }
    const pagination = pageButtons();
    const { back, forward } = pagination;
    const itemsPerPage = 10;
    pagination.onBack(async () => {
      page--;
      await findUsers();
      back.disabled = page === 0;
    });
    pagination.onForward(async () => {
      page++;
      back.disabled = false;
      await findUsers();
      forward.disabled = itemsPerPage * (page + 1) >= count;
    });
    usersContainer.append(...userElements);
    const root = div({
      className: 'root'
    });
    root.append(usersContainer, pagination);

    return root;
  }
}

const userPage = makeAsyncElement(UserPage);

export default userPage;
