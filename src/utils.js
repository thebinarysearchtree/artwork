const htmlFor = (label, input, id) => {
  label.htmlFor = id;
  input.id = id;
}

export {
  htmlFor
};
