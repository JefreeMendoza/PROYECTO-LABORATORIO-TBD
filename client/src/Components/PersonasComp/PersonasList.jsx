import React, { useEffect, useState } from 'react';
import { getAlumnos } from '../../api/auth';
import { Link } from 'react-router-dom';
/* import "../Styles/AlumnoList.css" */

const AlumnoList = () => {
    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {
        const fetchAlumnos = async () => {
            const response = await getAlumnos();
            setAlumnos(response.data);
        };
        fetchAlumnos();
    }, []);

    return (
        <div>
            <h1>Esta es la catidad de Personas</h1>
            <ul className="talleres-list">
                {alumnos.map((alumno) => (
                    <li
                        /* className='talleres-link' */
                        key={alumno._id}
                    >
                        <Link
                            className='talleres-link'
                            to={`/listado/persona/${alumno._id}`}>{alumno.username}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AlumnoList;
