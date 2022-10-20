const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Exercises, Goals, TrackingLog } = require('../models/index')

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

router.get('/success', (req, res) => {
  res.render('success');
});

// program route
router.get('/programs', withAuth, async(req, res) => {
  try{
    const data = await User.findByPk(req.session.userId, {
    include: [{model:Goals}]
  });
  // res.json(data)
  const info = data.get({ plain: true });
   res.render('programs', {info, userId: req.session.userId})
}
catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
)

// program route
router.get('/myAccount', withAuth, async(req, res) => {
  try{
    const data = await User.findByPk(req.session.userId, {
    include: [{model:TrackingLog}]
  });
  // res.json(data)
  const info = data.get({ plain: true });
  res.render('myAccount', { info, loggedIn: req.session.loggedIn })
  } 
   
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

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
  