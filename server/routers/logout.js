const express = require('express');
const router = express.Router();

router.post('/logout',(req,res)=>{
    req.session.loginUser = null;
    res.send({user:req.session.loginUser});
})

module.exports = router;