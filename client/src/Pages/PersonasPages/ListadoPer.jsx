import React from 'react';
/* import AlumnoForm from '../Components/AlumnoForm'; */
import NavBar from "../../Components/NavBar";
import AlumnoList from "../../Components/PersonasComp/PersonasList";


const Listado = () => {
    return (
        <div>
            <NavBar />
            <h1>Listado de Personas</h1>
            <AlumnoList />
        </div>
    );
};

export default Listado;
