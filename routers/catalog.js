import express from 'express';
import { productByID,zaalo} from '../controllers/products.js';


const router = express.Router();


router.get('/:productId',productByID);
router.get('/zalo',zaalo);

export default router;

