const express = require('express');
const router = express.Router();

const AuthRoutes = require('@components/auth/routes');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node Base JWT' });
});

router.use('/api/auth', AuthRoutes);

module.exports = router;
