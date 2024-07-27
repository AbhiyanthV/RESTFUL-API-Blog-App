//  creating a new server. 
const http=require('http');
const app= require('./app');

const port= process.env.PORT || 3000;

const server=http.createServer(app);

server.listen(port);

//server.listen() will start listening to the request made on the port and execute