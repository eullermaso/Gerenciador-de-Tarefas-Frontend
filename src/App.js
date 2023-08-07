
/*//useState é utilizado para mudar o estado de uma variável (mudar o valor)
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

export default App;*/

import React from 'react'
import TaskItem from './components/TaskItem'

class App extends React.Component{
    constructor(props){
      //Passar o super para chamar o constructor da classe React.Component e passar o super
      super(props)
      //atribuindo o this.handleSetState para o método que foi criado, pois ao colocar "this." dentro do onClick ele será referenciado pelo this do onClick por ser uma função
      this.handleSetState = this.handleSetState.bind(this)
      //Lembrando que o this se refere ao React.Component


      this.state = {
        tasks: [
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
      ]

      }
    }

    handleSetState(){
      this.setState({
        tasks: []
      })
    }

    //A função render é utilizada para rederizar nossa aplicação
    render(){
      return(
        <>
        {this.state.tasks.map((task) => 
        (<TaskItem key={task.id} task={task}/>))} 

        <button onClick={this.handleSetState}>Change State</button>
        
        </>
      )
    }
};

export default App;
