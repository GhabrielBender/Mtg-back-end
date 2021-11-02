import { getCustomRepository } from "typeorm";
import { CardsRepositories } from "../repositories/CardsRepositories";

export class ListCardsFromUser {
  async execute(user_id: any) {
    const cardsRepo = getCustomRepository(CardsRepositories);
    const cardsInfo = await cardsRepo.find({
      where: {
        user_cards: user_id,
      },
    });

    return cardsInfo;
  }
}
