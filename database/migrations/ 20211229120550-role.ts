'use strict';

import {Sequelize,QueryInterface, DataTypes} from "sequelize";

module.exports = {
  up: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    return queryInterface.createTable(
      'roles',
      {
        id: {
          type: DataTypes.INTEGER(),
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: DataTypes.STRING(255),
          defaultValue: false,
          allowNull: false
        },
        display_name: {
          type: DataTypes.STRING(255),
          defaultValue: false,
          allowNull: false
        },
        descriptions: {
          type: DataTypes.STRING(255),
          defaultValue: null
        },
        created_at: {
          type: 'TIMESTAMP',
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updated_at: {
          type: 'TIMESTAMP',
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        }
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
      }
    );
  },

  down: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    return queryInterface.dropTable('roles');
  }
};
