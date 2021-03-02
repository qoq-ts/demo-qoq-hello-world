import { WebApplication } from "qoq";

const app = new WebApplication({
  routersDir: __dirname + '/routers',
});

app.listen(3000, () => {
  console.log('Server started');
});
