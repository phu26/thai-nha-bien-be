import { ProductModel } from "../Models/ProductModel.js";
import multer  from "multer";
const DIR = './public/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        console.log("file",file);
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});
export const getProducts = async (req,res) =>{
try{
    const products = await ProductModel.find();
                       

            res.status(200).json(products);
}
catch(err){
res.status(500).json({error : err});
}

};


export const uploads = async (req,res) =>{
   
   
   const {base64} =  req.body;
   try{
    const product =  new ProductModel({
       
        title:"Nước Mắm ",
        price:"950000",
        image01:base64,
        image02:"none",
        categoryId:"1",
        colors:["viền gỗ mdf","viền gỗ thông"],
        slug:"nuoc-mam-ca-com",
        size:["500 ml"],
        description:"Nước Mắm Nhĩ đặc biệt</br>thể tích: 500ml</br> Thành phần: </br> Cá cơm và muối hột, không chất bảo quản, không chất tạo màu, không chất điều vị</br>Nước mắm làng Chài Phước Thể Bình Thuận</br>Cách dùng: Chấm sống trực tiếp</br>muì đặc trưng của cá cơm ủ với muối.",
       
    });
        
    await product.save();
    
    res.status(200).json(product);
   }catch(err){
    res.status(500).json({error : err});
   }
    
    };

export const getNewProducts = async (req,res) =>{
    try{
        const products = await ProductModel.find()
         .sort('-created')
        .exec()
                           
    console.log('nuocmam',products);
                res.status(200).json(products);
    }
    catch(err){
    res.status(500).json({error : err});
    }
    
    };


export const createProduct = async (req,res) =>{
    try{
       
   
        const {base641} =  req.body.image;
        const product =  new ProductModel({
            
            title:req.body.title,
            price:req.body.price,
            image:req.body.image,
           
            slug:req.body.categorySlug,
            khohang:req.body.sl,
            sub:req.body.object,
            size:req.body.tenPL,
            description:req.body.body,
           
        });
        await product.save();   
        res.status(200).json(product);
      
    }
    catch(err){
        
    res.status(500).json({error : err});
    }
    
    }


export const productByID = async (req, res) => {
try{
    const id = req.params.productId;
    console.log(id);
    
  let product = await ProductModel.find({_id:id})
  
  res.json(product)
  

}
catch(err)
{
    return res.status('400').json({
        error : "Could not retrieve product"
    })
}

}