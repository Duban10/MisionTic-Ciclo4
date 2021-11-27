import ImagenHome from '../assets/images/1.svg';

export function Registro() {
  
    return (
      <>
          <div className="container">
          <div className="row">
            <div className="col-md-6 mt-4">
              <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">!Crea una cuenta!</h1>
              </div>
              <form className="user" action="" method="post" enctype="multipart/form-data">
                  <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                          <input type="text" className="form-control form-control-user" id="nombre" name="nombre"
                              placeholder="Nombres"/>
                      </div>
                      <div className="col-sm-6">
                          <input type="text" className="form-control form-control-user" id="apellido" name="apellido"
                              placeholder="Apellidos" />
                      </div>
                  </div>
                  <br />
                  <div className="form-group">
                      <input type="email" className="form-control form-control-user" id="correo" name="correo"
                          placeholder="Direccion de correo electrónico" />
                  </div>
                  <br />
                  <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                          <input type="text" className="form-control form-control-user"
                              id="documento" name="documento" placeholder="Numero de documento" />
                      </div>
                      <div className="col-sm-6">
                          <input type="password" className="form-control form-control-user"
                              id="contrasena" name="contrasena" placeholder="Contraseña" />
                      </div>
                  </div>
                  <br />
                  <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                          <input type="text" className="form-control form-control-user"
                              id="telefono" name="telefono" placeholder="Numero telefonico"/>
                      </div>
                      <div className="col-sm-6">
                          <input type="" className="form-control form-control-user"
                              id="sexo" name="sexo" placeholder="Sexo"/>
                      </div>                                    
                  </div>
                  <br />
                  <button type="submit" className="btn btn-primary btn-user btn-block">
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
  
