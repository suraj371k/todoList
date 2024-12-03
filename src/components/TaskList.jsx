import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import { format } from 'date-fns';
import { Button } from '@mui/material';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const [filter, setFilter] = useState('all');
  const [editingTask, setEditingTask] = useState(null);

  const currentDate = format(new Date(), 'yyyy-MM-dd');
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    if (filter === 'overdue') return !task.completed && task.dueDate < currentDate;
    return true;
  });

  return (
    <div className='mt-4'>
      <div className="flex gap-2">
        <Button variant='contained' color='secondary' onClick={() => setFilter('all')}>All Tasks</Button>

        <Button variant='contained' color='secondary' onClick={() => setFilter('completed')}>Completed Tasks</Button>

        <Button variant='contained' color='secondary' onClick={() => setFilter('pending')}>Pending Tasks</Button>
        
        <Button variant='contained' color='secondary' onClick={() => setFilter('overdue')}>Overdue Tasks</Button>
      </div>
      <div>
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} onEdit={() => setEditingTask(task)} />
        ))}
      </div>
      {editingTask && <TaskForm task={editingTask} onClose={() => setEditingTask(null)} />}
    </div>
  );
};

export default TaskList;
