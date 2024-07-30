const express = require('express');
const app = express();
const port = 3000;

// Simple middleware to log request details
const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass the request to the next middleware or route handler
};

// Middleware to add a custom header to the response
const addHeaderMiddleware = (req, res, next) => {
  res.setHeader('X-Custom-Header', 'Hello, this is a custom header!');
  next(); // Pass the request to the next middleware or route handler
};

// Use the middleware
app.use(loggerMiddleware);
app.use(addHeaderMiddleware);

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
