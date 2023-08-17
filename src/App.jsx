import Tasks from "./components/Tasks";
import Sidebar from './components/Sidebar'

const App = () => {


  
  //Renderizando 1 item pra cada tarefa
  return (
    <>
      <Sidebar/>
        <Tasks/>
    </>
  );
}

export default App;

