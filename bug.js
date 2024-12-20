```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  const asyncOperation = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate a random error 50% of the time
        if (Math.random() < 0.5) {
          reject(new Error('Async operation failed'));
        } else {
          resolve('Async operation successful');
        }
      }, 1000);
    });
  };

  asyncOperation()
    .then(result => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(result);
    })
    .catch(error => {
      // Error handling is missing here
      console.error('Error:', error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```