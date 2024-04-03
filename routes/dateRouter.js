const express = require("express")
const router = express.Router()

router.get("/:date?",(req,res)=>{
    const {date}=req.params
    if(!date){
        var newDate = new Date()
        let unix = Date.now()
        let utc = newDate.toUTCString()
        res.json({unix:unix,utc:utc})
    } else{
        let testArr = "1234567890"
        let isUnix =true
        for(let num of date){
            if(!testArr.includes(num)){
                isUnix = false
            }
        }
        console.log(isUnix)
        if(!isUnix){
            let utc = new Date(date).toUTCString()
            let unix = new Date(date).getTime()
            console.log(unix,utc)
            res.json({unix:unix,utc:utc})
        } else {
            let utc = new Date(Number(date)).toUTCString()
            let unix = new Date(Number(date)).getTime()
            console.log(unix,utc)
            res.json({unix:unix,utc:utc})
        }
    }
})


module.exports = router