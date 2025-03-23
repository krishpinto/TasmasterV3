import type React from "react";
import type { Task } from "@/app/actions/fetchTasks";
import { Button } from "@/components/ui/button";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { X } from "lucide-react";
import updateTask from "@/app/actions/updateTask"; // Import the updateTask function
import { updateTaskStatus } from "@/app/actions/updateTaskStatus"; // Import the separated function

interface TaskModalProps {
  task: Task | null;
  onClose: () => void;
  onDelete: (taskId: string) => void;
  onUpdate: (task: Task) => void;
}

const TaskModal: React.FC<TaskModalProps> = ({
  task,
  onClose,
  onDelete,
  onUpdate,
}) => {
  if (!task) return null;

  const handleDelete = async () => {
    try {
      // Call the onDelete function passed from the Dashboard
      onDelete(task.id);
      onClose();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value;
    updateTaskStatus(task, newStatus, onUpdate, onClose); // Use the separated function
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-3xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Task Details
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Title
          </h3>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            {task.title}
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Description
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {task.description}
          </p>
        </div>
        <div className="mb-8">
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Status
          </label>
          <select
            id="status"
            value={task.completed ? "Completed" : "Pending"}
            onChange={handleStatusChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          >
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
        <div className="flex justify-end space-x-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            Delete Task
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
