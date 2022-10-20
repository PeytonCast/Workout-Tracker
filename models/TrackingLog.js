const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class TrackingLog extends Model {}

TrackingLog.init(
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
      type: DataTypes.INTEGER, //Make this into DATA type?
      allowNull: true,
    },
    watchedVideo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'tracking_log',
  }
);

module.exports = TrackingLog;