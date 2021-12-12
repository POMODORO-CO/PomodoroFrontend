import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const Logout=()=>{
    const {setToken}=useAuth();
    const deleteToken=()=>{
        setToken(null);
    };
    return(
        
            <NavLink to='/' className='px-2 font-bold'>
                <div onClick={()=>deleteToken()}>
                    <span> cerrar sesión</span>
                </div>
            </NavLink>
        
    )
};
export default Logout;