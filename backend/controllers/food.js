const Food = require("../models/food");

const getAllTrueFood = async (req, res) => {
  const output = await Food.find({ availablity: true });
  res.status(200).json({ output });
};
const addNewCategory = async (req, res) => {
  const output = await Food.updateMany({}, { $set: { category: "Fries" } });
  res.status(200).json({ output });
};
const deleteAll = async (req, res) => {
  const output = await Food.deleteMany({});
  res.json(output);
};
const insertFoods = async (req, res) => {
  const output = await Food.insertMany(req.body);
  res.json(output);
};
module.exports = {
  getAllTrueFood,
  addNewCategory,
  deleteAll,
  insertFoods,
};
