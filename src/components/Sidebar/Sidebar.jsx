import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as RiIcons from "react-icons/ri";
import * as VscIcons from "react-icons/vsc";

export const Sidebar = [

    {
        title:'Inicio',
        path:'/private/Home',
        icon:<AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title:'Mi Perfil',
        path:'/private/miperfil',
        icon:<CgIcons.CgProfile />,
        cName: 'nav-text'
    },
    {
        title:'Gestión de Usuarios',
        path:'/private/gestionusuarios',
        icon:<FaIcons.FaUsersCog />,
        cName: 'nav-text'
    },
    {
        title:'Proyectos',
        path:'/private/proyecto',
        icon:<RiIcons.RiDraftFill />,
        iconClosed: <RiIcons.RiArrowDownFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        cName: 'nav-text'
    },
    {
        title:'Cerrar Sesión',
        path:'/',
        icon:<VscIcons.VscCloseAll />,
        cName: 'nav-text'
    },
];
