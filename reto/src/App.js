
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';

import Login from './components/Login';
import {Registro} from './components/Registro';
import Footer from './components/Footer';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Adm } from './components/Adm';
import { Cobro } from './components/Cobro';
import { Externo } from './components/Externo';



function App() {
  return (
    <>                  
      <BrowserRouter>
        <Routes>

          <Route path="/" element={ <Login /> } />                    
          <Route path="/registro" element={ <Registro /> } />     
          <Route path="/administrador" element={ <Adm /> } /> 
          <Route path="/cobro-recarga" element={ <Cobro /> } />     
          <Route path="/externo" element={ <Externo /> } /> 
                
          
        </Routes>
      </BrowserRouter>
      <div className="clearfix"></div>
      <Footer /> 
              
    </>      
          
  );
}

export default App;
