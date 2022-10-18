const router = require('express').Router();
// const userRoutes = require('./userRoutes');
const apiRoutes = require('./databaseRoutes')
// router.use('/users', userRoutes);
router.use('/dataAPI', apiRoutes);

module.exports = router;
