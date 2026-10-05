const express=require('express')
const app=express()

// app.get
// app.post
// app.put
// app.delete

app.get('/coin',(req,res)=>{
    res.send("<h1> Grab Coins</h1><p>Coins: 3500</p>")
}) 
app.get('/history',(req,res)=>{
    res.send("<h1>Payment successful</h1><p>-3500</p>")
}) 
//public
const path=require("path")
app.use(express.static(path.join(__dirname,'public')))

app.listen(2002,()=>{
    console.log('Server is running in port 2002')
})

