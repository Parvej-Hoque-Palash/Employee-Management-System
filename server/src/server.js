require('dotenv').config()
const express = require('express');
const cors = require('cors');

const { connectMongoDB } = require('./config/db');
const adminRoutes = require('./routes/admin');
const employeeRoutes = require('./routes/employee');


const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

connectMongoDB();

app.use('/api/admin', adminRoutes)
app.use('/api/employee', employeeRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})