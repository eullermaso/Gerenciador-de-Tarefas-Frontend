import './Login.scss'

import Logo2 from '../assests/images/logo-2.png'
import CustomButton from '../components/CustomButton'

import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const handleSignInClick = () => {
    navigate('/')
  }
  return (
        <div className="login-container">
            <img src={Logo2} alt="Full Stack Club" />
            <div className="button-container">
                <CustomButton onClick={handleSignInClick}>Entrar</CustomButton>
            </div>
        </div>
  )
}

export default Login
