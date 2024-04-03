const express = require('express')
const logger = require("morgan")
const cors = require("cors")
const indexRouter = require("./routes/indexRouter")
const dateRouter = require("./routes/dateRouter")

const port = 3000

const app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(cors())
app.use("/",indexRouter)
app.use("/api/",dateRouter)

app.listen(port,()=>{
    console.log(`server started on port${port}`)
})