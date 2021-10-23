import { Request, Response } from "express";
import { ListUsersCity } from "../services/ListUsersCity";

declare module "express" {
  export interface Request {
    user_city: string;
  }
}
export class ListUserCityController {
  async handle(request: Request, response: Response) {
    const { user_city } = request;

    const listUserCityService = new ListUsersCity();

    const users = await listUserCityService.execute(user_city);

    return response.json(users);
  }
}
