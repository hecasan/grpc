const grpc = require("grpc");
const alunosProto = grpc.load("alunos.proto");

const alunos = [
  { id: 1, nome: "João", idade: 18 },
  { id: 2, nome: "Pedro", idade: 21 },
  { id: 3, nome: "Luiz", idade: 19 },
  { id: 4, nome: "Lara", idade: 23 },
  { id: 5, nome: "Jennifer", idade: 17 },
];

const server = new grpc.Server();

server.addService(alunosProto.AlunoService.service, {
  list: (_, callback) => {
    callback(null, { alunos });
  },
});

server.bind("127.0.0.1:50051", grpc.ServerCredentials.createInsecure());

console.log("Server started on port 50051");
server.start();
