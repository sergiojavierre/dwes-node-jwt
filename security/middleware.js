import jwt from "jsonwebtoken";
import { key } from "./jwt.js";

const createToken = (user) => {
  const payload = {
    alias: user.alias,
  };
  return jwt.sign(payload, key, { expiresIn: "7d" });
};

const ensureAuth = (req, res, next) => {
  const auth = req.headers.authorization;
  if (auth) {
    const token = req.headers.authorization.split(" ")[1];
    if (token) {
      jwt.verify(token, key, (err, decoded) => {
        if (err) {
          return res.status(401).send(err);
        } else {
          req.alias = decoded.alias;
          next();
        }
      });
    }
  } else {
    return res.status(403).send("No hay auth");
  }
};

export { createToken, ensureAuth };
