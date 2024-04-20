
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    EMAIL_ID: process.env.EMAIL_ID,
    EMAIL_PASS: process.env.EMAIL_PASS,
    RABBITMQ_URL: process.env.RABBITMQ_URL,
    QUEUE_NAME: process.env.QUEUE_NAME
};