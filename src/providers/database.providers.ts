import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/entities/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_HOST),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB,
      });
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
