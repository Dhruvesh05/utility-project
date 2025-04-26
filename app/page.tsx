import { Navbar } from "@/components/navbar"
import { ThemeToggle } from "@/components/theme-toggle"
import { TextTools } from "@/components/text-tools"
import { YoutubeThumbnail } from "@/components/youtube-thumbnail"
import { QrGenerator } from "@/components/qr-generator"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Free Online Utility Toolkit</h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
          Instant tools like text converters, YouTube thumbnail downloader, and QR code generator
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="#text-tools">Text Tools</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#youtube-thumbnail">YouTube Thumbnail</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#qr-generator">QR Generator</a>
          </Button>
        </div>
        <div className="mt-16 flex justify-center">
          <ArrowDown className="h-8 w-8 animate-bounce text-muted-foreground" />
        </div>
      </section>

      {/* Tools Sections */}
      <div className="container mx-auto px-4 py-10 space-y-32">
        <TextTools />
        <YoutubeThumbnail />
        <QrGenerator />
      </div>

      {/* Footer */}
      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">© {new Date().getFullYear()} Utility Toolkit. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
