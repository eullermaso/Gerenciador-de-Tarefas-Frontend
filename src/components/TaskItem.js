/*const TaskItem = ({task}) => {
    return (

        <>
        //pegando as props e colocando no h1 e p
            <h1>{task.description}</h1>
            <p>{task.isComleted ? 'Completa' : 'Não Completa'}</p>
        </>
    )
    
    
};

export default TaskItem;*/

//Componenetes de classe (Não é a melhor forma)

import React from "react";

//O React.component nos dará uma função chamada render()
class TaskItem extends React.Component{
    render(){
        //Fazendo o destructing da props para uma melhor sintaxe
        const {task} = this.props
        return (
            <>
            <h1>{task.description}</h1>
            <p>{task.isCompleted ? 'Completa' : "Não Completa"}</p>
            
            </>
        )
    }
}

export default TaskItem;