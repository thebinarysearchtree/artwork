import { label, input, makeElement } from '../artwork.js';
import FormInput from '../FormInput.js';

class TextField extends FormInput {
  constructor() {
    super();
  }

  render() {
    const div = this.styled.div({
      display: 'flex',
      flexDirection: 'column',
      width: '200px',
      paddingBottom: '10px'
    });

    const { id, type, label: innerText } = this.state;

    const fieldLabel = label({ htmlFor: id, innerText });
    const fieldInput = input({ id, type, name: id, required: true });

    this.input = fieldInput;

    const field = div();
    field.append(fieldLabel, fieldInput);
    
    return field;
  }
}

const textField = makeElement(TextField);

export default textField;
