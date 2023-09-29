const router = require('express').Router();

router.get('/', (request, response) => {
    response.send('Hi');
});

module.exports = router;