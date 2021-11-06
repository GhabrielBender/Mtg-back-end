import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { FavoriteCard } from "../entities/FavoriteCard";

declare module "express" {
  export interface Request {
    user_id: any;
  }
}
export const deleteFavoriteCardController = async (
  request: Request,
  response: Response
) => {
  const { user_id } = request.query.user_id;
  console.log(user_id);
  const favorite_cards = await getRepository(FavoriteCard).delete({
    user_favorites: user_id,
  });

  if (favorite_cards.affected === 1) {
    const favoriteCardsUpdated = await getRepository(FavoriteCard).findOne(
      user_id
    );
    return response.json({ message: "wolololo" });
  }

  return response.status(404).json({ message: "wolololo erro" });
};
