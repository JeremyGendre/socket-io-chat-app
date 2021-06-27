const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const PORT = process.env.PORT || 3001;
let connectedUsers = [];

const { Server } = require("socket.io");
const io = new Server(server);

app.get('/api', (req, res) => {
    res.send('welcome to this socket io chat API :D');
});

io.sockets.on('connection', function (socket) {
    console.log('connection : ' + socket.id);
    io.to(socket.id).emit('connectedUsers', connectedUsers);
    socket.on('join', function (data) {
        socket.join(data); // We are using room of socket io
    });
    socket.on('chatMessage', (msg) => {
        console.log('message: ' + msg.value);
        socket.broadcast.emit('chatMessage', msg);
    });
    socket.on('setUser', (user) => {
        const newUser = {...user, socketId : socket.id};
        connectedUsers.push(newUser);
        socket.broadcast.emit('newConnectedUser', newUser);
        socket.broadcast.emit('connectedUsers', connectedUsers);
    });
    socket.on('disconnect', () => {
        const disconnectedUser = connectedUsers.find(user => user.socketId === socket.id);
        connectedUsers = connectedUsers.filter(user => user.socketId !== socket.id);
        socket.broadcast.emit('newDisconnectedUser', disconnectedUser);
        socket.broadcast.emit('connectedUsers', connectedUsers);
        console.log('user disconnected : ' + socket.id);
    });
});

server.listen(PORT, () => {
    console.log('listening on *:3001');
});

