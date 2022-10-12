const sequelize = require('../config/connection');
const {homePage, workoutPage } = require('../models');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });


}