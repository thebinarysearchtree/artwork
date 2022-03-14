# Artwork
A front-end library for people who see their code as artwork. Artwork is 100% real JavaScript and CSS. There are no asychronous state updates, reactivity, template languages, hybrid languages, hidden rules, or anything else. Artwork runs as fast as a client-side library can run, with less code than React and Vue.

Go to the [art-project](https://github.com/thebinarysearchtree/art-project) repository if you want to run the examples below or need a template for creating a new project.

## Examples

A very basic example.
```js
class HelloWorld extends ElementArt {
  render(name) {
    return div(`Hello ${name}`);
  }
}
```

A timer that sets `this.connected`, which is a function run when the custom element is added to the DOM. The return value is run when the element is removed from the DOM.
```js
class SecondsTimer extends ElementArt {
  render() {
    let seconds = 0;

    const { div } = elements;

    const tick = () => {
      div.innerText = `Seconds: ${seconds}`;
      seconds++;
    };

    tick();

    this.connected = () => {
      const intervalId = setInterval(tick, 1000);
      return () => clearInterval(intervalId);
    };

    return div;
  }
}
```

A todo list that uses the `elements` proxy to create new elements. `setText` shows the factory line nature of Artwork, as opposed to the document nature of HTML.
```js
class TodoList extends ElementArt {
  render() {
    const { div, h3, ul, form, label, input, button } = elements;

    const text = {
      h3: 'Todo', 
      label: 'What needs to be done?',
      button: 'Add #1'
    };

    setText(text, { h3, label, button });

    htmlFor(label, input, 'new-todo');

    form.append(label, input, button);

    onSubmit(form, (e) => {
      const todo = input.value;
      if (todo.length === 0) {
        return;
      }
      const item = li(todo);
      ul.append(item);
      
      button.innerText = `Add #${ul.childElementCount + 1}`;
      input.value = '';
    });

    div.append(h3, ul, form);

    return div;
  }
}
```

## Creating a component

```js
import { makeArt, ElementArt, html } from '../artwork/index.js';

const { div } = html;

class HelloWorld extends ElementArt {
  render(name) {
    return div(`Hello ${name}`);
  }
}

const helloWorld = makeArt(HelloWorld);

export default helloWorld;
```

Artwork is based on Web Components, a native component API built into modern web browsers. A typical component in Artwork will start by importing ```makeArt``` or ```makeAsyncArt```, ```ElementArt``` or ```AsyncElementArt```, and some way of making HTML elements, in this case ```html```.

```js
import { makeArt, ElementArt, html } from '../artwork/index.js';
```

Every component will extend either ```ElementArt``` or ```AsyncElementArt``` depending on whether the render method is asynchronous or not. The main method of ```ElementArt``` is ```render```, which is run once, and is used to create HTML elements, and set up any event handlers. It returns a ```HTMLElement```.

```js
class HelloWorld extends ElementArt {
  render(name) {
    return div(`Hello ${name}`);
  }
}
```

Once the class has been defined, ```makeArt``` is used to register a native web component and create a function that can be used to create a new instance of the component, as the class cannot be created directly.

```js
const helloWorld = makeArt(HelloWorld);
```

```makeArt``` will use the supplied classes name to create the native web component name. In this case, ```HelloWorld``` will become ```hello-world```. You can control this by passing in a second argument to ```makeArt``` that specifies the name of the web component directly. Web components must have at least two words separated by a ```-```.

To use the component, you simply import it into your file and run the function created by ```makeArt```.

```js
import hello from './HelloWorld.js';

const element = hello('Andrew');

document.body.append(element);
```

The argument supplied to the function is the same argument that will be passed into the ```render``` method of the class you created earlier.

### Creating elements

Each component will be composed of one or more HTML elements. Artwork provides multiple convenience methods for creating elements so that you don't have to do ```document.createElement('div');``` each time.

Which method you use will depend on what you are trying to do and the way you write components. If you want to create an element with lots of attributes, it is often best to use the ```html``` proxy.



