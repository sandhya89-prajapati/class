const express = require("express")

const app = express()

const exampleRoutes = require("./controller/routes/exampleRoutes")

app.use('/',exampleRoutes)
// app.get('/hi',(req,res)=>{
//     res.send('Hello server')
// })



const POST = 5000

app.listen(POST,()=>{
    console.log(`server running on port ${POST}`)
});