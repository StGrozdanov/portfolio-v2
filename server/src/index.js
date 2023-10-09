import express from 'express';
import dotenv from 'dotenv';

import log from './utils/logger.js';
import logMiddleware from './middlewares/logMiddleware.js';
import corsMiddleware from './middlewares/corsMiddleware.js';
import userController from './controllers/userController.js';
import s3Controller from './controllers/s3Controller.js';
import authController from './controllers/authController.js';
import analyticsController from './controllers/analyticsController.js';
import db from './database/database.js';
import { initAdminUser } from './services/authService.js';

dotenv.config();

db
    .getConnection()
    .then(connection => {
        log.info('Successfully connected to MariaDB server');
        connection.release();
    })
    .catch(err => {
        log.error(`Error on connecting to MariaDB server - ${err}`);
    });

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logMiddleware);
app.use(corsMiddleware);
app.use('/users', userController);
app.use(analyticsController);
app.use('/cv', s3Controller);
app.use(authController)
app.use('*', (request, response) => {
    response.status(404).json({ "error": "resource not found" });
});

initAdminUser().then(log.info('Successfully initialized admin user')).catch(err => log.error(err));

app.listen(process.env.SERVER_PORT, () => log.info(`Server started on port ${process.env.SERVER_PORT}`));