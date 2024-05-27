const express = require('express');
const { getAllItems, addItem } = require('../controllers/wardrobeController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authMiddleware);
router.get('/', getAllItems);
router.post('/', addItem);

module.exports = router;
