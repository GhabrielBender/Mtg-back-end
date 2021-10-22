import { Request, Response } from "express";
import { ListUsersCards } from "../services/ListUserCards";

declare module "express" {
  export interface Request {
    user_cards: string;
  }
}

export class ListUserCardsController {
  async handle(request: Request, response: Response) {
    const { user_cards } = request;

    const listUserCardsService = new ListUsersCards();

    const users = await listUserCardsService.execute(user_cards);

    return response.json(users);
  }
}
