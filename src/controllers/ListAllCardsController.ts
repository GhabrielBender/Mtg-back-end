import { Request, Response } from "express";
import { ListAllCards } from "../services/ListAllCards";

declare module "express" {
  export interface Request {
    card_name: string;
  }
}
export class ListAllCardsController {
  async handle(request: Request, response: Response) {
    const card_name = request.query.card_name;

    const listAllCardsService = new ListAllCards();

    const cards = await listAllCardsService.execute(card_name);

    return response.json(cards);
  }
}
