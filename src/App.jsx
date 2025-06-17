import React, {useState} from 'react'
import './App.css'
import Welcome from './components/Welcome';

function App() {
  const [step, setStep] = useState(1);

  const toNextStep = () => {
    setStep(prev => prev + 1)
  };
  

  return (
    <>
      {
        step === 1 && <Welcome />
      }
    </>
  )
}

export default App
