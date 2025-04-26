"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, Copy, Type } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export function TextTools() {
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [wordCount, setWordCount] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    setInputText(text)

    // Update counts
    setCharCount(text.length)
    setWordCount(text.trim() === "" ? 0 : text.trim().split(/\s+/).length)
  }

  const convertToUppercase = () => {
    setOutputText(inputText.toUpperCase())
  }

  const convertToLowercase = () => {
    setOutputText(inputText.toLowerCase())
  }

  const convertToTitleCase = () => {
    const titleCase = inputText
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
    setOutputText(titleCase)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText)
    toast({
      title: "Copied to clipboard",
      description: "The text has been copied to your clipboard.",
    })
  }

  return (
    <section id="text-tools" className="scroll-mt-20">
      <div className="flex items-center gap-2 mb-6">
        <Type className="h-6 w-6" />
        <h2 className="text-3xl font-bold tracking-tight">Text Tools</h2>
      </div>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Text Converter & Counter</CardTitle>
          <CardDescription>Convert text to different cases and count words and characters</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div>
              <label htmlFor="input-text" className="text-sm font-medium mb-2 block">
                Input Text
              </label>
              <Textarea
                id="input-text"
                placeholder="Type or paste your text here..."
                className="min-h-[120px]"
                value={inputText}
                onChange={handleInputChange}
              />
              <div className="mt-2 text-sm text-muted-foreground">
                {wordCount} words | {charCount} characters
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button onClick={convertToUppercase}>UPPERCASE</Button>
              <Button onClick={convertToLowercase}>lowercase</Button>
              <Button onClick={convertToTitleCase}>Title Case</Button>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="output-text" className="text-sm font-medium">
                  Output Text
                </label>
                <Button variant="ghost" size="sm" onClick={copyToClipboard}>
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
              </div>
              <Textarea id="output-text" className="min-h-[120px]" value={outputText} readOnly />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
