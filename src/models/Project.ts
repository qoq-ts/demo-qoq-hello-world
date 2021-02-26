import { column, defineModel } from 'qoq-sequelize';
import { User } from './User';

export const Project = defineModel({
  attributes: {
    id: column.int.primaryKey(),
    userId: column.int.notNull(),
    title: column.varChar.notNull(),
    description: column.text,
  },
  associations: {
    user: () => Project.belongsTo(User, {
      foreignKey: 'userId',
    }),
  },
  options: {
    underscored: true,
    timestamps: true,
    paranoid: true,
  }
});
