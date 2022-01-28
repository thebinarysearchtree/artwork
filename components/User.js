import { h3, form, makeAsyncElement } from '../artwork.js';
import textField from './TextField.js';
import AsyncElementArt from '../AsyncElementArt.js';
import client from '../client.js';
import fetchMany from '../fetchMany.js';
import roleChip from './RoleChip.js';
import userAvatar from './UserAvatar.js';
import { routerLink } from '../router.js';
import pageButtons from './PageButtons.js';

class UserPage extends AsyncElementArt {
  constructor() {
    super();
  }

  async render() {
    const styled = this.styled;

    const root = styled.div({
      display: 'flex',
      flexDirection: 'column'
    });
    const userDiv = styled.div({
      display: 'flex',
      padding: '10px',
      justifyContent: 'space-between'
    });
    const detailsDiv = styled.div({
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      marginRight: '10px',
      alignItems: 'flex-start'
    });
    const span = styled.span({
      color: 'grey'
    });
    const rolesDiv = styled.div({
      flex: 1,
      marginRight: '10px'
    });
    const bookedDiv = styled.div({
      flex: 2,
      color: 'grey',
      marginRight: '10px'
    });

    let roles = [];
    let areas = [];
    const query = {
      searchTerm: '',
      roleId: -1,
      areaId: -1,
      page: 0,
      count: null
    }
    let users = [];

    const usersHandler = (returnedUsers) => {
      users = returnedUsers;
      if (users.length === 0) {
        query.count = 0;
      }
      else if (users[0].totalCount) {
        query.count = users[0].totalCount;
      }
    }
    const rolesHandler = (returnedRoles) => roles = returnedRoles;
    const areasHandler = (returnedAreas) => areas = returnedAreas;

    await fetchMany([
      { url: '/users/find', handler: usersHandler, data: query },
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
        const container = userDiv();
        const avatar = userAvatar(user);
        const details = detailsDiv();
        const userLink = routerLink({ href, innerText: name });
        const area = span(areaNames[0]);
        const rolesContainer = rolesDiv();
        const bookedContainer = bookedDiv(bookedText);

        details.append(userLink, area);
        rolesContainer.append(...roleChips);
        container.append(avatar, details, rolesContainer, bookedContainer);

        elements.push(container);
      }
      return elements;
    }
    const userElements = await makeElements(users);
    const usersContainer = root();
    const findUsers = async () => {
      await fetchMany([{ url: '/users/find', handler: usersHandler, data: query }]);
      const userElements = await makeElements(users);
      usersContainer.replaceChildren(...userElements);
    }
    const pagination = pageButtons({
      findUsers,
      query,
      itemsPerPage: 10
    });
    usersContainer.append(...userElements);
    const rootContainer = root();
    rootContainer.append(usersContainer, pagination);

    return rootContainer;
  }
}

const userPage = makeAsyncElement(UserPage);

export default userPage;
