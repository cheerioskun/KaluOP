import menuItem from '../models/menuItem.js';
export const getMenuItems = async (req, res) => {
    try {
        const menuItems = await menuItem.find();
        res.status(200).json(menuItems);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createMenuItem = async (req, res) => {
    try {
        const newItem = new menuItem({ itemName: req.body.itemName, unitPrice: Number(req.body.unitPrice), image: req.body.base64Image });
        newItem.save().then(() => { console.log('Logged' + req.body.itemName) });
        res.status(200).json(req.body);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}