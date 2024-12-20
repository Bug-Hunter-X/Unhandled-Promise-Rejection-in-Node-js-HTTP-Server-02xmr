```javascript
const http = require('http');

const server = http.createServer(async (req, res) => {
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          reject(new Error('Async operation failed'));
        } else {
          resolve('Async operation successful');
        }
      }, 1000);
    });
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(result);
  } catch (error) {
    console.error('Error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```