
import { useState, useEffect } from "react"
import axios from "axios"


import './Tasks.scss'

import AddTasks from "./AddTask"
import TaskItem from "./TaskItem";

const Tasks = () => {

    //Criando uma lista de tarefas
    //O useState é necessário para alterar o virtual DOM
  const [tasks, setTasks] = useState([]);


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
  },[]);


    return(
        <div className="tasks-container">
            <h2>Minhas Tarefas</h2>

            <div className="last-tasks">
                <h3>Últimas Tarefas</h3>
                <AddTasks/>
                <div className="tasks-list">
                    {tasks.filter((task) => task.isCompleted === false).map((lastTask) => <TaskItem task={lastTask}/>)}
                </div>
            </div>

            <div className="completed-tasks">
                <h3>Tarefas Concluídas</h3>
                <div className="tasks-list">
                    {tasks.filter((task) => task.isCompleted).map((completedTask) => <TaskItem task={completedTask}/>)}
                </div>
            </div>
        </div>
    );
};

export default Tasks;