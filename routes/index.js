//const router = require('express').Router(); //
const express = require('express');
const router = express.Router();

const apiRoutes = require('./api-routes');
//const express = require('express');
router.use('/api-routes',apiRoutes);
router.use((req, res)=>{
    return res.status(404).send('Wrong Route');

});

module.exports = router;
