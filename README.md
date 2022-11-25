# Artwork
A front-end library for people who see their code as artwork. Artwork is 100% real JavaScript and CSS. There are no asychronous state updates, reactivity, template languages, hybrid languages, hidden rules, or anything else. Artwork runs as fast as a client-side library can run, with less code than React and Vue.

Go to the [art-project](https://github.com/thebinarysearchtree/art-project) repository if you want to run the examples below or need a template for creating a new project.

```
npm install artworkjs
```

## Examples

A very basic example.
```js
import { html } from 'artworkjs';

const hello = (name) => html.create('div', `Hello ${name}`);
```

A timer that uses `connected`, which is a function run when the custom element is added to the DOM. The return value is run when the element is removed from the DOM.
```js
import { html } from 'artworkjs';

const timer = () => {
  let seconds = 0;

  const div = html.create('div');

  const tick = () => {
    div.innerText = `Seconds: ${seconds}`;
    seconds++;
  };

  tick();

  const connected = () => {
    const intervalId = setInterval(tick, 1000);
    return () => clearInterval(intervalId);
  };

  return html.register({
    root: div,
    connected,
    name: 'seconds-timer'
  });
}
```

A todo list.
```js
import { html, htmlFor } from 'artworkjs';

const text = {
  title: 'Todo',
  label: 'What needs to be done?',
  button: 'Add #1'
}

const todo = () => {
  const div = html.create('div');

  const title = html.create('h3', text.title);
  const label = html.create('label', text.label);
  const button = html.create('button', text.button);

  htmlFor(label, input, 'new-todo');

  form.append(label, input, button);

  form.addEventListener('submit', (e) => {
    const todo = input.value;
    if (todo.length === 0) {
      return;
    }
    const item = html.create('li', todo);
    ul.append(item);
    
    button.innerText = `Add #${ul.childElementCount + 1}`;
    input.value = '';
  });

  div.append(title, ul, form);

  return html.register({
    root: div,
    styles: 'form > * { margin-right: 5px; }',
    name: 'todo-list'
  });
}
```

## Creating elements

Components will often be composed of one or more HTML elements. Artwork provides multiple convenience methods for creating elements so that you don't have to do ```document.createElement('div');``` each time.

Which method you use will depend on what you are trying to do and the way you write components. If you want to create an element with lots of attributes, it is often best to pass in a list of properties to ```html.create```.

```js
import { html } from 'artworkjs';

const city = html.create({
  tag: 'div',
  className: 'city',
  innerText: 'Brisbane',
  title: 'Australia'
});
```

```city``` will now be an ```HTMLDivElement``` that looks like this:

```html
<div class="city" title="Australia">Brisbane</div>
```

Often, a component will have a bunch of div elements that are used for nothing other than styling and layout. In this case, you can use the ```createStyled```. This function returns elements with their ```className``` set to the name of the variable after it is converted from camel case to dashes.

```js
import { html } from 'artworkjs';

const { root, sidePanel, content } = html.createStyled('div');

root.append(content, sidePanel);
```

```root``` is now an ```HTMLDivElement``` that looks like this:

```html
<div class="root">
  <div class="content"></div>
  <div class="side-panel"></div>
</div>
```

## Styles

Every component can have css that is scoped to that component, to avoid clashes with other components.

```js
import { html } from 'artworkjs';
import styles from './Thumbnail.css' assert { type: 'css' };

const thumbnail = () => {
  const root = html.create('p', 'Star Wars');
  return html.register({
    root,
    styles,
    name: 'movie-thumbnail'
  });
}
```

```styles``` can also be set to an array of styles if you have more than one. Subclasses can only add more styles, not remove existing styles. You can also use strings containing css.

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
router.add(/\/(?<username>[^/]+)\/(?<repository>[^/]+)/, ({ username, repository }) => {
  const user = users.find(u => u.username === username);
});
```

The above example will match routes such as ```/thebinarysearchtree/artwork```. Other routing libraries will allow you to specify routes like this:

```/:username/:repository```

but this requires more code from the libraries perspective, is less flexible, and can be ambiguous.

The anchor tags in a single page application need to be handled correctly to prevent the page reloading. When you want to use the ```a``` tag, you can import the ```routerLink``` function, which takes the same arguments as the ```a``` function, and adds a ```state``` property that represents the history state.

```js
import { routerLink } from 'artworkjs';

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
  const { root, sidePanel, content } = html.createStyled('div');

  const movies = await getMovies();
  sidePanel.append(...movies);

  this.connected = () => {
    const router = new Router(content);

    router.add('/movies', ({ v }) => {
      const videoId = parseInt(v, 10);
      const { name } = movies.find(m => m.id === videoId);

      return html.create('h3', name);
    });
    
    router.start();
    return () => router.remove();
  }

  root.append(content, sidePanel);
  return root;
}
```
