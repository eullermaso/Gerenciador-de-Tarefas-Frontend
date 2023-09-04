import { Routes, Route } from 'react-router-dom'

import './App.scss'
import Home from './pages/Home'
import Login from './pages/Login'

const App = () => {
  // Renderizando 1 item pra cada tarefa
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default App
