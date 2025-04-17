const jsonServer = require("json-server");
console.log("Loaded json-server version:", jsonServer.version);

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults({
  static: "./does-not-exist", // prevents looking for /public
});

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
