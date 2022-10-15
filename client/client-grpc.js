const grpc = require("grpc");
const AlunoService = grpc.load("../alunos.proto").AlunoService;

export const client = new AlunoService(
  "localhost:50051",
  grpc.credentials.createInsecure()
);
