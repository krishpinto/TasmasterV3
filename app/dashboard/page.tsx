"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlusCircle, BarChart, TrendingUp } from "lucide-react";
import { Sidebar } from "./sidebar";
import { UserAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import TaskForm from "@/components/TaskForm";
import TaskModal from "@/components/TaskModal";
import { ToastContainer } from "react-toastify";
import fetchTasks, { Task } from "@/app/actions/fetchTasks";
import updateTask from "@/app/actions/updateTask";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase";

import "react-toastify/dist/ReactToastify.css";

export default function Dashboard() {
  const { user } = UserAuth();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined); // State to store the selected date
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [showAllTasks, setShowAllTasks] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else {
      // Calculate the start and end of the current day
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Start of the day
      setDate(today); // Set the selected date to today

      fetchTasks(user.uid, today).then(setTasks); // Fetch tasks for the current day
    }
  }, [user, router]);

  const handleAddTaskClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    refreshTasks(date); // Refresh tasks for the selected date after closing the modal
  };

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
  };

  const handleTaskModalClose = () => {
    setSelectedTask(null);
  };

  const handleTaskDelete = async (taskId: string) => {
    try {
      await deleteDoc(doc(db, "tasks", taskId));
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
      setSelectedTask(null);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleCheckboxChange = async (task: Task) => {
    const updatedTask = { ...task, completed: !task.completed };
    await updateTask(updatedTask);
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === task.id ? updatedTask : t))
    );
  };

  const handleTaskUpdate = (updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const getTasksForSelectedDate = () => {
    if (showAllTasks) {
      return tasks.length; // Return the total number of tasks when showing all tasks
    }

    if (!date) return 0; // If no date is selected, return 0

    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    return tasks.filter((task) => {
      if (!task.createdAt) return false;
      const taskDate = new Date(task.createdAt.seconds * 1000); // Convert Firestore timestamp to JS Date
      return taskDate >= startOfDay && taskDate <= endOfDay;
    }).length;
  };

  const refreshTasks = async (selectedDate?: Date) => {
    if (user) {
      const updatedTasks = await fetchTasks(user.uid, selectedDate); // Pass the selected date or undefined
      setTasks(updatedTasks);
      setShowAllTasks(!selectedDate); // If no date is provided, set showAllTasks to true
    }
  };

  // Filter tasks based on the search query
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative flex h-screen overflow-hidden">
      <ToastContainer />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#212121] to-[#1a1a1a] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent pointer-events-none" />
      <div className="flex w-full h-full">
        <Sidebar />
        <div className="flex-1 flex flex-col w-full">
          <header className="relative border-b border-[#2a2a2a] bg-[#212121]/80 backdrop-blur-sm p-4">
            <div className="flex items-center justify-between max-w-[1200px] mx-auto w-full">
              <div className="flex items-center gap-4 flex-1">
                <Input
                  placeholder="Search tasks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)} // Update search query
                  className="max-w-md bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder:text-gray-400"
                />
              </div>
              <Button
                className="gap-2 bg-red-500 hover:bg-red-600"
                onClick={handleAddTaskClick}
              >
                <PlusCircle className="h-4 w-4" />
                Add Task
              </Button>
            </div>
          </header>

          <div className="flex-1 p-4 overflow-auto">
            <div className="max-w-[1200px] mx-auto w-full">
              <div className="grid gap-4 lg:grid-cols-[300px,1fr]">
                <div className="w-full space-y-4">
                  <Card className="p-4 bg-[#212121]/80 backdrop-blur-sm border-[#2a2a2a]">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(newDate) => {
                        setDate(newDate);
                        refreshTasks(newDate); // Fetch tasks for the newly selected date
                      }}
                      className="rounded-md"
                    />
                  </Card>

                  <Card className="p-4 bg-[#212121]/80 backdrop-blur-sm border-[#2a2a2a]">
                    <h3 className="font-semibold mb-4 text-gray-200">
                      Quick Stats
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-[#2a2a2a] rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <BarChart className="h-4 w-4 text-red-500" />
                          <span className="text-sm text-gray-300">
                            {showAllTasks
                              ? "All Tasks"
                              : "Tasks for Selected Date"}
                          </span>
                        </div>
                        <p className="text-xl font-bold">
                          {getTasksForSelectedDate()}{" "}
                          {/* Dynamically fetch tasks for the selected date or all tasks */}
                        </p>
                      </div>
                      <div className="p-3 bg-[#2a2a2a] rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-300">
                            Completed
                          </span>
                        </div>
                        <p className="text-xl font-bold">
                          {tasks.filter((task) => task.completed).length}{" "}
                          {/* Dynamically fetch completed tasks */}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                <Card className="w-full p-4 bg-[#212121]/80 backdrop-blur-sm border-[#2a2a2a]">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold text-lg">Tasks</h2>
                    <Button
                      className="gap-2 bg-blue-500 hover:bg-blue-600"
                      onClick={() => refreshTasks()} // Fetch all tasks when clicked
                    >
                      Show All Tasks
                    </Button>
                  </div>
                  <ScrollArea className="h-[calc(100vh-280px)]">
                    <div className="space-y-4">
                      {filteredTasks.map((task) => (
                        <div
                          key={task.id}
                          className="flex items-center gap-4 py-2 cursor-pointer"
                          onClick={() => handleTaskClick(task)}
                        >
                          <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={(e) => {
                              e.stopPropagation();
                              handleCheckboxChange(task);
                            }}
                            className="h-4 w-4 rounded border-gray-500 bg-[#2a2a2a]"
                          />
                          <span
                            className={
                              task.completed
                                ? "line-through text-gray-500"
                                : "text-gray-200"
                            }
                          >
                            {task.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <TaskForm
              setTasks={setTasks}
              onClose={() => {
                handleCloseModal();
                refreshTasks(date); // Refresh tasks for the selected date
              }}
              selectedDate={date} // Pass the selected date
            />
            <Button className="mt-4" onClick={handleCloseModal}>
              Close
            </Button>
          </div>
        </div>
      )}

      {selectedTask && (
        <TaskModal
          task={selectedTask}
          onClose={handleTaskModalClose}
          onDelete={handleTaskDelete}
          onUpdate={handleTaskUpdate}
        />
      )}
    </div>
  );
}
