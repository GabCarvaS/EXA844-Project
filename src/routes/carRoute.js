const express = require("express");
const router = express.Router();
const controller = require("../controllers/carController");

router.get("/", controller.get); //http://localhost:3000
router.get("/filter", controller.getByModelAndMonth); //http://localhost:3000/cars/filter?mes=Janeiro&modelo=COROLLA
router.get("/model", controller.getByModel); //http://localhost:3000/cars/model?modelo=CIVIC
router.get("/brand", controller.getByBrand); //http://localhost:3000/cars/brand?marca=TOYOTA
router.get("/position", controller.getByPosition); //http://localhost:3000/cars/position?posicao=50
router.get("/month", controller.getByMonth); //http://localhost:3000/cars/month?month=Março
router.get("/occurrence", controller.getByOccurrences); //http://localhost:3000/cars/occurrence?month=Fevereiro

module.exports = router;
