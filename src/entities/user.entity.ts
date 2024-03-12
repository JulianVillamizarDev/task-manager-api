import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  name: string;

  @Column
  surname: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  verification_token: string;

  @Column
  recovery_token: string;

  isVerified: number;
}
