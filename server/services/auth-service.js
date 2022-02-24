const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

class AuthService {
    static createToken(user) {
        const payload = {
            user: {
                id: user.id,
            },
        };

        return jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });
    }

    static async loginUsers(email, password) {
        const user = await User.findOne({ email: email });
        if (!user) {
            throw new Error("User doesn't exist!");
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            throw new Error('Error logging in!');
        }
        return this.createToken(user);
    }
}

module.exports = AuthService;