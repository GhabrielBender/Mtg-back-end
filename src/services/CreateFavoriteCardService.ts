import { getCustomRepository } from "typeorm";
import { FavoriteCardsRepositories } from "../repositories/FavoriteCardsRepositories";

interface IFavoriteCardRequest {
  user_favorites: string;
  favorite_cards: string;
}

export class CreateFavoriteCardService {
  async execute({ user_favorites, favorite_cards }: IFavoriteCardRequest) {
    const favoriteCardsRepositories = getCustomRepository(
      FavoriteCardsRepositories
    );

    const favoriteCard = favoriteCardsRepositories.create({
      user_favorites,
      favorite_cards,
    });

    await favoriteCardsRepositories.save(favoriteCard);

    return favoriteCard;
  }
}
