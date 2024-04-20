
const amqplib = require('amqplib');
const { QUEUE_NAME, RABBITMQ_URL, EMAIL_ID } = require('./server.config');
const { EmailService } = require('../services');

/**
 * 
 */
let channel, connection;

async function connectQueue() {
    try {

        connection = await amqplib.connect(RABBITMQ_URL);
        channel = await connection.createChannel();
        await channel.assertQueue(QUEUE_NAME);

    } catch (error) {
        console.log(error);
    }
}

async function consumeData() {

    try {

        channel.consume(QUEUE_NAME, async (data) => {
            const object = JSON.parse(`${Buffer.from(data.content)}`);
            console.log(object);

            await EmailService.sendBasicEmail(EMAIL_ID, object.recepientEmail, object.subject, object.content);

            channel.ack(data);
        });

    } catch (error) {
        console.log(error);
    }

}


module.exports = {
    connectQueue,
    consumeData
}
