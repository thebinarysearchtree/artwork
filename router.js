import { a } from './artwork.js';

const routes = new Map();
const scrollPositions = new Map();

let component = null;

let pageId = 1;

history.scrollRestoration = 'manual';

const push = (match, handler) => {
  routes.set(match, handler);
}

const start = () => {
  const handler = routes.get(window.location.pathname);
  component = handler();
  document.body.appendChild(component);
  window.onpopstate = (e) => {
    const pageId = e.state.pageId;
    const handler = routes.get(window.location.pathname);
    const scrollPosition = scrollPositions.get(pageId);
    if (scrollPosition) {
      scrollPositions.delete(pageId);
    }
    component.remove();
    component = handler(scrollPosition);
    document.body.appendChild(component);
  }
}

const routerLink = (properties) => {
  const anchor = a(properties);
  anchor.addEventListener('click', (e) => {
    const leftClick = e.button === 0;
    const relevantTarget = !properties.target || properties.target === '_self';
    const modifierPressed = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey;

    if (leftClick && relevantTarget && !modifierPressed) {
      e.preventDefault();
      scrollPositions.set(pageId, { x: window.scrollX, y: window.scrollY });
      const state = properties.state ? {...properties.state, pageId } : { pageId };
      history.pushState(state, '', a.href);
      pageId++;
      component.remove();
      const handler = routes.get(a.href);
      component = handler();
      document.body.appendChild(component);
    }
  });
  return anchor;
}

const router = {
  push,
  start
};

export {
  router,
  routerLink
};
