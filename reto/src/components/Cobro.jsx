import '../assets/css/App.css';
import { Header } from './Header';
import { Input } from './Input';

export function Cobro() {
  
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
                            <select className="form-select mt-4" aria-label="Default select example">
                                <option selected>Forma de Pago</option>
                                <option value="1">Tarjeta</option>
                                <option value="2">Efectivo</option>                        
                            </select><br />
                            <input type="text" className="form-control" placeholder="Si es tarjeta digite el codigo" aria-label=""/><br />
                            <label htmlFor="">Placa</label>
                            <Input />
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Categoria</option>
                                <option value="1">Categoria 1: Automóviles, camperos, camionetas, microbuses con ejes de llanta sencilla </option>
                                <option value="2">Categoria 2: Buses, busetas, microbuses con eje trasero de doble llanta y camiones de dos ejes</option>
                                <option value="3">Categoria 3: Vehículos de pasajeros y de carga de tres y cuatro ejes </option>
                                <option value="4">Categoria 4: Vehículos de carga de cinco ejes</option>
                                <option value="5">Categoria 5: Vehículos de carga de seis ejes</option>
                            </select><br />
                            <input type="number" className="form-control" placeholder="Valor" aria-label=""/><br />
                            <button type="submit" className="btn btn-primary btn-user btn-block">
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
                                    <input type="text" className="form-control" placeholder="Codigo tarjeta" aria-label=""/>
                                </div>
                                <div className="col-md-6">
                                    <input type="number" className="form-control" placeholder="Valor a recargar" aria-label=""/>
                                </div>              
                            </div> 
                            <button type="submit" className="btn btn-success btn-user btn-block">
                                    Recargar
                            </button>
                        </form>      
                    </div>
                </div>
            </div>
        </>
    );
}