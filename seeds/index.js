const sequelize = require('../config/connection');
const { User, Exercises, GoalExercises, Goals, TrackingLog } = require('../models');

const userData = require('./userData.json');
// const projectData = require('./projectData.json');
const trackingLogSeedData = require('./trackingLogSeedData.json');
const exercisesSeedData = require('./exercisesSeedData.json');
const goalExercisesSeedData = require('./goalExercisesSeedData.json');
const goalsSeedData = require('./goalsSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const exercises = await Exercises.bulkCreate(exercisesSeedData);

  const goals = await Goals.bulkCreate(goalsSeedData);

  const goalExercises = await GoalExercises.bulkCreate(goalExercisesSeedData);

  const trackingLog = await TrackingLog.bulkCreate(trackingLogSeedData);

  // for (const project of projectData) {
  //   await Project.create({
  //     ...project,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();
