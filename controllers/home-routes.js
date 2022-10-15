const router = require('express').Router();
const withAuth = require('../utils/auth');
// const { User}

// GET all content for homepage
router.get('/', async (req, res) => {
    res.render('home', { loggedIn : req.session.loggedIn });
});

  // Login route
router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/goals', async(req, res) => {
   res.render('goals', {})
})

  
module.exports = router;
  