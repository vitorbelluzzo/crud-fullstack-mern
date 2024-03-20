import mysql from "mysql"

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Vitor2206@',
  database: 'crud'
})