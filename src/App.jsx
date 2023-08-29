import Tasks from "./components/Tasks";
import Sidebar from './components/Sidebar'

import { Routes, Route } from "react-router-dom"

import "./App.scss"
import Home from "./pages/Home";


const App = () => {
  //Renderizando 1 item pra cada tarefa
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  );
}

export default App;

