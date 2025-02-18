import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase"; // Import the Firestore instance

export type Task = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  userId: string;
};

const fetchTasks = async (userId: string): Promise<Task[]> => {
  const q = query(collection(db, "tasks"), where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  const tasksData = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Task[];
  return tasksData;
};

export default fetchTasks;