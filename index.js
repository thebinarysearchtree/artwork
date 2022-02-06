import loginPage from './components/Login.js';
import userPage from './components/User.js';
import { Router, start, pushState } from './router.js';
import client from './client.js';

const root = document.getElementById('root');

const router = new Router(root);

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
    return loading;
  }
}

router.add('/', () => loginPage());

router.add('/user', () => loginPage());

router.add('/users', asyncPrivate(userPage));

start();
