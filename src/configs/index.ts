import type productionConfig from './config.production';

const env = process.env.NODE_ENV || 'development';

export const config: typeof productionConfig = require('./config.' + env).default;

export type Config = Record<keyof typeof productionConfig, any>;
