import React from 'react';
import {Link} from 'react-router-dom'

const SideBar = () => {
  return (
    <div className="sidebar">
        <ul>
            <li>
                <Link to="/Home">Home</Link>
            </li>
            <li>
                <Link to="/Usuarios">Usuarios</Link>
            </li>
            <li>
                <Link to="/Convocatorias">Convocatorias</Link>
            </li>
        </ul>
        </div>
  )
}

export default SideBar

 