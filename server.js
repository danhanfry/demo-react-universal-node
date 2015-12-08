import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

require('./server/router')(app)

const server = http.createServer(app);

var io = SocketIO(server);

require('./server/io')(io)

server.listen(3003);
server.on('listening', () => {
  console.log('Listening on 3003');
});
