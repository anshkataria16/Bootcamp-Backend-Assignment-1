import express from 'express'
const app = express()

const port = 4000

app.use(express.json())

let students = ['ankit', 'Rahul', 'Priya']

 
app.get('/getStudents', (req,res)=>{
    res.json({
        data:students,
        success:true,
        message: 'data fetched successfully'
    })
})

  app.post('/createStudent', (req,res)=>{
            const name = req.body.name
            const age = req.body.age
            console.log(name);
            
            students.push(name,age)

            console.log(students)

            res.json({
                success:true,
                message:'data create successfully',
                data:students,
            })
  })


app.put("/updatestudent",(req,res)=>{

    const{name,newname} = req.body
    console.log(name,newname)
    const index = students.indexOf(name)

    console.log(index)
    students[index] = newname
    res.json({
        success:true,
        message:"updated successfully",
        data:students
    })

})

app.delete("/deletestudent",(req,res)=>{
    const {name} = req.body
    const index = students.indexOf(name)
    students.splice(index,1)
    res.json({
        success:true,
        message:"deleted successfully",
        data:students
    })
})
app.listen(port, ()=>{
    console.log('server is running in port : ', port)
})