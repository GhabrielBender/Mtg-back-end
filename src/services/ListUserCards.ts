import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { CardsRepositories } from "../repositories/CardsRepositories";
import { Card } from "../entities/Card";

export class ListUsersCards {
  async execute(cardName: string) {
    const cardss = getCustomRepository(CardsRepositories);

    const husers = getCustomRepository(UsersRepositories);

    cardName = "asdasdasdas";
    const cards = cardss.find({
      where: {
        name: cardName,
      },
    });

    let usersIds = [];
    let allUsers = [];

    const wololo = async () => {
      const response = (await cards).map((card) => {
        usersIds.push(card.user_cards);
      });
    };

    const array = await wololo();

    console.log(usersIds);

    const users = husers.find({
      where: {
        id: usersIds.map((id) => {
          return id;
        }),
      },
    });

    const wololo2 = async () => {
      const response2 = (await users).map((user) => {
        allUsers.push(user);
      });
    };

    const array2 = await wololo2();

    console.log(allUsers);
    // const users = husers.find({
    //   where: {
    //     id: www,
    //   },
    // });

    // return users;
  }
}
