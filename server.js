const express = require('express');
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const server = express();
const liveReloadServer = livereload.createServer();

server.use(connectLiveReload());
server.use(express.static("public", {
    "index": "signup.html"
}));
liveReloadServer.watch("public");

const port = 5040;

server.listen(port, function () {
    console.log(`Server is listening to port:${port}`);
});