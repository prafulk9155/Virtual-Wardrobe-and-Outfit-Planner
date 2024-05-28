const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const User = require('./User');

const ClothingItem = sequelize.define('ClothingItem', {
    name: {
        type: DataTypes.STRING,
    },
    category: {
        type: DataTypes.ENUM('top', 'bottom', 'outerwear', 'footwear', 'accessory', 'other'),
        allowNull: false,
    },
    color: {
        type: DataTypes.STRING,
    },
    size: {
        type: DataTypes.STRING,
    },
    imageUrl: {
        type: DataTypes.STRING,
    },
});

ClothingItem.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });

module.exports = ClothingItem;
