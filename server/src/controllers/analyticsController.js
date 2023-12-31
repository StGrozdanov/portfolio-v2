import express from 'express';
import * as analyticsService from '../services/analyticsService.js';
import * as validator from '../utils/validator.js';
import log from '../utils/logger.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/analytics', (request, response) => {
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

router.get('/analytics', authMiddleware, (request, response) => {
    const queryParams = Object.keys(request.query);
    if (queryParams.length !== 1) {
        return response.status(400).json({ 'errors': 'Exactly 1 query param is supported per request' });
    }

    analyticsService
        .getAnalytics(request.query)
        .then((result) => response.status(200).json(result))
        .catch((err) => {
            if (err.includes('Unsupported query param')) {
                return response.status(400).json({"errors": `${err}`})
            }
            log.error(err)
            response.status(500).json({ "errors": "Internal server error" });
        });
});

router.get('/analytics/count', authMiddleware, (request, response) => {
    analyticsService
        .getVisitationsForTheDay()
        .then((result) => response.status(200).json(result))
        .catch((err) => {
            log.error(err);
            response.status(500).json({ "errors": "Internal server error" });
        });
});

export default router;