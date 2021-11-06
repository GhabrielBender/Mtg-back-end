import { getCustomRepository } from "typeorm";
import { FavoriteCardsRepositories } from "../repositories/FavoriteCardsRepositories";

export class DeleteFavoriteCard {
  async execute(card_id: any, user_id: any) {
    const cards = getCustomRepository(FavoriteCardsRepositories);
    const favoriteCard = await cards.delete({
      favorite_cards: card_id,
      user_favorites: user_id,
    });
    return favoriteCard;
  }
}
