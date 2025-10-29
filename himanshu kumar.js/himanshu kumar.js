const express=require("express");
const app=express();
const  dotenv = require("dotenv")
dotenv.config();
app.use(express.json());

const connectDB = require(',/DB/config')

const studentroutes = require (' ,/routes/studentRoutes ');

app.use(' api/v1/user ' ,studentRoutes)
 
