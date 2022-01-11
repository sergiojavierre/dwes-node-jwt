import { connection } from "../db/connection.js";

const insert = (req, res) => {
  const { nombre } = req.body;
  connection.query(
    `insert into pokemon (nombre, entrenador) values ("${nombre}","${req.alias}");`,
    (err, rows) => {
      if (err) {
        res.status(500).send(err);
      } else
        res.send(
          `El pokemon ${nombre} ha sido registrado por el entrenador ${req.alias}`
        );
    }
  );
};

const get = (req, res) => {
  connection.query(
    `select * from pokemon where entrenador = "${req.alias}"`,
    (err, rows) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(rows);
      }
    }
  );
};

export { insert, get };
