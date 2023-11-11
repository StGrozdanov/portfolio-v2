import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export default (request, response, next) => {
    const token = request.headers['x-authorization'];

    if (!token) {
        return response.status(403).json({ "errors": "Unauthorized" });
    }

    jwt.verify(token, process.env.JWT_SECRET, function (err, decodedPayload) {
        if (err) {
            return response.status(403).json({ "errors": "Invalid token" });
        }

        next();
    });
}