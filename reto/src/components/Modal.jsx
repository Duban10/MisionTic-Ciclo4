

export function Modal(){
    return(
        <div className="">

            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Generar Reporte 
            </button>


            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Dinero Recaudado</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <label for="calendar" className="l-calendar">Fecha Inicial:</label>
                    <input type="date"  className="i-calendar" id="calendar" name="trip-calendar"
                            
                            min="2021-01-01" max="2021-12-31"/>
                    <label for="calendar" className="l-calendar">Fecha Final:</label>
                    <input type="date"  className="i-calendar" id="calendar" name="trip-calendar"
                            
                            min="2021-01-01" max="2021-12-31"/>
                    <label for="calendar" className="l-calendar">Nombre del peaje:</label>
                    <input type="text"  className="form-control" id="" name=""/>
                    
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" className="btn btn-primary">Generar Reporte</button>
                </div>
                </div>
            </div>
            </div>

       
            {/* <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Generar Reporte 
            </button>


            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Dinero Recaudado</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <label for="calendar" className="l-calendar">Fecha Inicial:</label>
                        <input type="date"  className="i-calendar" id="calendar" name="trip-calendar"
                            value="2021-12-22"
                            min="2021-01-01" max="2021-12-31"/>
                        
                    </div>                    
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Understood</button>
                </div>
            </div>
            </div> */}
        </div>

        
        

    )
}