const { BlogPost, User, Category } = require('../models');

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      // { attributes: { exclude: 'user_id' } },
      { model: User, 
        as: 'user',
        attributes: { exclude: 'password' } }, 
      { model: Category, 
        as: 'categories',
        attributes: { exclude: 'PostCategory' } },
    ],
  });
  return posts;
};

module.exports = {
  getAll,
};
