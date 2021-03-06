import { getCustomRepository } from "typeorm";
import { CardsRepositories } from "../repositories/CardsRepositories";

export class ListCard {
  async execute(card_id: any) {
    const cards = getCustomRepository(CardsRepositories);
    const card = await cards.find({
      where: {
        id: card_id,
      },
    });

    return card;
  }
}
