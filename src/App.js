
//useState é utilizado para mudar o estado de uma variável (mudar o valor)
import { useEffect, useState} from 'react'
import axios from 'axios'

import TaskItem from './components/TaskItem';


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


  const fetchTasks = async () => {
    try{
      const {data} = await axios.get('http://localhost:8000/tasks')
      setTasks(data)
      
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTasks();
  },[])

  
  //Renderizando 1 item pra cada tarefa
  return (
    <>
    
      {tasks.map((task) => 
        (<TaskItem key={task.id} task={task}/>))} 
    
    </>
  );
}

export default App;

