'use strict';

const { Enums } = require('../utils/common');
const { PENDING, SUCCESS, FAILED } = Enums.REMINDER_STATUS;


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.addConstraint('NotificationTickets', {
      type: 'check',
      fields: ['status'],
      name: 'CK_NotificationTickets_Status',
      where: {
        status: [PENDING, SUCCESS, FAILED]
      }
    });

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    queryInterface.removeConstraint('CK_NotificationTickets_Status');
  }
};
