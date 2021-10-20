import { getCustomRepository } from "typeorm";
import { CardsRepositories } from "../repositories/CardsRepositories";

interface ICardRequest {
  user_cards: string;
  name: string;
  set: string;
  condition: string;
  price: string;
  complement: string;
}

export class CreateCardService {
  async execute({
    user_cards,
    name,
    set,
    condition,
    price,
    complement,
  }: ICardRequest) {
    const cardsRepositories = getCustomRepository(CardsRepositories);

    if (!name) {
      throw new Error("Incorrect Card Name");
    }

    const card = cardsRepositories.create({
      user_cards,
      name,
      set,
      condition,
      price,
      complement,
    });

    await cardsRepositories.save(card);

    return card;
  }
}
