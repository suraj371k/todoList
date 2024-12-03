import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { Button } from '@mui/material';

const App = () => {
  const [isAdding, setIsAdding] = React.useState(false);

  return (
    <div className="grid place-items-center w-full h-screen bg-black">
      <div className='container mx-auto bg-slate-300 w-[70vw] h-[70vh] p-5'>
      <Button variant='contained' onClick={() => setIsAdding(true)}>Add Task</Button>
      {isAdding && <TaskForm onClose={() => setIsAdding(false)} />}
      <TaskList />
    </div>
    </div>
  );
};

export default App;
