import './App.css';
import LoginForm from './components/LoginForm';
import { Routes, Route, Link, Router } from 'react-router-dom';
import Header from './components/Header';
import ImageHome from './components/ImageHome';
import Sidebar from './components/SideBar';
import NavBar from './components/NavBar';

// // Pages
import Home from './Pages/Home';
import Usuarios from './Pages/Usuarios';
import Convocatorias from './Pages/Convocatorias';
import ListaUsuarios from './Pages/ListaUsuarios';
import CrearUsuario from './Pages/CrearUsuario';

// Styles
import './components/Styles/App.scss';
import './components/Styles/ImageHome.scss';
import './components/Styles/NavBar.scss';
import './components/Styles/SideBar.scss';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="flex"></div>
      <Sidebar />
      <div className="content"></div>
      <Routes>
        <Route path="LoginForm" element={<LoginForm />} />
        <Route path="/CrearUsuario" element={<CrearUsuario user="" />} />
        <Route
          path="/ModificarUsuario/:id/"
          element={<CrearUsuario user="" />}
        />
        <Route path="/ListaUsuarios" element={<ListaUsuarios />} />
        <Route path="Home" element={<Home />} />
        <Route path="Usuarios" element={<Usuarios />} />
        <Route path="Convocatorias" element={<Convocatorias />} />
      </Routes>
    </div>
  );
};
export default App;
