import mysql from "mysql";

const connection = mysql.createConnection({
  host: "80.34.34.150",
  user: "demo",
  password: "demo",
  database: "demo",
  port: 33084,
});

export { connection };
