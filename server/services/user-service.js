const User = require('../models/User');

const getUsers = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        throw error;
    }
};

const doesUserExist = async (email) => {
    try {
        return await User.findOne({ email: email });
    } catch (error) {
        throw {
            error: "Error while trying to check if user exists!",
            details: error,
        };
    }
};

const getUser = async (id) => {
    try {
        const user = await User.findById(id);
        if (!user) throw 'User does not exist!';
        return user;
    } catch (error) {
        throw error;
    }
};

const addUser = async (user) => {
    try {
        const newUser = new User(user);
        const savedUser = await newUser.save();
        return savedUser;
    } catch (error) {
        throw error;
    }
};

const editUser = async (id, fieldsForEdit) => {
    try {
        const updates = Object.keys(fieldsForEdit);
        const allowedUpdates = ['email', 'username', 'password'];

        const isValidOperation = updates.every((update) =>
            allowedUpdates.includes(update)
        );
        if (!isValidOperation)
            throw 'Invalid field(s) for update! Allowed updates are: email, username and password.';

        const updatedUser = await User.findById(id);
        if (!updatedUser) throw 'User does not exist!';

        updates.forEach((update) => {
            updatedUser[update] = fieldsForEdit[update];
        });
        return await updatedUser.save();
    } catch (error) {
        throw error;
    }
};

const deleteUser = async (id) => {
    try {
        const removedUser = await User.findByIdAndDelete(id);
        if (!removedUser) throw 'User does not exist!';
        return removedUser;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getUsers,
    getUser,
    addUser,
    editUser,
    deleteUser,
    doesUserExist,
};