const User = require('../models/User');
const pool = require('../config/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, email, password: hashedPassword });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.login = async (req, res) => {
    const { identifier, password } = req.body.data;

    // Validate input
    if (!identifier || !password) {
        return res.status(400).json({ error: 'Please provide both email/phone and password' });
    }

    try {
        // Determine if identifier is an email or phone number
        let query = 'SELECT * FROM users WHERE email = ? OR phone = ?';
        
        // Retrieve user from the database
        const [rows] = await pool.execute(query, [identifier, identifier]);

        if (rows.length === 0) {
            return res.status(401).json({ error: 'Invalid phone/email or password' });
        }

        const user = rows[0];

        // Check password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid phone/email or password' });
        }

        // Generate JWT
        const token = jwt.sign({ id: user.id, email: user.email, phone: user.phone }, 'your_jwt_secret', { expiresIn: '1h' });

        res.json({
            data: {
                message: 'Login successful',
                token
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

