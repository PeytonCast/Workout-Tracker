const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Tracking_Log } = require('../../models');

//------------------------------------------------------------------------------------
//API 4: POST
//This API updates the Tracking_Log table with the user's input for every day - i.e. did they complete their exercise videos?

router.post('/', async (req, res) => {
  try {
    const trackingLogData = await Tracking_Log.create({
      include: [{ model: User }],
      where: {
        id: req.params.id, //How do I connect this to User.id?
      },
      user_id: req.body.user_id,
      workout_date: req.body.workout_date,
      watched_video: req.body.watched_video,
      comments: req.body.comments,
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;


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