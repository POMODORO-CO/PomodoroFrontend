import React, { useEffect } from 'react'
import "../../index.css";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
import { useQuery } from '@apollo/client';
import { GET_PROYECTOS } from '../../graphql/users/queries';

function Consulta() {

    const { data, error, loading } = useQuery(GET_PROYECTOS)


    return (
        <>

            <div class='consulta'>
                <h1>CONSULTA DE PROYECTOS</h1>
            </div>


            <div class="flex items-center flex-col text-middle">

                <div class="box pt-6">
                    <div class="box-wrapper">

                        <div class=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
                            <button class="outline-none focus:outline-none"><svg class=" w-5 text-gray-600 h-5 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                        <input type="search" name="" id="" placeholder="Buscar.." x-model="q" class="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"/>
                        <div class="select">
                            <select name="" id="" x-model="image_type" class="text-sm outline-none focus:outline-none bg-transparent">
                                <option value="all" selected>Todo</option>
                                <option value="photo">ID</option>
                                <option value="illustration">Nombre del proyecto</option>
                                <option value="vector">Líder</option>
                            </select>
                        </div>
                    </div>

                </div>
            </div>


            <div class="-my-1 overflow-x-auto sm:-mx-6 lg:-mx-2 py-4">
                <div class="py-2 align-middle inline-block min-w-auto sm:px-6 lg:px-12">
                    <div
                        class="
                            shadow
                            overflow-hidden
                            border-b border-gray-200
                            sm:rounded-lg
                            "
                    >
                        <table class="min-w-auto divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        class="
                  px-6
                  py-3
                  text-center text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                "
                                    >
                                        ID
                                    </th>
                                    <th
                                        scope="col"
                                        class="
                  px-6
                  py-3
                  text-left text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                "
                                    >
                                        Nombre del proyecto
                                    </th>
                                    <th
                                        scope="col"
                                        class="
                  px-6
                  py-3
                  text-left text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                "
                                    >
                                        Líder
                                    </th>
                                    <th
                                        scope="col"
                                        class="
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
                                    {/* <th scope="col" class="relative px-6 py-3">
                                        <span class="sr-only">Edit</span>
                                    </th> */}
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                {data && data.Proyectos.map((u)=>{
                                    return(

                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span
                                            class="
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
                                           {u._id}
                                        </span>
                                    </td>

                                    {/* <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-900">Software engineer</div>
                                        <div class="text-sm text-gray-500">IT</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0 h-10 w-10">
                                                <img
                                                    class="h-10 w-10 rounded-full"
                                                    src="https://images.unsplash.com/photo-1619914775389-748e5e136c26?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIwMTk4MjAw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=100"
                                                    alt=""
                                                />
                                            </div>
                                            <div class="ml-4">
                                                <div class="text-right text-sm font-medium text-gray-900">
                                                    Flora Wu
                                                </div>
                                                <div class="text-sm text-gray-500">
                                                    flora.wu@example.com
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td
                                        class="
                  px-6
                  py-4
                  whitespace-nowrap
                  text-center text-sm
                  font-medium
                "
                                    >
                                        <a href="#" class="inline-block"
                                        ><AiIcons.AiFillPlusCircle size={25} /></a>
                                        <a href="#" class="inline-block"
                                        ><FaIcons.FaEdit size={25} /></a>
                                        <a href="#" class="inline-block"
                                        ><FaIcons.FaTrash size={25} /></a>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span
                                            class="
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

                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-900">Software engineer</div>
                                        <div class="text-sm text-gray-500">IT</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0 h-10 w-10">
                                                <img
                                                    class="h-10 w-10 rounded-full"
                                                    src="https://images.unsplash.com/photo-1619914775389-748e5e136c26?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIwMTk4MjAw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=100"
                                                    alt=""
                                                />
                                            </div>
                                            <div class="ml-4">
                                                <div class="text-right text-sm font-medium text-gray-900">
                                                    Flora Wu REPETIDA
                                                </div>
                                                <div class="text-sm text-gray-500">
                                                    flora.wu@example.com repetido
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td
                                        class="
                  px-6
                  py-4
                  whitespace-nowrap
                  text-center text-sm
                  font-medium
                "
                                    >
                                        <a href="#" class="inline-block"
                                        ><AiIcons.AiFillPlusCircle size={25} /></a>
                                        <a href="#" class="inline-block"
                                        ><FaIcons.FaEdit size={25} /></a>
                                        <a href="#" class="inline-block"
                                        ><FaIcons.FaTrash size={25} /></a>
                                    </td> */}
                                </tr>
                                    )
                                })}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>


    )
}

export default Consulta;