import { Request, Response } from "express";
import { CreateCardService } from "../services/CreateCardService";

class CreateCardController {
  async handle(request: Request, response: Response) {
    const { user_cards, name, set, condition, price, complement } =
      request.body;

    const createCardService = new CreateCardService();

    const card = await createCardService.execute({
      user_cards,
      name,
      set,
      condition,
      price,
      complement,
    });

    return response.json(card);
  }
}

export { CreateCardController };
