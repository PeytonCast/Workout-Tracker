const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class GoalExercises extends Model {}

GoalExercises.init(
  {
    goalId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'goals',
        key: 'id',
      }
    },
    exerciseId: {
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

module.exports = GoalExercises;
