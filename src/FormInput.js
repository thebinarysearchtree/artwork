import BaseElement from './BaseElement.js';

const typesThatBlock = new Set(['text', 'search', 'url', 'tel', 'email', 'password', 'date', 'month', 'week', 'time', 'datetime-local', 'number']);

class FormInput extends BaseElement {
  static formAssociated = true;

  get type() {
    return this.props.input.type;
  }

  get value() {
    return this.props.input.value;
  }

  set value(v) {
    this.props.input.value = v;
  }

  constructor() {
    super();
    this.internals = this.attachInternals();
  }

  afterLoad() {
    this.props.input.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        const form = this.internals.form;
        for (const control of form.elements) {
          if (control.matches(':default')) {
            if (!control.disabled) {
              control.click();
            }
            return;
          }
        }
        if ([...form.elements].find(element => typesThatBlock.has(element.type)) === undefined) {
          form.requestSubmit();
        }
      }
    });
  }
}

export default FormInput;
