import express from 'express';
import { connection } from './postgresql.js';

const app = express();
const port = 3000;

app.use(express.json());


connection().then(() => {
  
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}).catch(error => {
  console.error('Failed to connect to the database:', error);
});
