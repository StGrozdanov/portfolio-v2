import db from '../database/database.js';
import * as queries from '../database/queries.js';

export const getAllUsersInfo = () => db.query(queries.getFullUserInfoQuery);

export const getBaseUserInfo = () => db.query(queries.getBaseUserInfoQuery);

export const getUserJobsAndProjectsInfo = () => db.query(queries.getUserJobsAndProjectsQuery);

export const getUserSkillsInfo = () => db.query(queries.getUserSkillsQuery);

export const getUserSocialMediaInfo = () => db.query(queries.getUserSocialMediaQuery);

export const updateBaseUserInfo = async (input) => {
    const result = await db.query(queries.updateBaseUserInfoQuery, { ...input })
    if (result.affectedRows > 0) {
        return getBaseUserInfo()
    }
    return Promise.reject('unsuccessfull update attempt');
};

export const updateUserSkills = async (input) => {
    const result = await db.query(queries.updateUserSkillsQuery, { ...input })
    if (result.affectedRows > 0) {
        return getUserSkillsInfo()
    }
    return Promise.reject('unsuccessfull update attempt');
}

export const updateUserJobsAndProjectsInfo = async (input) => {
    const jsonJobs = JSON.stringify(input.jobs);
    const jsonProjects = JSON.stringify(input.projects);

    const result = await db.query(queries.updateUserJobsAndProjectsQuery, { id: input.id, jobs: jsonJobs, projects: jsonProjects })
    if (result.affectedRows > 0) {
        return getUserJobsAndProjectsInfo()
    }
    return Promise.reject('unsuccessfull update attempt');
}

export const updateUserSocials = async (input) => {
    const result = await db.query(queries.updateUserSocials, { id: input.id, ...input.socialMedia });
    if (result.affectedRows > 0) {
        return getUserSocialMediaInfo()
    }
    return Promise.reject('unsuccessfull update attempt');
}