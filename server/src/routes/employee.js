const express = require('express');
const Employee = require('../models/Employee');
const employeeRouter = express.Router()


employeeRouter.post("/addEmployee",async(req,res)=>{
    const { id, firstName, lastName, age, position, email, phone, address, image, department, joiningDate, salary, skills,education } = req.body;
    console.log(id,firstName,lastName,age,position,email,phone,address,image,department,joiningDate,salary,skills)
    if (!id || !firstName || !lastName || !age || !position || !email || !phone || !address || !department || !joiningDate || !salary || !skills || !education) {
        return res.status(400).json("Please provide all required fields information");
    }
    
    try {
        const employeeObj = {
            id: id,
            firstName: firstName,
            lastName: lastName,
            age: age, 
            position:position, 
            email: email,
            phone: phone, 
            address:address, 
            image: image, 
            department: department, 
            joiningDate:joiningDate, 
            salary: salary, 
            skills: skills, 
            education: [
                {
                    degree:education[0].degree, 
                    university:education[0].university, 
                    graduationYear:education[0].graduationYear 
                }
            ]
        };

        const employee = new Employee(employeeObj);
        await employee.save();

        res.status(201).json(employee);
    } catch (error) {
        console.error("Employee is not created!", error);
        res.status(401).json(error);
    }
})

employeeRouter.get('/pages', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 8;
        const skip = (page - 1) * limit;
    
        const query = Employee.find()
          .skip(skip)
          .limit(limit);
        
        const result = await query.exec();
    
        res.status(200).json(result);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching data.' });
      }
})

employeeRouter.get(("/"), async(req,res)=>{
    try{
        const employees =await Employee.find()
        res.status(200).json(employees)
    } 
    catch(error) {
        console.log(error)
        res.status(500).json("Internal Server Error!")
    }
})

employeeRouter.get(("/:id"), async(req,res)=>{
    try{
        const id = req.params.id
        const employee =await Employee.findOne({id: id})
        res.status(200).json(employee)
    } 
    catch(error) {
        console.log(error)
        res.status(500).json("Internal Server Error")
    }
})

employeeRouter.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const employee = await Employee.findOneAndUpdate({id:id}, body, { new: true });
        if (employee) {
            res.json(employee);
        } else {
            res.status(404).json({ message: "Employee not found!" });
        }
        } catch (error) {
        res.status(500).json({ message: "Internal server error while updating info!" });
        }
});

employeeRouter.delete("/:id", async (req, res) => {
    try {
        const id = (req.params.id);
        const  employee = await Employee.findOneAndDelete({id:id})
        console.log(employee)
        if (employee) {
            res.status(200).json(employee);
        } else {
            res.status(404).json("Employee not found!");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server Error while deleting info!");
    }
});





module.exports = employeeRouter