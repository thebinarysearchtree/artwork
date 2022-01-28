import { button, makeElement } from '../artwork.js';
import ElementArt from '../ElementArt.js';

class PageButtons extends ElementArt {
  constructor() {
    super();
  }

  render() {
    const container = this.styled.div({
      display: 'flex'
    });
    const back = button({ innerText: '<' });
    const forward = button({ innerText: '>' });

    const {
      findUsers,
      query,
      itemsPerPage
    } = this.state;

    if (query.page === 0) {
      back.disabled = true;
    }

    back.addEventListener('click', async (e) => {
      query.page--;
      await findUsers();
      back.disabled = query.page === 0;
    });
    forward.addEventListener('click', async (e) => {
      query.page++;
      back.disabled = false;
      await findUsers();
      forward.disabled = itemsPerPage * (query.page + 1) >= query.count;
    });
    const pageButtons = container();
    pageButtons.append(back, forward);

    return pageButtons;
  }
}

const pageButtons = makeElement(PageButtons);

export default pageButtons;
