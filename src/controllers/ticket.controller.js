const { EmailService } = require('../services/');

const { StatusCodes } = require("http-status-codes");
const { SuccessResponse } = require('../utils/common/');

const create = async (req, res, next) => {

    try {
        const response = await EmailService.createNotification({
            subject: req.body.subject,
            content: req.body.content,
            recepientEmail: req.body.recepientEmail,
            notificationTime: req.body.notificationTime,
            status: req.body.status
        });

        SuccessResponse.data = response;
        SuccessResponse.statusCode = StatusCodes.CREATED;
        SuccessResponse.message = "Successfully registered an email reminder";

        return res
            .status(SuccessResponse.statusCode)
            .json(SuccessResponse);

    } catch (error) {
        next(error);
    }
}

module.exports = {
    create
}