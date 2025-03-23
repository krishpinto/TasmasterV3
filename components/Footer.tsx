import React from "react"
import Image from "next/image"
import Link from "next/link"

interface FooterColumnProps {
  title: string
  links: Array<{
    text: string
    href: string
  }>
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h4 className="text-xl font-semibold text-white mb-6">{title}</h4>
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link 
              href={link.href}
              className="text-muted-foreground/80 hover:text-primary transition-colors"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-background border-t border-primary/10">
      <div className="container mx-auto max-w-7xl py-20 px-8">
        <div className="grid grid-cols-12 gap-x-8 gap-y-16">
          {/* About Us Section - Spans 4 columns */}
          <div className="col-span-4">
            <h3 className="text-xl font-semibold text-white mb-6">About Us</h3>
            <p className="text-muted-foreground/80 mb-8">
              Manage your tasks and projects with ease.
            </p>
            <div className="flex items-center gap-4">
              <Image
                src="/your-image.jpg"
                alt="Krish Pinto"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <h4 className="font-semibold text-white">Krish Pinto</h4>
                <p className="text-sm text-muted-foreground/80">Owner</p>
              </div>
            </div>
          </div>

          {/* Quick Links Section - Spans 4 columns */}
          <div className="col-span-4">
            <FooterColumn 
              title="Quick Links" 
              links={[
                { text: "Pricing", href: "/pricing" },
                { text: "Features", href: "/#features" },
                { text: "About", href: "/#about" },
                { text: "Contact", href: "/contact" }
              ]} 
            />
          </div>

          {/* Legal Section - Spans 4 columns */}
          <div className="col-span-4">
            <FooterColumn 
              title="Legal" 
              links={[
                { text: "Privacy Policy", href: "/privacy" },
                { text: "Terms of Service", href: "/terms" }
              ]} 
            />
          </div>
        </div>
        
        <div className="border-t border-primary/10 mt-16 pt-8 text-center text-muted-foreground/80">
          <p>© 2024 TaskMaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

