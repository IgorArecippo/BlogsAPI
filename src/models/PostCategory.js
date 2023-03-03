module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    categoryId: {
      foreingKey: true,
      type: DataTypes.INTEGER
    },
    postId: {
      foreingKey: true,
      type: DataTypes.INTEGER
    },
  },
    {
      underscored: true,
      timestamps: false,
    }
  );
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'category',
      through: 'PostCategory',
      foreingKey: 'categoryId',
      otherKey: 'postId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'post',
      through: 'PostCategory',
      foreingKey: 'postId',
      otherKey: 'categoryId'
    });
  };
  return PostCategory;
}