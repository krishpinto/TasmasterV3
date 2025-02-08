import { Button } from "@/components/ui/button"
import { ListTodo, Home, CalendarIcon, Settings } from "lucide-react"
import Link from "next/link"

export function Sidebar() {
  return (
    <div className="w-64 h-full bg-[#212121]/80 backdrop-blur-sm border-r border-[#2a2a2a]">
      <div className="p-4 h-full relative">
        <div className="flex items-center gap-2 mb-8">
          <ListTodo className="h-6 w-6 text-red-500 flex-shrink-0" />
          <h1 className="font-semibold text-lg">TaskMaster</h1>
        </div>

        <nav className="space-y-2">
            
        <Link href="/">
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 text-gray-300 hover:text-white hover:bg-[#2a2a2a]"
              asChild
            >
              <div>
                <Home className="h-4 w-4 flex-shrink-0" />
                Home
              </div>
            </Button>
          </Link>
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 text-gray-300 hover:text-white hover:bg-[#2a2a2a]"
          >
            <CalendarIcon className="h-4 w-4 flex-shrink-0" />
            Calendar
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 text-gray-300 hover:text-white hover:bg-[#2a2a2a]"
          >
            <Settings className="h-4 w-4 flex-shrink-0" />
            Settings
          </Button>
        </nav>
      </div>
    </div>
  )
}

