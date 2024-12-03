import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from '../tasksSlice'
import { Button } from '@mui/material';

const TaskItem = ({ task, onEdit }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow mb-2">
      <div>
        <h4 className={`${task.completed ? 'line-through' : ''}`}>{task.title}</h4>
        <p>{task.description}</p>
        <p>{task.dueDate}</p>
      </div>
      <div className='space-x-4'>
        <Button variant='outlined' onClick={() => dispatch(toggleCompleted(task.id))}>
          {task.completed ? 'Undo' : 'Complete'}
        </Button>
        <Button variant='outlined' onClick={() => onEdit(task)}>Edit</Button>
        <Button variant='outlined' onClick={() => dispatch(deleteTask(task.id))}>Delete</Button>
      </div>
    </div>
  );
};

export default TaskItem;
