import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import * as FaIcons from "react-icons/fa";
import imagenes from '../../../assets/img/imagenes';
import SearchUser from './searchUser';

function GestionUsuarios() {
    return (

        <div>
            <Navbar />
                     <section className='flex flex-row justify-center'>
                        <img src={imagenes.imag1} alt="Logo empresa" className='py-3 px-3 h-20 w-20' />
                        <h1 className='px-2 text-xl text-center my-auto uppercase font-bold'>Pomodoro Projects</h1>
                    </section>
                    <section className='text-center '>
                            <h1 className='text-3xl font-bold pt-1'>
                                MODULO DE GESTIÓN DE USUARIOS
                            </h1>
                    </section>
            <div className="flex items-center flex-col text-middle">

                <div className="box pt-8 items-center">
                    <div className="flex wrap items-center text-middle">
                        <h1 className="p-3">Ingrese la identificación</h1>
                        <div className=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
                            <button className="outline-none focus:outline-none"><svg className=" w-5 text-gray-600 h-5 cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                            <input type="search" name="" id="" placeholder="Buscar.." x-model="q" className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent" />
                        </div>
                    </div>
                    
                </div>


                <div className="-my-1 overflow-x-auto sm:-mx-6 lg:-mx-2 py-4">
                    <div className="py-2 align-middle inline-block min-w-auto sm:px-6 lg:px-12">
                        <div
                            className="
                            shadow
                            overflow-hidden
                            border-b border-gray-200
                            sm:rounded-lg
                            "
                        >
                            <table className="min-w-auto divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="
                  px-6
                  py-3
                  text-center text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                "
                                        >
                                            ID Estudiante
                                        </th>
                                        <th
                                            scope="col"
                                            className="
                    px-6
                    py-3
                    text-center text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                    "
                                            >
                                                Tipo de ID
                                            </th>
                                            <th
                                                scope="col"
                                                className="
                  px-6
                  py-3
                  text-left text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                "
                                        >
                                            Nombre 
                                        </th>
                                        <th
                                            scope="col"
                                            className="
                  px-6
                  py-3
                  text-left text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                "
                                        >
                                            Apellido
                                        </th>
                                        <th
                                            scope="col"
                                            className="
                    px-6
                    py-3
                    text-center text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                    "
                                            >
                                                Tipo de Usuario
                                            </th>
                                            <th
                                                scope="col"
                                                className="  
                    px-6
                    py-3
                    text-center text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                    "
                                            >
                                                Estado
                                            </th>
                                            <th
                                                scope="col"
                                                className="     
                    px-6
                    py-3
                    text-center text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                    "
                                            >
                                                Correo
                                            </th>
                                            <th
                                                scope="col"
                                                className="      
                    px-6
                    py-3
                    text-center text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                    "
                                            >
                                                Contraseña
                                            </th>
                                            <th
                                                scope="col"
                                                className="             
                  px-6
                  py-3
                  text-center text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                "
                                        >
                                            Acciones
                                        </th>
                                        {/* <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th> */}
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                                className="
                    px-2
                    inline-flex
                    text-xs
                    leading-5
                    font-semibold
                    rounded-full
                    bg-green-100
                    text-green-800
                  "
                                            >
                                                001
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="ml-4">
                                                    <select name="" id="" className="bg-white rounded flex items-center w-FULL p-3 shadow-sm border border-gray-200" placeholder="Estado de la inscripcion">
                                                        <option value="Aceptada" defaultValue>CC</option>
                                                        <option value="Rechazada">CE</option>
                                                        <option value="Rechazada">TI</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                        <input type="text" name="" id="" placeholder="Alberto" x-model="q" className="w-full pl-4 outline-none focus:outline-none bg-transparent"/>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                        <input type="text" name="" id="" placeholder="Fernández" x-model="q" className="w-full pl-4 outline-none focus:outline-none bg-transparent"/>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="ml-4">
                                                    <select name="" id="" className="bg-white rounded flex items-center w-FULL p-3 shadow-sm border border-gray-200" placeholder="Estado de la inscripcion">
                                                        <option value="Aceptada" defaultValue>Administrador</option>
                                                        <option value="Rechazada">Líder</option>
                                                        <option value="Rechazada">Estudiante</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="ml-4">
                                                    <select name="" id="" className="bg-white rounded flex items-center w-FULL p-3 shadow-sm border border-gray-200" placeholder="Estado de la inscripcion">
                                                        <option value="Aceptada" defaultValue>Activo</option>
                                                        <option value="Rechazada">Inactivo</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <input type="search" name="" id="" placeholder="a.fernandez@pomodoro.com" x-model="q" className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"/>

                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <input type="search" name="" id="" placeholder="************" x-model="q" className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"/>
                                        </td>
                                        <td
                                            className="
                  px-6
                  py-4
                  whitespace-nowrap
                  text-center text-sm
                  font-medium
                "
                                        >
                                            <a href="#" className="inline-block"
                                            ><FaIcons.FaSave size={30} /></a>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                                className="
                    px-2
                    inline-flex
                    text-xs
                    leading-5
                    font-semibold
                    rounded-full
                    bg-green-100
                    text-green-800
                  "
                                            >
                                                002
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="ml-4">
                                                    <select name="" id="" className="bg-white rounded flex items-center w-FULL p-3 shadow-sm border border-gray-200" placeholder="Estado de la inscripcion">
                                                        <option value="Aceptada" defaultValue>CC</option>
                                                        <option value="Rechazada">CE</option>
                                                        <option value="Rechazada">TI</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                        <input type="text" name="" id="" placeholder="Raul" x-model="q" className="w-full pl-4 outline-none focus:outline-none bg-transparent"/>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                        <input type="text" name="" id="" placeholder="Gómez" x-model="q" className="w-full pl-4 outline-none focus:outline-none bg-transparent"/>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="ml-4">
                                                    <select name="" id="" className="bg-white rounded flex items-center w-FULL p-3 shadow-sm border border-gray-200" placeholder="Estado de la inscripcion">
                                                        <option value="Aceptada" defaultValue>Administrador</option>
                                                        <option value="Rechazada">Líder</option>
                                                        <option value="Rechazada">Estudiante</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="ml-4">
                                                    <select name="" id="" className="bg-white rounded flex items-center w-FULL p-3 shadow-sm border border-gray-200" placeholder="Estado de la inscripcion">
                                                        <option value="Aceptada" defaultValue>Activo</option>
                                                        <option value="Rechazada">Inactivo</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <input type="search" name="" id="" placeholder="r.gomez@pomodoro.com" x-model="q" className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"/>

                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <input type="search" name="" id="" placeholder="************" x-model="q" className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"/>
                                        </td>
                                        <td
                                            className="
                  px-6
                  py-4
                  whitespace-nowrap
                  text-center text-sm
                  font-medium
                "
                                        >
                                            <a href="#" className="inline-block"
                                            ><FaIcons.FaSave size={30} /></a>
                                        </td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <SearchUser />
        </div>
    )
}

export default GestionUsuarios;