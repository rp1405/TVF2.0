const express = require("express");
const router = express.Router();

const {
  getAllTrueFood,
  addNewCategory,
  deleteAll,
  insertFoods,
} = require("../controllers/food");

router.route("/true").get(getAllTrueFood);
router.route("/add").patch(addNewCategory);
router.route("/deleteAll").delete(deleteAll);
router.route("/insert").post(insertFoods);
module.exports = router;
