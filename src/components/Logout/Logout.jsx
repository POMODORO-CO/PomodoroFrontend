import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const Logout=()=>{
    const {setToken}=useAuth();
    const deleteToken=()=>{
        setToken(null);
    };
    return(
        <li>
            <NavLink to='/'>
                <div onClick={()=>deleteToken()}>
                    <span> cerrar sesión</span>
                </div>
            </NavLink>
        </li>
    )
};
export default Logout;