"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl">
            UtilityToolkit
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#text-tools" className="text-sm font-medium transition-colors hover:text-primary">
            Text Tools
          </Link>
          <Link href="#youtube-thumbnail" className="text-sm font-medium transition-colors hover:text-primary">
            YouTube Thumbnail
          </Link>
          <Link href="#qr-generator" className="text-sm font-medium transition-colors hover:text-primary">
            QR Generator
          </Link>
          <ThemeToggle />
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                href="#text-tools"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setOpen(false)}
              >
                Text Tools
              </Link>
              <Link
                href="#youtube-thumbnail"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setOpen(false)}
              >
                YouTube Thumbnail
              </Link>
              <Link
                href="#qr-generator"
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setOpen(false)}
              >
                QR Generator
              </Link>
              <div className="mt-2">
                <ThemeToggle />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
