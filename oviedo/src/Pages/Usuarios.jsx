import React from 'react';
import {Link} from  'react-router-dom';

// Styles
import { Button } from 'reactstrap';


const Usuarios = () => {
  return (
    <div>
        <Link to="/CrearUsuario">
        <Button color="secundary">Crear Usuario</Button>
        </Link>
        <Link to="/ListaUsuarios">
        <Button color="secundary">Lista de Usuarios</Button>
        </Link>

    </div>
  )
}
export default Usuarios