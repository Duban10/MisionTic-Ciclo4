import '../assets/css/App.css';
import { Header } from './Header';
import {useRef, useState} from 'react';

export function Cobro() {


    const formaPago = useRef();
    const codigoTarjeta = useRef();
    const placa = useRef();
    const categorias = useRef();
    const valor = useRef();
    const codigo = useRef();
    const valorRecarga = useRef();

    const[alerta,setAlerta] = useState(false);
    const [error, setError] = useState()
    const [msgError, setmsgError] = useState()

    function Cobrar(){
        const FormaPago = formaPago.current.value;
        const CodigoTarjeta = codigoTarjeta.current.value;
        const Placa = placa.current.value;
        const Categorias = categorias.current.value;
        const ValorRecarga = valor.current.value;

        fetch("http://localhost:8081/prefijo/extension",{
            headers: {"content-type": "application/json"},
            method: "POST",
            body: JSON.stringify({FormaPago,CodigoTarjeta,Placa,Categorias,ValorRecarga})
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

        formaPago.current.value = " ";
        codigoTarjeta.current.value = " ";
        placa.current.value = " ";
        categorias.current.value = " ";
        valor.current.value = " ";

        setAlerta(true);
        setTimeout(() => setAlerta(false),3000);

    }

    function Recargar(){
        const Codigo = codigo.current.value;
        const ValorRecarga = valorRecarga.current.value;
        

        fetch("http://localhost:8081/prefijo/extension",{
            headers: {"content-type": "application/json"},
            method: "POST",
            body: JSON.stringify({Codigo,ValorRecarga})
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

        codigo.current.value ="";
        valorRecarga.current.value ="";

        setAlerta(true);
        setTimeout(() => setAlerta(false),3000);

    }
  
  
    return (    
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">

                        <div className="text-center mt-4">
                            <h1 className="h4 text-gray-900 mb-4">¡Cobro!</h1>
                        </div>
                        <form className="" action="" method="post">
                            <select className="form-select mt-4" aria-label="Default select example" ref={formaPago}>
                                <option selected>Forma de Pago</option>
                                <option value="1">Tarjeta</option>
                                <option value="2">Efectivo</option>                        
                            </select><br />
                            <input type="text" className="form-control" placeholder="Si es tarjeta digite el codigo" aria-label="" ref={codigoTarjeta}/><br />
                            <label htmlFor="">Placa</label>
                            <input type="text" className="form-control" placeholder="Placa" aria-label="" ref={placa}/><br />
                            <select class="form-select" aria-label="Default select example" ref={categorias}>
                                <option selected>Categoria</option>
                                <option value="1">Categoria 1: Automóviles, camperos, camionetas, microbuses con ejes de llanta sencilla </option>
                                <option value="2">Categoria 2: Buses, busetas, microbuses con eje trasero de doble llanta y camiones de dos ejes</option>
                                <option value="3">Categoria 3: Vehículos de pasajeros y de carga de tres y cuatro ejes </option>
                                <option value="4">Categoria 4: Vehículos de carga de cinco ejes</option>
                                <option value="5">Categoria 5: Vehículos de carga de seis ejes</option>
                            </select><br />
                            <input type="number" className="form-control" placeholder="Valor a cobrar" aria-label="" ref={valor}/><br />
                            <button type="" className="btn btn-primary btn-user btn-block" onClick={Cobrar}>
                                    Cobrar
                            </button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <div className="text-center mt-4">
                            <h1 className="h4 text-gray-900 mb-4">¡Recargar RFID!</h1>
                        </div>
                        <form className="" action="" method="post">
                            <div className="row mb-3">               
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="Codigo tarjeta" aria-label="" ref={codigo}/>
                                </div>
                                <div className="col-md-6">
                                    <input type="number" className="form-control" placeholder="Valor a recargar" aria-label="" ref={valorRecarga}/>
                                </div>              
                            </div> 
                            <button type="" className="btn btn-success btn-user btn-block" onClick={Recargar}>
                                    Recargar
                            </button>
                        </form> 
                        {error && <div role="alert" className="alert alert-danger">{msgError}</div>}      
                    </div>
                </div>
            </div>
        </>
    );
}