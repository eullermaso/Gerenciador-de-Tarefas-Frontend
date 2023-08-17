import logo from '../assests/images/logo.png'
import CustomButton from './CustomButton'

import 'Sidebar.scss'

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt='Full Stack Club'/>
            </div>

            <div className="sign-out">
                <CustomButton>SAIR</CustomButton>
            </div>
        </div>
    )
}