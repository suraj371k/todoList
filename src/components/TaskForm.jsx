import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../tasksSlice'
import Button from '@mui/material/Button'

const TaskForm = ({ task, onClose }) => {
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');
  const [dueDate, setDueDate] = useState(task ? task.dueDate : '');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: task ? task.id : Date.now(),
      title,
      description,
      dueDate,
      completed: task ? task.completed : false,
    };
    task ? dispatch(editTask({ id: task.id, updates: newTask })) : dispatch(addTask(newTask));
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-gray-200">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full p-2 mb-2"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 mb-2"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
        className="w-full p-2 mb-2"
      />
      <Button type="submit" variant="contained" color="primary"> Save </Button>
    </form>
  );
};

export default TaskForm;
