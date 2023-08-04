
import { useState } from 'react'

const App = () => {

  const [message, setMessage] = useState('Hello World!');

  const handleMessage = () => {
    setMessage('Olá Mundo!')
  }

  
  
  return (
    <>
    
      <h1>{message}</h1>
      <button onClick={() => {
        if(message === 'Hello World!'){
          return handleMessage();
        }else{
          setMessage('Hello World!');
        }
      }}>Mude o Texto</button>
    
    
    </>
  );
}

export default App;
