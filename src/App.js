import { useState } from 'react'
import './App.css';
import Form from './components/Form'

const App = () =>{
  const[value, setValue] = useState({
    name: '',
    cardNum: '',
    expMonth: '',
    expYear: '',
    cvc: '',
  })

  const handleChange = (e) =>{
    setValue((state) => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }
  
  return(
    <div className='app'>
      <div className ='gradient-bg' ></div>
      <div className='white-bg'></div>
      <div>
        <Form />
      </div>
    </div>
  )
}

export default App;
