import { useState } from 'react';
import './App.css';
import { Outlet, Route, Routes, useLocation } from 'react-router';

import firebase, { FirebaseContext } from './firebase';
import Ordenes from './components/paginas/Ordenes';
import Menu from './components/paginas/Menu';
import NuevoPlatillo from './components/paginas/NuevoPlatillo';
import Sidebar from './components/ui/sidebar';
import Login from './components/paginas/Login';

function AppContent() {
  const location = useLocation();

  // Verificar si el usuario está en la página de inicio de sesión
  const isLoginPage = location.pathname === '/login';
  return (
    <div className='md:flex min-h-screen min-w-full'>
        {!isLoginPage && <Sidebar />}  {/* Renderizar Sidebar solo si no está en la página de inicio de sesión */}
    <div className='md:w-3/5 xl:w-4/5 p-6'>
      <Routes>
        <Route path='/' element={<Ordenes />} />
        <Route path='/menu/*' element={<Menu />} />
        <Route path='/nuevo-platillo' element={<NuevoPlatillo />} />
      </Routes>
    </div>
    <Outlet/>
    </div>
  );
}

function App() {
  

  return (
    <FirebaseContext.Provider value={{ firebase }}>
      <div className='md:flex min-h-screen min-w-screen'>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<AppContent />} />
        </Routes>
      </div>
    </FirebaseContext.Provider>
  );
}

export default App;



