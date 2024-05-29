const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const host = '192.168.41.242';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

// Routes
const authRoutes = require('./routes/authRoutes');
const wardrobeRoutes = require('./routes/wardrobeRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/auth', authRoutes);
app.use('/wardrobe', wardrobeRoutes);
app.use('/user', userRoutes);

// Start the server
// const url= '192.168.41.242'
const port = process.env.PORT || 3000;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });


app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});