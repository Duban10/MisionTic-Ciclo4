import '../assets/css/App.css';

export function Header1() {
  
    return (
        <>
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
       
            {/* <!-- Navbar Brand--> */}
            <a className="navbar-brand ps-3 nav-link active" href="/administrador">SIPEHU</a>
            
            <div className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div className="input-group">
                    <button type="button" className="btn btn-secondary" >Cerrar Sesión</button>
                    <button type="button" className="btn btn-secondary e-perfil" >Perfil</button>
                </div>
            </div>
           
        </nav>
        </>
    );
}
  