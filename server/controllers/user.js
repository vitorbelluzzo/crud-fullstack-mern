import { db } from "../db.js";


export const getUsers = (_, response) => {
  const q = "SELECT * FROM usuarios";

  db.query(q, (err, data) => {
    if (err) return response.json(err);

    return response.status(200).json(data);
  });
};

export const addUser = (request, response) => {

  const query =
    "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`) VALUES(?)";

  const values = [
    request.body.nome,
    request.body.email,
    request.body.fone,
    request.body.data_nascimento,
  ];

  db.query(query, [values], (err) => {
    if (err) return response.json(err);

    return response.status(200).json("Usuário criado com sucesso.");
  });
};

export const updateUser = (req, res) => {
  const query =
    "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

  db.query(query, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM usuarios WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);
    
    const resetSequenceQuery = "ALTER TABLE usuarios AUTO_INCREMENT = 1";
    db.query(resetSequenceQuery, (err) => {
      if (err) return res.json(err);

      return res.status(200).json("Usuário deletado com sucesso");
    });
  });
};