import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { hash } from "bcryptjs";

interface IUserRequest {
  name: string;
  age: string;
  city: string;
  estate: string;
  cellphone: string;
  email: string;
  password: string;
  interests: string;
  favorite_cards: string;
}

class CreateUserService {
  async execute({
    name,
    age,
    city,
    estate,
    cellphone,
    email,
    password,
    interests,
    favorite_cards,
  }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);

    if (!email) {
      throw new Error("Email incorrect");
    }

    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    const user = usersRepository.create({
      name,
      age,
      city,
      estate,
      password: passwordHash,
      email,
      cellphone,
      interests,
      favorite_cards,
    });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };
