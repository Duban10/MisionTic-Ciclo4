import { Link } from "react-router-dom";
import React, {Component} from 'react';
import ImagenHome from '../assets/images/1.svg';

class Login extends Component{  
    

    //muestra la vista del componente
    render(){    

        return(
        <React.Fragment>
            <div className="container contenedor">
            <div className="row">     
            <div className="col-md-6">
                <img src={ImagenHome} className="App-logo" alt="logo" />
            </div>     
            <div className="col-md-6">
                <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">!Bienvenido a Peages Huila!</h1>
                </div>
                <form className="user" action="" method="post" enctype="multipart/form-data">
                    <div className="form-group">
                        <input type="text" className="form-control form-control-user"
                            id="NumDoc" name="document" aria-describedby="emailHelp"
                            placeholder="Introduzca su numero de Documento"/>
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="password" className="form-control form-control-user"
                            id="passw" name="passw" placeholder="Contraseña"/>
                    </div>
                    <br/>
                    <div clasName="form-group">
                        <div className="custom-control custom-checkbox small">
                            <input type="checkbox" className="custom-control-input" id="customCheck"/>
                            <label className="custom-control-label" for="customCheck">Recuérdeme</label>
                        </div>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary btn-block btn-acceso ">
                        Acceso
                    </button>
                    <Link to="/registro"><button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Registrarse
                    </button>  </Link>   
                    <hr/>
                    <div className="text-center">
                        <a className="small" href="#">¿Has olvidado tu contraseña?</a>
                    </div>                
                    
                </form>
            </div>
            </div>
            </div> 
            

        </React.Fragment>
        );
    };  
}

export default Login;