import React, {useState} from "react"
import HealthService from "../../Services/HealthService";
import jwt_decode from 'jwt-decode';

const AddHealth = ({fetchHealths}) => {

    //states
    const [water, setWater] = useState("");
    const [meal, setMeal] = useState("");
    const [training, setTraining] = useState("");
    const [sleep, setSleep] = useState("");


    //handle changes
    const handleWaterChange = (event) => {
        setWater(event.target.value);
    };
    const handleMealChange = (event) => {
        setMeal(event.target.value);
    };
    const handleSleepChange = (event) => {
        setSleep(event.target.value);
    };
    const handleTrainingChange = (event) => {
        setTraining(event.target.value);

    };


    const token = localStorage.getItem('token');
    let decoded;
    if (token) decoded = jwt_decode(token);

    //add function for adding new health record
    const addHealth = async (event) => {
        event.preventDefault();

        const data = {
            water,
            meal,
            training,
            sleep,
            user_id: decoded.user.id
        }
        if (data.training === "true") {
            data.training = true
        } else {
            data.training = false
        }

        await HealthService.addHealth(data);
        await fetchHealths()

    };


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
                            value={water}
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
                            min="0"
                            name="sleep"
                            value={sleep}
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
                            value={meal}
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
                            value={training}
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
                        onClick={addHealth}

                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddHealth