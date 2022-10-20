const router = require('express').Router();
const sequelize = require('../../config/connection');
const { TrackingLog } = require('../../models');

//------------------------------------------------------------------------------------
//API 4: POST
//This API updates the Tracking_Log table with the user's input for every day - i.e. did they complete their exercise videos?

// router.post('/', async (req, res) => {
//   try {
//     const trackingLogData = await Tracking_Log.create({
//       include: [{ model: User }],
//       where: {
//         id: req.params.id, //How do I connect this to User.id?
//       },
//       user_id: req.body.user_id,
//       workout_date: req.body.workout_date,
//       watched_video: req.body.watched_video,
//       comments: req.body.comments,
//     });
//     res.status(200).json(locationData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// module.exports = router;

//------------------------------------------------------------------------------------
//API 5: GET
//This API will return the user's progress to the browser. SQL in the DB will determine if the user met their total goal based on a certain percentage once they meet their total_goal_days

router.get('/', async (req, res) => {
  try {
    const trackingLogData = await TrackingLog.findAll({
      attributes: {
        include: [
          [
            sequelize.literal( 
              '(SELECT COUNT(workout_date) AS yes_days FROM tracking_log WHERE watched_video = "YES")' //Need to decide what kind of response is returned - checkbox with boolean or YES/NO?
              //Need to add division of yes_days/COUNT(workout_dates) to get a percentage
            ),
            'daysGoalCompleted', 
          ],
        ],
      },
    });
    res.status(200).json(trackingLogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

// GET a single user
// router.get('/:id', async (req, res) => {
//   try {
//     const trackingLogData = await TrackingLog.findByPk(req.params.id, {
//       include: [{ model: Tracking_Log }],
//       attributes: {
//         include: [
//           [
//             sequelize.literal( 
//               '(SELECT COUNT(workout_dates) AS yes_days FROM tracking_log WHERE watched_video = "YES")' //Need to decide what kind of response is returned - checkbox with boolean or YES/NO?
//               //Need to add division of yes_days/COUNT(workout_dates) to get a percentage
//             ),
//             'daysGoalCompleted', 
//           ],
//         ],
//       },
//     });

//     res.status(200).json(userData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;

// router.get('/', async (req, res) => {
//   try {
//     console.log("message1")
//     const trackingLogData = await TrackingLog.findAll({});

//     /* 
    
//      {
//         "id": 1,
//         "name": "Strength training - Back",
//         "exerciseId": null,
//         "goalExercises": [
//             {
//                 "id": 4,
//                 "goalId": 2,
//                 "exerciseId": 1
//             }
//         ]
//     },

//     {id: 4, goalId: 2, exercises: [{id, name, }]}
//     */
//     res.status(200).json(trackingLogData);
//   } catch (err) {
//     console.log("message", err)
//     res.status(500).json(err);
//   }
// });

// module.exports = router;

