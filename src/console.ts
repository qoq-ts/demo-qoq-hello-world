import { ConsoleApplication } from 'qoq';
import { db } from './bootstrap/sequelize';

const app = new ConsoleApplication({
  commandsDir: [__dirname + '/commands'],
});

db.mountCommands(app);

app.execute();
