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


