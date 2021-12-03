import imagen from '../assets/images/2.svg'
import '../assets/css/App.css';
import { Header1 } from "./Header1";
import { Input } from "./Input";
import { Modal } from './Modal';

export function Externo() {
  
    return (    
        <>
        <Header1 />
        <div className="container">
            <div className="row">
                <div className="col-md-7 mt-4">
                    <form className="" action="" method="post">
                        <label htmlFor="">Código de la Tarjeta</label>
                        <Input />
                        <label htmlFor="">Cuenta Bancaria a descontar Recarga</label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Seleccionar</option>
                            <option value="1">Bancolombia</option>
                            <option value="2">Banco de Bógota</option>                        
                        </select><br />
                        <div className="col-md-12">
                            <input type="number" className="form-control" placeholder="Valor a Recargar" aria-label=""/>
                        </div><br/>
                        <button type="submit" className="btn btn-primary btn-user btn-block">Recargar</button>
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