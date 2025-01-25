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
          action={async (formData: FormData) => {
            try {
              // First, submit to Web3Forms
              formData.append("access_key", "21455ef4-d6aa-4abd-858a-8376cb4f30d2");
              formData.append("subject", "New Price List Download Request");
              
              const web3Response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
              });
              
              const web3Data = await web3Response.json();
              
              if (!web3Data.success) {
                setSubmitStatus("Failed to send contact details. Please try again.");
                return;
              }

              // Then proceed with PDF download
              const response = await downloadPriceList(formData);
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
                setOpen(false)
                setSubmitStatus("Form submitted successfully!")
              }
            } catch (error) {
              console.error("Error:", error);
              setSubmitStatus("An error occurred. Please try again.");
            }
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
            <div className={`text-sm ${submitStatus.includes("error") ? "text-red-500" : "text-green-500"}`}>
              {submitStatus}
            </div>
          )}
          <Button type="submit">Submit and Download</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

