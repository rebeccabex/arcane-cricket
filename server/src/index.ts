import express from 'express';
import cors from 'cors';
import { database as db } from './db/database.js';
import bodyParser from 'body-parser';
import { generatePlayers } from './players/playersService.js';
import knex, { Knex } from 'knex';

const app = express();
app.use(cors());
const jsonParser = bodyParser.json();

const knexConfig: Knex.Config = {
  client: 'better-sqlite3',
  connection: {
    filename: '../arcane-cricket.db',
  },
};

const knexInstance = knex(knexConfig);

app.get('/', (req, res) => {
  res.send('Default response from Arcane Cricket League server!');
});

app.get('/classes', (req, res) => {
  const classes = db.prepare('SELECT * FROM classes').all();
  res.json(classes);
});

app.post('/generate-draft-players', jsonParser, (req, res) => {
  const level = req.body.difficultyLevel;
  const tier = req.body.tier;
  const availablePlayers = generatePlayers(level, tier, db);

  return res.json(availablePlayers);
});

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
