import { defineConfig, FileCacheOptions } from 'qoq';
import { SequelizeOptions } from 'qoq-sequelize';

const productionConfig = {
  cache: defineConfig<FileCacheOptions>({
    engine: 'FileCache',
    cacheDir: './caches',
  }),
  db: defineConfig<SequelizeOptions>({
    dialect: 'mysql',
    logging: false,
  }),
};

export default productionConfig;
