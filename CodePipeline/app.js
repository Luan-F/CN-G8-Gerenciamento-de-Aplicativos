// app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! This is a simple app for AWS CodePipeline.');
});

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
