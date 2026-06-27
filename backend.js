import server from './src/server.mjs';

export default {
  fetch: server.fetch.bind(server),
};
