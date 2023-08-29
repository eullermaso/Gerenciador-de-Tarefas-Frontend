import "./Login.scss"

import Logo2 from '../assests/images/logo-2.png'
import CustomButton from "../components/CustomButton"


const Login = () => {
    return (
        <div className="login-container">
            <img src={Logo2} alt="Full Stack Club" />
            <div className="button-container">
                <CustomButton>Entrar</CustomButton>
            </div>
        </div>
    )
}

export default Login