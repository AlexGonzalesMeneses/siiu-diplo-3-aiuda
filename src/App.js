import logo from './logo.svg';
import './App.css';
import {Navbar} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <div className="container">
          <Navbar.Brand href="/">
            Sistema de Integrado Informacion Universitario
          </Navbar.Brand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
