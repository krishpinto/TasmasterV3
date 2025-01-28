"use client";

import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  ListTodo,
  Home,
  Calendar as CalendarIcon,
  Settings,
  PlusCircle,
  BarChart,
  TrendingUp,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [tasks] = useState([
    { id: 1, title: "Complete project proposal", completed: false },
    { id: 2, title: "Review code changes", completed: true },
    { id: 3, title: "Team meeting at 2 PM", completed: false },
    { id: 4, title: "Update documentation", completed: false },
  ]);

  return (
    <div className="relative flex h-screen overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#212121] to-[#1a1a1a] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative flex w-full h-full text-white">
        {/* Sidebar */}
        <div 
          className={`fixed md:relative z-20 h-full transition-all duration-300 ease-in-out ${
            sidebarOpen ? "w-64" : "w-0 md:w-16"
          } bg-[#212121]/80 backdrop-blur-sm border-r border-[#2a2a2a]`}
        >
          <div className="p-4 h-full relative">
            {/* Sidebar toggle button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute -right-4 top-6 hidden md:flex h-8 w-8 rounded-full border border-[#2a2a2a] bg-[#212121] z-50"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? (
                <ChevronLeft className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </Button>

            <div className={`flex items-center gap-2 mb-8 ${!sidebarOpen && "md:justify-center"}`}>
              <ListTodo className="h-6 w-6 text-red-500 flex-shrink-0" />
              {sidebarOpen && <h1 className="font-semibold text-lg">TaskMaster</h1>}
            </div>
            
            <nav className="space-y-2">
              <Button 
                variant="ghost" 
                className={`w-full justify-start gap-2 text-gray-300 hover:text-white hover:bg-[#2a2a2a] ${
                  !sidebarOpen && "md:justify-center md:px-2"
                }`}
              >
                <Home className="h-4 w-4 flex-shrink-0" />
                {sidebarOpen && "Dashboard"}
              </Button>
              <Button 
                variant="ghost" 
                className={`w-full justify-start gap-2 text-gray-300 hover:text-white hover:bg-[#2a2a2a] ${
                  !sidebarOpen && "md:justify-center md:px-2"
                }`}
              >
                <CalendarIcon className="h-4 w-4 flex-shrink-0" />
                {sidebarOpen && "Calendar"}
              </Button>
              <Button 
                variant="ghost" 
                className={`w-full justify-start gap-2 text-gray-300 hover:text-white hover:bg-[#2a2a2a] ${
                  !sidebarOpen && "md:justify-center md:px-2"
                }`}
              >
                <Settings className="h-4 w-4 flex-shrink-0" />
                {sidebarOpen && "Settings"}
              </Button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col w-full">
          {/* Overlay for mobile */}
          {sidebarOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Header */}
          <header className="relative border-b border-[#2a2a2a] bg-[#212121]/80 backdrop-blur-sm p-4">
            <div className="flex items-center justify-between max-w-[1200px] mx-auto w-full">
              <div className="flex items-center gap-4 flex-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  onClick={() => setSidebarOpen(true)}
                >
                  <Menu className="h-5 w-5" />
                </Button>
                <Input 
                  placeholder="Search tasks..." 
                  className="max-w-md bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder:text-gray-400"
                />
              </div>
              <Button className="gap-2 bg-red-500 hover:bg-red-600">
                <PlusCircle className="h-4 w-4" />
                Add Task
              </Button>
            </div>
          </header>

          {/* Content Grid */}
          <div className="flex-1 p-4 overflow-auto">
            <div className="max-w-[1200px] mx-auto w-full">
              <div className={`grid gap-4 transition-all duration-300 ${
                sidebarOpen 
                  ? "lg:grid-cols-[300px,1fr]" 
                  : "lg:grid-cols-[250px,1fr]"
              }`}>
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
                    <h3 className="font-semibold mb-4 text-gray-200">Quick Stats</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-[#2a2a2a] rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <BarChart className="h-4 w-4 text-red-500" />
                          <span className="text-sm text-gray-300">Tasks Today</span>
                        </div>
                        <p className="text-xl font-bold">4</p>
                      </div>
                      <div className="p-3 bg-[#2a2a2a] rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-300">Completed</span>
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
                    <Button variant="outline" size="sm" className="border-[#3a3a3a] text-gray-300 hover:bg-[#2a2a2a] hover:text-white">
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
                            <span className={task.completed ? "line-through text-gray-500" : "text-gray-200"}>
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
    </div>
  );
}