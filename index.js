const grpc = require("grpc");

const server = new grpc.Server();

server.start();

console.log("Server started on port 50051");
