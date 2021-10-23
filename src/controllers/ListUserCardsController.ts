import { Request, Response } from "express";
import { ListUsersCards } from "../services/ListUserCards";

declare module "express" {
  export interface Request {
    user_cards: string;
  }
}

export class ListUserCardsController {
  async handle(request: Request, response: Response) {
    const card_name = request.query.card_name;

    const listUserCardsService = new ListUsersCards();

    const users = await listUserCardsService.execute(card_name);

    return response.json(users);
  }
}
