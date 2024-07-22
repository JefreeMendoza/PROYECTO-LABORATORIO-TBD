import NavBar from "../Components/NavBar";
import IngresoPer from "./IngresoPages/IngresoPer";
import TalleresMenu from '../Components/PersonasMenu';

function Personas() {
    return (
        <>
            <NavBar />
            <h1>
                ESTAS EN LA PAGINA DE PERSONAS
            </h1>
            <TalleresMenu />
        </>
    );
}

export default Personas;