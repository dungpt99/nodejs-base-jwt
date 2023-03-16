'use strict';

import {Sequelize,QueryInterface} from "sequelize";

module.exports = {
  up: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    return queryInterface.bulkInsert('roles',
      [{
        name: 'admin',
        display_name: 'Administrator'
      },
      {
        name: 'user',
        display_name: 'User'
      }]);
  },

  down: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    return queryInterface.bulkDelete('roles', {});
  }
};
