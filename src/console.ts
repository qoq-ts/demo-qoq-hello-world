import { ConsoleApplication } from 'qoq';
import { db } from './bootstrap/sequelize';

const app = new ConsoleApplication({
  routerDir: [__dirname + '/commands'],
});

db.mountCommands(app);

app.run();
