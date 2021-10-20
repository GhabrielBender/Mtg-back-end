import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateCardController } from "./controllers/CreateCardController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

const router = Router();

const createUserController = new CreateUserController();
const createCardController = new CreateCardController();

const authenticateUserController = new AuthenticateUserController();

router.post("/user", createUserController.handle);

router.post("/cards", createCardController.handle);

router.post("/login", authenticateUserController.handle);

export { router };
