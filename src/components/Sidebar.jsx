import logo from '../assests/images/logo.png'
import CustomButton from './CustomButton'

import { useNavigate } from 'react-router-dom'

import './Sidebar.scss'

const Sidebar = () => {
  const navigate = useNavigate()

  const handleSignOutClick = () => {
    navigate('/login')
  }
  return (
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt='Full Stack Club'/>
            </div>

            <div className="sign-out">
                <CustomButton onClick={handleSignOutClick}>SAIR</CustomButton>
            </div>
        </div>
  )
}

export default Sidebar
