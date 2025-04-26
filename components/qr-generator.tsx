"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, QrCode } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function QrGenerator() {
  const [text, setText] = useState("")
  const [size, setSize] = useState("200")
  const [qrCodeUrl, setQrCodeUrl] = useState("")
  const qrRef = useRef<HTMLDivElement>(null)

  const generateQRCode = () => {
    if (!text) return

    // Using Google Charts API to generate QR code
    const encodedText = encodeURIComponent(text)
    setQrCodeUrl(`https://chart.googleapis.com/chart?cht=qr&chl=${encodedText}&chs=${size}x${size}&choe=UTF-8`)
  }

  const downloadQRCode = () => {
    if (!qrCodeUrl) return

    const link = document.createElement("a")
    link.href = qrCodeUrl
    link.download = `qrcode-${Date.now()}.png`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="qr-generator" className="scroll-mt-20">
      <div className="flex items-center gap-2 mb-6">
        <QrCode className="h-6 w-6" />
        <h2 className="text-3xl font-bold tracking-tight">QR Code Generator</h2>
      </div>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Generate QR Codes</CardTitle>
          <CardDescription>Create QR codes for text, URLs, or contact information</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="url" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="url">URL</TabsTrigger>
              <TabsTrigger value="text">Text</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>

            <TabsContent value="url" className="space-y-4">
              <div>
                <Label htmlFor="url-input">Enter URL</Label>
                <Input
                  id="url-input"
                  placeholder="https://example.com"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
            </TabsContent>

            <TabsContent value="text" className="space-y-4">
              <div>
                <Label htmlFor="text-input">Enter Text</Label>
                <Input
                  id="text-input"
                  placeholder="Your text here"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
            </TabsContent>

            <TabsContent value="contact" className="space-y-4">
              <div>
                <Label htmlFor="contact-input">Enter Contact Info</Label>
                <Input
                  id="contact-input"
                  placeholder="Name, Email, Phone"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
            </TabsContent>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-4">
                <Label htmlFor="qr-size" className="min-w-24">
                  QR Code Size
                </Label>
                <Select value={size} onValueChange={setSize}>
                  <SelectTrigger id="qr-size">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="100">Small (100x100)</SelectItem>
                    <SelectItem value="200">Medium (200x200)</SelectItem>
                    <SelectItem value="300">Large (300x300)</SelectItem>
                    <SelectItem value="400">Extra Large (400x400)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={generateQRCode} className="w-full">
                Generate QR Code
              </Button>

              {qrCodeUrl && (
                <div className="mt-6 space-y-4">
                  <div ref={qrRef} className="flex justify-center p-4 bg-white rounded-lg">
                    <img src={qrCodeUrl || "/placeholder.svg"} alt="QR Code" className="max-w-full h-auto" />
                  </div>
                  <Button onClick={downloadQRCode} className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download QR Code
                  </Button>
                </div>
              )}
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  )
}
