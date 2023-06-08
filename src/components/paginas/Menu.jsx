import React, {useState, useEffect, useContext, useSyncExternalStore} from 'react'; //use state para colocar el resultado de la cnnsulta     // UseEfect para que cuando cargue el componente haga la consulta a firebase
//useContext porque en el app.js definimos nuestro context, ahi tenemos el provider y aqui tendriamos el consumer
import {Link} from 'react-router-dom';
import { FirebaseContext } from '../../firebase';

import Platillo from '../ui/Platillo';

const Menu = () => {
    
    // definir el state para los platillos
    const [platillos, guardarPlatillos ] = useState([]);

    const{ firebase } = useContext(FirebaseContext);

    //consultar la base de datos al cargar 
    useEffect(()=>{
        const obtenerPlatillos = ()=>{
            firebase.db.collection('productos').onSnapshot(manejarSnapshot);
        }
        obtenerPlatillos();
    }, []);  // "[]" se pone para que cargue una sola vez con el arreglo vacio
    
    //Snapshot nos permite utilizar la base de datos en tiempo real de firestore
    function manejarSnapshot(snapshot){
        const platillos = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        });
        //almacenar los resultados en el state 
        guardarPlatillos(platillos);
    }
    
    return ( 
        <div className=''>
            <h1 className='text-3xl font-medium
            '> Menu</h1>
            <div className='flex items-start mt-10'>
            <Link to="/nuevo-platillo" className='ml-8 bg-blue-950 hover:bg-blue-700, inline-block mb-5 px-8 py-2 text-white upp
            font-medium rounded-md'>Agregar Platillo
            </Link>
        </div>
            {platillos.map( platillo => (
                <Platillo
                    key={platillo.id}
                    platillo={platillo}
                />
            ))}
            
        </div>
     );
}
 
export default Menu;