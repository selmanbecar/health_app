import React, {useEffect} from "react"
import HealthService from "../../Services/HealthService";
import {useNavigate} from "react-router-dom";

const HealthList = ({fetchHealths, healths, decoded, setEditData}) => {
    let navigate = useNavigate()


    const delteHealthRecord = async (id) => {
        await HealthService.deleteHealth(id)
        await fetchHealths()
    }

    useEffect(() => {
        if (!decoded) {
            navigate("/login", {replace: true});
        }
        (async () => {
            
            await fetchHealths();
        })();
    },);


    return (
        <div>
            {healths && healths.map((item) => {
                return (
                    <div style={{border: "1px solid black", margin: "5px", padding: "1px", lineHeight: "0.5"}}>
                        <h4>Water: {item.water && item.water}</h4>
                        <h4>Meal: {item.meal && item.meal}</h4>
                        <h4>Sleep: {item.sleep && item.sleep}h</h4>
                        <h4>Training: {item.training && item.training ? <p>Yes</p> : <p>No</p>}</h4>
                        <h4>Day: {item.createdAt && item.createdAt.slice(0, 10)}</h4>

                        <button onClick={() => {
                            delteHealthRecord(item._id)
                        }}>Delete
                        </button>
                        <button onClick={() => {
                            setEditData(item)
                        }}>Edit
                        </button>
                    </div>
                )
            })}

        </div>
    )
}

export default HealthList