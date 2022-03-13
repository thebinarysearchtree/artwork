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


