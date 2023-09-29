const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (request, response) => {
    response.send('Hello');
});

app.listen(process.env.SERVER_PORT, () => console.log(`Server started on port ${process.env.SERVER_PORT}`));