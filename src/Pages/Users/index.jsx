import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { GET_USUARIOS } from '../../graphql/users/queries';
import { Link } from 'react-router-dom';


const IndexUsuarios = () => {

    //uso un hook 'useQuery(GET_USUARIOS)' donde 'GET_USUARIOS' es una funcion glp para devolver la info
    const { data, error, loading } = useQuery(GET_USUARIOS)


    useEffect(() => {
        console.log("datos del servidor: ", data);
    }, [data]);

    //encaso de que halla un error ejecute esto
    useEffect(()=>{
        if (error){
            <div> Error consultando Usuarios</div>
        }
    },[error])

    if (loading) return <div>Cargando......</div>;

    return (
        <>
            <div>
                todos los usurios
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Correo</th>
                            <th>documento</th>
                            <th>Estado</th>
                            <th>Rol</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                            data.Usuarios.map((u)=>{
                                return(
                                    <tr key={u._id}>
                                        <td>{u.nombre_usuario}</td>
                                        <td>{u.apellido_usuario}</td>
                                        <td>{u.documento_usuario}</td>
                                        <td>{u.email_usuario}</td>
                                        <td>{u.estado_usuario}</td>
                                        <td>{u.rol_usuario}</td>
                                        <td>
                                            <Link to={`/pruebaBack/editar/${u._id}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}                       
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default IndexUsuarios;