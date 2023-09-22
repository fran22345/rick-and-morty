const express = require("express");
const router = express.Router();
const deleteFav= require("../controller/deleteFav") 
const logIn = require("../utils/login")
const postFav= require("../controller/postFav")
const postUser = require("../controller/postUser")

router.get("/character/:id", (req, res) => {
  getCharById(req, res);
});
router.get("/login", (req, res) => {
  logIn(req, res);
});
router.post("/login", (req, res) => {
  postUser(req, res);
});
router.post("/fav", (req, res) => {
  postFav(req, res);
});
router.delete("/fav/:id", (req, res) => {
  deleteFav(req, res);
});

module.exports = router;
