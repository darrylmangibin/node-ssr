const path = require("path");
const express = require("express");
const router = express.Router();

const rootDir = require("../utils/path");

// /admin/add-product => GET
router.get("/add-product", (req, res) => {
	res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
});

// /admin/add-product => POST
router.post("/add-product", (req, res) => {
	console.log(req.body);
	res.redirect("/");
});

module.exports = router