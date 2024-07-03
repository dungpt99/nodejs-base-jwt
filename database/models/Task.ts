import { Model } from "sequelize";

export interface TaskAttributes {
  id: number;
  name: string;
  done: boolean;
  created_at: Date;
  updated_at?: Date;
}

export interface ResponseTask {
  id: number;
  name: string;
  done: boolean;
  created_at: Date;
  updated_at?: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Task extends Model<TaskAttributes> implements TaskAttributes {
    id!: number;
    name!: string;
    done!: boolean;
    created_at!: Date;
    updated_at?: Date | undefined;

    static associate(models: any) {
      Task.belongsTo(models.User, {
        as: "users",
        foreignKey: "user_id",
      });
    }
  }
  Task.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      done: {
        type: DataTypes.BOOLEAN,
        primaryKey: true,
      },
      created_at: "TIMESTAMP",
      updated_at: "TIMESTAMP",
    },
    {
      sequelize,
      tableName: "tasks",
    }
  );
  return Task;
};
