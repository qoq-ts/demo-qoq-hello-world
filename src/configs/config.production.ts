import { createConfig, FileCacheOptions } from 'qoq';
import { SequelizeOptions } from 'qoq-sequelize';

const productionConfig = {
  cache: createConfig<FileCacheOptions>({
    slot: 'FileCache',
    cacheDir: './caches',
  }),
  db: createConfig<SequelizeOptions>({
    dialect: 'sqlite',
    logging: false,
  }),
};

export default productionConfig;
