import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Navbar ,Container,NavDropdown} from 'react-bootstrap';


import Header from "./My-components/Header";
import Wallet from "./My-components/Wallet";
function App() {
  return (
      
<>
  
     <Header/>
     <Wallet/>

        

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