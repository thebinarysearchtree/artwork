# Artwork
A front-end library for people who see their code as artwork. Artwork is 100% real JavaScript and CSS. There are no asychronous state updates, reactivity, template languages, hybrid languages, hidden rules, or anything else. Artwork runs as fast as a client-side library can run, with less code than React and Vue.

With components and flow control splitting up HTML into increasingly smaller chunks, the need for a visual representation of the structure of a document decreases. Once HTML is removed, a world of opportunities open up. The programming language can be used without barriers.

```js
class HelloWorld extends ElementArt {
  render() {
    return div(`Hello ${this.state}`);
  }
}
```

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

```js
class TodoList extends ElementArt {
  render() {
    const { div, h3, ul, form, label, input, button } = elements;

    h3.innerText = 'Todo';

    const inputId = 'new-todo';

    label.htmlFor = inputId;
    label.innerText = 'What needs to be done?';
    input.id = inputId;

    button.innerText = `Add #1`;

    form.append(label, input, button);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
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
