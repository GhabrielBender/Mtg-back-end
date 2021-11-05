import { Request, Response } from "express";
import { CreateFavoriteCardService } from "../services/CreateFavoriteCardService";

class CreateFavoriteCardController {
  async handle(request: Request, response: Response) {
    const { user_favorites, favorite_cards } = request.body;

    const createFavoriteCardService = new CreateFavoriteCardService();

    const favoriteCard = await createFavoriteCardService.execute({
      user_favorites,
      favorite_cards,
    });

    return response.json(favoriteCard);
  }
}

export { CreateFavoriteCardController };
