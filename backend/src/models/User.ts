import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  BeforeInsert,
  BeforeUpdate,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Location } from './Location';
import { Photo } from './Photo';
import argon2 from 'argon2';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  description: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  profilePicture: string;

  @ManyToMany(type => User)
  @JoinTable()
  matchs: User[];

  @BeforeUpdate()
  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      this.password = await argon2.hash(this.password);
    }
  }

  @BeforeInsert()
  getCreatedAt() {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  @BeforeUpdate()
  getUpdatedAt() {
    this.updatedAt = new Date();
  }

  @OneToOne(() => Location)
  @JoinColumn()
  location: Location;

  @OneToMany(type => Photo, photo => photo.user) photos: Photo[];
}
