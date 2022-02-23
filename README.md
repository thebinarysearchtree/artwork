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
    }

    return root;
  }
}
```
