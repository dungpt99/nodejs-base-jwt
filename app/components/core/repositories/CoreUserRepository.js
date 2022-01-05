'use strict';

const User = require('@models').User;
const Role = require('@models').Role;

const UserRepository = {
  getUserByEmail: async (email) => {
    let user = await User.findOne({
      where: {
        email
      },
      include: [
        {
          model: Role,
          as: 'roles'
        }
      ]
    });

    return user;
  }
};

module.exports = UserRepository;
