import { column, literal, migration } from 'qoq-sequelize';

export default migration({
  async up(queryInterface) {
    await queryInterface.createTable('project', {
      id: column.int.primaryKey().autoIncrement(),
      user_id: column.int.notNull(),
      title: column.varChar.notNull(),
      description: column.text.comment('Not Important'),
      created_at: column.dateTime.default(literal('CURRENT_TIMESTAMP')),
      updated_at: column.dateTime.default(literal('CURRENT_TIMESTAMP')),
      deleted_at: column.dateTime,
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
