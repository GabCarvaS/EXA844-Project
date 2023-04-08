const express = require("express");
const router = express.Router();
const controller = require("../controllers/carController");

router.get("/", controller.get);
router.get("/filter", controller.getfilter); //getByModelAndMonth
router.get("/modelo", controller.getByModel);
router.get("/marca", controller.getByBrand);
router.get("/position", controller.getByPosition);
router.get("/:mes", controller.getByMonth);

module.exports = router;
