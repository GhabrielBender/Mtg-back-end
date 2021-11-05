import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";

import { v4 as uuid } from "uuid";
import { User } from "./User";
import { Card } from "./Card";

@Entity("favoriteCards")
export class FavoriteCard {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  user_favorites: string;

  @JoinColumn({ name: "user_favorites" })
  @ManyToOne(() => User)
  user: User;

  @Column()
  favorite_cards: string;

  @JoinColumn({ name: "favorite_cards" })
  @ManyToOne(() => User)
  card: Card;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
