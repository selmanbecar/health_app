import React from "react"
import HealthService from "../../Services/HealthService";


const EditHealth = ({fetchHealths, id, editData, setEditData}) => {


    //handle changes
    const handleWaterChange = (event) => {
        setEditData({...editData, water: event.target.value});
    };
    const handleMealChange = (event) => {
        setEditData({...editData, meal: event.target.value});

    };
    const handleSleepChange = (event) => {
        setEditData({...editData, sleep: event.target.value});

    };
    const handleTrainingChange = (event) => {
        setEditData({...editData, training: event.target.value});


    };


    //add function for adding new health record
    const editHealth = async (event) => {
        event.preventDefault();

        const data = {
            water: editData.water,
            sleep: editData.sleep,
            training: editData.training,
            meal: editData.meal
        }
        if (data.training === "true") {
            data.training = true
        } else {
            data.training = false
        }

        await HealthService.editHealth(editData._id, data);
        await fetchHealths()

    };

//jsx
    return (
        <div>
            <form>
                <div>
                    <div/>
                    <div>
                        <p>water</p>
                        <input
                            type="text"
                            required
                            id="water"
                            name="water"
                            value={editData.water}
                            onChange={handleWaterChange}
                            autoComplete="water"
                        />
                    </div>
                    <div>
                        <p>sleep</p>
                        <input
                            type="number"
                            required
                            id="sleep"
                            name="sleep"
                            min="0"
                            value={editData.sleep}
                            onChange={handleSleepChange}
                            autoComplete="sleep"
                        />
                    </div>
                    <div>
                        <p>meal</p>
                        <input
                            type="number"
                            min="0"
                            required
                            id="meal"
                            name="meal"
                            value={editData.meal}
                            onChange={handleMealChange}
                            autoComplete="meal"
                        />
                    </div>
                    <div>
                        <p>training</p>
                        <select
                            required
                            id="training"
                            name="training"
                            autoComplete="training"
                            value={editData.training}
                            onChange={handleTrainingChange}>
                            <option value="true">Yes</option>
                            <option value="false">No</option>

                        </select>
                    </div>

                    <button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        onClick={editHealth}

                    >
                        Edit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditHealth