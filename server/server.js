require('dotenv').config(); 

const express = require("express");
var cors = require('cors')
const mongoose = require("mongoose");

const { Employee, Sector } = require("./models");

const app = express();

app.use(express.json());

app.use(cors());

// just server checking
app.get("/", async (req, res) => {
  return res.json({ message: "Hello, World ✌️" });
});

// get all emps
app.get("/employees", async (req, res) => {
    const allEmps = await Employee.find();
    return res.status(200).json(allEmps);
});

// get all parent sectors
app.get("/parent-sectors", async (req, res) => {
    const allParentSec = await Sector.find().select({ parent: 0 });
    return res.status(200).json(allParentSec);
});

// get all child sectors
app.get("/child-sectors/:id", async (req, res) => {
    const { id } = req.params;
    const allChildSec = await Sector.find().select({ parent: id });
    return res.status(200).json(allChildSec);
});

// get single emp by id
app.get("/employees/:id", async (req, res) => {
    const { id } = req.params;
    const emp = await Employee.findById(id);
    return res.status(200).json(emp);
});

// create new emp
app.post("/employees", async (req, res) => {
    const newEmp = new Employee({ ...req.body });
    const insertedEmp = await newEmp.save();
    return res.status(201).json(insertedEmp);
});

// create sector
app.post("/sectors", async (req, res) => {
    const newSector = new Sector({ ...req.body });
    const insertedSec = await newSector.save();
    return res.status(201).json(insertedSec);
});

//update emp by id
app.put("/employees/:id", async (req, res) => {
    const { id } = req.params;
    await Employee.updateOne({ '_id' : id }, req.body);
    const updatedEmp = await Employee.findById(id);
    return res.status(200).json(updatedEmp);
});

//delete emp by id
app.delete("/employees/:id", async (req, res) => {
    const { id } = req.params;
    const deletedEmp = await Employee.findByIdAndDelete(id);
    return res.status(200).json(deletedEmp);
});

const start = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(
            process.env.DB_PATH || "mongodb+srv://root:root@reactformcluster.eywmupo.mongodb.net/?retryWrites=true&w=majority"
        );
        app.listen(process.env.SERVER_PORT || 8080, () => console.log("Server started on port "+process.env.SERVER_PORT || 8080));
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
  };

start();