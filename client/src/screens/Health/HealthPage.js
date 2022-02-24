import React, {useEffect, useState} from "react"
import HealthList from "../../components/HealthList";
import AddHealth from "../../components/AddHealth";
import AuthService from "../../Services/AuthService";
import {useNavigate} from "react-router-dom";
import HealthService from "../../Services/HealthService";
import jwt_decode from "jwt-decode";
import EditHealth from "../../components/EditHealth";

const HealthPage = () => {
    const [healths, setHealths] = useState([]);
    const [editData, setEditData] = useState({})
    const token = localStorage.getItem('token');
    let decoded;
    if (token) decoded = jwt_decode(token);
    let navigate = useNavigate()

    const fetchHealths = async () => {
        if (decoded) {
            let healthsData = await HealthService.getAllHealths(decoded.user.id);
            setHealths(healthsData);
        }
    };

    useEffect(() => {

        if (!decoded) {
            navigate("/login", {replace: true});
        }

        (async () => {

            if ((await AuthService.verify(localStorage.getItem('token'))) === false) {

                navigate("/login", {replace: true});
            }
        })();
    },);

    return (
        <>
            <button style={{height: "50px"}} onClick={() => {
                localStorage.removeItem("token")
                navigate("/login", {replace: true});

            }}>Logout
            </button>
            <button style={{height: "50px"}} onClick={() => {

                setEditData(false)
            }}>ADD
            </button>
            <div style={{display: "flex", flexDirection: "row"}}>

                <div style={{width: "50%"}}>
                    <HealthList fetchHealths={fetchHealths} healths={healths} decoded={decoded}
                                setEditData={setEditData}/>
                </div>
                <div style={{width: "50%"}}>
                    {editData ?
                        <EditHealth setEditData={setEditData} editData={editData} fetchHealths={fetchHealths}/> :
                        <AddHealth fetchHealths={fetchHealths}/>}
                </div>
            </div>
        </>
    )
}

export default HealthPage