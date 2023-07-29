import './App.css';
import Navbar from './components/Navbar';
import Pokemones from './components/Pokemones';
import Login from './components/Login';
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState('');

  const handleLogin = (username) => {
    setUser(username);
    localStorage.setItem('user', username); // Guardar el nombre de usuario en localStorage
  };

  const handleLogout = () => {
    setUser('');
    localStorage.removeItem('user'); // Eliminar el nombre de usuario del localStorage al cerrar sesión
  };

  useEffect(() => {
    // Verificar si hay un usuario almacenado en el localStorage al montar el componente
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <>
      <Navbar user={user} onLogout={handleLogout} />
      {user ? <Pokemones user={user} /> : <Login onLogin={handleLogin} />}
    </>
  );
}

export default App;
