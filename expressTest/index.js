const express = require('express');
const socket = require('socket.io');
const app = express();
const User = require("./user");

app.use(express.static("public"))

const PORT = 5000;
const server = app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const io = socket(server);

var users = new Array();

io.sockets.on('connection', (socket) => {
    console.log(`connected id: ${socket.id}`);
    console.log(socket.handshake.address);
    console.log(`Number of connected users: ${io.of("/").sockets.size}`)
    // users.push(new User(socket.id));
    // console.log(`Number of users: ${users.length}`)
    // users.forEach((val) => {
    //     console.log(`User number: ${val.getNum()} User id: ${val.socketId}`)
    // })

    socket.on("disconnect", (reason) => {
        console.log(`disconnected id: ${socket.id}`);
        console.log(reason);
        console.log(io.of("/").sockets.size);
    })
});