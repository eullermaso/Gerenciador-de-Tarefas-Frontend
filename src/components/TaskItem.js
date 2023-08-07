import { useEffect } from "react";

const TaskItem = ({task}) => {
    

    //Maneira de utilizar componentDidMount e componentWillUnmount 
    useEffect(() => {
        console.log("component was mounted!")

        return () => {
            console.log("I will unmount!")
        };
        //Essas [] são utilizadas para indicar que um state foi mudado. Seria necessário passar o state dentro da []
    },[])
    
    
    
    return (

        <> 
            <h1>{task.description}</h1>
            <p>{task.isComleted ? 'Completa' : 'Não Completa'}</p>
        </>
    )
    
    
};

export default TaskItem;

/*//Componenetes de classe (Não é a melhor forma)

import React from "react";

//O React.component nos dará uma função chamada render()
class TaskItem extends React.Component{
    componentDidMount(){
        console.log("component was mounted")
    }

    componentWillUnmount(){
        console.log("i will unmount")
    }



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

export default TaskItem;*/