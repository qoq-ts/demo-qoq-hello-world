import { Sequelize, SequelizeSlot } from 'qoq-sequelize';
import { config } from '../configs';

export const db = new Sequelize({
  // Optional
  migrationsDir: './src/migrations',
  // Optional
  modelsDir: './src/models',
  // Optional
  seedersDir: './src/seeders',
  ...config.db,
});

// Useless
export const dbSlot = new SequelizeSlot(db);
