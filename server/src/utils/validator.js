import database from "../database/database.js";
import { userExistsQuery } from "../database/queries.js";

export async function baseUserInfoInputIsValid(baseInfo) {
    const validationResponse = {
        valid: true,
        errors: [],
    }

    if (emailIsValid(baseInfo.email) === false) {
        validationResponse.errors.push('Email is invalid');
    }
    if (urlIsValid(baseInfo.cvLink) === false) {
        validationResponse.errors.push('CV URL is invalid');
    }
    if (stringIsNotEmpty(baseInfo.aboutMe) === false) {
        validationResponse.errors.push('About me section is empty');
    }
    if (baseInfo.partners.length === 0) {
        validationResponse.errors.push('Partners section is empty');
    }
    if (baseInfo.carousel.length === 0) {
        validationResponse.errors.push('Carousel section is empty');
    }
    if (userIdIsValid(baseInfo.id) === false) {
        validationResponse.errors.push('Invalid User Id');
    } else if (await userExists(baseInfo.id) === false) {
        validationResponse.errors.push('User not found');
    }
    if (validationResponse.errors.length > 0) {
        validationResponse.valid = false;
    }

    return validationResponse;
}

export async function userSkillsInputIsValid(userSkills) {
    const validationResponse = {
        valid: true,
        errors: [],
    }

    if (userSkills.techStack === undefined || userSkills.techStack.length === 0) {
        validationResponse.errors.push('Tech stack is empty or not present');
    }
    if (userSkills.softSkills === undefined || userSkills.softSkills.length === 0) {
        validationResponse.errors.push('Soft skills is empty or not present');
    }
    if (userSkills.hobbies === undefined || userSkills.hobbies.length === 0) {
        validationResponse.errors.push('Hobbies is empty or not present');
    }
    if (userIdIsValid(userSkills.id) === false) {
        validationResponse.errors.push('Invalid User Id');
    } else if (await userExists(userSkills.id) === false) {
        validationResponse.errors.push('User not found');
    }
    if (validationResponse.errors.length > 0) {
        validationResponse.valid = false;
    }

    return validationResponse;
}

export async function userJobsAndProjectsInputIsValid(input) {
    const validationResponse = {
        valid: true,
        errors: [],
    }

    if (userIdIsValid(input.id) === false) {
        validationResponse.errors.push('Invalid User Id');
    } else if (await userExists(input.id) === false) {
        validationResponse.errors.push('User not found');
    }

    if (input.jobs === undefined || input.jobs.length === 0) {
        validationResponse.errors.push('Jobs property is empty or not present');
    }
    if (input.projects === undefined || input.projects.length === 0) {
        validationResponse.errors.push('Projects property is empty or not present');
    }
    if (validationResponse.errors.length > 0) {
        validationResponse.valid = false;
    }

    return validationResponse;
}

export async function userSocialMediaIsValid(input) {
    const validationResponse = {
        valid: true,
        errors: [],
    }

    if (userIdIsValid(input.id) === false) {
        validationResponse.errors.push('Invalid User Id');
    } else if (await userExists(input.id) === false) {
        validationResponse.errors.push('User not found');
    }

    if (stringIsNotEmpty(input.socialMedia.facebook) === false) {
        validationResponse.errors.push('Facebook property is empty or not present');
    }
    if (urlIsValid(input.socialMedia.linkedIn) === false) {
        validationResponse.errors.push('Linkedin property is not valid URL format');
    }
    if (urlIsValid(input.socialMedia.github) === false) {
        validationResponse.errors.push('Github property is not valid URL format');
    }
    if (emailIsValid(input.socialMedia.email) === false) {
        validationResponse.errors.push('Email property is empty or not present');
    }
    if (validationResponse.errors.length > 0) {
        validationResponse.valid = false;
    }

    return validationResponse;
}

export function analyticsParamsAreValid(input) {
    const validationResponse = {
        valid: true,
        errors: [],
    }

    if (stringIsNotEmpty(input.ipAddress) === false) {
        validationResponse.errors.push('IP Address is empty or not present');
    }
    if (stringIsNotEmpty(input.deviceType) === false) {
        validationResponse.errors.push('Device type is empty or not present');
    }
    if (stringIsNotEmpty(input.originCountry) === false) {
        validationResponse.errors.push('Origin country is empty or not present');
    }
    if (validationResponse.errors.length > 0) {
        validationResponse.valid = false;
    }

    return validationResponse;
}

export function emailIsValid(email) {
    const emailRegex = /(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi;
    return emailRegex.test(email);
}

export function urlIsValid(url) {
    const urlRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i
    return urlRegex.test(url);
}

export function stringIsNotEmpty(input) {
    return input?.trim().length > 0;
}

export function userIdIsValid(id) {
    return id > 0;
}

export async function userExists(userId) {
    const user = await database.query(userExistsQuery, { id: userId });
    return user.length > 0;
}