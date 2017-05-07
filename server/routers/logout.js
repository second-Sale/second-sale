const express = require('express');
const router = express.Router();

router.post('/logout',(req,res)=>{
    req.session.loginUser = '';
    res.send({isTrue:'0',user:req.session.loginUser});
})

module.exports = router;