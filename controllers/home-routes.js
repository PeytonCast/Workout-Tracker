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

// signup route
router.get('/signup', (req, res) => {
  res.render('signup');
});

// program route
router.get('/programs', withAuth, async(req, res) => {
   res.render('programs', {})
})

// challenge route
router.get('/challenges', withAuth, async(req, res) => {
  res.render('challenges', {})
})

// nutrition route
router.get('/nutrition', withAuth, async(req, res) => {
  res.render('nutrition', {})
})

// workouts route
router.get('/workouts', withAuth, async(req, res) => {
  res.render('workouts', {})
})




  
module.exports = router;
  