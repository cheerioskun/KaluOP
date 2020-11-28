import mongoose from 'mongoose';

const menuSchema = mongoose.Schema({
    menu: [{itemName: String,
        unitPrice: Number,
        quantity: Number,
        image: String,
        createdAt: {
            type: Date,
            default: new Date()
        }
    }],
});

const menuData = mongoose.model('menuData', menuSchema);

export default menuData;