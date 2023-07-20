import express from "express";
import studentModel from "./studentModel.js";
import mongoose from "mongoose";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const students = await studentModel.find();
    return res.status(200).json(students);
  } catch (error) {
    return res.status(404).json({ msg: error.message });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, department } = req.body;
    const updatedStudent = await studentModel.findByIdAndUpdate(
      id,
      {
        name,
        email,
        department,
      },
      { new: true }
    );
    return res.status(200).json(updatedStudent) ; 
  } catch (error) {
    return res.status(500).json({msg:error.message})
  }
});

router.delete("/delete/:id",async(req,res)=>{
    try {
        const {id}=req.params
        mongoose.Types.ObjectId.isValid(id)
        const deletedStudent = await studentModel.findByIdAndDelete(id)
        return res.status(202).json(deletedStudent)
    } catch (error) {
        return res.status(500).json({msg:error.message})
    }
})

router.post("/", async (req, res) => {
  try {
    const student = await studentModel.create(req.body);
    return res.status(201).json(student);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

export default router;
