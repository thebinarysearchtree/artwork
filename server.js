import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

const proxy = createProxyMiddleware('!(/|/users)', {
  target: 'http://localhost:8080',
  changeOrigin: true,
  logLevel: 'silent'
});

app.use('/', express.static('/Users/andrew/Projects/Artwork'));
app.use('*', proxy);

app.use('*', (req, res) => res.sendFile('/Users/andrew/Projects/Artwork/index.html'));

const server = app.listen(3000);

export default server;
