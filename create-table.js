import sql from "./db.js";

/*sql`DROP TABLE IF EXISTS aulas;` .then(() => {
    console.log('tabela apagada')
})*/

// Criação da tabela
sql`
  CREATE TABLE aulas (
    id TEXT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration INT
  );
`
  .then(() => {
    console.log("Tabela 'aulas' criada com sucesso");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Erro ao criar a tabela 'aulas'", error);
    process.exit(1);
  });