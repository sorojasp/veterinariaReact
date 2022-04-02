import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from 'react';


import Cita  from './componentes/Cita/Cita.js';

import observers from './shared/observers';



function App() {

let i=0
  const [dataDeCitas, setDataDeCita] = useState({
    citas:[]
  });

  const dataCita={
	"message": "SE HA CONSULTADO CON EXITO EN LA TABLA DE CITAS",
	"citas": [
		{
			"id_cita": 31,
			"fecha_cita": "2022-05-02T05:00:00.000Z",
			"descripcion_sintomas": "esta muy enferma mi mascota",
			"id_veterinario": 38,
			"nombre_veterinario": "Pedro",
			"apellido_veterinario": "Palacios",
			"cedula_ciudadania_vet": "8239323289",
			"num_tarjeta_profesional_vet": "123123123",
			"telefono_veterinario": "320392893",
			"correo_veterinario": "Pedro3@gmail.com",
			"direccion_veterinario": "crra 6B 34-54",
			"id_especializacion": 1,
			"foto_veterinario": "https://www.petplusclinica.com/wp-content/uploads/2019/07/Ivan-Ordonez.jpg",
			"id_mascota": 2,
			"nombre_mascota": "Balto",
			"edad_mascota": "5",
			"raza_mascota": "Husky Siveriano",
			"tipo_mascota": "PERRO",
			"id_usuario": 12,
			"nombre_usuario": "Maria",
			"apellido_usuario": "Lopez",
			"telefono_usuario": "1212312",
			"correo_usuario": "Maria@gmail.com",
			"password_usuario": "$2b$10$au7bOAO.SpvC5cCXPADvBO1ZAHmhqqo.5/iYIzbymTR/6g0pnNtu6",
			"id_rol": 1,
			"tipo_rol": "CLIENTE"
		},
		{
			"id_cita": 32,
			"fecha_cita": "2022-05-03T05:00:00.000Z",
			"descripcion_sintomas": "se callo y se hirio",
			"id_veterinario": 38,
			"nombre_veterinario": "Pedro",
			"apellido_veterinario": "Palacios",
			"cedula_ciudadania_vet": "8239323289",
			"num_tarjeta_profesional_vet": "123123123",
			"telefono_veterinario": "320392893",
			"correo_veterinario": "Pedro3@gmail.com",
			"direccion_veterinario": "crra 6B 34-54",
			"id_especializacion": 1,
			"foto_veterinario": "https://www.petplusclinica.com/wp-content/uploads/2019/07/Ivan-Ordonez.jpg",
			"id_mascota": 3,
			"nombre_mascota": "Tozo",
			"edad_mascota": "3",
			"raza_mascota": "Siames",
			"tipo_mascota": "GATO",
			"id_usuario": 10,
			"nombre_usuario": "Stiven",
			"apellido_usuario": "Lorenzo",
			"telefono_usuario": "12123",
			"correo_usuario": "Lorenzo@gmail.com",
			"password_usuario": "$2b$10$xYhozYQ/vmA8LareXrG4F.R.fH6Ph7OmBIT5BSaWPRlV8caTK1aYm",
			"id_rol": 1,
			"tipo_rol": "CLIENTE"
		},
		{
			"id_cita": 33,
			"fecha_cita": "2000-05-20T05:00:00.000Z",
			"descripcion_sintomas": "mi mascota a tenido problemas de caminar",
			"id_veterinario": 39,
			"nombre_veterinario": "Laura",
			"apellido_veterinario": "Bermudez",
			"cedula_ciudadania_vet": "1231232",
			"num_tarjeta_profesional_vet": "1123212",
			"telefono_veterinario": "11231212",
			"correo_veterinario": "Laura@gmail.com",
			"direccion_veterinario": "crra 24 C 45-60 ",
			"id_especializacion": 1,
			"foto_veterinario": "https://www.petplusclinica.com/wp-content/uploads/2019/07/Maria-Fernanda-Mora.jpg",
			"id_mascota": 4,
			"nombre_mascota": "Nato",
			"edad_mascota": "3",
			"raza_mascota": "Fold Escoces",
			"tipo_mascota": "GATO",
			"id_usuario": 15,
			"nombre_usuario": "Marina",
			"apellido_usuario": "Paterson",
			"telefono_usuario": "3133149412",
			"correo_usuario": "Marina@gmail.com",
			"password_usuario": "$2b$10$r7XzDfP.p7RuR5/OUaenXu3dMbC6CmlCX7CquE0XTIp7UlzyOt3w6",
			"id_rol": 2,
			"tipo_rol": "VETERINARIO"
		},
		{
			"id_cita": 36,
			"fecha_cita": "2006-05-20T05:00:00.000Z",
			"descripcion_sintomas": "mi mascota a tenido problemas de caminar",
			"id_veterinario": 39,
			"nombre_veterinario": "Laura",
			"apellido_veterinario": "Bermudez",
			"cedula_ciudadania_vet": "1231232",
			"num_tarjeta_profesional_vet": "1123212",
			"telefono_veterinario": "11231212",
			"correo_veterinario": "Laura@gmail.com",
			"direccion_veterinario": "crra 24 C 45-60 ",
			"id_especializacion": 1,
			"foto_veterinario": "https://www.petplusclinica.com/wp-content/uploads/2019/07/Maria-Fernanda-Mora.jpg",
			"id_mascota": 4,
			"nombre_mascota": "Nato",
			"edad_mascota": "3",
			"raza_mascota": "Fold Escoces",
			"tipo_mascota": "GATO",
			"id_usuario": 15,
			"nombre_usuario": "Marina",
			"apellido_usuario": "Paterson",
			"telefono_usuario": "3133149412",
			"correo_usuario": "Marina@gmail.com",
			"password_usuario": "$2b$10$r7XzDfP.p7RuR5/OUaenXu3dMbC6CmlCX7CquE0XTIp7UlzyOt3w6",
			"id_rol": 2,
			"tipo_rol": "VETERINARIO"
		}
	],
	"code": 1
};

  const urlServer="https://jsonplaceholder.typicode.com/albums";//solo es que le cambies esta url por la tuya

  const getdataDeCitas=async ()=>{
    const response = await fetch(urlServer);
    let data = await response.json();
    console.log(data)

    //setDataDeCita(data);cuando cambies la url, debes poner la linea siguiente en comentario y habilitar esta
    setDataDeCita(dataCita)

  }

  /**Esto es para solo consumir el servicio una vez***/
  useEffect(() => {
  window.onload = () => {
    getdataDeCitas();
  };
})


const updateData=()=>{
  console.log("update data")
}


const deleteCita=()=>{
  console.log("deleteCita")
}

observers.eliminarCitaSubs.observable.subscribe(idCita=>{
 i++
  console.log("captura data emitida:",i);
  console.log(dataDeCitas.citas.filter(cita=>cita.id_cita !=idCita))
  setDataDeCita({citas:dataDeCitas.citas.filter(cita=>cita.id_cita !=idCita)})

  //*aquí tienes que montar tu servicio de eliminar**//

})

const elementsCollect=[{name:"Juan"},
{name:"Alberto"}];



  return (



    <div className="App" style={{padding: "5px"}}>
    {true?<h2>Lista de citas</h2>:null}

    

    {
  dataDeCitas.citas.map((element,index)=>{

  return  <Cita cliente={{nombre:element.nombre_usuario, apellido:element.apellido_usuario, documento:'8065137'}}
    mascota={{tipo:element.tipo_mascota, nombre:element.nombre_mascota}}
    cita={{fecha:element.fecha_cita}}
    veterinario={{nombre:element.nombre_veterinario, apellido:element.apellido_veterinario}}
    key={index}
    id={element.id_cita}

    />

  })
}


    </div>
  );
}

export default App;
