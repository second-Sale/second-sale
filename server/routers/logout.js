const express = require('express');
const router = express.Router();

router.post('/logout',(req,res)=>{
    res.send({user:''});
})

module.exports = router;