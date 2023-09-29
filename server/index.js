const express = require('express');
require('dotenv').config();

const log = require('./utils/logger');
const logMiddleware = require('./middlewares/logMiddleware');
const corsMiddleware = require('./middlewares/corsMiddleware');
const homeController = require('./controllers/homeController');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logMiddleware);
app.use(corsMiddleware);
app.use(homeController)

app.listen(process.env.SERVER_PORT, () => log.info(`Server started on port ${process.env.SERVER_PORT}`));