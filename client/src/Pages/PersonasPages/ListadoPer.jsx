import React from 'react';
/* import AlumnoForm from '../Components/AlumnoForm'; */
import NavBar from "../../Components/NavBar";
import AlumnoList from "../../Components/PersonasComp/PersonasList";
import PersonasMenu from '../../Components/PersonasMenu';


const Listado = () => {
    return (
        <div>
            <NavBar />
            <PersonasMenu />
            <h1>Listado de Personas</h1>
            <AlumnoList />
        </div>
    );
};

export default Listado;
