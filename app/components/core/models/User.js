'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    created_at: 'TIMESTAMP',
    updated_at: 'TIMESTAMP',
  }, {
    tableName: 'users'
  });

  User.associate = models => {
    User.belongsToMany(models.Role, {
      as: 'roles',
      through: 'role_user',
      foreignKey: 'user_id',
      otherKey: 'role_id',
      timestamps: false
    });
  };

  return User;
};
