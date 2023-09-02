import mongoose from 'mongoose';



const schema = new mongoose.Schema(
    {
        
        hoTen:{
            type : String,
            required:  true
        },
        diaChi:{
            type : String,
            require: true
        },
        Sdt:{
            type : String,
            require: true
        },
        toTal:{
            type : Number,
            require: true
        },
       
        orDer:[{
            id:String,
            slug:String,
            title:String,
            size:String,
            quantity:Number,
            price:Number,
               
         
        }],
    
       
      

        created: Date,

        
    },
    { timestamps: true }
);

export const OrderModel = mongoose.model('Order',schema);