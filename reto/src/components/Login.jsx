import { Link } from "react-router-dom";
import {useRef, useState} from 'react';
import ImagenHome from '../assets/images/1.svg';


export function Login(){


    const usuarioRef = useRef();
    const passwordRef = useRef();
    const [error, seterror] = useState();
    const [msgError, setMsgError] = useState();

    function login(){

        
        const usuario = usuarioRef.current.value;
        const password = passwordRef.current.value;

        // Ruta del back seccion login
        fetch("http://localhost:8081/usuario/logIn",{
            headers:{"content-type": "application/json"}, //Qué voy a enviar
            method: "POST",//Cómo lo voy a evniar
            body: JSON.stringify({//Información a enviar
                usuario , password
            })
        })
        .then(res => res.json())
        .then(res => {
            if(res.estado === "OK"){ // 3 IGUALES PARA UNA COMPARACION ESTRICTA
                {window.location.href = "/externo"} // que me lleve a algun lado como el submit que se activara con el btn del form
        
            }
            else{
                seterror(true);
                setMsgError(res.msg);
            }
        })

    }

    //muestra la vista del componente
    // render(){    


        return(
        
            <div className="container contenedor">
            <div className="row">     
            <div className="col-md-6">
                <img src={ImagenHome} className="App-logo" alt="logo" />
            </div>     
            <div className="col-md-6">
                <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">!Bienvenido a Peajes Huila!</h1>
                </div>
                <form className="user" action="" method="" enctype="multipart/form-data">
                    <div className="form-group">
                        <input type="text" className="form-control form-control-user"
                            id="NumDoc" name="document" aria-describedby="emailHelp"
                            placeholder="Introduzca su numero de Documento" ref={usuarioRef}/>
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="password" className="form-control form-control-user"
                            id="passw" name="passw" placeholder="Contraseña" ref={passwordRef}/>
                    </div>
                    <br/>
                    <div clasName="form-group">
                        <div className="custom-control custom-checkbox small">
                            <input type="checkbox" className="custom-control-input" id="customCheck"/>
                            <label className="custom-control-label" for="customCheck">Recuérdeme</label>
                        </div>
                    </div>
                    <br/>
                    <button onClick={login} className="btn btn-primary btn-block btn-acceso ">
                        Acceso
                    </button>
                    <Link to="/registro"><button type="button" className="btn btn-danger">
                        Registrarse
                    </button>  </Link>   
                    <hr/>
                    <div  className="text-center">
                        <a className="small" href="/">¿Has olvidado tu contraseña?</a>
                    </div>                
                    
                </form>
                {error && <div role="alert" className="alert alert-danger">{msgError}</div>}
            </div>
            </div>
            </div> 
            

        
        );
      
}

// export default Login;