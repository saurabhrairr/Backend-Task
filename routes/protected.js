
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const User = require('../models/User');



// for authMiddleware added to protect route also get all userdetails
router.get('/protected-route', authMiddleware, async (req, res) => {
    try {
        const user = await User.find();
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'This is a protected route', user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
