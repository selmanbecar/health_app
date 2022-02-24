const userService = require("../services/user-service");

const getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

const getUser = async (req, res) => {
    try {
        const user = await userService.getUser(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

const addUser = async (req, res) => {
    try {
        const savedUser = await userService.addUser({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        });
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const editUser = async (req, res) => {
    try {
        const updatedUser = await userService.editUser(req.params.id, req.body);
        res.status(201).json(updatedUser);
    } catch (error) {
        if (error === "User does not exist!")
            res.status(404).json({ message: error });
        res.status(400).json({ message: error });
    }
};

const deleteUser = async (req, res) => {
    try {
        const removedUser = await userService.deleteUser(req.params.id);
        res.status(200).json(removedUser);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

module.exports = {
    getUsers,
    getUser,
    addUser,
    editUser,
    deleteUser,
};