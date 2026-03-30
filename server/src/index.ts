import express from 'express';
import cors from 'cors';
import { database as db } from './db/database.js'

const app = express();
app.use(cors());

app.get('/', (req, res) => {
      res.send('Default response from Arcane Cricket League server!')
});

app.get('/classes', (req, res) => {
  const classes = db.prepare('SELECT * FROM classes').all();
  res.json(classes);
});

app.listen(8080, () => {
      console.log('Server listening on port 8080')
});