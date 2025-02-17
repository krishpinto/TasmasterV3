import { db } from "../../firebase"; // Import the initialized Firestore instance
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// Define the Task type here
type Task = {
  title: string;
  description: string;
  completed: boolean;
  userId: string;
};

const addTask = async (task: Task) => {
  try {
    await addDoc(collection(db, "tasks"), {
      title: task.title,
      description: task.description,
      completed: task.completed,
      userId: task.userId, // Add userId field here
      createdAt: serverTimestamp(), // Optional field for sorting
    });
    console.log("Task added successfully!");
  } catch (error) {
    console.error("Error adding task: ", error);
  }
};

export default addTask;
