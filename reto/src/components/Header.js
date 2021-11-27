import React, {Component} from 'react';

class Header extends Component{  

    //muestra la vista del componente
    render(){    

        return(
        <React.Fragment>  
            
                <link >Home</link>
                <link >Iniciar sesion</link>
                <link >Registrarse</link>
            
        </React.Fragment>
        );
    };  
}

export default Header;