const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env file
dotenv.config();

// Import database and models
const { sequelize } = require('./config/database');
require('./models/User'); // Ensure models are registered
require('./models/ClothingItem');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
const authRoutes = require('./routes/authRoutes');
const wardrobeRoutes = require('./routes/wardrobeRoutes');

app.use('/auth', authRoutes);
app.use('/wardrobe', wardrobeRoutes);

// Sync database and start the server
sequelize.sync().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch(err => {
    console.log('Error syncing database:', err);
});
