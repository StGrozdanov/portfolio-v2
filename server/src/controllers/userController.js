import express from 'express';
import * as userService from '../services/userService.js';
import * as validator from '../utils/validator.js';
import log from '../utils/logger.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/full-info', (request, response) => {
    userService
        .getAllUsersInfo()
        .then(results => response.status(200).json(results))
        .catch((err) => {
            log.error(err)
            response.status(500).json({ "errors": "Internal server error" });
        });
});

router.get('/basic-info', (request, response) => {
    userService
        .getBaseUserInfo()
        .then(results => response.status(200).json(results))
        .catch((err) => {
            log.error(err)
            response.status(500).json({ "errors": "Internal server error" });
        });
});

router.put('/basic-info', authMiddleware, async (request, response) => {
    const validationStatus = await validator.baseUserInfoInputIsValid(request.body)

    if (!validationStatus.valid) {
        return response.status(400).json({ 'errors': validationStatus.errors });
    }

    userService
        .updateBaseUserInfo(request.body)
        .then(results => response.status(200).json(results))
        .catch((err) => {
            log.error(err)
            response.status(500).json({ "errors": "Internal server error" });
        });
});

router.get('/user-skills', (request, response) => {
    userService
        .getUserSkillsInfo()
        .then(results => response.status(200).json(results))
        .catch((err) => {
            log.error(err)
            response.status(500).json({ "errors": "Internal server error" });
        });
});

router.put('/user-skills', authMiddleware, async (request, response) => {
    const validationStatus = await validator.userSkillsInputIsValid(request.body)

    if (!validationStatus.valid) {
        return response.status(400).json({ 'errors': validationStatus.errors });
    }

    userService
        .updateUserSkills(request.body)
        .then(results => response.status(200).json(results))
        .catch((err) => {
            log.error(err)
            response.status(500).json({ "errors": "Internal server error" });
        });
});

router.get('/user-jobs-and-projects', (request, response) => {
    userService
        .getUserJobsAndProjectsInfo()
        .then(results => response.status(200).json(results))
        .catch((err) => {
            log.error(err)
            response.status(500).json({ "errors": "Internal server error" });
        });
});

router.put('/user-jobs-and-projects', authMiddleware, async (request, response) => {
    const validationStatus = await validator.userJobsAndProjectsInputIsValid(request.body);

    if (!validationStatus.valid) {
        return response.status(400).json({ 'errors': validationStatus.errors });
    }

    userService
        .updateUserJobsAndProjectsInfo(request.body)
        .then(results => response.status(200).json(results))
        .catch((err) => {
            log.error(err)
            response.status(500).json({ "errors": "Internal server error" });
        });
});

router.get('/user-socials', (request, response) => {
    userService
        .getUserSocialMediaInfo()
        .then(results => response.status(200).json(results))
        .catch((err) => {
            log.error(err)
            response.status(500).json({ "errors": "Internal server error" });
        });
});

router.put('/user-socials', authMiddleware, async (request, response) => {
    const validationStatus = await validator.userSocialMediaIsValid(request.body);

    if (!validationStatus.valid) {
        return response.status(400).json({ 'errors': validationStatus.errors });
    }

    userService
        .updateUserSocials(request.body)
        .then(results => response.status(200).json(results))
        .catch((err) => {
            log.error(err)
            response.status(500).json({ "errors": "Internal server error" });
        });
});

export default router;