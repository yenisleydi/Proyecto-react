// Importar modulos de react / dependencias
import React, {Fragment} from "react";

//Funcion del componente

const MiComponente = () =>{
    let nombre = "yenisleydi";
    let web = "yenisleydiweb.es";

    let usuario = {
        nombre: "yenisleydi",
        apellidoP: "Benitez",
        apellidoM: "Marinez",
        web: "yenisleydiweb.es"

    };
    return (
        <Fragment>
            <hr/>
            <h2>Componente creado </h2>
            <h3>Datos del usuario</h3>
            <ul>
                <li>Nombre : <strong>{usuario.nombre}</strong></li>
                <li>web : <strong>{usuario.web}</strong></li>
            </ul>
            <p>Este es mi primer componente</p>
            <ul>
                <li> React</li>
                <li>Angular</li>
                <li>Vue</li>
            </ul>
        </Fragment>
    );
    
}

// Exporte -- es obligatorio colocarlo
export default MiComponente;