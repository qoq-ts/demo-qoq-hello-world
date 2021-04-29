import { WebApplication } from "qoq";

const app = new WebApplication({
  // Optional
  routersDir: __dirname + '/routers',
});

app.listen(3000, () => {
  console.log('Server started');
});
