const express = require("express");
const server = express();
const PORT = 3001;
const router = require("../src/Routes");
const {conn}= require("./DB_connection")

server.use(express.json());

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/rickandmorty", router)

server.listen(PORT, () => {
  conn.sync({ force: false})
  console.log("server reaised on port: ", +PORT);
});
