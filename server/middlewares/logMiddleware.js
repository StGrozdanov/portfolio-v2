const logMiddleware = require('express-winston');

const log = require('../utils/logger');

module.exports = logMiddleware.logger({
    winstonInstance: log,
    meta: false,
    msg: "method: {{req.method}} endpoint: {{req.url}} statusCode: {{res.statusCode.substring(5,8)}} responseTime: {{res.responseTime}}ms host: {{req.hostname}}",
    colorize: true,
    statusLevels: true,
});