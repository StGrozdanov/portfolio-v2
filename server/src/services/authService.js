import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import db from '../database/database.js';
import * as queries from '../database/queries.js'

dotenv.config();

export const initAdminUser = async () => {
    bcrypt
        .hash(process.env.ADMIN_PASSWORD, Number(process.env.SALT_ROUNDS))
        .then(function (hashedPassword) {
            return db.query(queries.updateUserPasswordQuery, { password: hashedPassword })
        });
}

export const login = async (userData) => {
    const user = await db.query(queries.getUserFromDBQuery, { ...userData });
    if (user.length > 0) {
        const passwordsMatch = await bcrypt.compare(userData.password, user[0].password);

        if (!passwordsMatch) {
            return Promise.reject('Passwords should match!');
        }

        const payload = {
            username: user[0].username,
            id: user[0].id,
        }

        return new Promise((resolve, reject) => {
            jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
                if (err) {
                    reject(err);
                }
                resolve({ token });
            });
        });
    }
}