import db from '../database/database.js';
import * as queries from '../database/queries.js';

export const getAllUsersInfo = () => db.query(queries.getFullUserInfoQuery);

export const getBaseUserInfo = () => db.query(queries.getBaseUserInfoQuery);

export const getUserJobsAndProjectsInfo = () => db.query(queries.getUserJobsAndProjectsQuery);

export const getUserSkillsInfo = () => db.query(queries.getUserSkillsQuery);

export const getUserSocialMediaInfo = () => db.query(queries.getUserSocialMediaQuery);