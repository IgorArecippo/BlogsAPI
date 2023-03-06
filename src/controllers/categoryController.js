const categoryService = require('../services/categoryService');

const create = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  const newCategory = await categoryService.create(name);
  return res.status(201).json(newCategory);
};

const getAll = async (req, res) => {
  const categories = await categoryService.getAll();
  return res.status(200).json(categories);
};

module.exports = {
  create,
  getAll,
};