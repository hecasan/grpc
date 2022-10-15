const grpc = require("grpc");
const AlunoService = grpc.load("../alunos.proto").AlunoService;

const client = new AlunoService(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

module.exports = client;
