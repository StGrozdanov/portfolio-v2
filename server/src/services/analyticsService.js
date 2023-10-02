import db from '../database/database.js';
import * as queries from '../database/queries.js';
import moment from 'moment';

const analyticTypes = {
    today: () => {
        const date = moment().utc(true).format('YYYY-MM-DD');
        return db.query(queries.getAnalyticsForTheDayQuery, { date })
    },
}

export const addNewRecord = (input) => {
    const currentDateTime = moment().utc(true).format('YYYY-MM-DD HH:mm:ss');
    input.date = currentDateTime;

    return db.query(queries.insertVistiationsQuery, { ...input })
}

export const getAnalytics = (queryParam) => {
    const analyticKeys = Object.keys(analyticTypes);

    if (analyticKeys.includes(queryParam)) {
        return analyticTypes[queryParam]();
    } 

    return Promise.reject(`Unsupported query param - ${queryParam}`);
}