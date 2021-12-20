import ImagenHome from '../assets/images/1.svg';
import {Component, useRef, useState} from 'react';


export function Registro() {
    const nombreRef = useRef();
    const apellidoRef = useRef();
    const correoRef = useRef();
    const documentoRef = useRef();
    const contrasenaRef = useRef();
    const telefonoRef = useRef();
    const sexoRef = useRef();
   
    const [error, setError] = useState()
    const [msgError, setmsgError] = useState()

    function guardar() {
        const nombre  = nombreRef.current.value;
        const apellido = apellidoRef.current.value;
        const correo = correoRef.current.value;
        const documento = documentoRef.current.value;
        const contrasena = contrasenaRef.current.value;
        const telefono = telefonoRef.current.value;
        const sexo = sexoRef.current.value;

        fetch("http://localhost:8081/usuario/guardar",{
            headers: {"content-type": "application/json"},
            method: "POST",
            body: JSON.stringify({nombre,apellido,correo,documento,contrasena,telefono,sexo})
        })
        .then(res => res.json())
        .then(res => {
            if(res.estado === "Ok"){
                setError(true);
                setmsgError(res.msg);
                {window.location.href = "/Login/"} // a donde queremos enviarlo 
            }
            else{
                setError(true);
                setmsgError(res.msg);
            }
        })

    }

    return (
      <>
          <div className="container">
          <div className="row">
            <div className="col-md-6 mt-4">
              <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">!Crea una cuenta!</h1>
              </div>
              {error && <div role="alert" className="alert alert-danger">{msgError}</div>}
              <form className="user" action="" method="post">
                  <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                          <input type="text" className="form-control form-control-user" id="nombre" name="nombre"
                              placeholder="Nombres" ref={nombreRef}/>
                      </div>
                      <div className="col-sm-6">
                          <input type="text" className="form-control form-control-user" id="apellido" name="apellido"
                              placeholder="Apellidos" ref={apellidoRef} />
                      </div>
                  </div>
                  <br />
                  <div className="form-group">
                      <input type="email" className="form-control form-control-user" id="correo" name="correo"
                          placeholder="Direccion de correo electrónico" ref={correoRef} />
                  </div>
                  <br />
                  <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                          <input type="text" className="form-control form-control-user"
                              id="documento" name="documento" placeholder="Numero de documento" ref={documentoRef} />
                      </div>
                      <div className="col-sm-6">
                          <input type="password" className="form-control form-control-user"
                              id="contrasena" name="contrasena" placeholder="Contraseña" ref={contrasenaRef} />
                      </div>
                  </div>
                  <br />
                  <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                          <input type="text" className="form-control form-control-user"
                              id="telefono" name="telefono" placeholder="Numero telefonico" ref={telefonoRef}/>
                      </div>
                      <div className="col-sm-6">
                          <input type="" className="form-control form-control-user"
                              id="sexo" name="sexo" placeholder="Sexo" ref={sexoRef}/>
                      </div>                                    
                  </div>
                  <br />
                  <button type="button" className="btn btn-primary btn-user btn-block" onClick={guardar}>
                      Registrar cuenta
                  </button>
                  <hr/>
                 
              </form>
              
              <hr/>
              <div className="text-center">
                  <a className="small" href="recuperacion">¿Has olvidado tu contraseña?</a>
              </div>
              <div className="text-center">
                  <a className="small" href="login">¿Ya tienes una cuenta? ¡Acceso!</a>
              </div>
            </div>
            <div className="col-md-6">
                <img src={ImagenHome} className="App-logo" alt="logo" />
            </div> 
          </div>
          </div>
        
      </>
    );
  }
  
