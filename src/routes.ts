import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateCardController } from "./controllers/CreateCardController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

import { ListUserCardsController } from "./controllers/ListUserCardsController";
import { ListUsersCards } from "./services/ListUserCards";

const router = Router();

const listUserCardsController = new ListUserCardsController();
const createUserController = new CreateUserController();
const createCardController = new CreateCardController();

const authenticateUserController = new AuthenticateUserController();

router.post("/user", createUserController.handle);

router.post("/cards", createCardController.handle);

router.post("/login", authenticateUserController.handle);

router.get("/users/city", listUserCardsController.handle);

router.get("/usersGet", createUserController.handle);

export { router };
