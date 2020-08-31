const express = require('express')
const server = express();

server.use(express.static("public", {
    "index": "signup.html"
}));

const port = 5040;

server.listen(port, function () {
    console.log(`Server is listening to port:${port}`)
});