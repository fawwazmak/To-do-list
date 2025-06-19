import React, {useState, useEffect} from 'react'
import './App.css'
import Welcome from './components/Welcome';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard'

function App() {
  const [step, setStep] = useState(1);
  const [userName, setUserName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('');
  const [nextId, setNextId] = useState(1)


  useEffect(() => {
    const savedName = localStorage.getItem("name");
    if (savedName) {
      setUserName(savedName);
      setStep(3)
    }
  }, []);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks);
      setTasks(parsedTasks);

      if (parsedTasks.length > 0) {
        const lastId = parsedTasks[parsedTasks.length - 1].id;
        setNextId(lastId + 1);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (taskName.trim() === '') return;

    setTasks([
      ...tasks,
      {
        id: nextId,
        taskName,
        priority,
      }
    ])

    setNextId(nextId + 1);
    setTaskName('');
    setPriority('');
  }

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

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
        step === 3 && <Dashboard userName={userName} setUserName={setUserName} tasks={tasks} addTask={addTask} setTaskName={setTaskName} taskName={taskName} priority={priority} setPriority={setPriority} removeTask={removeTask}  />
      }
    </div>
  )
}

export default App
