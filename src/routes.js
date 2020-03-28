const express = require("express");
const { create, list } = require("./controllers/OngController");

const routes = express.Router();

routes.get("/ongs", list);
routes.post("/ongs", create);

module.exports = routes;
