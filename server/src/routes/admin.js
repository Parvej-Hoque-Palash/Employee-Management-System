const express = require('express');
const Admin = require('../models/Admin');
const adminRouter = express.Router();
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");

const secretKey = process.env.JWT_SECRET;
const tokenDuration = process.env.TOKEN_DURATION;

adminRouter.post("/register", async(req, res) => {
    const { username, email, password } = req.body;
    if( !username || !email || !password) {
        return res.status(400).json("Please provide username, email, and password!");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    const hashedPassword = hash;
    const adminObj = {
        username : username,
        email : email,
        password : hashedPassword
    }
    try {
        const admin = new Admin(adminObj)
        await admin.save()
        res.status(201).json(admin)
    } catch (error) {
        console.log("Admin is not created!");
        res.status(401).json(error);
    }
})

adminRouter.get("/", async(req, res) => {
    try {
        const admins = await Admin.find();
        res.status(200).json(admins);
    } catch (error) {
        console.log("Admin fetching error : ", error);
        res.status(500).json({ error : "Internal server error!" });
    }
})

adminRouter.post("/login", async(req, res) => {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email: email })
    if(!admin) {
        return res.status(401).json("User(admin) not found!")
    }

    const isValidPassword = await bcrypt.compare(password, admin.password);
    if(!isValidPassword) {
        return res.status(401).json("Wrong Password");
    }


    try {
        const accessToken = await jwt.sign(
            { email: admin.email, id: admin._id },
            secretKey,
            { expiresIn: tokenDuration }
        );
        const refreshToken = await jwt.sign(
            { email: admin.email, id: admin._id },
            secretKey,
            { expiresIn: tokenDuration }
        );
        adminObj = admin.toJSON(admin);
        adminObj["accessToken"] = accessToken;
        adminObj["refreshToken"] = refreshToken;

        res.status(201).json(adminObj.accessToken);
    } catch (error) {
        console.log(error)
        res.status(400).json("User not found!!!")
    }
})
module.exports = adminRouter