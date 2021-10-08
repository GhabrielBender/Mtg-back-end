import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
  name: string;
  age: string;
  email: string;
  password: string;
  cellphone: string;
  interests: string;
  favorite_cards: string;
}

class CreateUserService {
  async execute({
    name,
    age,
    email,
    password,
    cellphone,
    interests,
    favorite_cards,
  }: IUserRequest) {
    const usersRepository = new UsersRepositories();

    if (!email) {
      throw new Error("Email incorrect");
    }

    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const user = usersRepository.create({
      name,
      age,
      email,
      password,
      cellphone,
      interests,
      favorite_cards,
    });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };
