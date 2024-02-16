const router = require('express').Router();
// const appRoutes = require('./appRoutes'); DEPRECATED
const jobRoutes = require('./jobRoutes');
const userRoutes = require('./userRoutes');
const { putProfile } = require('../../controllers/pageControllers');

// router.use('/app', appRoutes); DEPRECATED
router.use('/job', jobRoutes);
router.use('/user', userRoutes);


router.route('/profile')
.put(putProfile)

module.exports = router;