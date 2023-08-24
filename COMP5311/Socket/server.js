var net = require("net");

var HOST = "127.0.0.1";
var PORT = 58888;

net.createServer(function (sock) {
    // Assign socket
    console.log("Connected: " + sock.remoteAddress + ":" + sock.remotePort)
    // Data event handler to handle this socket
    sock.on("data", function (data) {
        console.log("Data " + sock.remoteAddress + ": " + data)
        // Publish data back to client side
        sock.write('Nothing special? Remove the space and read it! This sentence is a Palindromes.'+ data.reverse());
    })
    // Close this instance of socket
    sock.on("close", function (data) {
        console.log("CLOSED: " + sock.remoteAddress + " " + sock.remotePort)
    })
}).listen(PORT, HOST)

console.log("Server listening on " + HOST + ":" + PORT)