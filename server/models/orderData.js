import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    orderID: Number,
    title: String,
    orderItems: [{
        itemName: String,
        unitPrice: Number,
        quantity: Number,
        image: String
    }],
    createdAt: {
        type: Date,
        default: new Date()
    },
    cost: Number
});

const orderData = mongoose.model('orders', orderSchema);

export default orderData;