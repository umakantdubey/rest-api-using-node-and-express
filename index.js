const express= require('express');
const bodyparser=require('body-parser');
const userrouter=require('./routes/user')
const app=express();
const PORT=3000|process.env.PORT;
app.use(bodyparser.json());
app.use('/users',userrouter);
app.get('/',(req,res)=>{
    res.send("hello from homepage")

})
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})