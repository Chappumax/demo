const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, this is a GET request!');
});

app.post('/', (req, res) => {
  res.send('Hello, this is a POST request!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


