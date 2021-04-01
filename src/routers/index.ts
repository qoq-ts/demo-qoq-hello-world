import { validator, WebRouter } from 'qoq';
import { webSlots } from '../bootstrap/webSlot';

export const router = new WebRouter({
  slots: webSlots,
  // slots: advancedSlots,
});

router
  .get('/')
  .query({
    name: validator.string.default('World'),
  })
  .action(async (ctx) => {
    ctx.body = 'Hello ' + ctx.query.name;
  });

router
  .get('/health')
  .action(async (ctx) => {
    ctx.body = { status: 'ok' };

    /**
     * cache doesn't slot to here, try to replace webSlots to advancedSlots.
     *
     * @ts-expect-error */
    ctx.cache;
  });
