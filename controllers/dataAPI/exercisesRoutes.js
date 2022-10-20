const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Exercises } = require('../../models');

//----------------------------------------------------------------------------------------
//Grabs all of the exercises

router.get('/', async (req, res) => {
    console.log('error')
  try {
    const exercisesData = await Exercises.findAll({}); //will this return all goals in the Gaols table?
    res.status(200).json(exercisesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;