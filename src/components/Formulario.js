import React, {Fragment} from 'react'

const Formulario = () => {
    return (  
        <Fragment>
            <h2>Crear Cita</h2>

            <form >
                <label>Nombre Paciente:</label>
                <input
                    type="text"
                    name="paciente"
                    className="u-fullwidth"
                    placeholder="Nombre Paciente"
                />
                <label>Edad:</label>
                <input
                     type="number" 
                     size="6" 
                     name="age" 
                     min="18" 
                     max="99" 
                     value="21"
                     className="u-fullwidth"
                    
                />
                <label>Genero</label>
                <input
                type="radio"
                value="Femenino"
                className="u-fullwidth"
                /> Femenino
                <input
                type="radio"
                value="Masculino"
                className="u-fullwidth"
                /> Masculino

                <label>Hora:</label>
                <input
                    id="time"
                    label="hora"
                    type="time"
                    defaultValue="00:00"
                    className="u-fullwidth"
                />
                
                <label>Fecha:</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-fullwidth"

                />
                <label>Sintomas</label>
                <textarea
                className="u-full-width"
                name="sintomas"
                >
                    
                </textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"

                >Agregar Cita

                </button>

            </form>
        </Fragment>
    );
}
 
export default Formulario;