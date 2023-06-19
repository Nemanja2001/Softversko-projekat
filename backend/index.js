const express = require("express")
const app = express()

const drzavarouter = require('./routers/drzava_router')
const universityrouter = require('./routers/univerzitet_router')
const facultyrouter = require('./routers/fakultet_router')
const facultyunitrouter = require('./routers/fakultetskajedinica_router')
const userrouter = require('./routers/korisnici_router')
app.use(express.json())

app.use('/country/', drzavarouter);
app.use('/universities/', universityrouter)
app.use('/faculty/',facultyrouter)
app.use('/facultyunit/', facultyunitrouter)
app.use('/', userrouter)
app.listen(3001,()=>{
    console.log("Server is listening on port 3001")
})