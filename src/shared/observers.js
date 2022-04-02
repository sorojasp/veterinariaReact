
import { Subject } from 'rxjs';


const eventoEliminarCita = new Subject();
const evEliminarCita$ = eventoEliminarCita.asObservable();


const emitirEventoEliminarCita=(idCita)=>{
  console.log("emite evento", idCita);
  eventoEliminarCita.next(idCita);
}

const eliminarCitaSubs={
  function:emitirEventoEliminarCita,
  observable:evEliminarCita$,
  subbject:eventoEliminarCita
}


export default{eliminarCitaSubs}
