import http from 'http';
import { createProxyServer } from 'http-proxy';

const proxy = createProxyServer();

const server = http.createServer((req, res) => {
  // Modify the target URL to point to the actual API
  const target = 'http://localhost:12345/api/v2/campings';

  // Proxy the request to the target URL
  proxy.web(req, res, { target });
});

server.listen(12345, () => {
  console.log('Proxy server is running on port 12345');
});
