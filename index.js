import express from 'express';
import Home from './src/Home/index.js';

const app = express();
const port = 3000;

app.get('/', Home);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});