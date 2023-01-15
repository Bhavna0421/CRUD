const express = require('express')
const router = express.Router()
const Student = require('../model/student')
router.get('/',async(req,res)=>{
   try{
        const students = await Student.find()
        res.json(students)
   }catch(err){
    res.send('error'+err)
   }
})
router.delete('/:id',async(req,res)=>{
   try{
        const students = await Student.findByIdAndDelete(req.params.id)
        res.json(students)
   }catch(err){
    res.send('error'+err)
   }
})
router.get('/:id',async(req,res)=>{
   try{
        const student = await Student.findById(req.params.id)
        res.json(student)
   }catch(err){
    res.send('error'+err)
   }
})
router.post('/',async(req,res)=>{
    const student = new Student({
        name: req.body.name,
        lastname: req.body.lastname,
        level: req.body.level
        

    })
    try{
      const s1 = await student.save()
      res.json(s1)
    }catch(err){
        res.send('error')
    }
    
})
module.exports=router