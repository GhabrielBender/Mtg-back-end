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

@Entity("cards")
export class Card {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  user_cards: string;

  @JoinColumn({ name: "user_cards" })
  @ManyToOne(() => User)
  user: User;

  @Column()
  name: string;

  @Column()
  set: string;

  @Column()
  condition: string;

  @Column()
  price: string;

  @Column()
  complement: string;

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
