import { form, label, input } from './artwork.js';
import ElementArt from './ElementArt.js';

const formLabel = (labelId, text) => label({ for: labelId, text });
const formInput = (type, id, required = true) => required ? input({ type, id, required: '' }) : input({ type, id });

class SubscribeForm extends ElementArt {
  nameInput;
  emailInput;
  
  constructor() {
    super();
  }

  render() {
    const container = this.styled.div({
      padding: '10px'
    });

    const subscribeForm = form({ 
      method: 'get' 
    });

    const nameId = 'name';
    const nameLabel = formLabel(nameId, 'Enter your name:');
    const nameInput = formInput('text', nameId);

    const emailId = 'email';
    const emailLabel = formLabel(emailId, 'Enter your email:');
    const emailInput = formInput('email', emailId);

    this.nameInput = nameInput;
    this.emailInput = emailInput;

    const button = input({ 
      type: 'submit', 
      value: 'Subscribe' 
    });

    const nameSection = container();
    nameSection.append(nameLabel, nameInput);

    const emailSection = container();
    emailSection.append(emailLabel, emailInput);

    subscribeForm.append(nameSection, emailSection, button);

    return subscribeForm;
  }

  setState(name, email) {
    this.nameInput.value = name;
    this.emailInput.value = email;
  }

  getState() {
    return {
      name: this.nameInput.value,
      email: this.emailInput.value
    }
  }
}
customElements.define('subscribe-form', SubscribeForm);

const subscribeForm = () => document.createElement('subscribe-form');

export default subscribeForm;
