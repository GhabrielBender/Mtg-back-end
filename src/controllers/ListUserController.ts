import { Request, Response } from "express";
import { ListUser } from "../services/ListUser";

declare module "express" {
  export interface Request {
    user_id: string;
  }
}
export class ListUserController {
  async handle(request: Request, response: Response) {
    const user_id = request.query.user_id;

    const listUserService = new ListUser();

    const users = await listUserService.execute(user_id);

    return response.json(users);
  }
}
