const router = require('express').Router();
const { homePage } = require('../../models');
const withAuth = require('../..utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newhomePage = await homePage.create({
            ...req.body,
            user_id: req.session.user_id,
        });
    
    res.status(200).json(newhomePage);
    } catch (err) {
      res.status(400).json(err);
    }
});

