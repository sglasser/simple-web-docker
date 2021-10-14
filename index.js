const express = require('express');

const app = express();

app.get("/", (req, res) => {
  res.send('Hi there!!!!!');
});

app.get("/test/:param", (req, res) => {
  res.send('Hello!');
})

const port = process.env.PORT || 8080; 

app.listen(port, () => {
  console.log("v3")
  console.log(`Listening on port ${port}`);
});