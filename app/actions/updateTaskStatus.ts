import { Task } from "@/app/actions/fetchTasks";
import updateTask from "@/app/actions/updateTask";

export const updateTaskStatus = async (
  task: Task,
  newStatus: string,
  onUpdate: (updatedTask: Task) => void,
  onClose: () => void
) => {
  const updatedTask = {
    ...task,
    completed: newStatus === "Completed",
  };

  try {
    // Update the task in the database
    await updateTask(updatedTask);

    // Update the task in the local state
    onUpdate(updatedTask);

    // Close the modal
    onClose();
  } catch (error) {
    console.error("Error updating task status:", error);
  }
};