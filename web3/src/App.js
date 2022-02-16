import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Navbar ,Container,NavDropdown} from 'react-bootstrap';
import { GiWallet } from "react-icons/gi";


function App() {
  return (
    

    

<>
  
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Web 3.0</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

        <i class="fa-solid fa-wallet"></i>
        < GiWallet className='GiWallet-icon'/>
      <h1 id="please-wallet">please connect wallet</h1>

</>
    

            
    
    



  );
}

export default App;



// const express= require("express");
// const bodyParser = require("body-parser");

// const app= express();

// app.get("/",function (req,res) {

//     res.send("hello");
// });


// app.listen(3000,function () {
    
//     console.log("server is running on port 3000");
// });