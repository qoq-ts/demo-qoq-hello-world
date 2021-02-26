import { column, defineModel } from 'qoq-sequelize';

export const User = defineModel({
  attributes: {
    id: column.int.primaryKey(),
    name: column.varChar.notNull(),
    age: column.int.notNull(),
  }
});
