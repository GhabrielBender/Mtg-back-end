import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

export class ListUser {
  async execute(user_id: any) {
    const users = getCustomRepository(UsersRepositories);
    const user = await users.find({
      where: {
        id: user_id,
      },
    });

    return user;
  }
}
