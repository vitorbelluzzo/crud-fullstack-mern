import { db } from "../db.js";

export const getUsers = (request, response) => {
  const queryMysql = "SELECT * FROM usuarios";

  db.query(queryMysql, (error, users) => {
    if (error) return response.json(error);

    return response.status(200).json(users);
  });
};