const express=require('express')
var app=express()
let students=[
    {id:1,name:"ram" ,branch:"it"},

    {id:2 ,name:"raju" ,branch:"it"},

]
app.use(express.json())
app.get("/students",(req,res)=>{
         res.json(students)
})
/*app.get("/students/:id",(req,res)=>{
    const id=req.params.id
    student=students.find(s=>s.id==id)
    if(student){
    res.status(200).json({
        "message":"got student details successfully",
        "student":student
    })
}
    else{
        res.status(400).json({
            message:"not found "
        })
    }
})*/
/*app.delete("/destudents/:id",(req,res)=>{
    const id=req.params.id
    student=students.filter(s=>s.id!=id)
    res.status(200).json({
        "message":"deleted successfully",
        "Student":students
    })          
})   */
/*app.post("/addstudent",(req,res)=>{
    let student=req.body
    students.push(student)
    res.status(200).json({
        "message":"added successfully",
        "student":students
    })
})     */     
app.put("/updatestudent/:id",(req,res)=>{
    const id=req.params.id
    studentindex=students.findIndex(s=>s.id==id)
    if(studentindex!=-1 ){
    students[studentindex].name=req.body.name
    students[studentindex].branch=req.body.branch    
    res.status(200).json({
        "message":"successsfully updated",
        "student":students
    })
}
    else{
        res.status(400).json({
            message:"not found "
        })
    }
})                                 

app.listen(2000,()=>{
    console.log("server started")
})
