import express from 'express';
import * as authService from '../services/authService.js';
import * as validator from '../utils/validator.js';
import log from '../utils/logger.js';

const router = express.Router();

router.post('/login', (request, response) => {
    if (validator.stringIsNotEmpty(request.body.username) && validator.stringIsNotEmpty(request.body.password)) {
        authService
            .login(request.body)
            .then(result => response.status(200).json(result))
            .catch((err) => {
                if (err.includes('Passwords should match') || err.includes('Invalid user.')) {
                    return response.status(400).json({"errors": "invalid credentials"});
                }
                log.error(err)
                response.status(500).json({ "errors": "Internal server error" });
            });
        return
    }
    return response.status(400).json({ 'errors': 'username and password are required' });
});

export default router;