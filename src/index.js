const express = require("express");
const { ServerConfig } = require("./config");
const { EmailService } = require('./services/');
// const apiRoutes = require("./routes");
// const errorHandler = require("./utils/error.handler");

const app = express();

/**
 * adding body parser middlewares
 */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());


//last middleware for handling errors
// app.use(errorHandler);

app.listen(ServerConfig.PORT, () => {
    console.log(`Started server at PORT: ${ServerConfig.PORT}`);

    // EmailService.sendBasicEmail(
    //     'manojkumar.social89@gmail.com',
    //     'im.dangi.official@gmail.com',
    //     'This is a testing email',
    //     'Hey, how are you, I hope you like the support'
    // );
})