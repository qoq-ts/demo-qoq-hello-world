import { createConfig, MemoryCacheOptions } from 'qoq';
import { Config } from '.';

const developmentConfig: Config = {
  cache: createConfig<MemoryCacheOptions>({
    slot: 'MemoryCache',
  }),
};

export default developmentConfig;
