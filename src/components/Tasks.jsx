import { useState, useEffect, useMemo, useCallback } from 'react'
import axios from 'axios'
import { useAlert } from 'react-alert'

import './Tasks.scss'

import AddTasks from './AddTask'
import TaskItem from './TaskItem'

const Tasks = () => {
  // Criando uma lista de tarefas
  // O useState é necessário para alterar o virtual DOM
  const [tasks, setTasks] = useState([])
  const alert = useAlert()

  // O usMemo() é utilizado para retornar apenas um resultado já o useCallback é utilizado para retornar uma função em que ambos otimiza o código

  const fetchTasks = useCallback(async () => {
    try {
      const { data } = await axios.get('http://localhost:8000/tasks')
      setTasks(data)
    } catch (_error) {
      alert.error('Não foi possivel recupera as tarefas')
    }
  }, [alert])

  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])

  const lastTasks = useMemo(() => {
    return tasks.filter(task => task.isCompleted === false)
  }, [tasks])

  const completedTasks = useMemo(() => {
    return tasks.filter(task => task.isCompleted === true)
  }, [tasks])

  return (
        <div className="tasks-container">
            <h2>Minhas Tarefas</h2>

            <div className="last-tasks">
                <h3>Últimas Tarefas</h3>
                <AddTasks fetchTasks={fetchTasks}/>
                <div className="tasks-list">
                    {lastTasks.map((lastTask) => <TaskItem task={lastTask} key={lastTask._id} fetchTasks={fetchTasks}/>)}
                </div>
            </div>

            <div className="completed-tasks">
                <h3>Tarefas Concluídas</h3>
                <div className="tasks-list">
                    {completedTasks.map((completedTask) => <TaskItem task={completedTask} key={completedTask._id} fetchTasks={fetchTasks}/>)}
                </div>
            </div>
        </div>
  )
}

export default Tasks
