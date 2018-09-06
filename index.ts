const express = require('express');
const app = express();

app.get('/', function (req:any, res:any) {
  res.send('Hello World!');
});

app.listen( process.env.PORT || 8080, function () {
  console.log('Example app listening http://localhost:' +  process.env.PORT || 8080);
});
