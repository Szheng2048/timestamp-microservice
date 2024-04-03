const express = require('express')
const logger = require("morgan")

const port = 3000

const app = express()

app.use(logger("dev"))
app.use(express.json())

app.listen(port,()=>{
    console.log(`server started on port${port}`)
})