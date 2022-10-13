const router = require('express').Router();
const withAuth = require('../utils/auth');

// GET all content for homepage
router.get('/', async (req, res) => {
    res.render('home');
});

  // Login route
  router.get('/login', (req, res) => {
    res.render('login');
  });


  
  
module.exports = router;
  