import { div, label, input, makeElement } from '../artwork.js';
import FormInput from '../FormInput.js';
import styles from './TextField.css' assert { type: 'css' };

const className = 'root';

class TextField extends FormInput {
  constructor() {
    super();
    this.adoptedStyles = styles;
  }

  render() {
    const { id, type, label: innerText } = this.state;

    const fieldLabel = label({ 
      htmlFor: id, 
      innerText 
    });
    const fieldInput = input({ 
      id, 
      type, 
      name: id, 
      required: true 
    });

    this.input = fieldInput;

    const field = div({
      className
    });
    field.append(fieldLabel, fieldInput);
    
    return field;
  }
}

const textField = makeElement(TextField);

export default textField;
