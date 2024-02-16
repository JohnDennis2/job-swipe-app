const router = require('express').Router();
const {
  postFunc,
  loginFunc
} = require('../../controllers/userControllers');

router.route('/')
.post(postFunc);

router.route('/login')
.post(loginFunc);



module.exports = router;
