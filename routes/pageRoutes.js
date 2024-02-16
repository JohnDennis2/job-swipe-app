const router = require('express').Router();
const { getHome,  
        getLogin, 
        getSavedJobs,
        putProfile
    } = require('../controllers/pageControllers');
const withAuth = require('../utils/helpers');

router.route('/') // TEMPORARY home page router
.get(withAuth, getHome)

router.route('/profile')
.put(putProfile)

router.route('/login')
.get(getLogin)

router.route('/savedJobs')
.get(getSavedJobs)

module.exports = router;