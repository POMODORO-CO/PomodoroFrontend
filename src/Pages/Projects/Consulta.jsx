import React, { useEffect } from 'react'
import "../../index.css";
import Navbar from '../../components/Navbar/Navbar'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useQuery } from '@apollo/client';
import { GET_PROYECTOS, GET_PROYECTOS_LIDER } from '../../graphql/projects/queriesProjects';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import { useUser } from '../../context/userContext';
import LiderConsulta from './Users/LiderConsulta';
import EstudianteConsulta from './Users/EstudianteConsulta';

function Consulta() {

    const { userData } = useUser();

    const usuarioID = userData._id;
    // const { data, error, loading } = useQuery(GET_PROYECTOS);
    // const { dataP_Lider, errorP_Lider, loadingP_Lider } = useQuery(GET_PROYECTOS_LIDER, { variables: { usuarioID } },);

    if(userData.rol_usuario==="LIDER"){
        return(
            <>
            <Navbar />
            <div className='consulta'>
                <h1>CONSULTA DE PROYECTOS</h1>
                <PrivateRoute rolelist={["LIDER"]}>
                    <LiderConsulta />
                </PrivateRoute>
            </div> 
        </>
        )
    }else if (userData.rol_usuario==="ESTUDIANTE"){
        return(
        <>
            <Navbar />
            <div className='consulta'>
                <h1>CONSULTA DE PROYECTOS</h1>
                <PrivateRoute rolelist={["ESTUDIANTE"]}>
                    <EstudianteConsulta />
                </PrivateRoute>
            </div>
        </>
        )
    }
    return (
        <>
            <Navbar />
            <div className='consulta'>
                <h1>CONSULTA DE PROYECTOS</h1>
                <PrivateRoute rolelist={["ADMINISTRADOR"]}>
                <div>Error</div>
                </PrivateRoute>
            </div>
        </>
    )
}

export default Consulta;