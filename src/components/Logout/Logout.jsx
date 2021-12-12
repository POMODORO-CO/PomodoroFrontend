import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const Logout=()=>{
    const {setToken}=useAuth();
    const deleteToken=()=>{
        setToken(null);
    };
    return(
        <div>
            <NavLink to='/'>
                <div onClick={()=>deleteToken()}>
                    <a> Cerrar sesión</a>
                </div>
            </NavLink>
        </div>
    )
};
export default Logout;