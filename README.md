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

const helloWorld = makeArt(HelloWorld, 'hello-world');

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

Once the class has been defined, ```makeArt``` is used to register a native web component and create a function that can be used to create a new instance of the component, as the class cannot be instantiated directly.

```js
const helloWorld = makeArt(HelloWorld, 'hello-world');
```

The second argument to ```makeArt``` is the name that will be given to the web component. The name must have at least two words in it that are separated by a ```-```.

To use the component, you simply import it into your file and run the function created by ```makeArt```.

```js
import hello from './HelloWorld.js';

const element = hello('Andrew');

document.body.append(element);
```

The argument supplied to the function is the same argument that will be passed into the ```render``` method of the class you created earlier.

## Creating elements

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

The final way to create elements is by using the ```elements``` proxy. When you access the properties on the ```elements``` proxy, it returns a new element corresponding to the name of the property.

```js
const { div } = elements;
div.innerText = 'Brisbane';
```

All of these proxies are backed by objects with getters, so they can be used in loops and so on, as each property access creates a new element.

## Styles

Every component can have css that is scoped to that component, to avoid clashes with other components.

```js
import styles from './Thumbnail.css' assert { type: 'css' };

class MovieThumbnail extends ElementArt {
  constructor() {
    super();
    this.styles = styles;
  }

  render() {
    return p('Star Wars');
  }
}
```

You can also use strings containing css.

```js
class MovieThumbnail extends ElementArt {
  constructor() {
    super();
    this.styles = 'p { margin-left: 20px; }';
  }

  render() {
    return p('Star Wars');
  }
}
```

## Routes

Artwork includes a router that has some pretty interesting features. When creating a router, you can pass in the ```root``` element, and the router will replace the child element of the root with whatever is returned by the route handler. In the example below, the child element will be the ```HelloWorld``` component from earlier. If you don't provide a root element, your route handler should not return anything, as it is left up to you to determine what happens when the route is hit.

```js
const root = document.getElementById('root');

const router = new Router(root);

router.add('/hello', ({ name }) => hello(name));

router.start();
```

The ```add``` method takes two arguments, the path and a route handler.  The path can be specified as a string or a regular expression. If the regular expression has named capturing groups, these groups are added to the parameters object that is passed to the route handler.

```js
router.add(/\/(?<username>[^/]*)\/(?<repository>[^/]*)/, ({ username, repository }) => {
  const user = users.find(u => u.username === username);
});
```

The above example will match routes such as ```/thebinarysearchtree/artwork```. Other routing libraries will allow you to specify routes like this:

```/:username/:repository```

but this requires more code from the libraries perspective, is less flexible, and can be ambiguous.

The anchor tags in a single page application need to be handled correctly to prevent the page reloading. When you want to use the ```a``` tag, you can import the ```routerLink``` function, that takes the same arguments as the ```a``` function, and adds a ```state``` property that represents the history state.

```js
import { routerLink } from './artwork/index.js';

render() {
  const { div } = elements;

  const a1 = routerLink({ href: '/hello?name=World', text: 'Hello World' });

  div.append(a1);

  return div;
}
```

When you are loading an asynchronous component, you often want to display a loading indicator. You can do this by returning the loading indicator in the route handler, and then replacing the indicator once the asynchronous component has loaded. These are all standard DOM API methods.

```js
router.add(/\/movies/, () => {
  const loading = div('Loading...');
  movies().then((m) => loading.replaceWith(m));
  return loading;
});
```

Artwork lets you create as many routers as you want. The router that is created last will override the earlier routers when it has a match that is also in the other routers. Usually, you will have one router that starts when the application begins, and then other routers that are started inside components. When the component loads, the router will become active. Make sure to remove the router once the component is removed from the DOM.

In the example below, the ```connected``` method is used to create a new router that intercepts routes and only replaces the title of the movie instead of reloading the side panel. ```connected``` is a method that is available to both ```ElementArt``` and ```AsyncElementArt``` classes, and is run when the web component is connected to the DOM. The return value is a function that is run when the component is removed from the DOM.

```js
async render() {
  const { root, sidePanel, content } = divs;

  const movies = await getMovies();
  sidePanel.append(...movies);

  this.connected = () => {
    const router = new Router();

    router.add('/movies', ({ v }) => {
      const videoId = parseInt(v, 10);
      const { name } = movies.find(m => m.id === videoId);

      const title = h3(name);
      content.replaceChildren(title);
    });
    
    router.start();
    return () => router.remove();
  }

  root.append(content, sidePanel);
  return root;
}
```
