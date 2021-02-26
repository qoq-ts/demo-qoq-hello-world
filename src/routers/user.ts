import { validator, WebRouter } from 'qoq';
import { advancedSlots } from '../bootstrap/webSlot';
import { User } from '../models/User';

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

    const users = await User.findAll({
      attributes: ['id', 'name'],
      offset: (page - 1) * size,
      limit: size,
    });

    users[0]?.get({ plain: true }).age; // number
    users[0]?.age; // number

    ctx.send({
      page,
      size,
      result: users,
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
    const result = await User.create(ctx.payload);

    ctx.send(result, 201);
  });

router
  .delete('/:id')
  .params({
    id: validator.number,
  })
  .action(async (ctx) => {
    await User.destroy({
      where: {
        id: ctx.params.id,
      }
    });

    ctx.send(null, 204);
  });
