import ElementArt from './ElementArt.js';

const typesThatBlock = new Set(['text', 'search', 'url', 'tel', 'email', 'password', 'date', 'month', 'week', 'time', 'datetime-local', 'number']);

class FormInput extends ElementArt {
  static formAssociated = true;

  get type() {
    return this.props.type;
  }

  get value() {
    return this.props.value;
  }

  set value(v) {
    this.props.value = v;
  }

  constructor() {
    super();
    this.internals = this.attachInternals();
  }

  afterRender() {
    this.input.addEventListener('keydown', (e) => {
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
