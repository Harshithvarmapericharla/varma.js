import express from 'express';
import studentRouter from '../routes/student.routes';

const routes = express.Router();

routes.use('/students', studentRouter);

export default routes;
