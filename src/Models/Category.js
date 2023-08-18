import mongoose from 'mongoose';



const schema = new mongoose.Schema(
    {
       
        title:{
            type : String,
            required:  true
        },
        
        image:{
            type: String,
            require: true
        },
       
       
        slug:{
            type: String
        },
        
        created: Date,

        
    },
    { timestamps: true }
);

export const CategoryModel = mongoose.model('Category',schema);