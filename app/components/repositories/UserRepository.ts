"use strict";

import db from "@database/index";
const { User, Role } = db;

const UserRepository = {
  getUserByEmail: async (email: string) => {
    let user = await User.findOne({
      where: {
        email,
      },
      include: [
        {
          model: Role,
          as: "roles",
        },
      ],
    });

    return user;
  },
};

export default UserRepository;
