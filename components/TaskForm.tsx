// components/TaskForm.tsx
import React, { useState } from "react";
import { UserAuth } from "@/context/AuthContext";
import handleAddTask from "@/app/actions/handleAddTask"; // Import the handleAddTask function
import { Task } from "@/app/actions/addTask"; // Import the Task type
import { toast } from "react-toastify"; // Import toast from react-toastify

import "react-toastify/dist/ReactToastify.css"; // Import react-toastify CSS

const TaskForm: React.FC<{
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  onClose: () => void; // Add onClose prop to close the modal
}> = ({ setTasks, onClose }) => {
  const { user } = UserAuth(); // Get the current user from AuthContext
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      console.error("User not authenticated");
      return;
    }

    await handleAddTask(
      title,
      description,
      user.uid,
      setTasks,
      setTitle,
      setDescription,
      setCompleted
    );

    toast.success("Task added successfully!"); // Show success notification
    onClose(); // Close the modal
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md text-black">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Add a New Task
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            required
          />
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="completed"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="completed" className="text-sm text-gray-700">
            Completed
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
