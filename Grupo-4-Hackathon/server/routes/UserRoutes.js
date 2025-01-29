const express = require('express');
const router = express.Router();
const authService = require('../services/authService');
const { verifyToken } = require('../services/authMiddleWare');

router.post('/register', async (req, res) => {
    try {
        const result = await authService.registerUser(
            req.body.username,
            req.body.email,
            req.body.password
        );
        res.status(201).json(result);
    } catch (error) {
        if (error.message === 'Email already exists') {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
});

router.post('/login', async (req, res) => {
    try {
        const result = await authService.loginUser(
            req.body.email,
            req.body.password
        );
        res.status(200).json(result);
    } catch (error) {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

router.get('/user', verifyToken, async (req, res) => {
    try {
        const result = await authService.getUserDetails(req.user.email);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

module.exports = router;