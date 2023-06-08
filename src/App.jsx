import { useState } from 'react';
import './App.css'
import {Route, Routes} from 'react-router'

import firebase, {FirebaseContext} from './firebase';
import Ordenes from './components/paginas/Ordenes';
import Menu from './components/paginas/Menu';
import NuevoPlatillo from './components/paginas/NuevoPlatillo';
import Sidebar from './components/ui/sidebar';
import Login from './components/paginas/Login';

function App() {
  const [count, setCount] = useState(0)

  return (

      <FirebaseContext.Provider
        value={{
          firebase
        }}
        >

        <Routes>
            <Route path="/login" element={<Login /> }/> 
        </Routes>
        <div className='md:flex min-h-screen min-w-screen'>
        <Sidebar />

        <div className='md:w-3/5 xl:w-4/5 p-6'>
          <Routes>
             <Route path="/" element={<Ordenes  />  }/>
             <Route path="/menu" element={<Menu  />  }/>
             <Route path="/nuevo-platillo" element={<NuevoPlatillo  />  }/>
             

             

          </Routes>
         </div>
        </div>
      </FirebaseContext.Provider>
  )
}

export default App
