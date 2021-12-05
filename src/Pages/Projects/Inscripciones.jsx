import React from 'react'
import "../../index.css";
import Navbar from '../../components/Navbar/Navbar'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as RiIcons from "react-icons/ri";

function Inscripciones() {

    return (
        <>
            <Navbar />
            <div class='consulta'>
                <h1>INSCRIPCIONES</h1>
            </div>


            <div class="flex items-center flex-col text-middle">

                <div class="box pt-8 items-center">
                    <div class="flex wrap items-center text-middle">
                        <h1 class="p-3">Proyecto</h1>
                        <div class="select w-5/6">
                            <select name="" id="" class="bg-white rounded flex items-center w-FULL p-3 shadow-sm border border-gray-200" placeholder="Proyectos que lidera">
                                <option value="all" selected>PROYECTOS QUE LIDERA</option>
                                <option value="photo">P1</option>
                                <option value="illustration">`P2</option>
                            </select>
                        </div>
                    </div>
                    <div class="flex wrap items-center text-middle p-4">
                        <div class="select w-5/6">
                            <select name="" id="" class="bg-white rounded flex items-center w-FULL p-3 shadow-sm border border-gray-200" placeholder="Proyectos que lidera">
                                <option value="all" selected>LISTADO DE ESTUDIANTES</option>
                                <option value="photo">P1</option>
                                <option value="illustration">`P2</option>
                            </select>
                        </div>
                        <div class=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
                            <button class="outline-none focus:outline-none"><svg class=" w-5 text-gray-600 h-5 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                            <input type="search" name="" id="" placeholder="Buscar.." x-model="q" class="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent" />
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
                                            ID Estudiante
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
                                            Nombre del estudiante
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
                                            Estado inscripción
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
                                                001
                                            </span>
                                        </td>

                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900">Alberto Fernández</div>

                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="flex items-center">
                                                <div class="ml-4">
                                                    <select name="" id="" class="bg-white rounded flex items-center w-FULL p-3 shadow-sm border border-gray-200" placeholder="Estado de la inscripcion">
                                                        <option value="Aceptada" selected>Aceptada</option>
                                                        <option value="Rechazada">Rechazada</option>
                                                    </select>
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
                                            ><FaIcons.FaSave size={30} /></a>
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
                                            <div class="text-sm text-gray-900">Raul Menendez</div>

                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="flex items-center">
                                                <div class="ml-4">
                                                    <select name="" id="" class="bg-white rounded flex items-center w-FULL p-3 shadow-sm border border-gray-200" placeholder="Estado de la inscripcion">
                                                        <option value="Aceptada" selected>Aceptada</option>
                                                        <option value="Rechazada">Rechazada</option>
                                                    </select>
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
                                            ><FaIcons.FaSave size={30} /></a>
                                        </td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Inscripciones;