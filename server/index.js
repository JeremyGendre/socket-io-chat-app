const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const PORT = process.env.PORT || 3001;

const { Server } = require("socket.io");
const io = new Server(server);

app.get('/api', (req, res) => {
    res.send('welcome to this socket io chat API :D');
});

io.sockets.on('connection', function (socket) {
    console.log('connection !!');
    socket.on('join', function (data) {
        socket.join(data); // We are using room of socket io
    });
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg.value);
        socket.broadcast.emit('chat message', msg);
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(PORT, () => {
    console.log('listening on *:3001');
});

