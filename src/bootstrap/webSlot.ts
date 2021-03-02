import { Cache, Tree, WebSlotManager } from "qoq";
import { Cors } from 'qoq-cors';
import { Etag } from 'qoq-etag';
import { Morgan } from "qoq-morgan";
import { config } from '../configs';
import { dbSlot } from './sequelize';

export const webSlots = WebSlotManager
  .use(new Etag())
  .use(new Morgan('combined'))
  .use(new Cors());

export const advancedSlots = webSlots
  .use(new Cache(config.cache))
  .use(dbSlot);

Tree.setWebTrunk(webSlots);
