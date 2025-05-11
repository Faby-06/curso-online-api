const express = require('express');
const router = express.Router();
const { updateProgress, getUserProgress } = require('../controllers/progressController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, updateProgress);
router.get('/:userId', auth, getUserProgress);

module.exports = router;
