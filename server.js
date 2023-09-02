import  express from "express";

import bodyParser from 'body-parser';
var fs = require('fs');
var path = require('path');
import dotenv from 'dotenv';
import cors from 'cors';
import conncectDatabase from "./config/MongoDb.js";
import productss from './routers/products.js';
import catalog from './routers/catalog.js';
import order from './routers/order.js'
import category from './routers/category.js';

dotenv.config();
conncectDatabase(); 
app.set("view engine", "ejs");

const app = express();
const PORT =  process.env.PORT || 1000;
app.use(bodyParser.json({limit: '30mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '30mb'}));
app.use(cors());



app.get("/",(req,res)=>{

    res.send("API running....");
})
app.use('/categories',category);
app.use('/sanpham',productss);
app.use('/catalog',catalog);
app.use('/order',order);
app.listen(PORT,console.log(`server running phu oi...${PORT}`));