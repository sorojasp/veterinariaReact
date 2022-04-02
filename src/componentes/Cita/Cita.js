

import React from 'react';
import './Cita.css';

import observers from '../../shared/observers';


function Cita(props){

  const nombreApellidoCliente=`${props.cliente.nombre}${props.cliente.apellido}`;
  const nombreApellidoVeterinario=`${props.veterinario.nombre}${props.veterinario.apellido}`;
  let nameLastNameClient=''

  const updateData=(event)=>{
    console.log("usado para actualizar la data de la card", props)
  }

  const catchNameClient=(event)=>{
    nameLastNameClient=event.target.value
    console.log("new name", nameLastNameClient)
  }

  const handleDateTimeChange=(field, e) => {
    console.log(field,e.target.value);
  };

  return(
    <div className="cita-card">


   <p>Cliente</p>

    <div>
    <input placeholder={nombreApellidoCliente} onChange={catchNameClient}></input>
    </div>

    <div>
    <input placeholder={props.cliente.documento}></input>
    </div>

    <p>Mascota</p>

     <div>
     <input placeholder={props.mascota.tipo}></input>
     </div>

     <div>
     <input placeholder={props.mascota.nombre}></input>
     </div>


     <p>Veterinario</p>

      <div>
      <input placeholder={nombreApellidoVeterinario}></input>
      </div>


      <p>Cita</p>

       <div>


       <input type="datetime-local" id="meeting-time"
       name="meeting-time" value="2018-06-12T19:30" onChange={e => handleDateTimeChange('datetime', e)}/>


       </div>


       <button onClick={updateData}>actualizar</button>
       <button onClick={() => observers.eliminarCitaSubs.function(`${props.id}`)} >eliminar</button>







    </div>
  )
}



export default Cita;
