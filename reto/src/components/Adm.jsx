
import { Header } from "./Header";
import {Form} from './Form';
import { Input } from "./Input";
import { TextArea } from "./TextArea";
import { FormGroup } from "./FormGroup";



export function Adm() {
  
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
                            <Form />
                            <TextArea />
                            
                            <button type="submit" className="btn btn-primary btn-user btn-block">
                                Guardar
                            </button>
                            <hr/>                        
                        </form>   
                    </div>
                    <div className="col-md-6 mt-4">
                        <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">!Crea un Peaje!</h1>
                        </div>
                        <form className="user" action="" method="post">
                            <div className="form-group">       
                                <Form />
                                <Input />
                                <FormGroup   />
                                <div class="input-group mb-3">
                                <label class="input-group-text" for="inputGroupSelect01">Categoria:</label>
                                <select class="form-select" id="inputGroupSelect01">
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

                            <button type="submit" className="btn btn-primary btn-user btn-block">
                                Guardar
                            </button>
                            <hr/>                        
                        </form>   
                    </div>
                </div>

            </div>
                    
        </>
    );
}
  