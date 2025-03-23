"use client";

import type React from "react";
import { useState } from "react";
import { UserAuth } from "@/context/AuthContext";
import handleAddTask from "@/app/actions/handleAddTask";
import type { Task } from "@/app/actions/fetchTasks";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const TaskForm: React.FC<{
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  onClose: () => void;
  selectedDate: Date | undefined; // Accept the selected date as a prop
}> = ({ setTasks, onClose, selectedDate }) => {
  const { user } = UserAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      console.error("User not authenticated");
      return;
    }

    try {
      // Use the selected date as the createdAt value, or default to the current date
      const createdAt = selectedDate || new Date();

      // Call the handleAddTask function to add the task to Firestore
      const newTask = await handleAddTask({
        title,
        description,
        userId: user.uid,
        createdAt,
      });

      // Update the tasks state in the parent component
      setTasks((prevTasks) => [...prevTasks, newTask]);

      // Reset the form fields
      setTitle("");
      setDescription("");

      // Show success notification
      toast.success("Task added successfully!");

      // Close the modal
      onClose();
    } catch (error) {
      console.error("Error adding task:", error);
      toast.error("Failed to add task. Please try again.");
    }
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
