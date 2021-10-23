import { Router } from "express";

import { CreateUserController } from "./controllers/CreateUserController";
import { CreateCardController } from "./controllers/CreateCardController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

import { ListUserCardsController } from "./controllers/ListUserCardsController";
import { ListUserCityController } from "./controllers/ListUserCityController";
import { ListUserController } from "./controllers/ListUserController";
import { ListCardController } from "./controllers/ListCardController";

const router = Router();

const listUserCardsController = new ListUserCardsController();
const listUserController = new ListUserController();
const listCardController = new ListCardController();
const listUserCityController = new ListUserCityController();
const createUserController = new CreateUserController();
const createCardController = new CreateCardController();

const authenticateUserController = new AuthenticateUserController();

router.post("/user", createUserController.handle);

router.post("/cards", createCardController.handle);

router.post("/login", authenticateUserController.handle);

router.get("/users/cards", listUserCardsController.handle);

router.get("/users/city", listUserCityController.handle);

router.get("/user", listUserController.handle);

router.get("/card", listCardController.handle);

export { router };
