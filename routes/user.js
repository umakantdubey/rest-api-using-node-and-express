const express=require('express');
const router=express.Router();
const { v4: uuidv4 } = require('uuid');
let user=[]


///this end point will be point ing to /user
router.get('/',(req,res)=>{
    console.log(user)
res.send(user)
});

router.post('/',(req,res)=>{
console.log(req.body);
const datauser=req.body;
const datawithid={...datauser,id:uuidv4()};
user.push(datawithid);
res.send(`you response are saved`);
})


router.get('/:id',(req,res)=>{
    const {id}=req.params;
   const founduser= user.find((user)=>user.id===id);
    res.send(founduser);
})

router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    user=user.filter((user)=>user.id!=id);
    res.send('user is deleted')

})
router.patch('/:id',(req,res)=>{
    const {id} = req.params;
const {firstname,lastname,age}=req.body;
const updateduser=user.find((user)=>user.id==id);
if(firstname)
{
    updateduser.firstname=firstname;
}
if(lastname)
{
    updateduser.lastname=lastname;
}
if(age)
{
    updateduser.age=age;
}

res.send("user updated")

})

module.exports =router;
