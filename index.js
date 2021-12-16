const express = require("express");
const path = require("path");
const ws = require("ws");
const app = express();
const port = process.env.PORT || 5000;

// Express Server
app.use(express.static(path.join(__dirname, "static")));
app.get("/a", (req, res) => {
    res.sendFile(path.join(__dirname, "a.html"));
})

app.get("/b", (req, res) => {
    res.sendFile(path.join(__dirname, "b.html"));
})

const server = app.listen(port, () => {
    console.log(`listening on port ${port}`)
});

const wsServer = new ws.Server({ noServer: true });
wsServer.on('connection', socket => {
  socket.on('message', message => console.log(message.toString()));
});

server.on("upgrade", (request, socket, header) => {
    wsServer.handleUpgrade(request, socket, header, socket => {
        wsServer.emit("connection", socket, request);
    })
})