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

const fetchTasks = async (
  userId: string,
  selectedDate?: Date
): Promise<Task[]> => {
  const startOfDay = selectedDate
    ? Timestamp.fromDate(new Date(selectedDate.setHours(0, 0, 0, 0)))
    : null;
  const endOfDay = selectedDate
    ? Timestamp.fromDate(new Date(selectedDate.setHours(23, 59, 59, 999)))
    : null;

  let q;

  if (selectedDate) {
    // Query tasks for the selected date
    q = query(
      collection(db, "tasks"),
      where("userId", "==", userId),
      where("createdAt", ">=", startOfDay),
      where("createdAt", "<=", endOfDay)
    );
  } else {
    // Query all tasks if no date is selected
    q = query(collection(db, "tasks"), where("userId", "==", userId));
  }

  const querySnapshot = await getDocs(q);
  const tasksData = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Task[];
  return tasksData;
};

export default fetchTasks;
