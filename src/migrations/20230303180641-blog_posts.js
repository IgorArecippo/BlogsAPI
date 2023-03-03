'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('blog_posts', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      published: {
        defaultValue: Sequelize.fn('now'),
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated: {
        defaultValue: Sequelize.fn('now'),
        allowNull: false,
        type: Sequelize.DATE,
      }
    })
  },

  down: async (queryInterface, _Sequelize) => queryInterface.dropTable('blog_posts')
};
