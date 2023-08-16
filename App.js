const express=require("express")
const date=require("./middleware/Date")
const app=express()
app.use(date)
app.get("/",(req,res)=>{
    res.send("hello world")
})
app.get("/index",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})
 app.get("/about",(req,res)=>{
    res.sendFile(__dirname+"/public/aboutUs.html")
 })

 app.get("*",(req,res)=>{
    res.send("not found !")
 })

const port=5000


app.listen(port,(err)=>{
    err?console.log(err):console.log(`server is running on port ${port}`)
})