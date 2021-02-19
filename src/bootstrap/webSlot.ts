import { Cache, Tree, WebSlotManager } from "qoq";
import { Etag } from 'qoq-etag';
import { Morgan } from "qoq-morgan";
import { config } from '../configs';

export const webSlots = WebSlotManager
  .use(new Etag())
  .use(new Morgan('combined'));

export const advancedSlots = webSlots
  .use(new Cache(config.cache));


Tree.setWebTrunk(webSlots);
