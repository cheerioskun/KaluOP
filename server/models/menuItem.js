import mongoose from 'mongoose';

const menuItemSchema = mongoose.Schema({
    itemName: String,
    unitPrice: Number,
    quantity: Number,
    image: String,
    createdAt: {
        type: Date,
        default: new Date()
    },

});

const menuItem = mongoose.model('menuItem', menuItemSchema);

export default menuItem;