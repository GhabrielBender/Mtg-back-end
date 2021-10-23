import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

export class ListUsersCity {
  async execute(user_city: string) {
    const users = getCustomRepository(UsersRepositories);
    user_city = "asdasdasd";
    const city = await users.find({
      where: {
        city: user_city,
      },
    });

    return city;
  }
}
