import express from 'express';
import { getProducts,createProduct ,productByID,uploads} from '../controllers/products.js';


const router = express.Router();

router.get('/',getProducts);
router.post('/',createProduct);
router.post('/upPicture',uploads);


export default router;

