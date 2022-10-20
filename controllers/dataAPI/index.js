const router = require('express').Router();
// const userRoutes = require('./userRoutes');
//const exercisesRoutes = require('./exercisesRoutes')
const goalExercisesRoutes = require('./goalExercisesRoutes')
const goalsRoutes = require('./goalsRoutes')
const trackingLogRoutes = require('./trackingLogRoutes')
const exercisesRoutes = require('./exercisesRoutes')
//const apiRoutes = require('./databaseRoutes')

// router.use('/users', userRoutes);
router.use('/exercises', exercisesRoutes);
router.use('/goals', goalsRoutes);
router.use('/goalExercises', goalExercisesRoutes);
router.use('/trackingLog', trackingLogRoutes);

module.exports = router;
