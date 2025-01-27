"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { downloadPriceList } from "@/actions/downloadPriceList"

export function DownloadPriceList() {
  const [open, setOpen] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (formData: FormData) => {
    try {
      setIsLoading(true)
      setSubmitStatus("")
      console.log("Starting form submission...")

      // First, submit to Web3Forms
      formData.append("access_key", "21455ef4-d6aa-4abd-858a-8376cb4f30d2")
      formData.append("subject", "New Price List Download Request")
      
      console.log("Submitting to Web3Forms...")
      const web3Response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })
      
      const web3Data = await web3Response.json()
      console.log("Web3Forms response:", web3Data)
      
      if (!web3Data.success) {
        setSubmitStatus("Failed to send contact details. Please try again.")
        return
      }

      // Then proceed with PDF download
      console.log("Downloading price list...")
      const response = await downloadPriceList(formData)
      console.log("Download response:", response)

      if (response.success) {
        // Convert base64 string back to blob
        const byteCharacters = atob(response.fileData)
        const byteNumbers = new Array(byteCharacters.length)
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i)
        }
        const byteArray = new Uint8Array(byteNumbers)
        const blob = new Blob([byteArray], { type: 'application/pdf' })
        
        // Create download link
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = 'price-list-optmatic-2025.pdf'
        document.body.appendChild(link)
        link.click()
        
        // Cleanup
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
        
        setSubmitStatus("Thank you! Your price list has been downloaded.")
        // Close dialog after 3 seconds
        setTimeout(() => {
          setOpen(false)
          setSubmitStatus("")
        }, 3000)
      }
    } catch (error) {
      console.error("Error during submission:", error)
      setSubmitStatus("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Download Price List</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Download Price List</DialogTitle>
          <DialogDescription>Please provide your details to download our price list.</DialogDescription>
        </DialogHeader>
        <form
          onSubmit={async (e) => {
            e.preventDefault()
            const formData = new FormData(e.currentTarget)
            await handleSubmit(formData)
          }}
          className="space-y-4"
        >
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name</Label>
            <Input id="companyName" name="companyName" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          {submitStatus && (
            <div className={`text-sm ${submitStatus.includes("error") ? "text-red-600" : "text-optGreen"} font-semibold`}>
              {submitStatus}
            </div>
          )}
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Processing..." : "Submit and Download"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

