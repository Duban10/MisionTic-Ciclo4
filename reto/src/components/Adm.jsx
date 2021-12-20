
import { Header } from "./Header";
import {useRef, useState} from 'react';



export function Adm() {
    const nombreConsorcio = useRef();
    const descripcion = useRef();
    const nombreCon = useRef();
    const nombrePeaje = useRef();
    const latitud = useRef();
    const longitud = useRef();
    const categoria = useRef();

    const[alerta,setAlerta] = useState(false);
    const [error, setError] = useState()
    const [msgError, setmsgError] = useState()


    function guardar(){
        const Nombre = nombreConsorcio.current.value;
        const Descripcion = descripcion.current.value;
        

        fetch("http://localhost:8081/prefijo/extension",{
            headers: {"content-type": "application/json"},
            method: "POST",
            body: JSON.stringify({Nombre, Descripcion})
        })
        .then(res => res.json())
        .then(res => {
            if(res.estado === "Ok"){
                setError(true);
                setmsgError(res.msg);
            }
            else{
                setError(true);
                setmsgError(res.msg);
            }
        })

        nombreConsorcio.current.value = "";
        descripcion.current.value = "";
        

        setAlerta(true);
        setTimeout(() => setAlerta(false),3000);

    }
    function consultar(){
        const Nombre = nombreConsorcio.current.value;

        fetch("http://localhost:8081/jugadores/consultar",{
            headers: {"content-type": "application/json"},
            method: "POST",
            body: JSON.stringify({Nombre})
        })
        .then(res => res.json())
        .then(res => {
            descripcion.current.value = res.dato.Descripcion;
            
            
        })
    }
    function modificar(){
        const Nombre = nombreConsorcio.current.value;
        const Descripcion = descripcion.current.value;

        fetch("http://localhost:8081/jugadores/actualizar",{
            headers: {"content-type": "application/json"},
            method: "POST",
            body: JSON.stringify({Nombre, Descripcion})
        })
        .then(res => res.json())
        .then(res => {
            if(res.estado === "Ok"){
                setError(true);
                setmsgError(res.msg);
            }
            else{
                setError(true);
                setmsgError(res.msg);
            }
        })

        nombreConsorcio.current.value = "";
        descripcion.current.value = "";

        setAlerta(true);
        setTimeout(() => setAlerta(false),3000); 

    }
    function eliminar(){
        const Nombre = nombreConsorcio.current.value;

        fetch("http://localhost:8081/prefijo/extension",{
            headers: {"content-type": "application/json"},
            method: "POST",
            body: JSON.stringify({Nombre})
        })
        .then(res => res.json())
        .then(res => {
            if(res.estado === "Ok"){
                setError(true);
                setmsgError(res.msg);
            }
            else{
                setError(true);
                setmsgError(res.msg);
            }
        })

        nombreConsorcio.current.value = "";
        descripcion.current.value = "";

        setAlerta(true);
        setTimeout(() => setAlerta(false),3000); 


    }


    function guardar1(){
        const NombreCon = nombreCon.current.value;
        const NombrePeaje = nombrePeaje.current.value;
        const Latitud = latitud.current.value;
        const Longitud = longitud.current.value;
        const Categoria = categoria.current.value;

        fetch("http://localhost:8081/prefijo/extension",{
            headers: {"content-type": "application/json"},
            method: "POST",
            body: JSON.stringify({NombreCon,NombrePeaje,Latitud,Longitud,Categoria})
        })
        .then(res => res.json())
        .then(res => {
            if(res.estado === "Ok"){
                setError(true);
                setmsgError(res.msg);
            }
            else{
                setError(true);
                setmsgError(res.msg);
            }
        })

        nombreCon.current.value = "";
        nombrePeaje.current.value = "";
        latitud.current.value ="";
        longitud.current.value ="";
        categoria.current.value ="";

        setAlerta(true);
        setTimeout(() => setAlerta(false),3000);

    }
    function consultar1(){
        const NombreCons = nombreCon.current.value;

        fetch("http://localhost:8081/jugadores/consultar",{
            headers: {"content-type": "application/json"},
            method: "POST",
            body: JSON.stringify({NombreCons})
        })
        .then(res => res.json())
        .then(res => {
            nombrePeaje.current.value = res.dato.NombrePeaje;
            latitud.current.value = res.dato.Latitud;
            longitud.current.value = res.dato.Longitud;
            categoria.current.value = res.dato.Categoria;
            
        })
    }
    function modificar1(){
        const NombreCon = nombreCon.current.value;
        const NombrePeaje = nombrePeaje.current.value;
        const Latitud = latitud.current.value;
        const Longitud = longitud.current.value;
        const Categoria = categoria.current.value;

        fetch("http://localhost:8081/jugadores/actualizar",{
            headers: {"content-type": "application/json"},
            method: "POST",
            body: JSON.stringify({NombreCon,NombrePeaje,Latitud,Longitud,Categoria})
        })
        .then(res => res.json())
        .then(res => {
            if(res.estado === "Ok"){
                setError(true);
                setmsgError(res.msg);
            }
            else{
                setError(true);
                setmsgError(res.msg);
            }
        })

        nombreCon.current.value = "";
        nombrePeaje.current.value = "";
        latitud.current.value ="";
        longitud.current.value ="";
        categoria.current.value ="";

        setAlerta(true);
        setTimeout(() => setAlerta(false),3000); 

    }
    function eliminar1(){
        const NombreCon = nombreCon.current.value;

        fetch("http://localhost:8081/jugadores/eliminar",{
            headers: {"content-type": "application/json"},
            method: "POST",
            body: JSON.stringify({NombreCon})
        })
        .then(res => res.json())
        .then(res => {
            if(res.estado === "Ok"){
                setError(true);
                setmsgError(res.msg);
            }
            else{
                setError(true);
                setmsgError(res.msg);
            }
        })

        nombreCon.current.value = "";
        nombrePeaje.current.value = "";
        latitud.current.value ="";
        longitud.current.value ="";
        categoria.current.value ="";

        setAlerta(true);
        setTimeout(() => setAlerta(false),3000); 


    }
  
    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-4">
                        <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">!Crea una consorcio!</h1>
                        </div>
                        <form className="user" action="" method="post">                                 
                            <div className="form-group">                            
                                <input type="text" className="form-control form-control-user" id="nombre" name="nombre"
                                    placeholder="Nombre consorcio" ref={nombreConsorcio} />               
                            </div>
                            <br />
                            <div class="mb-3">                
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Descripcion" ref={descripcion}></textarea>
                            </div>
                                
                                <button type="button" className="btn btn-primary btn-adm btn-block" onClick={guardar}>Guardar</button>
                                <button type="button" className="btn btn-success btn-adm btn-block" onClick={modificar}>Modificar</button>
                                <button type="button" className="btn btn-primary btn-adm btn-block" onClick={consultar}>Consultar</button>
                                <button type="button" className="btn btn-danger btn-adm btn-block" onClick={eliminar}>Eliminar</button>
                                <hr/>                        
                        </form>   
                    </div>
                    <div className="col-md-6 mt-4">
                        <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">!Crea un Peaje!</h1>
                        </div>
                        <form className="user" action="" method="post">
                                <div className="form-group">       
                                <div className="form-group">                            
                                    <input type="text" className="form-control form-control-user" id="nombre" name="nombre"
                                    placeholder="Nombre consorcio" ref={nombreCon} />                 
                        
                                </div>
                                <br />
                                <input type="text" className="form-control form-control-user mb-3" id="nombre" name="nombre"
                                placeholder="Nombre de peaje" ref={nombrePeaje} />   
                                <div className="row mb-3">               
                                    <div className="col-md-6">
                                        <input type="number" className="form-control" placeholder="Latitud" aria-label="" ref={latitud} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="number" className="form-control" placeholder="Longitud" aria-label="Username" ref={longitud} />
                                    </div>                      
                                
                            </div>       
                                <div class="input-group mb-3">
                                <label class="input-group-text" for="inputGroupSelect01">Categoria:</label>
                                <select class="form-select" id="inputGroupSelect01" ref={categoria} >
                                    <option selected>Seleccione</option>
                                    <option value="1">Categoria 1: Automóviles, camperos, camionetas, microbuses con ejes de llanta sencilla </option>
                                    <option value="2">Categoria 2: Buses, busetas, microbuses con eje trasero de doble llanta y camiones de dos ejes</option>
                                    <option value="3">Categoria 3: Vehículos de pasajeros y de carga de tres y cuatro ejes </option>
                                    <option value="4">Categoria 4: Vehículos de carga de cinco ejes</option>
                                    <option value="5">Categoria 5: Vehículos de carga de seis ejes</option>
                                </select>
                                </div>
                                <br />
                            </div>

                            <button type="button" className="btn btn-primary btn-adm btn-block" onClick={guardar1} >
                                Guardar
                            </button>
                            <button type="button" className="btn btn-success btn-adm btn-block" onClick={modificar1} >Modificar</button>
                            <button type="button" className="btn btn-primary btn-adm btn-block" onClick={consultar1} >Consultar</button>
                            <button type="button" className="btn btn-danger btn-adm btn-block" onClick={eliminar1} >Eliminar</button>
                            <hr/>                        
                        </form>  
                        {error && <div role="alert" className="alert alert-danger">{msgError}</div>} 
                    </div>
                </div>

            </div>
                    
        </>
    );
}
  