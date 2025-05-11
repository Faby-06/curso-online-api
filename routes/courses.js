const express = require('express');
const router = express.Router();
const { createCourse, getCourses } = require('../controllers/courseController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, createCourse);
router.get('/', auth, getCourses);

module.exports = router;
