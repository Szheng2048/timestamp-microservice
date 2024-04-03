const express = require("express")
const router = express.Router()

router.get("/:date?",(req,res)=>{
    const {date}=req.params
    console.log(date)
    if(!date){
        var newDate = new Date()
        let unix = Date.now()
        let utc = newDate.toUTCString()
        console.log(unix,utc)
        res.json({unix:unix,utc:utc})
    } else {
        let utc = new Date(date).toUTCString()
        let unix = new Date(date).getTime()
        console.log(unix,utc)
        res.json({unix:unix,utc:utc})
    }
})


module.exports = router