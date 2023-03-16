'use strict';

import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes} from 'sequelize';
import config from '../config/database';
const db: any = {};
const modelDir = path.resolve('database/models');

let sequelize = new Sequelize(config.database, config.username, config.password, config);
let models: string[] = [];

if(fs.existsSync(modelDir)) {
  fs.readdirSync(modelDir)
  .forEach(file => {
    const model = require(path.join(modelDir, file))(sequelize, DataTypes);
    db[model.name] = model;
  });
}

if(db) {
  Object.keys(db).forEach(modelName => {
    if(models.indexOf(modelName) === -1) {
      if (db[modelName].associate) {
        db[modelName].associate(db);
      }
    }

    models.push(modelName);
  });
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
