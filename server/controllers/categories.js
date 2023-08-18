import { CategoryModel } from "../Models/Category.js";



export const getCategories = async (req,res) =>{

    try{
       let categories =  await CategoryModel.find();
       
       res.status(200).json(categories); 
    }
    catch(err)
    {
        res.status(500).json({ error : err});
    }
};

export const createCategory = async (req,res) => {
    try {
        console.log(req.body);
     const newCategory = req.body;
     const post = new CategoryModel(newCategory);



     await post.save();   
     res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error : err});
    }
};
