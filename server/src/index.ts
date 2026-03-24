import express from 'express';

const app = express();

console.log(app);

app.listen(8080, () => {
      console.log('Server listening on port 8080')
});