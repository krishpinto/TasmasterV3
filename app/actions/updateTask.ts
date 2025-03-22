import { db } from "../../firebase"; // Import the initialized Firestore instance
import { doc, updateDoc } from "firebase/firestore";
import { Task } from "./fetchTasks"; // Import the Task type

const updateTask = async (task: Task) => {
  try {
    const taskRef = doc(db, "tasks", task.id);
    await updateDoc(taskRef, {
      completed: task.completed,
    });
    console.log("Task updated successfully!");
  } catch (error) {
    console.error("Error updating task: ", error);
  }
};

export default updateTask;