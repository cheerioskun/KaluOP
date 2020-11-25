import express from 'express';
import { getOrder, createOrder } from '../controllers/orders.js';
const router = express.Router();
router.get('/', getOrder);

export default router;