import { OrderModel } from "../Models/OrderModel.js";
import multer  from "multer";
const DIR = './public/';

export const getOrders = async (req,res) =>{

    try{
       let orders =  await OrderModel.find();
       
       res.status(200).json(orders); 
    }
    catch(err)
    {
        res.status(500).json({ error : err});
    }
};
export const createOrder = async (req,res) =>{
    try{
       console.log("sdkaklsdjalksdjlkajsdlksajdlkajsd");
   
      
        const order =  new OrderModel({
            
            hoTen:req.body.hoTen,
            diaChi:req.body.diaChi,
            Sdt:req.body.Sdt,
            toTal:req.body.total,
            orDer:req.body.order,
            
           
        });
        console.log(order);
        await order.save();   
        res.status(200).json(order);
      
    }
    catch(err){
        
    res.status(500).json({error : err});
    }
    
}

