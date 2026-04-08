import express from 'express';
import cors from 'cors';
import { database as db } from './db/database.js';
import bodyParser from 'body-parser';
import { generatePlayers } from './players/playersService.js';

const app = express();
app.use(cors());
const jsonParser = bodyParser.json();

app.get('/', (req, res) => {
  res.send('Default response from Arcane Cricket League server!');
});

app.get('/classes', (req, res) => {
  const classes = db.prepare('SELECT * FROM classes').all();
  res.json(classes);
});

app.post('/generate-draft-players', jsonParser, (req, res) => {
  const level = req.body.difficultyLevel;
  const availablePlayers = generatePlayers(level, db);

  return res.json(availablePlayers);
});

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
