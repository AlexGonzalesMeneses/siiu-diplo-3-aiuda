import logo from './logo.svg';
import './App.css';
import {Navbar} from "react-bootstrap";
import CatalogComponent from "./components/CatalogComponent";

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <div className="container">
          <Navbar.Brand href="/">
            Sistema de Integrado Informacion Universitario
          </Navbar.Brand>
        </div>
      </Navbar>
      <CatalogComponent/>
    </div>
  );
}

export default App;
