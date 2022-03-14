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

Components will often be composed of one or more HTML elements. Artwork provides multiple convenience methods for creating elements so that you don't have to do ```document.createElement('div');``` each time.

Which method you use will depend on what you are trying to do and the way you write components. If you want to create an element with lots of attributes, it is often best to use the ```html``` proxy.

```js
import { html } from '../artwork/index.js';

const { div, span } = html;

const city = div({
  class: 'city',
  text: 'Brisbane',
  title: 'Australia'
});
```

```city``` will now be an ```HTMLDivElement``` that looks like this:

```html
<div class="city" title="Australia">Brisbane</div>
```

The functions created by accessing the ```html``` proxy accept an object containing the properties of the element you are creating. ```text``` and ```class``` are shorthands for ```className``` and ```innerText```. The functions can also accept a ```string``` or ```number``` instead of an object, which is then used to set ```innerText```.

```js
const city = span('Brisbane');
```

which turns into

```html
<span>Brisbane</span>
```

Often, a component will have a bunch of div elements that are used for nothing other than styling and layout. In this case, you can use the ```divs``` proxy, or create your own proxy with ```makeElements```. This proxy returns div elements with their ```className``` set to the name of the variable after it is converted from camel case to dashes.

```js
import { divs } from '../artwork/index.js;

const { root, sidePanel, content } = divs;

root.append(content, sidePanel);
```

```root``` is now an ```HTMLDivElement``` that looks like this:

```html
<div class="root">
  <div class="content"></div>
  <div class="side-panel"></div>
</div>
```

For some people this may not work, as they use utility classes in their css, but for others it will save a lot of time.

The final way to create elements is by using the ```elements``` proxy. This can be used when you have lots of different types of elements that don't have many attributes.

All of these proxies are backed by objects with getters, so they can be used in loops and so on, as each property access creates a new element.

