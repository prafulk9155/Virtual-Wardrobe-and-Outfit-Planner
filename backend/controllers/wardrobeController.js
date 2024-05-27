const ClothingItem = require('../models/ClothingItem');

exports.getAllItems = async (req, res) => {
    try {
        const items = await ClothingItem.findAll({ where: { userId: req.user.id } });
        res.json(items);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.addItem = async (req, res) => {
    try {
        const item = await ClothingItem.create({ ...req.body, userId: req.user.id });
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
