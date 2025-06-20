import React, { useState } from 'react';

const Dashboard = ({ userName, tasks, addTask, setTaskName, taskName, priority, setPriority, removeTask, setTasks }) => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);
  const [editedTaskName, setEditedTaskName] = useState('');
  const [editedPriority, setEditedPriority] = useState('');

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const startEdit = (task) => {
    setEditTaskId(task.id);
    setEditedTaskName(task.taskName);
    setEditedPriority(task.priority);
  };

  const saveEdit = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === editTaskId
        ? { ...task, taskName: editedTaskName, priority: editedPriority }
        : task
    );
    setTasks(updatedTasks);
    setEditTaskId(null);
  };

  return (
    <div className='h-full w-full p-6'>
      <button
        onClick={handleLogout}
        className='bg-white absolute top-2 right-4 w-fit px-4 py-2 rounded-sm text-[#27AE60] font-semibold animate-bounce mt-4 hover:bg-blue-900 duration-1000'
      >
        Log Out
      </button>

      <div>
        <h1 className='text-3xl'>Hello <span className='font-semibold'>{userName}</span>.</h1>
        <p>Focus to crush your goals today!</p>
      </div>

      <ul className="space-y-2 list-none w-full bg-[#2c3e50] text-white mt-8 rounded-md p-3">
        {tasks.length === 0 ? (
          <li className='text-xl font-normal text-center'>{`${userName} you've added no task`}</li>
        ) : (
          tasks.map((task) => (
            <li key={task.id} className='flex justify-between items-center mb-4 border-b pb-4 gap-2'>
              {editTaskId === task.id ? (
                <div className='flex flex-col w-full'>
                  <input
                    className='border border-white outline-none text-white rounded p-1 mb-2'
                    value={editedTaskName}
                    onChange={(e) => setEditedTaskName(e.target.value)}
                  />
                  <select
                    className='border border-white outline-none text- bg-black rounded p-1'
                    value={editedPriority}
                    onChange={(e) => setEditedPriority(e.target.value)}
                  >
                    <option value="High Priority">High Priority</option>
                    <option value="Medium Priority">Medium Priority</option>
                    <option value="Low Priority">Low Priority</option>
                  </select>
                  <div className='flex justify-end gap-2 mt-2'>
                    <button
                      onClick={saveEdit}
                      className='bg-green-500 text-white px-3 py-1 rounded'
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditTaskId(null)}
                      className='bg-gray-500 text-white px-3 py-1 rounded'
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <p>{task.taskName}</p>
                  <p>{task.priority}</p>
                  <div className='flex gap-2'>
                    <button
                      onClick={() => startEdit(task)}
                      className='bg-[#27ae60] px-3 py-1 rounded-sm text-white cursor-pointer'
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => removeTask(task.id)}
                      className='bg-white px-3 py-1 rounded-sm text-black cursor-pointer'
                    >
                      Done
                    </button>
                  </div>
                </>
              )}
            </li>
          ))
        )}
      </ul>

      <div className='flex justify-end'>
        <button
          className='mt-4 bg-white px-8 py-3 font-semibold text-[#2c3e50] rounded-2xl cursor-pointer'
          onClick={() => setShowAddTask(!showAddTask)}
        >
          {showAddTask ? "Close" : "Add Task"}
        </button>
      </div>

      {showAddTask && (
        <form className='bg-white px-4 py-3 rounded-xl mt-8' onSubmit={addTask}>
          <input
            type="text"
            className='border border-[#27ae60] mb-3 p-2 rounded w-full outline-none'
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
            placeholder="Task name"
          />

          <select
            name="priority"
            id="priority"
            className='border border-[#27ae60] mb-3 p-2 rounded w-full'
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
          >
            <option value="">Select Priority</option>
            <option value="High Priority">High Priority</option>
            <option value="Medium Priority">Medium Priority</option>
            <option value="Low Priority">Low Priority</option>
          </select>

          <div className='flex justify-end'>
            <button
              type='submit'
              className='mt-4 bg-[#27ae60] px-8 py-3 font-semibold text-white rounded-2xl cursor-pointer'
            >
              Add
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Dashboard;
