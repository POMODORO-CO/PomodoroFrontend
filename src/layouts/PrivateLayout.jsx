import { useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { Outlet } from 'react-router';
import { useAuth } from '../context/authContext';
import {REFRESH_TOKEN} from '../graphql/Auth/mutationsAuth.js'


const PrivateLayout = () => {
    
    const {authToken, setAuthToken, setToken}=useAuth();

    const [refreshToken, {
                data:mutationData,
                loading:mutationLoading,
                error:mutationError
                    }]=useMutation(REFRESH_TOKEN);

    useEffect(()=>{
        refreshToken();
    },[refreshToken]);


    
    return (
        <>
            <div>
                <Outlet/>
            </div>
        </>
    )
};
export default PrivateLayout;