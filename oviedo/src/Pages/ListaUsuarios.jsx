import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container } from 'reactstrap';


export default function ListaUsuarios() {
  const [isLoading, setIsLoading] = useState(false);
  const [numPage, setNumPage] = useState(1);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const getUsers = async () => {

      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json", "auth-token": localStorage.getItem("token") },
      };
      const response = await fetch(`/users?page=${numPage}`, requestOptions);
      const results = await response.json();
      console.log(results)
      setUserList(results);
      setIsLoading(false);
    }
    getUsers();
  }, [numPage]);

  const handleRemoveUser = (uid) => {
    const getUsers = userList.filter((_id) => _id._id !== uid);
    setUserList(getUsers)
  };

  const handlePrev = () => {
    setNumPage(numPage => numPage - 1);
  }
  const handleSig = () => {
    setNumPage(numPage => numPage + 1);
  }

  return (

    <Container>
      {isLoading ? <p>Cargando...</p> :
        <Table>
          <thead>
            <tr>
              <th>Nombre de usuario</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {userList && userList?.length > 0 ? userList.map(({ _id, name }) =>
              <tr key={_id}>
                <td>{name}</td>
                <td>
                  <Link to="/CrearUsuario">
                    <Button color="secundary">Editar</Button>
                  </Link>{"    "}
                  <Button color="danger" onClick={() => handleRemoveUser(_id)}>Eliminar</Button>
                </td>
              </tr>

            ) : <p>El listado está vacío</p>}
          </tbody>
        </Table>
      }
      <Button color="secundary" onClick={handlePrev}>Prev</Button>
      <span>{numPage}</span>
      <Button color="secundary" onClick={handleSig}>Sig</Button>

    </Container>
  )
}


