import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateCardController } from "./controllers/CreateCardController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

import { ListUserCardsController } from "./controllers/ListUserCardsController";
import { ListUserCityController } from "./controllers/ListUserCityController";

const router = Router();

const listUserCardsController = new ListUserCardsController();
const listUserCityController = new ListUserCityController();
const createUserController = new CreateUserController();
const createCardController = new CreateCardController();

const authenticateUserController = new AuthenticateUserController();

router.post("/user", createUserController.handle);

router.post("/cards", createCardController.handle);

router.post("/login", authenticateUserController.handle);

router.get("/users/cards", listUserCardsController.handle);

router.get("/users/city", listUserCityController.handle);

export { router };
