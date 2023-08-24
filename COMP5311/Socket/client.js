var net = require("net");

var host = "127.0.0.1";
var port = 58888;

var client = new net.Socket()
client.connect(port, host, function () {
    console.log("Connect to: " + host + ":" + port)
    // Send message to socket when the client is connected, server will receive it as from client
    client.write("a man a plan a canal panama")
})

// Add a "data" event handler to record what the server send to the client
client.on("data", function (data) {
    console.log("Data: " + data)
    // Close the client socket completely
    client.destroy()
})

// Close connection
client.on("close", function () {
    console.log("Connection is closed.")
})