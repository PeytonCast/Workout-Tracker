const router = require('express').Router();
const { User, Tracking_Log } = require('../../models');
const withAuth = require('../../utils/auth');
const nodemailer = require('nodemailer')

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      
    });
    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user:"work-it-out2022@outlook.com",
        pass:`${process.env.EMAIL_PASS}`
      }})
    const options = {
      from: "work-it-out2022@outlook.com",
      to: `${dbUserData.email}`,
      subject: "Welcome to WorkitOut!",
      text: `
      Hello ${dbUserData.username},
      Your account has 
      successfuly been created! 
      Are you ready to work it out?
      `
    }
    transporter.sendMail(options, function (err, info) {
        if (err) { console.log(err)
           return;}
           console.log("sent: " + info.response)
       })
    req.session.save(() => {
      req.session.userId = dbUserData.id;
      req.session.loggedIn = true;

      res.status(201).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
    try {
      const dbUserData = await User.findOne({
        where: {
          username: req.body.username,
        },
      });
  
      if (!dbUserData) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password. Please try again!' });
        return;
      }
  
      const validPassword = await dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.userId = dbUserData.id;

  
        res
          .status(200)
          .json({ user: dbUserData, message: 'You are now logged in!' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });



//logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
});

router.post('/diary', async (req, res) => {
  try {
    const diary = await Tracking_Log.create({
      userId: req.session.userId,
      comments: req.body.comments
    })
    res.status(200).json(diary)
  } catch (error) {
    res.status(500).json(error);
  }
});
// update change goals
// when a user selects a goal then the option will have a goal id value
router.put('/goals/:id', async (req, res) => {
  try {
    const update = await User.update(
      {
        goalId: req.body.goal_id
      },
      { where: {
          id: req.params.id, 
          }
      }
      );
    res.status(200).json(update);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
