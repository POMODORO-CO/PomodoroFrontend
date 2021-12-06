import { useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { Outlet } from 'react-router';
import { useAuth } from '../context/authContext';
import {VALIDATE_TOKEN} from '../graphql/Auth/mutationsAuth.js'


const PrivateLayout = () => {
    
    const {authToken, setAuthToken, setToken}=useAuth();

    const [validateToken, {
                data:mutationData,
                loading:mutationLoading,
                error:mutationError
                    }]=useMutation(VALIDATE_TOKEN);

    useEffect(()=>{
        validateToken();
    },[])
    return (
        <>
            <div>
                <Outlet/>
            </div>
        </>
    )
};
export default PrivateLayout;