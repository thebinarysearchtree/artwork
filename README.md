# Artwork
A front-end library for people who see their code as artwork. Artwork is 100% real JavaScript and CSS. There are no asychronous state updates, reactivity, template languages, hybrid languages, hidden rules, or anything else. Artwork runs as fast as a client-side library can run, with less code than React and Vue.

## Examples

A very basic example.
```js
class HelloWorld extends ElementArt {
  render() {
    return div(`Hello ${this.state}`);
  }
}
```

A timer that sets `this.connected`, which is a function run when the custom element is added to the DOM. The return value is run when the element is removed from the DOM.
```js
class SecondsTimer extends ElementArt {
  render() {
    let seconds = 0;

    const root = div();

    const tick = () => {
      root.innerText = `Seconds: ${seconds}`;
      seconds++;
    };

    tick();

    this.connected = () => {
      const intervalId = setInterval(tick, 1000);
      return () => clearInterval(intervalId);
    };

    return root;
  }
}
```

A todo list that uses the `elements` proxy to create new elements. `setText` shows the factory line nature of Artwork, as opposed to the document nature of HTML.
```js
class TodoList extends ElementArt {
  render() {
    const { div, h3, ul, form, label, input, button } = elements;

    setText(
      h3, 'Todo', 
      label, 'What needs to be done?',
      button, 'Add #1');

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


