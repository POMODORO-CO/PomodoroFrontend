import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { REFRESH_TOKEN } from '../graphql/Auth/mutationsAuth.js'


const PrivateLayout = () => {

    const navigate = useNavigate();

    const { authToken, setToken} = useAuth();

    const [loadingAuth,setLoadingAuth]=useState(true);

    //refresca el token cada ves que se use un private layout
    const [refreshToken, {
        data: mutationData,
        loading: mutationLoading,
        error: mutationError
                             }] = useMutation(REFRESH_TOKEN);

    useEffect(() => {
        refreshToken();
    }, [refreshToken]);

    useEffect(() => {
        //Esto se ejecuta para actualizar el token que se refresco
        if (mutationData) {
            if (mutationData.refreshToken.token) {
                setToken(mutationData.refreshToken.token)
            } else {
                setToken(null);
                navigate('/Login');
            }
            setLoadingAuth(false);
        }
    }, [mutationData, setToken, loadingAuth, navigate]);

    useEffect(() => {
        console.log("token actual", authToken)
    }, [authToken]);

    if (mutationLoading || loadingAuth) return <div>Cargando...</div>

    // if (!authToken) {
    //     navigate('/Login')
    // }

    return (
        <>
            <div>
                <Outlet />
            </div>
        </>
    )
};
export default PrivateLayout;