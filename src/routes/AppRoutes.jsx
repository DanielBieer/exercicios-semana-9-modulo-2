import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext/AuthContext';
import App from '../App';
import Dashboard from '../pages/Dashboard/Dashboard';
import LoginForm from '../pages/LoginForm/LoginForm';
import RestrictedPage from '../pages/RestrictedPage/RestrictedPage';


const PrivateRoute = ({ element }) => {
  const { user } = useAuth();
  return user ? element : <Navigate to="/login" />;
};

const MainLayout = () => (
    <>
      <header>
        <h1>Meu Aplicativo</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Rodapé do Aplicativo</p>
      </footer>
    </>
  );
  
  const AppRoutes = () => (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard" element={<PrivateRoute element={<Dashboard />} />} />
        <Route path="*" element={<RestrictedPage />} />
      </Route>
    </Routes>
  );
  
  export default AppRoutes;
