import {useState} from 'react';
import { FaPlus } from 'react-icons/fa'
import { useAlert } from 'react-alert';
import axios from 'axios'

import "./AddTask.scss"


import CustomInput from "./CustomInput"
import CustomButton from './CustomButton'



const AddTask = ({fetchTasks}) => {
    const [tasks,setTasks] = useState("") 
    const alert = useAlert();

    const onChange = (e) => {
        setTasks(e.target.value);
    }

    const handleTaskAddtion = async () => {
        try{
            if(tasks.length === 0){
                return alert.error("A Tarefa precisa de uma descrição para ser adicionada")
            }

            await axios.post("http://localhost:8000/tasks", {
                description: tasks,
                isCompleted: false,
            });

            await fetchTasks();

            
            setTasks('');
        }catch(error){
            alert.error("Algo deu errado")
        }
    }
    return(
        <div className="add-task-container">
            <CustomInput label="Adicionar Tarefa..." value={tasks} onChange={onChange}/>

            <CustomButton onClick={handleTaskAddtion}>
                <FaPlus size={14} color='#ffffff'></FaPlus>
            </CustomButton>
        </div>
    );
};

export default AddTask;