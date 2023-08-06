
//useState é utilizado para mudar o estado de uma variável (mudar o valor)
import { useState } from 'react'
import TaskItem from './components/TaskItem';
import PaisesItem from './components/PaisesItem';
import Cidades from './components/Cidades';

const App = () => {

  //Criando uma lista de tarefas
  //O useState é necessário para alterar o virtual DOM
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: 'Estudar Programação',
      isCompleted: false

  },
  {
    id: 2,
    description: "ler",
    isCompleted: true,
  },
])

const [paises, setPaises] = useState([
  {
    id: 1,
    name: "Brasil",
    isBig: true
  },
  {
    id: 2,
    name: "Colombia",
    isBig: false
  }
]);

const [cidades, setCidade] = useState([
  {
    id: 1,
    name: "SP",
    region: "Sudeste"
  },
  {
    id: 2,
    name: "Amazonas",
    region: "Norte"
  }
])

  
  //Renderizando 1 item pra cada tarefa
  return (
    <>
    
      {tasks.map((task) => 
        (<TaskItem key={task.id} task={task}/>))} 

      {paises.map((paises) => (<PaisesItem paises={paises}></PaisesItem>))}

      {cidades.map((cidades) => (<Cidades city={cidades}></Cidades>))}
      
    
    
    </>
  );
}

export default App;
