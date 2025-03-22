import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../firebase";

interface AddTaskParams {
  title: string;
  description: string;
  userId: string;
  createdAt: Date;
}

const handleAddTask = async ({
  title,
  description,
  userId,
  createdAt,
}: AddTaskParams) => {
  const docRef = await addDoc(collection(db, "tasks"), {
    title,
    description,
    userId,
    completed: false, // Default value for completed
    createdAt: Timestamp.fromDate(createdAt), // Use the provided createdAt value
  });

  return {
    id: docRef.id,
    title,
    description,
    userId,
    completed: false,
    createdAt, // Return the JS Date object for local state
  };
};

export default handleAddTask;
