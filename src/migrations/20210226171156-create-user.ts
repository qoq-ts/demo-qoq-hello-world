import { column, literal, migration } from 'qoq-sequelize';

export default migration({
  async up(queryInterface) {
    await queryInterface.createTable('user', {
      id: column.int.primaryKey().autoIncrement(),
      name: column.varChar.notNull(),
      age: column.tinyInt.notNull(),
      created_at: column.dateTime.default(literal('CURRENT_TIMESTAMP')),
      updated_at: column.dateTime.default(literal('CURRENT_TIMESTAMP')),
      deleted_at: column.dateTime,
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('user');
  }
});
