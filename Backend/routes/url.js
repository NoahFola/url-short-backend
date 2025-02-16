const { Router } = require("express");
const {createUrl, redirectUser} = require("../controllers/url.js");

const url = Router()


url.post("/", createUrl)
url.get("/:id", redirectUser)


module.exports = url;