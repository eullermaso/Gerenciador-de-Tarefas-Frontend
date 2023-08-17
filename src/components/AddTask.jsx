import {useState} from 'react';
import { FaPlus } from 'react-icons/fa'

import "./AddTask.scss"


import CustomInput from "./CustomInput"
import CustomButton from './CustomButton'



const AddTask = () => {
    const [tasks,setTasks] = useState("") 

    const onChange = (e) => {
        setTasks(e.target.value);
    }
    return(
        <div className="add-task-container">
            <CustomInput label="Adicionar Tarefa..." value={tasks} onChange={onChange}/>

            <CustomButton>
                <FaPlus size={14} color='#ffffff'></FaPlus>
            </CustomButton>
        </div>
    );
};

export default AddTask;