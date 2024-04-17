
const { StatusCodes } = require('http-status-codes');
const { AppError } = require('../errors');
const { Enums } = require('../utils/common');


function validateCreateNotification(req, res, next) {

    if (!req.body.subject || !req.body.content || !req.body.recepientEmail || !req.body.notificationTime) {
        let details = new Array();

        if (!req.body.subject) {
            details.push("subject is not found in incomming request in correct form")
        }

        if (!req.body.content) {
            details.push("content is not found in incomming request in correct form")
        }

        if (!req.body.recepientEmail) {
            details.push("recepientEmail is not found in incomming request in correct form")
        }

        if (!req.body.notificationTime) {
            details.push("notificationTime is not found in incomming request in correct form")
        }

        throw new AppError(StatusCodes.BAD_REQUEST, "Please enter valid details", details);

    }

    req.body.status = Enums.REMINDER_STATUS.PENDING;

    next();
}

module.exports = {
    validateCreateNotification
}