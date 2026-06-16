require("dotenv").config();
console.log("MONGO_URL =", process.env.MONGO_URL);
const express = require('express');
const app=express();
const connectDB = require('./config/db');
const {router,getRoute} = require('./Routes/routes');
const cors = require('cors');
const adminRoutes = require('./Routes/adminRoute');

app.use(cors());

app.use(express.json());
app.use('/api', router);
app.use('/api/admin', adminRoutes);
app.use('/api/get', getRoute);

connectDB().then(()=>{
    app.listen(5000,()=>{
        console.log('Server is running on port 5000');
    })
})