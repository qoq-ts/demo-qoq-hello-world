import { Sequelize, SequelizeSlot } from 'qoq-sequelize';
import { config } from '../configs';

export const db = new Sequelize({
  migrationsDir: './src/migrations',
  modelsDir: './src/models',
  seedersDir: './src/seeders',
  ...config.db,
});

// Useless
export const dbSlot = new SequelizeSlot(db);
