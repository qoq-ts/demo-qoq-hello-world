import { ConsoleApplication } from 'qoq';

const app = new ConsoleApplication({
  routerDir: [__dirname + '/commands'],
});

app.run();
