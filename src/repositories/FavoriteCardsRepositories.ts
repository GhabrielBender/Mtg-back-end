import { EntityRepository, Repository } from "typeorm";
import { FavoriteCard } from "../entities/FavoriteCard";

@EntityRepository(FavoriteCard)
class FavoriteCardsRepositories extends Repository<FavoriteCard> {}

export { FavoriteCardsRepositories };
