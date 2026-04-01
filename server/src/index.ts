import express from "express";
import cors from "cors";
import { database as db } from "./db/database.js";
import bodyParser from "body-parser";
import { DifficultyLevel } from "./types.js";

const app = express();
app.use(cors());
const jsonParser = bodyParser.json();

app.get("/", (req, res) => {
  res.send("Default response from Arcane Cricket League server!");
});

app.get("/classes", (req, res) => {
  const classes = db.prepare("SELECT * FROM classes").all();
  res.json(classes);
});

app.get("/generate-draft-players", jsonParser, (req, res) => {
  const classes = db.prepare("SELECT * FROM classes").all();

  const playersPerLevel: { [string: DifficultyLevel]: Number } = {
    Easy: 20,
    Medium: 15,
    Hard: 10,
    Expert: 5,
  };

  const level = req.body as DifficultyLevel;
  const numberOfPlayersToGenerate = playersPerLevel[level];
  const availablePlayers = new Array<string>();
});

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
