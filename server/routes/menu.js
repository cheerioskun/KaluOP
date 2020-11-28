import express from 'express';
import { getMenuItems, createMenuItem } from '../controllers/menuItems.js';
const router = express.Router();
router.get('/', getMenuItems);
router.get('/create/', createMenuItem);
export default router;