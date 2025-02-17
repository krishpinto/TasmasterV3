import addTask from "./addTask";
import { Task } from "./addTask"; // Import the Task type

const handleAddTask = async (
  title: string,
  description: string,
  userId: string,
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>,
  setTitle: React.Dispatch<React.SetStateAction<string>>,
  setDescription: React.Dispatch<React.SetStateAction<string>>,
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (!title || !description) {
    alert("Please fill in both the title and description.");
    return;
  }

  const newTask: Task = {
    title,
    description,
    completed: false,
    userId,
  };

  try {
    await addTask(newTask);
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTitle("");
    setDescription("");
    setCompleted(false);
  } catch (error) {
    console.error("Error adding task: ", error);
  }
};

export default handleAddTask;