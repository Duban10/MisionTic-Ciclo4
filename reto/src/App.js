
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';
import Login from './components/Login';
import {Registro} from './components/Registro';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>                  
      <BrowserRouter>
        <Routes>

          <Route path="/" element={ <Login /> } />                    
          <Route path="/registro" element={ <Registro /> } />            
          
        </Routes>
      </BrowserRouter>
              
    </>      
          
  );
}

export default App;
