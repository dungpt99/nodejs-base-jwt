'use strict';

import {Sequelize,QueryInterface} from "sequelize";

module.exports = {
  up: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
   return queryInterface.bulkInsert('role_user',
      [{
        user_id: 1,
        role_id: 1
      },
      {
        user_id: 2,
        role_id: 2
      }]);
  },

  down: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    return queryInterface.bulkDelete('role_user', {});
  }
};
