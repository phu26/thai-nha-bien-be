import mongoose from 'mongoose';



const schema = new mongoose.Schema(
    {
        id:{
            type: Number,
            required: false
        
        },
        title:{
            type : String,
            required:  true
        },
        price:{
            type : String,
            require: true
        },
        image:[
             String
        
            
        ],
        
       
       
        slug:{
            type: String,
            require: true
        },
        size:[String],
        sub:[{
            id:Number,
            binVisible:String,
            binVisibleBool:Boolean,
            text:String,
            val:Number,
            price:Number,
               
         
        }],
    
        description:{
            type: String
        },
        khohang:{
type:String
        },

        created: Date,

        
    },
    { timestamps: true }
);

export const ProductModel = mongoose.model('SanPham',schema);