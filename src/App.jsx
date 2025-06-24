import { div } from 'motion/react-client';
import React, { useState } from 'react';

export default function App() {
  const [title , setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (title.trim() !== '' && description.trim() !== '') {
      setTasks([...tasks, { title, description }]);
      setTitle('');
      setDescription('');
    }
  };
  

  const renderTask = (task, idx) => {
    const isCompleted = task.completed;

    return (
      <div
        className="flex flex-row justify-between items-center bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl p-5 mt-6 shadow-lg w-full max-w-md transition-transform hover:scale-[1.02] group"
        key={idx}
      >
        <div className="flex flex-col gap-1 w-full">
          <h2
            className={`text-xl font-bold break-words group-hover:text-blue-600 transition-colors ${
              isCompleted ? 'text-green-600 line-through' : 'text-blue-800'
            }`}
          >
            {task.title}
          </h2>
          <p className={`break-words ${isCompleted ? 'text-green-500 line-through' : 'text-gray-700'}`}>
            {task.description}
          </p>
        </div>
        <div className="flex flex-row gap-2 items-center ml-6">
          <button
            onClick={() =>
              setTasks(
                tasks.map((t, i) =>
                  i === idx ? { ...t, completed: !t.completed } : t
                )
              )
            }
            className={`p-2 rounded-full transition-colors shadow-sm focus:outline-none focus:ring-2 ${
              isCompleted
                ? 'bg-green-200 text-green-700 hover:bg-green-300 focus:ring-green-400'
                : 'bg-gray-200 text-gray-600 hover:bg-green-100 focus:ring-green-300'
            }`}
            aria-label={isCompleted ? 'Mark as Incomplete' : 'Mark as Complete'}
            title={isCompleted ? 'Mark as Incomplete' : 'Mark as Complete'}
          >
            {isCompleted ? (
              // Checkmark icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              // Circle icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={2} fill="none" />
              </svg>
            )}
          </button>
          <button
            onClick={() => setTasks(tasks.filter((_, i) => i !== idx))}
            className="p-2 rounded-full bg-red-100 hover:bg-red-200 text-red-600 hover:text-red-800 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300"
            aria-label="Remove Task"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    );
  };


  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
       
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md flex flex-col gap-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Add a Task</h1>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your Task"
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter your description"
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button 
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Add Task
        </button>
        {tasks.map((task, idx) => renderTask(task, idx))}
      </div>
    </div>
  );
}
