const express = require("express");
const { CRON } = require('./utils/helpers/');
const { ServerConfig } = require("./config");
const { IdentityReset } = require("./utils/helpers/");
const { sequelize } = require('./models');


const errorHandler = require("./utils/error.handler");
const apiRoutes = require("./routes/ticket.routes");


const app = express();

/**
 * adding body parser middlewares
 */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

/**
 * api/tickets/
 */
app.use('/api/tickets', apiRoutes);


// last middleware for handling errors
app.use(errorHandler);

app.listen(ServerConfig.PORT, () => {
    console.log(`Started server at PORT: ${ServerConfig.PORT}`);

    /**
    * Resetting Identity column
    */
    sequelize.authenticate()
        .then(() => {
            return IdentityReset();
        })
        .then(() => {
            console.log("Succes: Identity seed reset successfull");
        })
        .catch(error => {
            console.log('Identity seed reset -- failed -- for all models');
            console.error('Database is not connected:', error);
        });

    CRON();
})