module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    categoryId: {
      foreignKey: true,
      type: DataTypes.INTEGER
    },
    postId: {
      foreignKey: true,
      type: DataTypes.INTEGER
    },
  },
    {
      underscored: true,
      timestamps: false,
      tableName: 'posts_categories'
    }
  );
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: 'PostCategory',
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: 'PostCategory',
      foreignKey: 'postId',
      otherKey: 'categoryId'
    });
  };
  return PostCategory;
}