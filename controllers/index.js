const router = require('express').Router();

const apiRoutes = require('./api');
const dataAPIRoutes = require('./dataAPI');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dataAPI', dataAPIRoutes);

module.exports = router;
