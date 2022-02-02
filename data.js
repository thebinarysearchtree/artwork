const reviver = (key, value, context) => {
  if (key.includes('_')) {
    const renamedKey = key.replace(/_[a-z]/g, (s) => s[1].toUpperCase());
    context[renamedKey] = value;
  }
  else {
    return value;
  }
}

const makeReviver = (parser) => {
  if (!parser) {
    return function(key, value) {
      return reviver(key, value, this);
    }
  }
  return function(key, value) {
    return reviver(key, parser(key, value), this);
  }
}

const defaultReviver = makeReviver();

const parse = async (response, reviver = defaultReviver) => {
  const text = await response.text();
  return JSON.parse(text, reviver);
}

export {
  makeReviver,
  parse
};
