import db from '../database/database.js';
import * as queries from '../database/queries.js';

export const getAllUsersInfo = () => db.query(queries.getFullUserInfoQuery);

export const getBaseUserInfo = () => db.query(queries.getBaseUserInfoQuery);