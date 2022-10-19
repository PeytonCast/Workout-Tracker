const router = require('express').Router();
const sequelize = require('../../config/connection');
const { GoalExercises, Exercises } = require('../../models');

//------------------------------------------------------------------------------------
//API 3: GET
//Get all of the exercises associated with the goal the user selected

router.get('/', async (req, res) => {
  try {
    const goalExercisesData = await GoalExercises.findAll({
      include: [{ model: Exercises }], //will this pull in the exercise name?
      where: {
        id: req.params.goalId //will this search by the goal id?
      },
      attributes: {
        exclude: ['goalId, exerciseId'],
      }, //Exercise 9
    });
    res.status(200).json(goalExercisesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;