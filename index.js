import loginPage from './components/Login.js';
import userPage from './components/User.js';
import { router } from './router.js';
import client from './client.js';

const asyncPrivate = (component) => {
  if (!client.user) {
    router.push('/');
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

router.add('/', () => {
  return loginPage();
});

router.add('/user', () => {
  return loginPage();
});

router.add('/users', asyncPrivate(userPage));

router.start();
