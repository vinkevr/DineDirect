import React from 'react';
import miImagen from '/src/images/DineDirect.png';
import { NavLink, useLocation,Outlet } from 'react-router-dom'

const Sidebar = () => {
    const location = useLocation();
  
    // Función auxiliar para determinar si la ubicación actual coincide con la ruta
    const isActive = (path) => {
      return location.pathname === path;
    };
  
    return ( 
        <>
        <div className="md:w-2/5 xl:w-1/5 bg-blue-950 flex justify-center">
            <div className='p-6'> 
                
                <div className='flex justify-center items-center'>
                    <img className='mx-auto' src={miImagen} alt="Mi imagen" width={150}
                    height={35}/>
                </div>
                <p className='mt-3 text-gray-400'>Administra tu restaurante en las siguientes opciones: </p>

                <nav className='mt-16'> 
                <NavLink  to="/" className= {`${isActive("/") ? "text-orange-500 font-bold" : "text-gray-100"} p-1 block font-bold hover:bg-orange-500 hover:text-gray-900`}>Ordenes</NavLink>
                <NavLink to="/menu" className= {`${isActive("/menu") ? "text-orange-500 font-bold" : "text-gray-100"} p-1 block font-bold hover:bg-orange-500 hover:text-gray-900`}>Menú</NavLink>
                </nav>
            </div>
        </div>
        <Outlet />
        </>
     );
}
 
export default Sidebar;