import { column, defineModel } from 'qoq-sequelize';

export const Project = defineModel({
  attributes: {
    id: column.int.primaryKey(),
    user_id: column.int.notNull(),
    title: column.varChar.notNull(),
    description: column.text,
  },
});
