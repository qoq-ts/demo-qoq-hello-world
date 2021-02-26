import { column, defineModel, Op } from 'qoq-sequelize';
import { Project } from './Project';

export const User = defineModel({
  attributes: {
    id: column.int.primaryKey(),
    name: column.varChar.notNull(),
    age: column.int.notNull(),
  },
  associations: {
    projects: () => User.hasMany(Project, {
      foreignKey: 'user_id',
    }),
  },
  scopes: {
    boy: () => User.addScope({
      attributes: ['*'],
      where: {
        id: { [Op.lt]: 18 }
      },
    }),
  },
});
