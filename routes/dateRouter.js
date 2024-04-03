const express = require("express")
const router = express.Router()

router.get("/:date?",(req,res)=>{
    const {date}=req.params
    if(!date){
        var newDate = new Date()
        let unix = Date.now()
        let utc = newDate.toUTCString()
        res.json({unix:unix,utc:utc})
    } else {
        let utc = new Date(Number(date)).toUTCString()
        let unix = new Date(Number(date)).getTime()
        res.json({unix:unix,utc:utc})
    }
})


module.exports = router