const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name :String,
    email: String,
    password: String
})
const employeemodel = mongoose.model("employees",  Schema)
module.exports = employeemodel;

