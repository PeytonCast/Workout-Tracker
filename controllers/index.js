const router = require('express').Router();
const GoalTracker = require('./goalTracker');

router.use("/goalTracker", workoutPageRoutes);
router.use("/homePage", homePageRoutes);

module.exports = router;
