const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Configurations = sequelize.define('Configurations',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  userId: {
    type: Sequelize.DataTypes.INTEGER,
    references: {
      model: "Users",
      key: 'id'
    },
    allowNull: false
  },
  timeoutValue: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  setBy: {
    type: Sequelize.STRING,
    allowNull: true
  },
  createdAt: {
    type: Sequelize.JSON,
    allowNull: false
  },
  updatedAt: {
    type: Sequelize.JSON,
    allowNull: false
  }
});

module.exports = Configurations;
