import { getCustomRepository } from "typeorm";
import { CardsRepositories } from "../repositories/CardsRepositories";

export class ListAllCards {
  async execute(card_name: any) {
    const cardsRepo = getCustomRepository(CardsRepositories);
    const cards = await cardsRepo.find({
      where: {
        name: card_name,
      },
    });

    console.log(cards);

    return cards;
  }
}
