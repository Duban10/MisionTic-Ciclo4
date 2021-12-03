import { Modal } from "./Modal";
import '../assets/css/App.css';

export function Header() {
  
    return (
        <>
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
       
            {/* <!-- Navbar Brand--> */}
            <a className="navbar-brand ps-3 nav-link active" href="/administrador">SIPEHU</a>
            <ul className="nav">               
                <li className="nav-item">
                    <a className="btn btn-warning btn-cobro" href="/cobro-recarga">Cobro/Recarga</a>
                </li>
                <li className="nav-item">
                    {/* <a className="nav-link" href="#">Generar Reporte</a> */}
                    <Modal />
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">Otros</a>
                </li>
            </ul>
          
            <div className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div className="input-group">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar Sesión</button>
                  
                </div>
            </div>
            
        </nav>
        </>
    );
}
  