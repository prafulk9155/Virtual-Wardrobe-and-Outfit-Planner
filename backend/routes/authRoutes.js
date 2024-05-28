const express = require('express');
const { register, login } = require('../controllers/authController');

const router = express.Router();

router.get('/', (req, res) => {
    // console.log("hello");
    res.send("Main api from the server outfit planner!");
});

router.post('/register', register);
router.post('/login', login);

module.exports = router;
