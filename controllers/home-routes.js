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

// program route
router.get('/programs', withAuth, async(req, res) => {
   res.render('programs', {})
})

// challenge route
router.get('/challenges', async(req, res) => {
  res.render('challenges', {})
})

// nutrition route
router.get('/nutrition', async(req, res) => {
  res.render('nutrition', {})
})

// workouts route
router.get('/workouts', async(req, res) => {
  res.render('workouts', {})
})




  
module.exports = router;
  