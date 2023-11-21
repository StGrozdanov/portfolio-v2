import express from 'express';
import * as s3 from '../services/s3Service.js';
import log from '../utils/logger.js';
import { upload } from '../utils/upload.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/upload-cv', authMiddleware, upload.single('file'), (request, response) => {
    s3.uploadCV(request.file)
        .then(response.status(201).json({ 'status': 'success' }))
        .catch((err) => log.error(err));
});

router.patch('/upload-project-image', authMiddleware, upload.single('image'), (request, response) => {
    s3.uploadProjectImage(request.file, request.body.targetResourceTitle)
        .then((result) => response.status(201).json(result))
        .catch((err) => log.error(err));
});

router.patch('/upload-job-image', authMiddleware, upload.single('image'), (request, response) => {
    s3.uploadJobImage(request.file, request.body.targetResourceTitle)
        .then((result) => response.status(201).json(result))
        .catch((err) => log.error(err));
});

router.post('/add-partners', authMiddleware, upload.single('image'), (request, response) => {
    s3.uploadPartnerLogo(request.file)
        .then((result) => response.status(201).json(result))
        .catch((err) => log.error(err));
});

router.delete('/partners', authMiddleware, (request, response) => {
    s3.deletePartnerLogo(request.body.imageURL)
        .then((result) => {
            log.info(result);
            return response.status(201).json({ 'status': 'success' })
        })
        .catch((err) => log.error(err));
});

router.post('/add-carousel', authMiddleware, upload.single('image'), (request, response) => {
    s3.uploadCarouselImage(request.file)
        .then((result) => response.status(201).json(result))
        .catch((err) => log.error(err));
});

export default router;