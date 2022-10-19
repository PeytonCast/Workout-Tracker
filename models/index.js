const User = require('./User');
const Goals = require('./Goals');
const Exercises = require('./Exercises');
const Goal_Exercises = require('./Goal_Exercises');
const Tracking_Log = require('./Tracking_Log');

User.hasMany(Goals, {
    foreignKey: 'id',
    onDelete: 'CASCADE',
});

User.hasMany(Tracking_Log, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Goals.hasMany(Goal_Exercises, {
    foreignKey: 'goal_id',
    onDelete: 'CASCADE',
});

Exercises.hasMany(Goal_Exercises, {
    foreignKey: 'exercise_id',
    onDelete: 'CASCADE',
});

module.exports = { User, Goals, Exercises, Goal_Exercises, Tracking_Log };