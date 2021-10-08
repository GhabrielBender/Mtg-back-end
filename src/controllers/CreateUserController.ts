import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  async handle(request: Request, repsonse: Response) {
    const { name, age, email, password, cellphone, interests, favorite_cards } =
      request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name,
      age,
      email,
      password,
      cellphone,
      interests,
      favorite_cards,
    });

    return repsonse.json(user);
  }
}

export { CreateUserController };
