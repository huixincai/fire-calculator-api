const router = require("express").Router();
const calculationController = require("./controllers/calculationController");

router.route("/calculate").post(calculationController.performFIRECalculation);

module.exports = router;
