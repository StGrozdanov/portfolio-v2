import express from 'express';
import * as s3 from '../services/s3Service.js';
import log from '../utils/logger.js';
import { upload } from '../utils/upload.js';

const router = express.Router();

router.post('/upload', upload.single('file'), (request, response) => {
    s3.upload(request.file)
        .then(response.status(201).json({ 'status': 'success' }))
        .catch((err) => log.error(err));
});

export default router;