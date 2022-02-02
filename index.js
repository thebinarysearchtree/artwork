import loginPage from './components/Login.js';
import userPage from './components/User.js';
import { Router, start, pushState } from './router.js';
import client from './client.js';

const router = new Router();

const root = document.getElementById('root');

const asyncPrivate = (component) => {
  if (!client.user) {
    pushState('/');
  }
  return (params, state) => {
    const loading = document.createElement('div');
    setTimeout(() => loading.innerText = 'Loading...', 300);
    loading.style.height = '1000px';
    const loadPage = async () => {
      const page = await component(params, state);
      loading.replaceWith(page);
    };
    loadPage();
    root.replaceChildren(loading);
  }
}

router.add('/', () => {
  const component = loginPage();
  root.replaceChildren(component);
});

router.add('/user', () => {
  const component = loginPage();
  root.replaceChildren(component);
});

router.add('/users', asyncPrivate(userPage));

start();
