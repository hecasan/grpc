const client = require("./client-grpc");

client.listar({}, (error, alunos) => {
  if (error) {
    console.error(error);
  } else {
    console.log(alunos);
  }
});
