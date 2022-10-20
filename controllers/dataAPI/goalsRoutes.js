const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Goals } = require('../../models');

//----------------------------------------------------------------------------------------
//API 1: GET
//Grabs all of the goals and returns them to the browser/user so that they can select a goal

router.get('/', async (req, res) => {
  try {
    const goalsData = await Goals.findAll({}); //will this return all goals in the Gaols table?
    res.status(200).json(goalsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;