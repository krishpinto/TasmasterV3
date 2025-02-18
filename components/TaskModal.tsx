import type React from "react"
import type { Task } from "@/app/actions/fetchTasks"
import { Button } from "@/components/ui/button"
import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../firebase"
import { X } from "lucide-react"

interface TaskModalProps {
  task: Task | null
  onClose: () => void
  onDelete: (taskId: string) => void
}

const TaskModal: React.FC<TaskModalProps> = ({ task, onClose, onDelete }) => {
  if (!task) return null

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "tasks", task.id))
      onDelete(task.id)
      onClose()
    } catch (error) {
      console.error("Error deleting task: ", error)
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-3xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Task Details</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Title</h3>
          <p className="text-xl text-gray-700 dark:text-gray-300">{task.title}</p>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Description</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">{task.description}</p>
        </div>
        <div className="flex justify-end space-x-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            Delete Task
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TaskModal

