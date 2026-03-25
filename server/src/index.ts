import express from 'express';
import cors from 'cors';

const cors = require('cors');
const app = express();
app.use(cors());

app.get('/', (req, res) => {
      res.send('Default response from Arcane Cricket League server!')
})

app.listen(8080, () => {
      console.log('Server listening on port 8080')
});