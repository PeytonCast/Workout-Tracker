const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Goal_Exercises extends Model {}

Goal_Exercises.init(
  {
    goal_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    exercise_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'goal_exercises',
  }
);

module.exports = Goal_Exercises;
