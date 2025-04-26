"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Download, Youtube } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function YoutubeThumbnail() {
  const [url, setUrl] = useState("")
  const [thumbnailUrl, setThumbnailUrl] = useState("")
  const [error, setError] = useState("")

  const extractVideoId = (url: string) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[7].length === 11 ? match[7] : false
  }

  const generateThumbnail = () => {
    setError("")

    if (!url) {
      setError("Please enter a YouTube URL")
      return
    }

    const videoId = extractVideoId(url)

    if (!videoId) {
      setError("Invalid YouTube URL")
      return
    }

    // Get the highest quality thumbnail
    setThumbnailUrl(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`)
  }

  const downloadThumbnail = () => {
    if (!thumbnailUrl) return

    const link = document.createElement("a")
    link.href = thumbnailUrl
    link.download = `youtube-thumbnail-${Date.now()}.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="youtube-thumbnail" className="scroll-mt-20">
      <div className="flex items-center gap-2 mb-6">
        <Youtube className="h-6 w-6" />
        <h2 className="text-3xl font-bold tracking-tight">YouTube Thumbnail Downloader</h2>
      </div>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Download YouTube Thumbnails</CardTitle>
          <CardDescription>Enter a YouTube video URL to download its thumbnail image</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="flex flex-col sm:flex-row gap-2">
              <Input placeholder="Paste YouTube URL here..." value={url} onChange={(e) => setUrl(e.target.value)} />
              <Button onClick={generateThumbnail}>Generate Thumbnail</Button>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {thumbnailUrl && (
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden border">
                  <img
                    src={thumbnailUrl || "/placeholder.svg"}
                    alt="YouTube Thumbnail"
                    className="w-full h-auto"
                    onError={() => {
                      setError("Could not load thumbnail. Try a different video or quality.")
                      setThumbnailUrl("")
                    }}
                  />
                </div>
                <Button onClick={downloadThumbnail} className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download Thumbnail
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
