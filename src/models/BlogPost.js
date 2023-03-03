module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      foreingKey: true,
      type: DataTypes.INTEGER,
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
    {
      underscored: true,
      timestamps: false,
    });
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreingKey: 'userId', as: 'user' })
  }
  return BlogPost;
}