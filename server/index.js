import express from 'express';
import dotenv from 'dotenv';

import log from './utils/logger.js';
import logMiddleware from './middlewares/logMiddleware.js';
import corsMiddleware from './middlewares/corsMiddleware.js';
import homeController from './controllers/homeController.js';

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logMiddleware);
app.use(corsMiddleware);
app.use(homeController)

app.listen(process.env.SERVER_PORT, () => log.info(`Server started on port ${process.env.SERVER_PORT}`));