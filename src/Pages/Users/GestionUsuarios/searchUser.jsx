import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_USUARIOS } from '../../../graphql/users/queries.js';
import PrivateRoute from '../../../components/PrivateRoute/PrivateRoute.jsx';


function SearchUser() {
    const {
        data: queryData,
        error: queryError,
        loading: queryLoading } = useQuery(GET_USUARIOS)


    useEffect(() => {
        console.log("datos del servidor: ", queryData);
    }, [queryData]);

    //encaso de que halla un error ejecute esto
    useEffect(() => {
        if (queryError) {
            <div> Error consultando Usuarios</div>
        }
    }, [queryError])

    if (queryLoading) return <div>Cargando......</div>;

    return (
        <>
            <div>
                <div>
                todos los usurios
                </div>
                <PrivateRoute rolelist={["ESTUDIANTE","ADMINISTRADOR"]}>
                    <table>
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Apellido</th>
                                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Correo</th>
                                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">documento</th>
                                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Rol</th>
                                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Editar</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {queryData &&
                                queryData.Usuarios.map((u) => {
                                    return (
                                        <tr key={u._id}>
                                            <td className="px-6 py-4 whitespace-nowrap">{u.nombre_usuario}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{u.apellido_usuario}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{u.documento_usuario}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{u.email_usuario}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{u.estado_usuario}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{u.rol_usuario}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <Link to={`/private/GestionUsuarios/editar/${u._id}`}>
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
                </PrivateRoute>
            </div>
        </>
    )
}

export default SearchUser
