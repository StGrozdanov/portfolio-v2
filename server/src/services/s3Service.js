import AWS from 'aws-sdk';
import dotenv from 'dotenv';

import db from '../database/database.js';
import * as queries from '../database/queries.js';

dotenv.config();

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

export const uploadCV = (cv) => {
    uploadFileToS3(cv)
        .then(result => {
            const URL = result.Location;
            return db.query(queries.updateCVQuery, { URL })
        })
        .catch(err => Promise.reject(err));
}

export const uploadProjectImage = (image, targetResourceTitle) => {
    uploadFileToS3(image)
        .then(result => {
            const URL = result.Location;
            return db.query(queries.updateProjectImageQuery, { img_url: URL, project_name: targetResourceTitle })
        })
        .catch(err => Promise.reject(err));
}

export const uploadJobImage = (image, targetResourceTitle) => {
    uploadFileToS3(image)
        .then(result => {
            const URL = result.Location;
            return db.query(queries.updateJobImageQuery, { img_url: URL, project_name: targetResourceTitle })
        })
        .catch(err => Promise.reject(err));
}

export const uploadPartnerLogo = (image) => {
    uploadFileToS3(image)
        .then(result => {
            const URL = result.Location;
            return db.query(queries.uploadPartnerLogoQuery, { img_url: URL })
        })
        .catch(err => Promise.reject(err));
}

export const uploadCarouselImage = (image) => {
    uploadFileToS3(image)
        .then(result => {
            const URL = result.Location;
            return db.query(queries.uploadCarouselQuery, { img_url: URL })
        })
        .catch(err => Promise.reject(err));
}

const uploadFileToS3 = (file) => {
    return s3.upload({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: process.env.S3_BUCKET_KEY,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: 'public-read'
    })
        .promise()
}