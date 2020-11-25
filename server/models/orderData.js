import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
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

const orderData = mongoose.model('orderData', orderSchema);

export default orderData;