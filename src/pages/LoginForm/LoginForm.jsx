
import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext/AuthContext';


const LoginForm = () => {
  const { signIn } = useAuth();
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async () => {
    await signIn(credentials);
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={credentials.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleChange}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
