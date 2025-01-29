const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../data/User');

const authService = {
    async registerUser(username, email, password) {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error('Email already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });
        
        await newUser.save();
        return { message: 'User registered successfully' };
    },

    async loginUser(email, password) {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('Invalid credentials');
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            throw new Error('Invalid credentials');
        }

        const token = jwt.sign({ email: user.email }, 'secret');
        return { token };
    },

    async getUserDetails(email) {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }
        return { username: user.username, email: user.email };
    }
};

module.exports = authService;