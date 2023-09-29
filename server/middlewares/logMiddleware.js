import expressWinston from 'express-winston';
import logger from '../utils/logger.js';

export default expressWinston.logger({
    winstonInstance: logger,
    meta: false,
    msg: "method: {{req.method}} endpoint: {{req.url}} statusCode: {{res.statusCode.substring(5,8)}} responseTime: {{res.responseTime}}ms host: {{req.hostname}}",
    colorize: true,
    statusLevels: true,
});