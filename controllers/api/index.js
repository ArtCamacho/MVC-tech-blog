const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogroutes');

router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;