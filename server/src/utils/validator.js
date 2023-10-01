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
    if (stringIsEmpty(baseInfo.aboutMe) === false) {
        validationResponse.errors.push('About me section is empty');
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

export function emailIsValid(email) {
    const emailRegex = /(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi;
    return emailRegex.test(email);
}

export function urlIsValid(url) {
    const urlRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i
    return urlRegex.test(url);
}

export function stringIsEmpty(input) {
    return input?.trim().length > 0;
}

export function userIdIsValid(id) {
    return id > 0;
}

export async function userExists(userId) {
    const user = await database.query(userExistsQuery, { id: userId });
    return user.length > 0;
}