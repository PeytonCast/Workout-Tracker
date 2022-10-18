const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tracking_Log extends Model {}

Tracking_Log.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      }
    },
    workoutDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    watchedVideo: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tracking_log',
  }
);

module.exports = Tracking_Log;