import React, {Fragment, useState} from 'react'
import { v4 as uuid } from 'uuid';

const Formulario = ({crearCita}) => {

    //Crear State de Citas
    const [cita, actualizarCita] = useState({
        paciente:'',
        edad:'',
        fecha:'',
        hora:'',
        sintomas:''
    });
    const [ error, actualizarError ] = useState(false)


    //Funcion de que se ejecuta cada que usuario escribe un input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }

    //Extraer los valores
    const { paciente, edad, fecha, hora, sintomas } = cita;

    //Cuando el usuario presiona agregar cita
    const submitCita = e => {
        e.preventDefault();


        //validar cita
        if(paciente.trim()=== '' || edad.trim() === '' || fecha.trim() === '' || hora.trim()=== '' || sintomas.trim()=== ''){
            actualizarError(true);
            return;
        }

        //Eliminar mensaje previo
        actualizarError(false);


        //asignar id
        cita.id = uuid();
        
        //crear cita
        crearCita(cita);




        //reiniciar form
        actualizarCita({
        paciente:'',
        edad:'',
        fecha:'',
        hora:'',
        sintomas:''
        })
    }

    return (  
        <Fragment>
            <h2>Crear Cita</h2>
            {error ? <p className="alerta-error">todos lo campos son obligatorios</p>:null}
            <form
                onSubmit={submitCita}
            
            >
                <label>Nombre Paciente:</label>
                <input
                    type="text"
                    name="paciente"
                    className="u-fullwidth"
                    placeholder="Nombre Paciente"
                    onChange={actualizarState}
                    value={paciente}
                />
                <label>Edad:</label>
                <input
                     type="number" 
                     size="6" 
                     name="edad" 
                     min="18" 
                     max="99" 
                     className="u-fullwidth"
                     onChange={actualizarState}
                     value={edad}
                    
                />

                <label>Hora:</label>
                <input
                    id="time"
                    name="hora"
                    type="time"
                    defaultValue="00:00"
                    className="u-fullwidth"
                    onChange={actualizarState}
                    value={hora}
                />
                
                <label>Fecha:</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-fullwidth"
                    onChange={actualizarState}
                    value={fecha}

                />
                <label>Sintomas</label>
                <textarea
                className="u-full-width"
                name="sintomas"
                onChange={actualizarState}
                value={sintomas}
                >
                    
                </textarea>

                <button 
                    id="cita"
                    type="submit"
                    className="u-full-width button-primary"
                > 
                Agregar Cita

                </button>

            </form>
        </Fragment>
    );
}
 
export default Formulario;