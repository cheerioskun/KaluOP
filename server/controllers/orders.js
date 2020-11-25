import orderData from '../models/orderData.js';

export const getOrder = async (req, res) => {
    try{
        const orders = await orderData.find();
        res.status(200).json(orders);
    }catch(error){
        res.status(404).json({message: error.message});
    }
};

export const createOrder = async (req, res) => {
    const order = req.body;
    const newOrder = new orderData(order);
    try{
        await newOrder.save();
        res.status(200).json(newOrder);
    }catch(error){
        res.status(409).json({message: error.message});
    }
}