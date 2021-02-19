import { validator, WebRouter } from 'qoq';
import { advancedSlots } from '../bootstrap/webSlot';

export const router = new WebRouter({
  prefix: '/users',
  slots: advancedSlots,
});

router
  .get('/')
  .query({
    page: validator.number,
    size: validator.number.default(10),
  })
  .action(async (ctx) => {
    const { page, size } = ctx.query;
    const users = await ctx.cache.get<object[]>('users', []);

    ctx.send({
      page,
      size,
      result: users.slice((page - 1) * size, size),
      total: users.length,
    });
  });

router
  .post('/')
  .payload({
    name: validator.string,
    age: validator.number.optional(),
  })
  .action(async (ctx) => {
    const users = await ctx.cache.get<object[]>('users', []);
    users.push(ctx.payload);
    await ctx.cache.set('users', users);

    ctx.send({
      id: users.length,
      ...ctx.payload,
    }, 201);
  });

router
  .delete('/:id')
  .params({
    id: validator.number,
  })
  .action(async (ctx) => {
    const users = await ctx.cache.get<object[]>('users', []);

    if (users.length < ctx.params.id) {
      ctx.throw(404, 'User not exists');
    }

    users.splice(ctx.params.id - 1, 1);
    await ctx.cache.set('users', users);

    ctx.send(null, 204);
  });
