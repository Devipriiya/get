import express from "express";
import connectDB from "./db.js";


connectDB();
var app=express();
app.use(express.json());
const studentlist=[
    {
    name:"sangeetha",
     rollno:"14"
    },{
        name:"devipriya",
        rollno:"15"
    },
    {
        name:"sangeetha",
        rollno:"16"
    }
]
console.log(studentlist);
app.get('/students',(req,res)=>{
    try{
        res.status(200).send(studentlist);
    
    }
    catch(error){
          res.json("not found")
    }
})


const port=3000;
app.listen(port,()=>{
    console.log(`server is running at 3000`);
    console.log(studentlist);
}
)
