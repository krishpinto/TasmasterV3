"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { PlusCircle, BarChart, TrendingUp } from "lucide-react";
import { Sidebar } from "./sidebar";
import { UserAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import addTask from "@/app/actions/addTask"; // Import the addTask function

export default function Dashboard() {
  const { user } = UserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) {
    return null; // or a loading spinner
  }

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [tasks, setTasks] = useState([
    { id: 1, title: "Complete project proposal", completed: false },
    { id: 2, title: "Review code changes", completed: true },
    { id: 3, title: "Team meeting at 2 PM", completed: false },
    { id: 4, title: "Update documentation", completed: false },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const handleAddTask = async () => {
    if (!newTaskTitle || !newTaskDescription) {
      alert("Please fill in both the title and description.");
      return;
    }

    const newTask = {
      id: tasks.length + 1, // Generate a new id
      title: newTaskTitle,
      description: newTaskDescription,
      completed: false,
      userId: user.uid, // Assuming user object has a uid property
    };

    try {
      await addTask(newTask);
      setTasks([...tasks, newTask]);
      setNewTaskTitle("");
      setNewTaskDescription("");
    } catch (error) {
      console.error("Error adding task: ", error);
    }
  };

  return (
    <div className="relative flex h-screen overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#212121] to-[#1a1a1a] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative flex w-full h-full text-white">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col w-full">
          {/* Header */}
          <header className="relative border-b border-[#2a2a2a] bg-[#212121]/80 backdrop-blur-sm p-4">
            <div className="flex items-center justify-between max-w-[1200px] mx-auto w-full">
              <div className="flex items-center gap-4 flex-1">
                <Input
                  placeholder="Search tasks..."
                  className="max-w-md bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder:text-gray-400"
                />
              </div>
              <Button
                className="gap-2 bg-red-500 hover:bg-red-600"
                onClick={handleAddTask}
              >
                <PlusCircle className="h-4 w-4" />
                Add Task
              </Button>
            </div>
          </header>

          {/* Content Grid */}
          <div className="flex-1 p-4 overflow-auto">
            <div className="max-w-[1200px] mx-auto w-full">
              <div className="grid gap-4 lg:grid-cols-[300px,1fr]">
                {/* Calendar Section */}
                <div className="w-full space-y-4">
                  <Card className="p-4 bg-[#212121]/80 backdrop-blur-sm border-[#2a2a2a]">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md"
                    />
                  </Card>

                  {/* Stats Card */}
                  <Card className="p-4 bg-[#212121]/80 backdrop-blur-sm border-[#2a2a2a]">
                    <h3 className="font-semibold mb-4 text-gray-200">
                      Quick Stats
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-[#2a2a2a] rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <BarChart className="h-4 w-4 text-red-500" />
                          <span className="text-sm text-gray-300">
                            Tasks Today
                          </span>
                        </div>
                        <p className="text-xl font-bold">4</p>
                      </div>
                      <div className="p-3 bg-[#2a2a2a] rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-300">
                            Completed
                          </span>
                        </div>
                        <p className="text-xl font-bold">75%</p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Tasks Card */}
                <Card className="w-full p-4 bg-[#212121]/80 backdrop-blur-sm border-[#2a2a2a]">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold text-lg">Tasks</h2>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#3a3a3a] text-gray-300 hover:bg-[#2a2a2a] hover:text-white"
                    >
                      View All
                    </Button>
                  </div>
                  <ScrollArea className="h-[calc(100vh-280px)]">
                    <div className="space-y-4">
                      {tasks.map((task) => (
                        <div key={task.id}>
                          <div className="flex items-center gap-4 py-2">
                            <input
                              type="checkbox"
                              checked={task.completed}
                              className="h-4 w-4 rounded border-gray-500 bg-[#2a2a2a]"
                              readOnly
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
                          <Separator className="bg-[#2a2a2a]" />
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

      {/* Add Task Form */}
      <div className="fixed bottom-4 right-4 bg-[#212121]/80 backdrop-blur-sm p-4 rounded-lg border-[#2a2a2a]">
        <h3 className="font-semibold text-lg mb-4">Add New Task</h3>
        <div className="space-y-4">
          <Input
            placeholder="Task Title"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            className="bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder:text-gray-400"
          />
          <Input
            placeholder="Task Description"
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
            className="bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder:text-gray-400"
          />
          <Button
            className="w-full bg-red-500 hover:bg-red-600"
            onClick={handleAddTask}
          >
            Add Task
          </Button>
        </div>
      </div>
    </div>
  );
}
