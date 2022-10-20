const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Goals extends Model {}

Goals.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    buildmuscle: {
      type: DataTypes.BOOLEAN, 
      defaultValue: false
    },
    flexandtone: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    cardiocondition: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Goals',
  }
);

module.exports = Goals;
