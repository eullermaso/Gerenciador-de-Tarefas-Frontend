import Tasks from "./components/Tasks";
import Sidebar from './components/Sidebar'

import "./App.scss"


const App = () => {
  //Renderizando 1 item pra cada tarefa
  return (
    <div className="app-container">
      <Sidebar/>
        <Tasks/>
    </div>
  );
}

export default App;

