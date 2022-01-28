const map = new Map();

const makeKey = (url, data) => `${url} ${JSON.stringify(data)}`;

const set = (url, data, response) => {
  const key = makeKey(url, data);
  map.set(key, response);
}

const get = (url, data) => {
  const key = makeKey(url, data);
  return map.get(key);
}

const has = (url, data) => {
  const key = makeKey(url, data);
  return map.has(key);
}

const clear = () => map.clear();

const cache = {
  set,
  get,
  has,
  clear
};

export default cache;
