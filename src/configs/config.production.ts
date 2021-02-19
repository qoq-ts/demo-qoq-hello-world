import { createConfig, FileCacheOptions } from 'qoq';

const productionConfig = {
  cache: createConfig<FileCacheOptions>({
    slot: 'FileCache',
    cacheDir: './caches',
  }),
};

export default productionConfig;
