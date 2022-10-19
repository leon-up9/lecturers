import express from "express";
import cors from "cors";

import { data } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/lecturers", async (req, res) => {
  res.json(data);
});

const server = app.listen(3333, () =>
  console.log(`🚀 Server ready at: http://localhost:3333`)
);
