import imagen from '../assets/images/2.svg'
import '../assets/css/App.css';
import { Header1 } from "./Header1";
import { Input } from "./Input";
import { Modal } from './Modal';
import {useRef, useState} from 'react';

export function Externo() {
  
    const codTarjeta = useRef();
    const cuenta = useRef();
    const valorTarjeta = useRef();
    
   
    const [error, setError] = useState()
    const [msgError, setmsgError] = useState()

    function recargar() {
        const codigoTarjeta  = codTarjeta.current.value;
        const cuenta = cuenta.current.value;
        const valorTarjeta= valorTarjeta.current.value;
       

        // direccion de donde esta la api
        fetch("http://localhost:8081/tarjeta/recargar",{
            headers: {"content-type": "application/json"},
            method: "POST",
            body: JSON.stringify({codigoTarjeta,cuenta,valorTarjeta})
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

    }

    return (    
        <>
        <Header1 />
        <div className="container">
            <div className="row">
                <div className="col-md-7 mt-4">
                    {error && <div role="alert" className="alert alert-danger">{msgError}</div>} 
                    <form className="" action="" method="post">
                        <label htmlFor="">Código de la Tarjeta</label>
                        <input type="number" id="codTarjeta" className="form-control mb-2" placeholder="Codigo de la targeta" aria-label="" ref={codTarjeta} />
                        <label htmlFor="">Cuenta Bancaria a descontar Recarga</label>
                        <input type="text" id="cuenta" className="form-control " placeholder="Digite cuenta Bancaria" aria-label="" ref={cuenta} />
                        <br />
                        <div className="col-md-12">
                            <input type="number" id="valorTarjeta" className="form-control" placeholder="Valor a Recargar" aria-label="" ref={valorTarjeta} />
                        </div><br/>
                        <button type="button" className="btn btn-primary btn-user btn-block" onClick={recargar}>Recargar</button>
                    </form>
                    <Modal />
                </div>
                <div className="col-md-5 col-sm-12 mt-5">
                    <img src={imagen} alt="" />
                </div>
            </div>
        </div>
        
        </>
    );
}