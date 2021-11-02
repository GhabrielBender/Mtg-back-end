import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { CardsRepositories } from "../repositories/CardsRepositories";

export class ListUsersCards {
  async execute(card_name: any) {
    const cardsRepo = getCustomRepository(CardsRepositories);

    const usersRepo = getCustomRepository(UsersRepositories);

    const cards = cardsRepo.find({
      where: {
        name: card_name,
      },
    });

    let usersIds = [];
    let allUsers = [];

    const usersFunction = async () => {
      const response = (await cards).map((card) => {
        usersIds.push(card.user_cards);
      });
    };

    const users = await usersFunction();

    for (let i = 0; i < usersIds.length; i++) {
      const users = usersRepo.find({
        where: {
          id: usersIds[i],
        },
      });

      const allUsersFunction = async () => {
        const response2 = (await users).map((user) => {
          allUsers.push(user);
        });
      };
      const allUsersArray = await allUsersFunction();
    }

    return allUsers;
  }
}
