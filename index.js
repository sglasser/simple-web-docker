const express = require('express');

const app = express();

app.get("/", (req, res) => {
  res.send('Hi there!!!!!');
});

app.get("/test/:param", (req, res) => {
  res.send('Hello!');
})

app.listen(80, () => {
  console.log("v3")
  console.log('Listening on port 80');
});