const User = require('./User');
const Goals = require('./Goals');
const Exercises = require('./Exercises');
const GoalExercises = require('./GoalExercises');
const TrackingLog = require('./TrackingLog');

User.hasMany(Goals, {
    foreignKey: 'id',
    onDelete: 'CASCADE',
});

User.hasMany(TrackingLog, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});

Goals.hasMany(GoalExercises, {
    foreignKey: 'goalId',
    onDelete: 'CASCADE',
});

GoalExercises.hasMany(Exercises, {
    foreignKey: 'exerciseId',
    //onDelete: 'CASCADE',
});

Exercises.hasMany(GoalExercises, {
    foreignKey: 'exerciseId',
    onDelete: 'CASCADE',
});

module.exports = { User, Goals, Exercises, GoalExercises, TrackingLog };