import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as RiIcons from "react-icons/ri";
import * as VscIcons from "react-icons/vsc";

export const Sidebar = [

    {
        title:'Inicio',
        path:'/',
        icon:<AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title:'Mi Perfil',
        path:'/miperfil',
        icon:<CgIcons.CgProfile />,
        cName: 'nav-text'
    },
    {
        title:'Gestion Usuario',
        path:'/gestionusuarios',
        icon:<FaIcons.FaUsersCog />,
        cName: 'nav-text'
    },
    {
        title:'Proyectos',
        path:'/proyecto',
        icon:<RiIcons.RiDraftFill />,
        iconClosed: <RiIcons.RiArrowDownFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title:'Registro',
                path:'/proyecto/registro',
                cName: 'nav-text'
            },
            {
                title:'Consulta',
                path:'/proyecto/consulta',
                cName: 'nav-text'
            },
            {
                title:'Inscripciones',
                path:'/proyecto/inscripciones',
                cName: 'nav-text'
            },
            {
                title:'Avances',
                path:'/proyecto/avances',
                cName: 'nav-text'
            },
        ],
        cName: 'nav-text'
    },
    {
        title:'Cerrar Sesión',
        path:'/proyecto',
        icon:<VscIcons.VscCloseAll />,
        cName: 'nav-text'
    },
];
