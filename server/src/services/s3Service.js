import AWS from 'aws-sdk';
import dotenv from 'dotenv';
import { v4 as uuid } from 'uuid';

import db from '../database/database.js';
import * as queries from '../database/queries.js';

dotenv.config();

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

export const uploadCV = async (cv) => {
    try {
        const fileName = 'file';
        const file = await uploadFileToS3(cv, fileName)
        const URL = file.Location;
        await db.query(queries.updateCVQuery, { URL });
        return Promise.resolve();
    } catch (err) {
        return Promise.reject(err);
    }
}

export const uploadProjectImage = async (image, targetResourceTitle) => {
    try {
        const fileName = `project-${uuid()}`;
        const file = await uploadFileToS3(image, fileName)
        const URL = file.Location;

        await db.query(queries.updateProjectImageQuery, { img_url: URL, project_name: targetResourceTitle });

        return db.query(queries.getProjectImages, { project_name: targetResourceTitle });
    } catch (err) {
        return Promise.reject(err);
    }
}

export const uploadJobImage = async (image, targetResourceTitle) => {
    try {
        const fileName = `job-${uuid()}`;
        const file = await uploadFileToS3(image, fileName)
        const URL = file.Location;

        await db.query(queries.updateJobImageQuery, { img_url: URL, project_name: targetResourceTitle });

        return db.query(queries.getJobsImages, { company_name: targetResourceTitle });
    } catch (err) {
        return Promise.reject(err);
    }
}

export const uploadPartnerLogo = async (image) => {
    try {
        const fileName = `partner-${uuid()}`;
        const file = await uploadFileToS3(image, fileName)
        const URL = file.Location;

        await db.query(queries.uploadPartnerLogoQuery, { img_url: URL });

        return db.query(queries.getPartnerLogos);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const uploadCarouselImage = async (image) => {
    try {
        const fileName = `carousel-${uuid()}`;
        const file = await uploadFileToS3(image, fileName)
        const URL = file.Location;

        await db.query(queries.uploadCarouselQuery, { img_url: URL });

        return db.query(queries.getCarouselImages);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const deleteImage = async (imageURL) => {
    try {
        const fileName = imageURL.split('https://personal-portfolio-web.s3.eu-central-1.amazonaws.com/portfolio/')[1];
        await deleteFileFromS3(fileName);
        return Promise.resolve(`image - ${fileName} was successfully deleted from S3 bucket.`);
    } catch (err) {
        return Promise.reject(err);
    }
}

const uploadFileToS3 = (file, fileName) => {
    return s3.upload({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: process.env.S3_BUCKET_KEY + `/${fileName}`,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: 'public-read'
    })
        .promise();
}

const deleteFileFromS3 = (fileName) => {
    return s3.deleteObject({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: process.env.S3_BUCKET_KEY + `/${fileName}`,
    })
        .promise();
}