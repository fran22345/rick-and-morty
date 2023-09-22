const {server} = require("./app")
const PORT = 3001;

server.listen(PORT, () => {
  console.log("server reaised in port: ", +PORT);
});

module.exports = {
  server
}
