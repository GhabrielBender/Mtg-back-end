import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { CardsRepositories } from "../repositories/CardsRepositories";

export class ListUsersCards {
  async execute(card_name: any) {
    const cardss = getCustomRepository(CardsRepositories);

    const husers = getCustomRepository(UsersRepositories);

<<<<<<< HEAD
    // cardName = "asdasdasdas";
=======
>>>>>>> d9086ff27bf77e76d2913f280abd987056c7fc9b
    const cards = cardss.find({
      where: {
        name: card_name,
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

    for (let i = 0; i < usersIds.length; i++) {
      const users = husers.find({
        where: {
          id: usersIds[i],
        },
      });

      const wololo2 = async () => {
        const response2 = (await users).map((user) => {
          allUsers.push(user);
        });
      };
      const array2 = await wololo2();
    }

<<<<<<< HEAD
    // const array2 = await wololo2();

    console.log(allUsers);
    // const users = husers.find({
    //   where: {
    //     id: www,
    //   },
    // });

=======
>>>>>>> d9086ff27bf77e76d2913f280abd987056c7fc9b
    return allUsers;
  }
}
