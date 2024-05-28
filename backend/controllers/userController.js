// controllers/userController.js

const pool = require('../config/database');

exports.createUser = async (req, res) => {
    const { username, email, password, phone } = req.body.data;

    // Validate input
    if (!username || !email || !password || !phone) {
        return res.status(400).json({ error: 'Please provide all required fields' });
    }

    try {
        // Insert user into the database
        const [result] = await pool.execute(
            'INSERT INTO users (username, email, password, phone) VALUES (?, ?, ?, ?)',
            [username, email, password, phone]
        );

        res.status(201).json({
            data: {
                message:"Account Created Successfully !"
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
