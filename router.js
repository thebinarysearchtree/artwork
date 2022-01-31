import { a } from './artwork.js';

const routes = new Map();

const root = document.getElementById('root');

history.scrollRestoration = 'manual';

const add = (match, handler) => {
  routes.set(match, handler);
}

const push = (url, state) => {
  const parsed = new URL(`${location.origin}${url}`);
  const handler = routes.get(parsed.pathname);
  history.pushState(state, '', url);
  const component = handler();
  root.replaceChildren(component);
}

const start = () => {
  const handler = routes.get(window.location.pathname);
  const component = handler();
  root.appendChild(component);
  window.onpopstate = (e) => {
    const handler = routes.get(window.location.pathname);
    const component = handler();
    root.replaceChildren(component);
    const { x, y } = e.state.scroll;
    window.scrollTo(x, y);
  }
}

const routerLink = (properties) => {
  const anchor = a(properties);
  const href = anchor.href;
  anchor.addEventListener('click', (e) => {
    const leftClick = e.button === 0;
    const relevantTarget = !properties.target || properties.target === '_self';
    const modifierPressed = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey;

    if (leftClick && relevantTarget && !modifierPressed) {
      e.preventDefault();
      const scroll = {
        x: window.scrollX,
        y: window.scrollY
      };
      history.replaceState({...history.state, scroll }, '');
      history.pushState(properties.state, '', href);
      const url = new URL(href);
      const handler = routes.get(url.pathname);
      const component = handler();
      root.replaceChildren(component);
    }
  });
  return anchor;
}

const router = {
  add,
  push,
  start
};

export {
  router,
  routerLink
};
