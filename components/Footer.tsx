import React from "react"

interface FooterColumnProps {
  title: string
  links: string[]
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h4 className="font-semibold text-xl mb-6">{title}</h4>
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-lg">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background/80 to-background border-t border-primary/10">
      <div className="container mx-auto max-w-6xl py-16 px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="font-bold text-2xl mb-6">TaskMaster</h3>
            <p className="text-muted-foreground text-lg">Simplify your life with our powerful todo list application.</p>
          </div>
          <FooterColumn title="Product" links={["Features", "Pricing", "FAQ"]} />
          <FooterColumn title="Company" links={["About", "Blog", "Contact"]} />
          <FooterColumn title="Legal" links={["Privacy", "Terms"]} />
        </div>
        <div className="border-t border-primary/10 mt-16 pt-8 text-center text-muted-foreground">
          <p className="text-lg">© 2024 TaskMaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

