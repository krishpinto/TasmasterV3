import {
  collection,
  getDocs,
  query,
  where,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../firebase"; // Import the Firestore instance

export type Task = {
  createdAt: any;
  id: string;
  title: string;
  description: string;
  completed: boolean;
  userId: string;
};

async function getTasksFromDatabase(userId: string): Promise<Task[]> {
  const q = query(collection(db, "tasks"), where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Task[];
}

export default async function fetchTasks(userId: string, date?: Date) {
  const tasks = await getTasksFromDatabase(userId); // Replace with your actual database fetch logic

  if (!date) {
    // If no date is provided, return all tasks
    return tasks;
  }

  // Filter tasks for the provided date
  const startOfDay = new Date(date);
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date(date);
  endOfDay.setHours(23, 59, 59, 999);

  return tasks.filter((task) => {
    if (!task.createdAt) return false;
    const taskDate = new Date(task.createdAt.seconds * 1000); // Convert Firestore timestamp to JS Date
    return taskDate >= startOfDay && taskDate <= endOfDay;
  });
}
