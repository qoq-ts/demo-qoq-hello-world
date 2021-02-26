import { Sequelize, SequelizeSlot } from 'qoq-sequelize';
import { config } from '../configs';

export const db = new Sequelize({
  migrationsPath: './src/migrations',
  modelsPath: './src/models',
  seedersPath: './src/seeders',
  ...config.db,
});

// Useless
export const dbSlot = new SequelizeSlot(db);
