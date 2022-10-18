const sequelize = require('../config/connection');
const { User, Goals, Goal_Exercises, Exercises, Tracking_Log } = require('../models');

const userData = require('./userData.json');
const goalData = require('./goalsSeedData.json')
const goalEXData = require('./goalExercisesSeedData.json')
const exerciseData = require('./exercisesSeedData.json')
const trackingData = require('./dailyTrackingSeedData.json')
// const projectData = require('./projectData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

   await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Goals.bulkCreate(goalData, {
    individualHooks: true,
    returning: true,
  });
  await Exercises.bulkCreate(exerciseData, {
    individualHooks: true,
    returning: true,
  });
  await Goal_Exercises.bulkCreate(goalEXData, {
    individualHooks: true,
    returning: true,
  });
  
  await Tracking_Log.bulkCreate(trackingData, {
    individualHooks: true,
    returning: true,
  });

  // for (const project of projectData) {
  //   await Project.create({
  //     ...project,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();
