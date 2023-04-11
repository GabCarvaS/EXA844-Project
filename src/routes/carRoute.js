const express = require("express");
const router = express.Router();
const controller = require("../controllers/carController");

router.get("/", controller.get); //http://localhost:3000
router.get("/model", controller.getByModel); //http://localhost:3000/cars/model?model=HR-V&month=Março
router.get("/brand", controller.getByBrand); //http://localhost:3000/cars/brand?brand=GM&month=Fevereiro
router.get("/position", controller.getByPosition); //http://localhost:3000/cars/position?position=1&month=Março
router.get("/month", controller.getByMonth); //http://localhost:3000/cars/month?month=Março
router.get("/occurrence", controller.getByOccurrences); //http://localhost:3000/cars/occurrence?month=Fevereiro

module.exports = router;
