const categoryService = require('../services/categoryService');

const create = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  const newCategory = await categoryService.create(name);
  return res.status(201).json(newCategory);
};

module.exports = {
  create,
};