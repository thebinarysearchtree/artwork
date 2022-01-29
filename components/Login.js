import { p, input, form, h3, makeElement } from '../artwork.js';
import textField from './TextField.js';
import ElementArt from '../ElementArt.js';
import client from '../client.js';

const styles = `
  .error {
    color: red;
  }`;

class LoginPage extends ElementArt {
  constructor() {
    super();
    this.styles = styles;
  }

  render() {
    const login = form({ noValidate: true });
    const heading = h3('Log in');

    const email = textField({ 
      id: 'email', 
      type: 'email', 
      label: 'Email' 
    });
    const password = textField({ 
      id: 'password', 
      type: 'password', 
      label: 'Password' 
    });
    
    const error = p({
      className: 'error',
      innerText: 'Invalid username or password'
    });
    error.style.visibility = 'hidden';

    const submit = input({ 
      type: 'submit', 
      value: 'Log in', 
      disabled: true 
    });

    login.append(heading, email, password, error, submit);

    login.addEventListener('input', (e) => {
      submit.disabled = !email.value || !password.value;
      error.style.visibility = 'hidden';
    });

    login.addEventListener('submit', async (e) => {
      e.preventDefault();
      const user = await client.logIn(email.value, password.value);
      if (user) {
        console.log('Logged in!');
      }
      else {
        error.style.visibility = '';
      }
    });

    return login;
  }
}

const loginPage = makeElement(LoginPage);

export default loginPage;
