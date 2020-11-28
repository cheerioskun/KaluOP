import menuItem from '../models/menuItem.js';
export const getMenuItems = async (req, res) => {
    try{
        const menuItems = await menuItem.find();
        res.status(200).json(menuItems);
    }catch(error){
        res.status(404).json({message: error.message});
    }
};

export const createMenuItem = async (req, res) => {
    try{
        console.log('Here');
        console.log(req.body);
        res.status(200).json({});
    }catch(error){
        res.status(404).json({message: error.message});
    }
}