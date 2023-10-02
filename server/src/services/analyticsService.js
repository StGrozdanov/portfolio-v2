import db from '../database/database.js';
import * as queries from '../database/queries.js';
import moment from 'moment';

export const addNewRecord = (input) => {
    const currentDate = moment().utc(true).format('YYYY-MM-DD HH:mm:ss');
    input.date = currentDate;

    return db.query(queries.insertVistiationsQuery, {...input})
}