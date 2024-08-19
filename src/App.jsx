import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AuthProvider } from './contexts/AuthContext/AuthContext'
import LoginForm from './pages/LoginForm/LoginForm'
import UserRegistrationForm from './pages/Ex1/UserRegistrationForm'
import AppRoutes from './routes/AppRoutes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Exercicio 2 */}

    {/* <UserRegistrationForm></UserRegistrationForm> */}
    <BrowserRouter>
     <AuthProvider>
        {/* <LoginForm></LoginForm> */}
        <AppRoutes/>
     </AuthProvider>
    </BrowserRouter>
    </>
  )
}

export default App
