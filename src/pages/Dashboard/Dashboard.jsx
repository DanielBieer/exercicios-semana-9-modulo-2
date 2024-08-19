

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext/AuthContext';

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut();
    navigate('/login'); 
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {user ? (
        <div>
          <p>Bem-vindo, {user.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Você não está autenticado.</p>
      )}
    </div>
  );
};

export default Dashboard;
