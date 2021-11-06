import { Request, Response } from "express";
import { ListCard } from "../services/ListCard";

declare module "express" {
  export interface Request {
    card_id: string;
  }
}
export class ListCardController {
  async handle(request: Request, response: Response) {
    const card_id = request.query.card_id;

    const listCardService = new ListCard();

    const cards = await listCardService.execute(card_id);

    return response.json(cards);
  }
}
