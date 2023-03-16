'use strict';

import {Sequelize,QueryInterface, DataTypes} from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable(
      'role_user',
      {
        id: {
          type: DataTypes.INTEGER(),
          primaryKey: true,
          autoIncrement: true
        },
        user_id: {
          type: DataTypes.INTEGER(),
          defaultValue: false,
          allowNull: false,
          references: {
            model: 'users',
            key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        },
        role_id: {
          type: DataTypes.INTEGER(),
          defaultValue: false,
          allowNull: false,
          references: {
            model: 'roles',
            key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        }
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
      }
    );
  },

  down: (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    return queryInterface.dropTable('role_user');
  }
};
