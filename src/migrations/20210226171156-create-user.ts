import { column, migration } from 'qoq-sequelize';

export default migration({
  async up(queryInterface) {
    await queryInterface.createTable('user', {
      id: column.int.primaryKey().autoIncrement(),
      name: column.varChar.notNull(),
      age: column.tinyInt.notNull(),
    })
  },
  async down(queryInterface) {
    await queryInterface.dropTable('user');
  }
});
