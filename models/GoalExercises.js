const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Goal_Exercises extends Model {}

Goal_Exercises.init(
  {
    goal_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'goals',
        key: 'id',
      }
    },
    exercise_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'exercises',
        key: 'id',
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'goalExercises',
  }
);

module.exports = Goal_Exercises;
