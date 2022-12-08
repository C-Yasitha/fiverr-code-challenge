const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    sectors: {
      type: [Number],
      required: true,
    },
    is_agree: {
      type: Boolean,
      required: true,
      default : true
    },
  });

const sectorsSchema = new mongoose.Schema({
    id: Number,
    name: {
      type: String,
      required: true,
    },
    parent: {
        type: Number,
        required: true,
    },
  });

const Employee = mongoose.model("Employee", employeeSchema);
const Sector = mongoose.model("Sector", sectorsSchema);

module.exports = { Employee,Sector };