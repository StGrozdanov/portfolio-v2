import AWS from 'aws-sdk';
import dotenv from 'dotenv';

import db from '../database/database.js';
import * as queries from '../database/queries.js';

dotenv.config();

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

export const upload = (file) => {
    return s3.upload({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: process.env.S3_BUCKET_KEY,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: 'public-read'
    })
        .promise()
        .then(result => {
            const URL = result.Location;
            return db.query(queries.updateCVQuery, { URL })
        })
        .catch(err => Promise.reject(err));
}