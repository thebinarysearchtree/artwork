import { makeReviver } from './data.js';
import cache from './cache.js';
import client from './client.js';
import { pushState } from './router.js';

const defaultReviver = makeReviver();

const fetchMany = async (requests) => {
  const requestsToProcess = requests
    .reduce((a, c) => {
      const { url, data, handler } = c;
      const cachedResult = cache.get(url, data);
      if (cachedResult) {
        handler(cachedResult);
        return a;
      }
      a.push(c);
      return a;
    }, []);
  if (requestsToProcess.length === 0) {
    return;
  }
  const token = await client.getToken();
  const requestPromises = requests.map(request => {
    const { url, data } = request;
    return client.postData(url, data, token);
  });
  const responses = await Promise.all(requestPromises);
  const responsePromises = responses
    .filter(r => r.ok)
    .map(r => r.text());
  if (responsePromises.length !== requests.length) {
    if (responses.some(r => r.status === 401)) {
      pushState('/login');
    }
    else {
      pushState('/error');
    }
  }
  const states = await Promise.all(responsePromises);
  states.forEach((state, i) => {
    const { url, data, handler, reviver } = requests[i];
    const result = JSON.parse(state, reviver ? reviver : defaultReviver);
    cache.set(url, data, result);
    handler(result);
  });
}

export default fetchMany;
