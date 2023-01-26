const express = require("express");
const router = express.Router();

// config route

const configRoute = (app) => {
  router.post("/", (req, res) => {
    console.log("config route");
  });
};
module.exports = configRoute;
