const healthService = require("../services/health-service");

const getHealths = async (req, res) => {
    try {
        const healths = await healthService.getHealths(req.params.user_id);
        res.status(200).json(healths);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

const getHealth = async (req, res) => {
    try {
        const health = await healthService.getHealth(req.params.id);
        res.status(200).json(health);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

const addHealth = async (req, res) => {
    try {
        const savedHealth = await healthService.addHealth(req.body);
        res.status(201).json(savedHealth);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const editHealth= async (req, res) => {
    try {
        const updatedHealth = await healthService.editHealth(req.params.id, req.body);
        res.status(201).json(updatedHealth);
    } catch (error) {
        if (error === "Health does not exist!")
            res.status(404).json({ message: error });
        res.status(400).json({ message: error });
    }
};

const deleteHealth = async (req, res) => {
    try {
        const removedHealth= await healthService.deleteHealth(req.params.id);
        res.status(200).json(removedHealth);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

module.exports = {
    getHealths,
    getHealth,
    addHealth,
    editHealth,
    deleteHealth,
};