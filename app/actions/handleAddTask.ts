import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

interface AddTaskParams {
  title: string;
  description: string;
  userId: string;
}

const handleAddTask = async ({ title, description, userId }: AddTaskParams) => {
  try {
    const docRef = await addDoc(collection(db, "tasks"), {
      title,
      description,
      userId,
      completed: false, // Default value for completed
      createdAt: serverTimestamp(), // Add a timestamp
    });

    return {
      id: docRef.id,
      title,
      description,
      userId,
      completed: false,
      createdAt: new Date(), // Return a JS Date object for local state
    };
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;
  }
};

export default handleAddTask;
