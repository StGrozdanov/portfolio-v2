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
    },
    last30days: () => {
        const startDate = moment().subtract(1, 'months').utc(true).format('YYYY-MM-DD');
        const endDate = moment().utc(true).format('YYYY-MM-DD');
        return db.query(queries.getAnalyticsBetweenTheDatesQuery, { startDate, endDate })
    },
    last90days: () => {
        const startDate = moment().subtract(3, 'months').utc(true).format('YYYY-MM-DD');
        const endDate = moment().utc(true).format('YYYY-MM-DD');
        return db.query(queries.getAnalyticsBetweenTheDatesQuery, { startDate, endDate })
    },
    lastYear: () => {
        const startDate = moment().subtract(1, 'years').utc(true).format('YYYY-MM-DD');
        const endDate = moment().utc(true).format('YYYY-MM-DD');
        return db.query(queries.getAnalyticsBetweenTheDatesQuery, { startDate, endDate })
    },
    quarter: (value) => {
        const startDate = moment().quarter(value).startOf('quarter').utc(true).format('YYYY-MM-DD');
        const endDate = moment().quarter(value).endOf('quarter').utc(true).format('YYYY-MM-DD');
        return db.query(queries.getAnalyticsBetweenTheDatesQuery, { startDate, endDate })
    },
}

export const addNewRecord = (input) => {
    const currentDateTime = moment().utc(true).format('YYYY-MM-DD HH:mm:ss');
    input.date = currentDateTime;

    return db.query(queries.insertVistiationsQuery, { ...input })
}

export const getAnalytics = async (queryParam) => {
    const analyticKeys = Object.keys(analyticTypes);
    const queryKey = Object.keys(queryParam)[0];

    let result;

    if (analyticKeys.includes(queryKey)) {
        if (queryKey === 'quarter') {
            const quarterNumber = queryParam[queryKey];
            result = await analyticTypes['quarter'](quarterNumber);
        } else {
            result = await analyticTypes[queryKey]();
        }

        const { mostPopularCountry, mostPopularDevice } = extractMostPopularCountryAndDeviceFromResults(result);
        const resultsOutput = sanitizeResultsOutput(result);

        return {
            results: resultsOutput,
            totalVisitationsCount: resultsOutput.length,
            mostPopularCountry,
            mostPopularDevice,
        }
    }
    return Promise.reject(`Unsupported query param - ${queryKey}`);
}

export const getVisitationsForTheDay = () => {
    const date = moment().utc(true).format('YYYY-MM-DD');
    return db.query(queries.getTodayVisitationsCountQuery, { date });
} 

const extractMostPopularCountryAndDeviceFromResults = (results) => {
    let mostPopularCountry;
    let mostPopularDevice;

    if (results.length > 0) {
        mostPopularCountry = results[0].most_popular_country;
        mostPopularDevice = results[0].most_popular_device;
    }

    return { mostPopularCountry, mostPopularDevice }
}

const sanitizeResultsOutput = (result) => {
    return result.map(analytics => {
        return {
            date: analytics.date,
            deviceType: analytics.device_type,
            originCountry: analytics.origin_country,
            ipAddress: analytics.ip_address
        }
    });
}