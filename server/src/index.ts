import express from 'express';
import cors from 'cors';
import { database as db } from './db/database.js';
import bodyParser from 'body-parser';
import { DifficultyLevel } from './types.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';
import { NameGender, nameGenders, namesFile, Player } from './models/types.js';
import {
  chooseFromArray,
  chooseFromArrayWithWeighting,
} from './helpers/randomHelpers.js';

const app = express();
app.use(cors());
const jsonParser = bodyParser.json();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const names_filename = '../resources/names.json';

const names = JSON.parse(
  readFileSync(join(__dirname, names_filename), 'utf-8'),
) as namesFile;

app.get('/', (req, res) => {
  res.send('Default response from Arcane Cricket League server!');
});

app.get('/classes', (req, res) => {
  const classes = db.prepare('SELECT * FROM classes').all();
  res.json(classes);
});

const generateGender = (): NameGender => {
  const gender = chooseFromArrayWithWeighting<NameGender>(
    nameGenders,
    [45, 45, 10],
  );
  if (!nameGenders.includes(gender as NameGender)) {
    throw new Error(`Invalid gender: ${gender}`);
  }
  return gender as NameGender;
};
const generateFirstName = () =>
  chooseFromArray(names.player_names.forenames[generateGender()]);

const generateSurname = () => chooseFromArray(names.player_names.surnames);

app.post('/generate-draft-players', jsonParser, (req, res) => {
  const classes = db.prepare('SELECT * FROM classes').all();

  const playersPerLevel: { [string: DifficultyLevel]: number } = {
    Easy: 20,
    Medium: 15,
    Hard: 10,
    Expert: 5,
  };

  const level = req.body.difficultyLevel;
  const numberOfPlayersToGenerate = playersPerLevel[level];

  const availablePlayers = new Array<Player>();
  for (let i = 0; i < numberOfPlayersToGenerate; i++) {
    const newPlayer = {
      forename: generateFirstName(),
      surname: generateSurname(),
    } as Player;
    availablePlayers.push(newPlayer);
  }

  return res.json(availablePlayers);
});

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
