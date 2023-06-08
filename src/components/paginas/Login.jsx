import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import Imagen from '/src/images/dinedirectbg.png';
import 'firebase/compat/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('Inicio de sesión exitoso');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='flex h-screen'>
    <div className='relative w-2/3'>  
       <img className='mx-auto h-screen' src={Imagen} alt="Mi imagen" width={1900}
                    />

    </div>
    <div className="relative w-1/3 bg-gray-200 flex justify-center items-center">
      <form onSubmit={handleLogin} className="w-64 p-6 bg-white shadow-md rounded">
        <h2 className="text-2xl font-bold mb-4">Iniciar sesión</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
    </div>
  );
};

export default Login;