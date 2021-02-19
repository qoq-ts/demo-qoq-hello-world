import { validator, WebRouter } from 'qoq';
import { webSlots } from '../bootstrap/webSlot';

export const router = new WebRouter({
  slots: webSlots,
});

router
  .get('/')
  .query({
    name: validator.string.default('World'),
  })
  .action(async (ctx) => {
    ctx.send('Hello ' + ctx.query.name, 200);
  });

router
  .get('/health')
  .action(async (ctx) => {
    ctx.send({ status: 'ok' });

    // @ts-expect-error cache doesn't slot to here, try to replace webSlots to advancedSlots.
    ctx.cache;
  });
