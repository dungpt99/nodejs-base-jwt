"use strict";

import { DataTypes, QueryInterface, Sequelize } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await queryInterface.createTable("tasks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      user_id: {
        type: DataTypes.INTEGER(),
        defaultValue: false,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      created_At: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_At: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await queryInterface.dropTable("tasks");
  },
};
