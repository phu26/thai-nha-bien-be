import  express from "express";

import bodyParser from 'body-parser';

import dotenv from 'dotenv';
import cors from 'cors';
import conncectDatabase from "./config/MongoDb.js";
import productss from './routers/products.js';
import catalog from './routers/catalog.js';

import category from './routers/category.js';

dotenv.config();
conncectDatabase(); 


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
app.listen(PORT,console.log(`server running phu oi...${PORT}`));