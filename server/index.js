const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors())
const employeemodel = require("./models/employee")

mongoose.connect("mongodb+srv://lalo:lalo@login.6tszy.mongodb.net/?retryWrites=true&w=majority&appName=login")
try {
    console.log("success");
}
catch (err) {
    console.log(err)
}

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    employeemodel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success")
                }
                else {
                    res.json("The password is incorrect")
                }
            }
            else{
                res.send("Please Register")
            }
        })

})

app.post('/register', (req, res) => {
    // const { name, email, password } = req.body;
    employeemodel.create(req.body)
        .then(employee => res.json(employee))
        .catch(err => res.json(err))
})

app.listen(3000, () => {
    console.log("connect to the port 3000")
})