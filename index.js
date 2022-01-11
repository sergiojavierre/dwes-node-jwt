import express from "express";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

import { router as routerUsers } from "./routes/users.routes.js";
import { router as routerPokemon } from "./routes/pokemon.routes.js";

app.use("/users", routerUsers);
app.use("/pokemon", routerPokemon);

app.listen(8080, () => {
  console.log("server listening");
});
