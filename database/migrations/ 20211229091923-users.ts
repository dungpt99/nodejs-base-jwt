"use strict";

import { Sequelize, QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    await queryInterface.createTable(
      "users",
      {
        id: {
          type: DataTypes.INTEGER(),
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING(64),
          allowNull: true,
        },
        email: {
          type: DataTypes.STRING(191),
          defaultValue: 0,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING(191),
          defaultValue: 0,
          allowNull: false,
        },
        created_at: {
          type: "TIMESTAMP",
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updated_at: {
          type: "TIMESTAMP",
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      },
      {
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci",
      }
    );
  },

  down: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    await queryInterface.dropTable("users");
  },
};
