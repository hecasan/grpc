const client = require("./client-grpc");

client.list({}, (error, alunos) => {
  if (error) {
    console.error(error);
  } else {
    console.log(alunos);
  }
});
