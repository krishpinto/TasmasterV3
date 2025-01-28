import { CheckCircle, ListTodo, Plus, UserCircle } from "lucide-react"

export function FlowchartSection() {
  const steps = [
    {
      step: "1",
      title: "Sign Up",
      description: "Create your account in seconds",
      icon: <UserCircle className="h-10 w-10" />,
    },
    {
      step: "2",
      title: "Create Tasks",
      description: "Add and organize your todos",
      icon: <Plus className="h-10 w-10" />,
    },
    {
      step: "3",
      title: "Track Progress",
      description: "Monitor task completion",
      icon: <ListTodo className="h-10 w-10" />,
    },
    {
      step: "4",
      title: "Achieve Goals",
      description: "Complete tasks and reach milestones",
      icon: <CheckCircle className="h-10 w-10" />,
    },
  ]

  return (
    <section id = 'section3' className="py-32 px-4 bg-gradient-to-b from-background/95 via-background/90 to-background/80">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-12">
          {steps.map((item, index) => (
            <div key={index} className="text-center relative">
              <div className="bg-primary/20 backdrop-blur-sm text-primary-foreground w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transform hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-muted-foreground text-lg">{item.description}</p>
              {index < 3 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/40 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

