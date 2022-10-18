const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Exercises, Goals, Tracking_Log } = require('../../models');

//----------------------------------------------------------------------------------------
//API 1: GET
//Grabs all of the goals and returns them to the browser/user so that they can select a goal

router.get('/goals', (req, res) => {
  Goals.findAll().then((goalsData) => {
    res.json(goalsData);
  });
});

//------------------------------------------------------------------------------------
//API 2: PATCH
//The user will start out with no goal or total goal days when they first log in
//This API will update the goal_id field/column and total_goal_days field/column for the user after they select a goal

router.patch('/users?goal-id=:goalId&days=:days&user=:userid', (req, res) => {
  User.update(
    {
      days: req.body.days,
      goal_id: req.body.goalId
    },
    {
      where: {
        id: userId,
      },
    }).then((updateduser) => {
      res.status(200).json(updateduser);
    })
    .catch((err) => res.status(404).json(err));
});

//------------------------------------------------------------------------------------
//API 3: GET
//Get all of the exercises associated with the goal the user selected

router.get('/exercises/', (req, res) => {
  var goalId = req.session.user.goalId
  if (goalId == null) {
    //TODO return error
  }
  Exercises.findAll({
    where: {
      goal_id: goalId
    },
    attributes: {
       include: ['goal_exercises']
    }
  }).then((exercises) => {
    res.status(200).json(exercises);
  });
});

//------------------------------------------------------------------------------------
//API 4: POST
//This API updates the Tracking_Log table with the user's input for every day - i.e. did they complete their exercise videos?
router.post('/tracking-log', (req, res) => {
 
  Tracking_Log.create({
    id: 1, // todo autoincrement
    date: "May 1, 2022", // mysql now(), today()
    user_id: req.session.userId,
    watched_video: req.body.watched_video,
    comments: req.body.comments
  })
    .then((tracking_log) => {

      res.status(201).json(tracking_log);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//------------------------------------------------------------------------------------
//API 5: GET
//This API will return the user's progress to the browser. SQL in the DB will determine if the user met their total goal based on a certain percentage once they meet their total_goal_days

router.get('/progress', async (req, res) => {
  try {
    const trackingData = await Tracking_Log.count({
      attributes: {
        include: [
          [
            sequelize.literal( 
              '(SELECT COUNT(workout_dates) FROM tracking_log WHERE watched_video = TRUE)' //Need to decide what kind of response is returned for the boolean
            ),
            'daysGoalCompleted', 
          ],
        ],
      },
    });
    res.status(200).json(trackingData);
  } catch (err) {
    res.status(500).json(err);
  }
});