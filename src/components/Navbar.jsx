import { useState, useEffect } from 'react';
import { Logo, Luna, Sol } from './Icons';

const Navbar = ({ user, onLogout }) => {
  const [tema, setTema] = useState('claro');

  const handleChange = (e) => setTema(e.target.checked ? 'oscuro' : 'claro');

  useEffect(() => {
    document.body.setAttribute('data-tema', tema);
  }, [tema]);

  return (
    <nav>
      <Logo />
      <div className="switch">
        <Sol />
        <label>
          <input
            type="checkbox"
            className="check-switch"
            onChange={handleChange}
            hidden
          />
          <span className="slider"></span>
        </label>
        <Luna />
      </div>
      {user && <p className="welcome">Bienvenido, {user}!</p>}
      {user && <button className="logout-button" onClick={onLogout}>Cerrar sesión</button>}
    </nav>
  );
};

export default Navbar;
