import { column, migration } from 'qoq-sequelize';

export default migration({
  async up(queryInterface) {
    await queryInterface.createTable('project', {
      id: column.int.primaryKey().autoIncrement(),
      user_id: column.int.notNull(),
      title: column.varChar.notNull(),
      description: column.text.comment('Not Important'),
    });

    await queryInterface.addIndex('project', ['user_id'], {
      name: 'i-user_id',
      unique: false,
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('project');
  }
});
