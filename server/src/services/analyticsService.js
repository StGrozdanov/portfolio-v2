import db from '../database/database.js';
import * as queries from '../database/queries.js';
import moment from 'moment';

const analyticTypes = {
    today: () => {
        const date = moment().utc(true).format('YYYY-MM-DD');
        return db.query(queries.getAnalyticsForTheDateQuery, { date })
    },
    yesterday: () => {
        const date = moment().subtract(1, 'days').utc(true).format('YYYY-MM-DD');
        return db.query(queries.getAnalyticsForTheDateQuery, { date })
    },
    last7days: () => {
        const startDate = moment().subtract(7, 'days').utc(true).format('YYYY-MM-DD');
        const endDate = moment().utc(true).format('YYYY-MM-DD');
        return db.query(queries.getAnalyticsBetweenTheDatesQuery, { startDate, endDate })
    }
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