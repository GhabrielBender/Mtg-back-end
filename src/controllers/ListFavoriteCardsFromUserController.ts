import { Request, Response } from "express";
import { ListFavoriteCardsFromUser } from "../services/ListFavoriteCardsFromUser";

declare module "express" {
  export interface Request {
    card_id: string;
  }
}
export class ListFavoriteCardsFromUserController {
  async handle(request: Request, response: Response) {
    const user_id = request.query.user_id;

    const listFavoriteCardService = new ListFavoriteCardsFromUser();

    const favoriteCards = await listFavoriteCardService.execute(user_id);

    return response.json(favoriteCards);
  }
}
