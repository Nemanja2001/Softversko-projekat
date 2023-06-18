const express = require("express")
const app = express()

const drzavarouter = require('./routers/drzava_router')

app.use(express.json())

app.use('/country/', drzavarouter);

app.listen(3001,()=>{
    console.log("Server is listening on port 3001")
})