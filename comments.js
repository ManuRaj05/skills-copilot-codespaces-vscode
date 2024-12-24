// Create web server
const express = require('express');
const app = express();
// Create a route
app.get('/', function(req, res) {
  res.send('Hello World!');
});
// Start server
app.listen(3000, function() {
  console.log('Server is running on http://localhost:3000');
});