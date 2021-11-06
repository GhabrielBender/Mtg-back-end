import { Request, Response } from "express";
import { DeleteFavoriteCard } from "../services/DeleteFavoriteCard";
declare module "express" {
  export interface Request {
    card_id: string;
    user_id: string;
  }
}
export class DeleteFavoriteCardController {
  async handle(request: Request, response: Response) {
    const card_id = request.query.card_id;
    const user_id = request.query.user_id;

    const deleteFavoriteCardService = new DeleteFavoriteCard();

    const favoriteCards = await deleteFavoriteCardService.execute(
      card_id,
      user_id
    );

    return response.json(favoriteCards);
  }
}
