import process = require('process');

const porta = process.env.PORT || 8080;

const restify = require('restify');

function respond(req:any, res:any, next:any) {
  res.send('hello ' + req.params.name);
  next();
}

const server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(porta, () =>{
  console.log('%s listening at %s', server.name, server.url);
});