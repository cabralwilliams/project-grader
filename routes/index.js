const project1Routes = require('./project1');
const router = require('express').Router();

router.use('/project1', project1Routes);

module.exports = router;