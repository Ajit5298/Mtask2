import React, { useEffect, useState } from 'react';
import "../Components/Style.css"

const Task = ({ task, onDelete }) => {
  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div className="task">
      <h2 className="task-id">Task {task.id}</h2>
      <p className="task-title">Title: {task.title}</p>
      <p className="task-completed">Completed: {task.completed ? 'Yes' : 'No'}</p>
      <button className="delete-button" onClick={handleDelete}>Delete Task</button>
    </div>
  );
};

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [showTasks, setShowTasks] = useState(false);

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.log(error));
  }, []);

  const handleAddTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: "New Task",
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setShowTasks(true);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    setShowTasks(updatedTasks.length > 0);
  };

  return (
    <div className="task-page">
      <h1 className="page-title">Task Page</h1>
      {showTasks && tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={handleDeleteTask} />
      ))}
      {!showTasks && (
        <>
          <p>No tasks added yet.</p>
          <button className="add-button" onClick={handleAddTask}>Add Task</button>
        </>
      )}
      {showTasks && (
        <button className="add-button" onClick={handleAddTask}>Add Task</button>
      )}
    </div>
  );
};

export default TaskPage;
