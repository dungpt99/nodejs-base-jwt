'use strict';

const bcrypt = require('bcryptjs');
import {Sequelize,QueryInterface} from "sequelize";

module.exports = {
  up: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Administrator',
        email: 'admin@caerux.cms',
        password: await bcrypt.hash('00000000', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'User',
        email: 'user@caerux.cms',
        password: await bcrypt.hash('00000000', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    await queryInterface.bulkDelete('users', {});
  }
};
