const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.json({message:"successfully started the app"})
})




module.exports = router