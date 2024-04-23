import { query } from "express";
import { db } from "../db.js";

export const getUsers = (response) => {
  const queryMysql = "SELECT * FROM usuarios";

  db.query(queryMysql, (error, users) => {
    if (error) return response.json(error);

    return response.status(200).json(users);
  });
};
export function addUsers (request,response)  {
  const query = 
  "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`) VALUES(?)";

  const values = [
    request.body.id,
    request.body.nome,
    request.body.email,
    request.body.fone,
    request.body.data_nascimento,
  ]
 
  db.query(query, [values], (error)  => {
    (error) ? response.json(error) : response.status(200).json("Usuário criado com sucesso")
  })
}
export function updateUsers(request, response) {
   query = "UPDATE usuarios SET `nome` = ?, `email` = ?,`fone` = ?, `data_nascimento` = ? WHERE `id` = ? "
   values = [
    request.body.id,
    request.body.nome,
    request.body.email,
    request.body.fone,
    request.body.data_nascimento
  ]

  db.query (query, [...values, request.params.id],  (error) => {
    (error) ? response.json(error) : response.status(200).json("Usuário atualizado com sucesso")
    
  })

}
export function deleteUsers(request, response) {
  const query = 
  "DELETE FROM usuarios `id`= ?"

  db.query(query, [request.body.id], (error) => {
    (error) ? response.json(error) : response.status(200).json("Usuário deletado com sucesso")
  }) 
}