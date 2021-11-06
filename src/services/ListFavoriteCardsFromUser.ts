import { getCustomRepository } from "typeorm";
import { FavoriteCardsRepositories } from "../repositories/FavoriteCardsRepositories";

export class ListFavoriteCardsFromUser {
  async execute(user_id: any) {
    const favoriteCardsRepo = getCustomRepository(FavoriteCardsRepositories);
    const userCards = await favoriteCardsRepo.find({
      where: {
        user_favorites: user_id,
      },
    });

    return userCards;
  }
}
