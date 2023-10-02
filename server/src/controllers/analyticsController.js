import express from 'express';
import * as analyticsService from '../services/analyticsService.js';
import * as validator from '../utils/validator.js';
import log from '../utils/logger.js';

const router = express.Router();

router.put('/analytics', (request, response) => {
    const validationResult = validator.analyticsParamsAreValid(request.body);

    if (validationResult.valid === false) {
        return response.status(400).json({ 'errors': validationResult.errors });
    }

    analyticsService
        .addNewRecord(request.body)
        .then(response.status(200).json({ 'status': 'success' }))
        .catch((err) => {
            log.error(err)
            response.status(500).json({ "errors": "Internal server error" });
        });
});

export default router;