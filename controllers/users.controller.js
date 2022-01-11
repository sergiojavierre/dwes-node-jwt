import { connection } from "../db/connection.js";
import { createToken } from "../security/middleware.js";
import bcrypt from "bcryptjs";

const saltRounds = 10;

const registro = (req, res) => {
  const { alias, password } = req.body;
  const passwordHash = bcrypt.hashSync(password, saltRounds);

  connection.query(
    `insert into users (alias, password) values ("${alias}","${passwordHash}");`,
    (err, rows) => {
      if (err) {
        res.status(500).send(err);
      } else res.send(`El usuario ${alias} ha sido registrado`);
    }
  );
};

const login = (req, res) => {
  const { alias, password } = req.body;
  connection.query(
    `select * from users where alias = "${alias}"`,
    (err, rows) => {
      if (err) {
        res.status(500).send(err);
      } else if (rows.length == 0) {
        res.status(404).send(`El usuario/password no existe`);
      } else {
        const user = rows[0];
        const verified = bcrypt.compareSync(password, user.password);
        if (verified) {
          const token = createToken(user);
          res.send({ token });
        } else {
          res.status(404).send(`El usuario/password no existe`);
        }
      }
    }
  );
};

export { registro, login };
