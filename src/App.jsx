import React, {useState, useEffect} from 'react'
import './App.css'
import Welcome from './components/Welcome';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard'

function App() {
  const [step, setStep] = useState(1);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    if (savedName) {
      setUserName(savedName);
      setStep(3)
    }
  }, []);

  const toNextStep = (userName) => {
    setUserName(userName)
    setStep(prev => prev + 1)
  };
  

  return (
    <div className='bg-[#27AE60] flex justify-center items-center h-screen overflow-hidden'>
      {
        step === 1 && <Welcome onNext={toNextStep} />
      }

      {
        step === 2 && <Profile onNext={toNextStep} userName={userName} />
      }

      {
        step === 3 && <Dashboard userName={userName} />
      }
    </div>
  )
}

export default App
