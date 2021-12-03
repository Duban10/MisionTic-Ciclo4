import '../assets/css/App.css';

export function FormGroup() {
  
    return (    
        <>
            <div className="row mb-3">               
                    <div className="col-md-6">
                        <input type="number" className="form-control" placeholder="Latitud" aria-label="Username"/>
                    </div>
                    <div className="col-md-6">
                        <input type="number" className="form-control" placeholder="Longitud" aria-label="Username"/>
                    </div>                      
                
            </div>        
        </>
    );
}