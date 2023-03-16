"use strict";

import dotenv from "dotenv";
import { Dialect } from "sequelize/types";

dotenv.config({ path: ".env" });

interface DatabaseValue {
  username: string;
  password: string;
  database: string;
  host: string;
  port: number;
  dialect: Dialect;
  dialectOptions: {
    dateStrings: boolean;
    typeCast: boolean;
    timezone: string;
  };
  pool: {
    min: number;
    max: number;
    idle: number;
  };
  define: {
    charset: string;
    timestamps: boolean;
    createdAt: string;
    updatedAt: string;
    table: {
      underscored: boolean;
    };
    script: {
      underscored: boolean;
    };
  };
  benchmark: boolean;
  logging: boolean;
}

let database: DatabaseValue = {
  username: "caerux",
  password: ".caerux",
  database: "node_base",
  host: "mariadb_node_base",
  port: 3306,
  dialect: "mariadb",
  dialectOptions: {
    dateStrings: true,
    typeCast: true,
    timezone: "+07:00",
  },
  pool: {
    min: 1,
    max: 60,
    idle: 10000,
  },
  define: {
    charset: "utf8mb4",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    table: {
      underscored: true,
    },
    script: {
      underscored: false,
    },
  },
  benchmark: false,
  logging: false,
};

export default database;
