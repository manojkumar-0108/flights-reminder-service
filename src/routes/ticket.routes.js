const express = require('express');
const { TicketController, PingController } = require('../controllers');
const { TicketMiddlewares } = require('../middlewares');

const ticketRouter = express.Router();

/**
 * /api/tickets/ping
 */
ticketRouter.get('/ping', PingController.pingCheck);


/**
 * POST Request
 * 
 * /api/tickets/
 */
ticketRouter.post('/',
    TicketMiddlewares.validateCreateNotification
    , TicketController.create);

module.exports = ticketRouter;