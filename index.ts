import express from "express";

const app: express.Application = express();

import {index} from "./src/page"

app.get("/", (req: express.Request, res: express.Response) => {
  res.send(index());
});

app.listen(3000, () => {
  console.log("Server run on http://localhost:3000");
});
