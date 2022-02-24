const Health = require('../models/Health');

const getHealths = async (user_id) => {
    try {
        const healths = await Health.find({user_id:user_id});
        return healths;
    } catch (error) {
        throw error;
    }
};


const getHealth = async (id) => {
    try {
        const health = await Health.findById(id);
        if (!health) throw 'Health data does not exist!';
        return health;
    } catch (error) {
        throw error;
    }
};

const addHealth = async (health) => {
    try {
        const newHealth = new Health(health);
        const savedHealth = await newHealth.save();
        return savedHealth;
    } catch (error) {
        throw error;
    }
};

const editHealth = async (id, fieldsForEdit) => {
    try {
        const updates = Object.keys(fieldsForEdit);
        const allowedUpdates = ['water', 'training', 'sleep', "meal"];

        const isValidOperation = updates.every((update) =>
            allowedUpdates.includes(update)
        );
        if (!isValidOperation)
            throw 'Invalid field(s) for update!';

        const updatedHealth= await Health.findById(id);
        if (!updatedHealth) throw 'Health data does not exist!';

        updates.forEach((update) => {
            updatedHealth[update] = fieldsForEdit[update];
        });
        return await updatedHealth.save();
    } catch (error) {
        throw error;
    }
};

const deleteHealth = async (id) => {
    try {
        const removedHealth = await Health.findByIdAndDelete(id);
        if (!removedHealth) throw 'Health data does not exist!';
        return removedHealth;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getHealths,
    getHealth,
    addHealth,
    editHealth,
    deleteHealth,

};