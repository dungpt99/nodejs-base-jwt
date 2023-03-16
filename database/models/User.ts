import { Model } from "sequelize";

export interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at?: Date;
}

export interface ResponseUser {
  id: number;
  name: string;
  email: string;
  created_at: Date;
  updated_at?: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    email: string;
    password: string;
    id!: number;
    name!: string;
    created_at!: Date;
    updated_at?: Date | undefined;

    static associate(models: any) {
      User.belongsToMany(models.Role, {
        as: "roles",
        through: "role_user",
        foreignKey: "user_id",
        otherKey: "role_id",
        timestamps: false,
      });
    }
  }

  User.init(
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
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created_at: "TIMESTAMP",
      updated_at: "TIMESTAMP",
    },
    {
      sequelize,
      tableName: "users",
    }
  );
  return User;
}
