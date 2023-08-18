import express from 'express';
import { productByID} from '../controllers/products.js';


const router = express.Router();


router.get('/:productId',productByID);

export default router;

