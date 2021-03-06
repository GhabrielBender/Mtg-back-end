import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";
@Entity("users")
export class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  age: string;

  @Column()
  city: string;

  @Column()
  estate: string;

  @Column()
  cellphone: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  interests: string;

  @Column()
  favorite_cards: string;

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
