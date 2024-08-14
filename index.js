import express from 'express';

import { listener } from './.output/server/index.mjs';

const app = express();

app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});

app.use(express.static('./.output/public'));
app.use(listener);

app.listen(8080, '0.0.0.0', () => {
  console.log('Server listening on http://0.0.0.0:8080');
})