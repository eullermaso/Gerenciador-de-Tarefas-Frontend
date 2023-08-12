import {useState} from 'react';

import "./AddTask.scss"

import CustomInput from "./CustomInput"



const AddTask = () => {
    const [tasks,setTasks] = useState("") 

    const onChange = (e) => {
        setTasks(e.target.value);
    }
    return(
        <div className="add-task-container">
            <CustomInput label="Adicionar Tarefa..." value={tasks} onChange={onChange}/>
        </div>
    );
};

export default AddTask;