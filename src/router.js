import html from './proxies/html.js';

const { a, p } = html;

const routers = [];

history.scrollRestoration = 'manual';

let notFound = () => p('Page not found');

const getRoute = (url) => {
  for (let i = routers.length - 1; i >= 0; i--) {
    const router = routers[i];
    const route = router.getRoute(url);
    if (route) {
      return {
        route,
        router
      };
    }
  }
  return {
    route: {
      handler: notFound,
      groups: null
    },
    router: routers[0]
  };
}

const makeParams = (searchParams) => {
  const params = {};
  for (const [key, value] of searchParams) {
    params[key] = value;
  }
  return params;
}

const processRoute = (url) => {
  const parsed = new URL(url);
  const { pathname, searchParams } = parsed;
  const { route, router } = getRoute(pathname);
  const { handler, groups } = route;
  const params = {
    ...makeParams(searchParams), 
    ...groups
  };
  const component = handler(params);
  const { root } = router;
  if (root) {
    root.replaceChildren(component);
  }
}

window.addEventListener('popstate', (e) => {
  processRoute(window.location.href);
  const { x, y } = e.state.scroll;
  window.scrollTo(x, y);
});

window.addEventListener('clickart', (e) => {
  processRoute(e.href);
});

class Router {
  stringRoutes = new Map();
  regexRoutes = [];
  root;

  constructor(root) {
    this.root = root;
    routers.push(this);
  }

  static start() {
    processRoute(window.location.href);
  }

  static setNotFound() {
    notFound = () => element;
  }

  static pushState(url, state) {
    history.pushState(state, '', url);
    processRoute(`${location.origin}${url}`);
  }

  add(match, handler) {
    if (typeof match === 'string') {
      this.stringRoutes.set(match, handler);
    }
    else {
      this.regexRoutes.push({ match, handler });
    }
  }

  getRoute(url) {
    const handler = this.stringRoutes.get(url);
    if (handler) {
      return {
        handler,
        groups: null
      };
    }
    for (const route of this.regexRoutes) {
      const { match, handler } = route;
      const result = match.exec(url);
      if (result) {
        return {
          handler,
          groups: result.groups
        }
      }
    }
  }

  remove() {
    routers.splice(routers.findIndex(r => r === this));
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
      const event = new Event('clickart');
      event.href = href;
      window.dispatchEvent(event);
    }
  });
  return anchor;
}

export {
  Router,
  routerLink
};
