const router = require('express').Router();
const sequelize = require('../../config/connection');
const { GoalExercises, Exercises } = require('../../models');

//------------------------------------------------------------------------------------
//API 3: GET
//Get all of the exercises associated with the goal the user selected

router.get('/', async (req, res) => {
  try {
    console.log("message1")
    const exercisesData = await Exercises.findAll({ include: [{model: GoalExercises, required: true}]});

    /* 
    
     {
        "id": 1,
        "name": "Strength training - Back",
        "exerciseId": null,
        "goalExercises": [
            {
                "id": 4,
                "goalId": 2,
                "exerciseId": 1
            }
        ]
    },

    {id: 4, goalId: 2, exercises: [{id, name, }]}
    */
    res.status(200).json(exercisesData);
  } catch (err) {
    console.log("message", err)
    res.status(500).json(err);
  }
});

module.exports = router;

