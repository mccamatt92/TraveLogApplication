const { Router } = require('express');

const router = Router();

router.get('/',(req,res)=>{
    res.json({
        message:'🌎'
    })
})


router.post('/',(req,res)=>{
})

module.exports = router;

