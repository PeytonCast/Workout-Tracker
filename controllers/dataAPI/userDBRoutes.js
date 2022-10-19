const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Goals, Tracking_Log } = require('../../models');

//------------------------------------------------------------------------------------
//API 2: PUT
//The user will start out with no goal or total goal days when they first log in
//This API will update the goal_id field/column and total_goal_days field/column for the user after they select a goal

router.put('/:id', async (req, res) => {
    try {
      const userData = await User.update(req.body, {
        where: {
          id: req.params.id,  //How do I add updating the goal_id & total_goal_days here?
        },
      });
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //------------------------------------------------------------------------------------
//API 5: GET
//This API will return the user's progress to the browser. SQL in the DB will determine if the user met their total goal based on a certain percentage once they meet their total_goal_days

// GET a single user
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [{ model: Tracking_Log }],
      attributes: {
        include: [
          [
            sequelize.literal( 
              '(SELECT COUNT(workout_dates) AS yes_days FROM tracking_log WHERE watched_video = "YES")' //Need to decide what kind of response is returned - checkbox with boolean or YES/NO?
              //Need to add division of yes_days/COUNT(workout_dates) to get a percentage
            ),
            'daysGoalCompleted', 
          ],
        ],
      },
    });

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
