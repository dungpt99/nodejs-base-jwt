import { Model } from "sequelize";

export interface RoleAttributes {
  id: number;
  name: string;
  created_at: Date;
  updated_at?: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Role extends Model<RoleAttributes> implements RoleAttributes {
    id!: number;
    name!: string;
    created_at!: Date;
    updated_at?: Date | undefined;

    static associate(models: any) {
      Role.belongsToMany(models.User, {
        as: "users",
        through: "role_user",
        foreignKey: "role_id",
        otherKey: "user_id",
        timestamps: false,
      });
    }
  }

  Role.init(
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
      created_at: "TIMESTAMP",
      updated_at: "TIMESTAMP",
    },
    {
      tableName: "roles",
      sequelize,
    }
  );
  return Role;
}
