var express = require("express");
var router = express.Router();
const mainController = require("../controllers/mainController");

/* GET home page. */
router.get("/, mainController.index");
router.get("detalle/:menuId/", mainController.detalle);

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
