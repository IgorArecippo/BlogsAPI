'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // queryInterface é usado pela biblioteca para modificar o banco de dados, seguindo o “dialeto” do banco que estamos utilizando.
    // Sequelize armazena os tipos de dados disponíveis no contexto do banco, por exemplo varchar, string, integer, date etc.


    return queryInterface.createTable('users', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      display_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      }
    })
  },

  down: async (queryInterface, _Sequelize) => queryInterface.dropTable('users')
};
