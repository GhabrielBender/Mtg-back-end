import { Request, Response } from "express";
import { ListCardsFromUser } from "../services/ListCardsFromUser";

declare module "express" {
  export interface Request {
    card_id: string;
  }
}
export class ListCardsFromUserController {
  async handle(request: Request, response: Response) {
    const user_id = request.query.user_id;

    console.log(user_id);

    const listCardService = new ListCardsFromUser();

    const cards = await listCardService.execute(user_id);

    return response.json(cards);
  }
}
