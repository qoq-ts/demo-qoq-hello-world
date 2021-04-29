import { ConsoleApplication } from 'qoq';
import { db } from './bootstrap/sequelize';

const app = new ConsoleApplication({
  // Optional
  commandsDir: [__dirname + '/commands'],
});

db.mountCommands(app);

app.execute().then(() => {
  // Optional
  process.exit(0);
});
