import { defineConfig, MemoryCacheOptions } from 'qoq';
import { SequelizeOptions } from 'qoq-sequelize';
import { Config } from '.';

const developmentConfig: Config = {
  cache: defineConfig<MemoryCacheOptions>({
    engine: 'MemoryCache',
  }),
  db: defineConfig<SequelizeOptions>({
    dialect: 'sqlite',
    logging: console.log,
    storage: './sqlite.db'
  }),
};

export default developmentConfig;
