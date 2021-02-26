import { createConfig, MemoryCacheOptions } from 'qoq';
import { SequelizeOptions } from 'qoq-sequelize';
import { Config } from '.';

const developmentConfig: Config = {
  cache: createConfig<MemoryCacheOptions>({
    slot: 'MemoryCache',
  }),
  db: createConfig<SequelizeOptions>({
    dialect: 'sqlite',
    logging: console.log,
    storage: './sqlite.db'
  }),
};

export default developmentConfig;
