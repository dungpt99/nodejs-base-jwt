'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
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

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('users', null, {});
  }
};
